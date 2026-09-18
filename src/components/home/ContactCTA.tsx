import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";

const ContactCTA = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <FadeInView className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-6 sm:p-12 md:p-20 border border-primary/20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell us what you're looking to build.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeInView>
      </div>
    </section>
  );
};

export default ContactCTA;
