import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Quote, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderPhoto from "@/assets/founder-photo.png";


const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="mb-8 animate-fade-up">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Meet Our <span className="text-gradient">Founder</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                  Visionary leadership driving innovation in educational technology and
                  transforming the future of higher education worldwide.
                </p>
              </div>
            </div>

            <Card className="max-w-6xl mx-auto border-0 card-professional shadow-professional-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <Quote className="w-16 h-16 text-primary mb-6" />
                      <blockquote className="text-2xl md:text-3xl font-semibold italic text-foreground/90 leading-relaxed">
                        "Technology should democratize education, not complicate it. Our mission is to make
                        advanced learning tools accessible to every university, empowering institutions to
                        focus on what matters most - educating the next generation."
                      </blockquote>
                    </div>

                    <h2 className="text-4xl font-bold mb-3 text-foreground">Jaya Chandra</h2>
                    <p className="text-2xl text-primary mb-2 font-semibold">Founder & CEO</p>
                    <p className="text-lg text-muted-foreground mb-8 font-medium">Entrepreneur</p>

                    <div className="flex gap-6 justify-center lg:justify-start mb-8">
                      <a href="#" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Linkedin className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>

                      <a href="mailto:team@techmechatorque.com" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-96 h-96 mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                      <img
                        src={founderPhoto}
                        alt="Jaya Chandra - Founder & CEO"
                        className="w-full h-full object-cover rounded-full shadow-professional-xl border-4 border-white/20 relative z-10"
                      />
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        <section className=" bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Educational Philosophy
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed md:leading-loose font-medium">
                "Education is the foundation of human progress. By leveraging technology thoughtfully,
                we can create learning environments that are more inclusive, efficient, and effective.
                Every feature we build is designed with the student experience at its core."
              </p>
            </div>
          </div>
        </section>



        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">


            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 animate-fade-up">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Connect with Our Team</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
                Interested in discussing your institution's digital transformation?
                Reach out to our leadership team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-red-50 px-3 py-2 flex justify-center items-center gap-1">
                  <span>Email us at</span>
                  <a
                    href="mailto:team@techmechatorque.com"
                    className="text-white font-semibold no-underline hover:underline hover:text-red-100"
                  >
                    team@techmechatorque.com
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Founder;