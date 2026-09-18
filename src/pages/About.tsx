import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInView } from "@/components/FadeInView";
import founderPhoto from "@/assets/founder-photo.jpeg";
import { company } from "@/data/company";
import { services, lifecycle } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";

const About = () => {
  usePageMeta({
    title: "About",
    description: `${company.name} builds digital platforms. Based in ${company.address.line1}, ${company.address.region}.`,
    path: "/about",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-10 sm:mb-14">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              About TechMecha Torque
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              We build digital platforms for real-world business — starting with
              education, and proven by what's actually live today.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-16">
            <FadeInView delay={100}>
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Built Today, Shaping Tomorrow</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                TechMecha Torque is a small software studio building digital platforms
                for real-world businesses. Learning Spaces, our coding education
                platform, is live and in use today. We've also delivered real client
                work — restaurant websites for Hotel Vedha and Swagath — and we're
                building toward more: campus communication, attendance tracking, HR and
                payroll, and e-commerce, each labelled honestly by how finished it
                actually is.
              </p>
            </FadeInView>

            <FadeInView delay={200}>
              <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Our services</h2>
              <div className="flex flex-wrap gap-3 mb-6">
                {services.map((s) => (
                  <span
                    key={s.title}
                    className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground/90"
                  >
                    <s.icon className="w-4 h-4 text-primary" />
                    {s.title}
                  </span>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
              >
                See all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInView>
          </div>

          <FadeInView delay={225} className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-10 md:mb-14 text-foreground max-w-2xl">
              How the work actually runs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-10 lg:gap-0 lg:divide-x lg:divide-border">
              {lifecycle.map((stage) => (
                <div key={stage.step} className="lg:px-6 first:lg:pl-0">
                  <span className="block text-xs font-mono text-muted-foreground mb-2 sm:mb-3">{stage.step}</span>
                  <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={250}>
            <Card className="max-w-4xl mx-auto border-0 card-professional shadow-professional-xl mb-10 sm:mb-16 overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <CardContent className="p-5 sm:p-8 md:p-10 relative">
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 sm:gap-8 items-center">
                  <img
                    src={founderPhoto}
                    alt="Jaya Chandra Reddy, Founder of TechMecha Torque"
                    className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-full shadow-professional-xl mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left">
                   
                    <blockquote className="text-sm sm:text-lg md:text-xl font-semibold italic text-foreground/90 leading-relaxed mb-3 sm:mb-4">
                      "Technology should make education more accessible, not more
                      complicated. Our job is to build tools institutions can actually
                      use."
                    </blockquote>
                    <h2 className="text-base sm:text-xl font-bold text-foreground">Jaya Chandra Reddy</h2>
                    <p className="text-sm sm:text-base text-primary font-semibold mb-3 sm:mb-4">Founder</p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a
                        href={company.social.FounderLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                      </a>
                      <a
                        href={`mailto:${company.Founderemail}`}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInView>

          <FadeInView delay={275} className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Where we're based</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {company.address.line1}, {company.address.region} {company.address.postalCode}, {company.address.country}
            </p>
          </FadeInView>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
