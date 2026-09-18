import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/form/ContactForm";
import { FadeInView } from "@/components/FadeInView";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

const ContactPage = () => {
  usePageMeta({
    title: "Contact",
    description: `Get in touch with ${company.name}.`,
    path: "/contact",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Let's talk
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Tell us what you're looking to build.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl">
            <FadeInView className="lg:col-span-3">
              <div className="card-professional p-5 sm:p-8">
                <ContactForm />
              </div>
            </FadeInView>

            <FadeInView delay={100} className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href={`mailto:${company.email}`} className="text-foreground font-semibold hover:text-primary transition-colors">
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone / WhatsApp</div>
                  <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors">
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Office</div>
                  <div className="text-foreground font-semibold">
                    {company.address.line1}, {company.address.region}
                    <br />
                    {company.address.postalCode}, {company.address.country}
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
