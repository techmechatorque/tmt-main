import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

const LAST_UPDATED = "September 2, 2026";

const Privacy = () => {
  usePageMeta({
    title: "Privacy Policy",
    description: `Privacy policy for ${company.name}.`,
    path: "/privacy",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">What we collect</h2>
              <p>
                When you contact us through this website — by submitting the contact form,
                emailing us, or messaging us on WhatsApp — we collect the information you
                provide: typically your name, email address, and the content of your message.
                We do not collect this information through any other means on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">How we use it</h2>
              <p>
                We use the information you submit only to respond to your enquiry and, where
                relevant, to deliver work you've asked us to do. We do not sell your
                information, and we do not share it with third parties except where needed to
                operate this service (for example, our email or hosting provider) or where
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Analytics</h2>
              <p>
                This site may use privacy-focused analytics to understand aggregate traffic
                patterns (for example, which pages are visited). This does not use cookies or
                track individual visitors across other websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Data retention</h2>
              <p>
                We keep contact form submissions for as long as needed to respond to your
                enquiry and maintain a record of client communication, and delete them on
                request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Your rights</h2>
              <p>
                You can ask us what information we hold about you, ask us to correct it, or
                ask us to delete it, by emailing{" "}
                <a href={`mailto:${company.email}`} className="text-primary underline">
                  {company.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                {company.legalName}, {company.address.line1}, {company.address.region}{" "}
                {company.address.postalCode}, {company.address.country}.
                <br />
                Email: {company.email}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
