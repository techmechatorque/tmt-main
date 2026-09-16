import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Linkedin, Mail, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInView } from "@/components/FadeInView";
import founderPhoto from "@/assets/founder-photo.png";
import { company } from "@/data/company";
import { services } from "@/data/services";
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
          <FadeInView className="max-w-3xl mb-14">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About TechMecha Torque
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build digital platforms for real-world business — starting with
              education, and proven by what's actually live today.
            </p>
          </FadeInView>

          <FadeInView delay={100}>
            <Card className="max-w-4xl mx-auto border-0 card-professional shadow-professional-xl mb-16 overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <CardContent className="p-8 md:p-10 relative">
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center">
                  <img
                    src={founderPhoto}
                    alt="Jaya Chandra Reddy, Founder of TechMecha Torque"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-professional-xl mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left">
                    <Quote className="w-8 h-8 text-primary mb-3 mx-auto sm:mx-0" />
                    <blockquote className="text-lg md:text-xl font-semibold italic text-foreground/90 leading-relaxed mb-4">
                      "Technology should make education more accessible, not more
                      complicated. Our job is to build tools institutions can actually
                      use."
                    </blockquote>
                    <h2 className="text-xl font-bold text-foreground">Jaya Chandra Reddy</h2>
                    <p className="text-primary font-semibold mb-4">Founder</p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a
                        href={company.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                      </a>
                      <a
                        href={`mailto:${company.email}`}
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

          <FadeInView delay={150} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold mb-4 text-foreground">What we're building</h2>
            <p className="text-muted-foreground leading-relaxed">
              TechMecha Torque is a small software studio building digital platforms
              for real-world businesses. Learning Spaces, our coding education
              platform, is live and in use today. We've also delivered real client
              work — restaurant websites for Hotel Vedha and Swagath — and we're
              building toward more: campus communication, attendance tracking, HR and
              payroll, and e-commerce, each labelled honestly by how finished it
              actually is.
            </p>
          </FadeInView>

          <FadeInView delay={200} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">What we do</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
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

          <FadeInView delay={250} className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Where we're based</h2>
            <p className="text-muted-foreground leading-relaxed">
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
