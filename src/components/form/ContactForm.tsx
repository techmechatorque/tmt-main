import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email").max(255),
  message: z.string().min(10, "Tell us a bit more (10 characters minimum)").max(5000),
  // Honeypot: real visitors never see or fill this field. If it's non-empty,
  // the submission is silently dropped as spam.
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const THROTTLE_KEY = "tmt-contact-last-submit";
const THROTTLE_MS = 30_000;

type SubmitState = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", honeypot: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (values.honeypot) {
      // Spam bot filled the trap field — pretend success, do nothing.
      setState("success");
      return;
    }

    try {
      const last = Number(localStorage.getItem(THROTTLE_KEY) ?? 0);
      if (Date.now() - last < THROTTLE_MS) {
        throw new Error("Please wait a moment before sending another message.");
      }

      setState("submitting");
      setErrorMessage("");

      const { error } = await supabase.from("contact_submissions").insert([
        { name: values.name, email: values.email, message: values.message },
      ]);

      if (error) throw error;

      localStorage.setItem(THROTTLE_KEY, String(Date.now()));
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (state === "success") {
    return (
      <div className="card-professional flex flex-col items-center text-center py-16">
        <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">Message sent</h3>
        <p className="text-muted-foreground">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="What are you looking to build?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot field — hidden from real users via CSS, not `type="hidden"`,
            since some bots skip hidden inputs but not visually-hidden ones. */}
        <div className="absolute w-px h-px overflow-hidden opacity-0 -z-10" aria-hidden="true">
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <Input tabIndex={-1} autoComplete="off" {...field} />
            )}
          />
        </div>

        {state === "error" && (
          <div className="flex items-start gap-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            {errorMessage}
          </div>
        )}

        <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-auto">
          {state === "submitting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
