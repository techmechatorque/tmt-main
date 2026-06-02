import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Atom, Server, Database, Cloud, MapPin, Mail, Phone } from "lucide-react";

const AIBootcamp = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-black mb-4 text-foreground leading-none tracking-tight">
                WEB<br />
                DEVELOPMENT<br />
                <span className="text-primary">BOOTCAMP</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Learn. Build. <span className="text-primary">Grow.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                A 3-hour introductory bootcamp with a live project walkthrough to kickstart your developer journey.
              </p>
            </div>
            
            <div className="animate-fade-up flex justify-center md:justify-end" style={{ animationDelay: "100ms" }}>
              <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl p-6 text-center max-w-sm w-full">
                <CardContent className="p-0">
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-2">LIMITED SEATS</span>
                    <h3 className="text-3xl font-bold text-primary mb-4">REGISTER NOW!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Secure your spot in our upcoming cohort and start your journey into web development.
                    </p>
                  </div>
                  <Button className="w-full text-lg font-bold py-6 rounded-xl shadow-lg transition-transform hover:scale-105" size="lg">
                    REGISTER NOW
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* What you will learn */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold tracking-tight">WHAT YOU WILL LEARN</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Code, text: "HTML, CSS & JavaScript Fundamentals" },
                  { icon: Atom, text: "Introduction to React.js" },
                  { icon: Server, text: "Backend Basics with Node.js & Express.js" },
                  { icon: Database, text: "Database Basics with MongoDB" },
                  { icon: Cloud, text: "Deployment Basics + Career Roadmap" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm border border-primary/20">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="text-lg font-medium text-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue & Contact */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-2 tracking-wider">VENUE</h4>
                    <p className="text-base text-foreground/80 leading-relaxed font-medium">
                      TMT Headquarters,<br />
                      CGR Tower, 1st Floor,<br />
                      Pothireddypally,<br />
                      Sangareddy, Telangana - 502001
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-1">EMAIL US</h4>
                      <a href="mailto:careers@techmechatorque.com" className="text-sm font-medium hover:text-primary transition-colors break-all">
                        careers@techmechatorque.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-1">CALL US</h4>
                      <a href="tel:+917993442607" className="text-sm font-medium hover:text-primary transition-colors">
                        +91 7993442607
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIBootcamp;
