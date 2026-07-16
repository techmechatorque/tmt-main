import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Discuss Your{" "}
            <span className="text-gradient">Digital Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with our experts to explore how TechMecha Torque can
            revolutionize your university&apos;s operations and enhance the
            educational experience.
          </p>
        </div>

        {/* Cards Wrapper – centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
            {/* Email Card */}
            <Card className="border-0 card-professional shadow-professional animate-fade-up">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Email Communication
                    </h3>
                    <p className="text-muted-foreground mb-3 font-medium">
                      Direct contact with our team
                    </p>
                    <a
                      href="mailto:team@techmechatorque.com"
                      className="text-primary hover:text-primary/80 font-semibold text-lg"
                    >
                      team@techmechatorque.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card
              className="border-0 card-professional shadow-professional animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Office Location
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      TechMecha Torque Headquarters
                      <br/>
                      Plot 68 & 32
                      <br />
                      Pothireddypally
                      <br />
                      Sangareddy, Telangana 502001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
