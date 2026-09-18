import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

const LAST_UPDATED = "September 2, 2026";

const Terms = () => {
  usePageMeta({
    title: "Terms of Service",
    description: `Terms of service for ${company.name}.`,
    path: "/terms",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-foreground">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">Using this website</h2>
              <p>
                This website is operated by {company.legalName}. By using it, you agree to
                these terms. If you don't agree, please don't use the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">Product status</h2>
              <p>
                Products on this site are labelled Live, Building, or Planned. Live means the
                product is publicly available and usable today. Building means it is in active
                development. Planned means it has been scoped but not yet built. These labels
                reflect status at the time of publishing and may change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">Third-party products</h2>
              <p>
                Learning Spaces and any other linked products are operated separately from this
                site and have their own terms and policies, which apply when you use them.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">No warranty</h2>
              <p>
                This website and its content are provided as-is. We make reasonable efforts to
                keep information accurate but don't guarantee it will be error-free or
                uninterrupted at all times.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">Engaging us for work</h2>
              <p>
                Anything discussed through the contact form, email, or WhatsApp is not a
                binding agreement until confirmed in writing by both parties. Project-specific
                terms are agreed separately for each engagement.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">Contact</h2>
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

export default Terms;
