import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Target, BookOpen, GraduationCap, Building2, IndianRupee } from "lucide-react";

const Internships = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Industry Internship & <span className="text-gradient">Mentorship Program 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto mb-4">
              Industry-Level Mentorship Training Program – TMT HQ, Sangareddy, near IIT Hyderabad.
            </p>
            <p className="text-lg text-primary font-semibold max-w-3xl mx-auto mb-10">
              Level up from a Student to an Industry-Ready Developer.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Are you tired of just watching tutorials? It’s time to build.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are organizing an intensive, Industry-Level Mentorship Training Program designed to bridge the gap between academic learning and real-world execution. This isn't just a lecture series; it is a hands-on journey where you will be the architect of your own code.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">The Core Mission: "Code Your Own Way"</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The highlight of this training is autonomy. Under the guidance of industry veterans, you won't just copy-paste snippets. You will:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground/90 font-medium">Analyze real-world problem statements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground/90 font-medium">Architect and develop solutions entirely on your own.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground/90 font-medium">Receive personalized code reviews to meet professional industry standards.</span>
                </li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Incentives & Benefits</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe in rewarding hard work. By joining this program, you unlock:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Industry Certification: A recognized certificate of completion to boost your Resume/LinkedIn.",
                  "Live Project Experience: Add a verified industry-grade project to your portfolio.",
                  "Direct Mentorship: 1-on-1 sessions with experts currently working in the tech industry.",
                  "Master Class by Industry Experts: Industry experts we join few sessions to teach 1-1.",
                  "Internship opportunity: Candidates performing well would be converted to full time internship program.",
                  "Toolkits & Resources: Access to premium coding resources, documentation, and best-practice templates.",
                  "IT office exposure: Candidates will be given ID cards, Certificates, Guidance on future guidance."
                ].map((benefit, index) => (
                  <div key={index} className="card-premium flex items-start gap-3 bg-card/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-24 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Program Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-premium bg-card/30 flex flex-col items-center text-center hover:-translate-y-2">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm font-medium">TechMecha Torque Pvt. Ltd. HQ, Near IIT Hyderabad, Sangareddy.</p>
                </div>
                <div className="card-premium bg-card/30 flex flex-col items-center text-center hover:-translate-y-2">
                  <IndianRupee className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Registration Fee</h3>
                  <p className="text-muted-foreground text-sm font-medium">₹3,000/-</p>
                </div>
                <div className="card-premium bg-card/30 flex flex-col items-center text-center hover:-translate-y-2">
                  <GraduationCap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Focus</h3>
                  <p className="text-muted-foreground text-sm font-medium">Hands-on Development, Logic Building, and Clean Coding.</p>
                </div>
              </div>
            </div>

            {/* Apply Now CTA */}
            <div className="max-w-4xl mx-auto animate-fade-up pb-10 text-center" style={{ animationDelay: '0.5s' }}>
              <div className="card-premium bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 p-12 rounded-3xl">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Level Up?</h2>
                <p className="text-lg text-muted-foreground font-medium mb-8 max-w-xl mx-auto">
                  Fill out the application form and take the first step toward becoming an industry-ready developer.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeMMDpaGwd57Z0GMbrxwn90EIqkIvr1zKkI2vP8OwOnHo5Zaw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_45px_rgba(255,0,0,0.5)] hover:-translate-y-1">
                    Apply Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
