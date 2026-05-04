import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Code, Users, IndianRupee, Calendar, Shield, ArrowLeft, CheckCircle, TrendingUp, Zap, Globe, Building2, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    icon: MessageCircle,
    title: "NextChat",
    tagline: "Revolutionizing Campus Communication",
    description: "Enterprise-grade communication ecosystem connecting students, faculty, and administration.",
    features: ["End-to-end encryption", "500-participant HD video", "LMS Integration"],
    benefits: ["Reduce email overload by 70%", "Foster seamless collaboration"],
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    iconColor: "text-blue-500"
  },
  {
    icon: Code,
    title: "NextCode",
    tagline: "Advanced Coding Education Platform",
    description: "A comprehensive environment for coding education with integrated tools and automated assessment.",
    features: ["50+ languages supported", "AI plagiarism detection", "Real-time collaboration"],
    benefits: ["Save 15+ hours on grading", "95% accuracy in plagiarism detection"],
    gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-500"
  },
  {
    icon: Users,
    title: "NextAttendance",
    tagline: "Intelligent Attendance Tracking",
    description: "Smart attendance management with biometric integration and comprehensive analytics.",
    features: ["Biometric & Geofence QR", "Automated notifications", "ML forecasting"],
    benefits: ["Eliminate proxy fraud", "Improve attendance rates by 25%"],
    gradient: "from-emerald-600/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-500"
  },
  {
    icon: IndianRupee,
    title: "Payroll Management",
    tagline: "Complete HR & Payroll Solution",
    description: "Streamlined HR operations automating calculations and ensuring tax compliance.",
    features: ["Automated tax calculations", "Employee self-service", "Multi-currency support"],
    benefits: ["Reduce processing time by 90%", "Ensure 100% statutory compliance"],
    gradient: "from-amber-600/20 via-amber-500/10 to-transparent",
    iconColor: "text-amber-500"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    tagline: "AI-Powered Timetable Optimization",
    description: "Advanced AI algorithms to create optimal timetables and resolve conflicts automatically.",
    features: ["AI timetable generation", "Faculty workload balancing", "Exam hall allocation"],
    benefits: ["Save 40+ hours per semester", "Optimize resources by 35%"],
    gradient: "from-rose-600/20 via-rose-500/10 to-transparent",
    iconColor: "text-rose-500"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    tagline: "Enterprise-Grade Security Framework",
    description: "Data protection and regulatory compliance with complete audit trails.",
    features: ["Multi-factor authentication", "End-to-end encryption", "GDPR compliance tools"],
    benefits: ["Achieve 99.9% security compliance", "Prevent unauthorized access"],
    gradient: "from-indigo-600/20 via-indigo-500/10 to-transparent",
    iconColor: "text-indigo-500"
  },
  {
    icon: Building2,
    title: "NextHostels",
    tagline: "Complete Hostel Management System",
    description: "Streamlines hostel operations, room allocation, and student welfare management.",
    features: ["Automated room allocation", "Maintenance tracking", "Fee collection automation"],
    benefits: ["Reduce allocation time by 90%", "Enhance student security"],
    gradient: "from-cyan-600/20 via-cyan-500/10 to-transparent",
    iconColor: "text-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "NextCourses",
    tagline: "Intelligent Course Management",
    description: "Intelligent course planning, enrollment management, and outcome tracking.",
    features: ["Curriculum management", "Waitlist management", "Credit transfer tracking"],
    benefits: ["Reduce conflicts by 95%", "Data-driven curriculum improvements"],
    gradient: "from-violet-600/20 via-violet-500/10 to-transparent",
    iconColor: "text-violet-500"
  },
  {
    icon: BookOpen,
    title: "NextLibrary",
    tagline: "Modern Digital Library",
    description: "Advanced cataloging, digital resources, and intelligent AI search capabilities.",
    features: ["RFID check-in/out", "AI search recommendations", "Digital repository access"],
    benefits: ["Reduce cataloging time by 80%", "Increase utilization by 45%"],
    gradient: "from-pink-600/20 via-pink-500/10 to-transparent",
    iconColor: "text-pink-500"
  }
];

const Vision = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Header Section */}
          <div className="mb-20">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group animate-fade-up font-medium"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 border border-primary/20 mb-6">
                <Globe className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-sm font-bold text-primary tracking-wide uppercase">Institutional Transformation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Our <span className="text-gradient">Vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                To empower educational institutions with cutting-edge technology that enhances operational efficiency, improves learning outcomes, and creates a seamless digital experience for all stakeholders.
              </p>
            </div>
          </div>

          {/* Products Grid Redesign */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border border-border bg-card/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up`}
                style={{ animationDelay: `${(index % 3) * 0.15}s` }}
              >
                {/* Dynamic Gradient Background inside the card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-background/80 shadow-md border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                  </div>

                  {/* Headers */}
                  <h2 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h2>
                  <p className="text-sm font-bold tracking-wide text-muted-foreground uppercase mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  {/* Interactive Details Expansion (Hover) */}
                  <div className="space-y-6 pt-6 border-t border-border/50">
                    {/* Features Snippet */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-primary" />
                        <h3 className="text-sm font-bold text-foreground">Core Features</h3>
                      </div>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits Snippet */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <h3 className="text-sm font-bold text-foreground">Impact</h3>
                      </div>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-foreground/90 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Epic CTA Section */}
          <div className="mt-32 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary/10 via-background to-accent/5 border border-primary/20 p-12 md:p-20 text-center animate-fade-up">
            {/* Background Glow inside CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                Ready to Transform Your <br className="hidden md:block" /> Institution?
              </h3>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Discover how TechMecha Torque can revolutionize your university's operations and enhance the educational experience for everyone involved.
              </p>
              
              <a 
                href="https://wa.me/917993442607?text=Hi%20I'm%20interested%20in%20TechMecha%20Torque" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Prebook Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Sweep animation overlay */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vision;
