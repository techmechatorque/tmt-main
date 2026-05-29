import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Rocket, 
  Calendar, 
  Clock, 
  Monitor, 
  Target, 
  Award, 
  Bot, 
  BookOpen, 
  Code, 
  Wrench, 
  CheckCircle, 
  HelpCircle,
  Users,
  Zap,
  ArrowRight,
  ChevronDown,
  Star,
  Globe,
  MapPin
} from "lucide-react";
import { useState } from "react";

const AIBootcamp = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSchedule = () => {
    const element = document.getElementById("schedule");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "Is this bootcamp beginner friendly?",
      answer: "Yes. The bootcamp is designed for complete beginners. We start from the absolute basics and build up to complex applications."
    },
    {
      question: "Do I need prior Python knowledge?",
      answer: "No. We teach the specific Python basics required for AI development right from scratch during the sessions."
    },
    {
      question: "Is the bootcamp really free?",
      answer: "Yes, this specific 1-Day Generative AI Bootcamp is completely free as part of our community initiative to spread AI literacy."
    },
    {
      question: "What is Hybrid Mode?",
      answer: "Hybrid mode means you can choose to attend either Online (via live stream) or Offline at our HQ near IIT Hyderabad. Both modes offer the same hands-on experience."
    },
    {
      question: "Will I build projects?",
      answer: "Yes. Participants will build real AI mini-projects during the bootcamp, such as chatbots, resume generators, and more."
    }
  ];

  const testimonials = [
    {
      name: "Koppera Abhiram Reddy",
      text: "The hands-on approach at TMT is unmatched. I went from zero Python knowledge to building a chatbot in just one day!",
      role: "AI Bootcamp Participant"
    },
    {
      name: "Karne Vishwanath",
      text: "TMT's mentorship helped me understand the real-world applications of LLMs. Truly for everyone, regardless of background.",
      role: "Engineering Student"
    },
    {
      name: "Venkat Asrith Konam",
      text: "The hybrid mode was perfect. I could attend sessions online and then drop by the HQ for networking. Best free bootcamp out there!",
      role: "Software Enthusiast"
    },
    {
      name: "Thummala Shiva Kumar Reddy",
      text: "I've attended many workshops, but this one focuses on building. Python for AI was taught so simply that everyone understood it.",
      role: "Aspiring AI Developer"
    },
    {
      name: "Mutyala Sai Dhanush",
      text: "As a student, getting industry-level exposure for free is a dream. The TMT team really knows how to simplify complex AI concepts.",
      role: "TMT Intern"
    },
    {
      name: "Mahesh Naddela",
      text: "From Prompt Engineering to Streamlit, everything was covered in a structured way. The certificate is a great addition to my portfolio.",
      role: "Bootcamp Graduate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-primary font-bold tracking-wide uppercase text-sm">FREE 1-Day Generative AI Bootcamp</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-foreground leading-tight">
              Python and AI for <span className="text-gradient">Everyone</span>: Build Real Apps in 3 Hours
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto mb-6">
              Master Generative AI, Prompt Engineering, and AI App Development. 
            </p>
            <p className="text-lg text-primary font-bold mb-12 flex items-center justify-center gap-2">
              <Code className="w-5 h-5" /> Including Python from Scratch!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold">1 Day (Free)</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold">3 Hours</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold">Hybrid Mode</span>
                <span className="text-[10px] text-muted-foreground">Online + Offline</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold">Open for All</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftHmHL3rflnwr_4m6eaebGar2RzhwJXpAF4l469QzNr_qGGA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_50px_rgba(255,0,0,0.6)] hover:-translate-y-1 text-center"
              >
                Enroll Now (Free)
              </a>
              <button 
                onClick={scrollToSchedule}
                className="w-full sm:w-auto bg-transparent border-2 border-primary/50 hover:border-primary text-foreground font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 hover:bg-primary/5"
              >
                View Curriculum
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 animate-fade-up">
                <h2 className="text-4xl font-bold mb-8 text-foreground">A Bootcamp for Everyone</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Whether you are a student, a creative professional, a business owner, or a curious beginner, this bootcamp is designed for you. AI is no longer just for data scientists—it's a tool for <span className="text-primary font-bold">Everyone</span>.
                  </p>
                  <p>
                    We've eliminated all barriers to entry. This program is <span className="text-primary font-bold">completely free</span> and assumes no prior technical knowledge. We even <span className="text-primary font-bold">teach you the Python basics</span> you need to succeed in the AI era.
                  </p>
                  <p>
                    Choose your mode: Join us <span className="text-primary font-bold">Online</span> from anywhere in the world, or visit our HQ for an <span className="text-primary font-bold">Offline</span> experience near IIT Hyderabad.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 shadow-2xl">
                   <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">Hybrid: Online & Offline (IIT Hyd)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Code className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">Includes Python Training</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">No Experience Required</span>
                      </div>
                   </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4">What You’ll Learn 🤖</h2>
              <p className="text-xl text-muted-foreground">From Python basics to building production-ready AI apps</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8 text-primary" />,
                  title: "Python for AI (Included)",
                  desc: "Learn the essential Python required for AI. We teach you variables, loops, and functions—the building blocks of AI applications."
                },
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "Generative AI Fundamentals",
                  desc: "Understanding AI, ML, and Generative AI. How ChatGPT and LLMs work. Real-world AI applications."
                },
                {
                  icon: <Target className="w-8 h-8 text-primary" />,
                  title: "Prompt Engineering",
                  desc: "Writing effective prompts. Role-based prompting. Structured AI outputs for professional use."
                },
                {
                  icon: <Monitor className="w-8 h-8 text-primary" />,
                  title: "AI APIs & Integration",
                  desc: "Working with OpenAI and open-source models. Connecting your code to the world's most powerful AI brains."
                },
                {
                  icon: <Bot className="w-8 h-8 text-primary" />,
                  title: "AI Chatbot Development",
                  desc: "Building interactive chatbots with context and memory. The ultimate project for any AI enthusiast."
                },
                {
                  icon: <Monitor className="w-8 h-8 text-primary" />,
                  title: "Web App Deployment",
                  desc: "Using Streamlit to turn your AI logic into a beautiful, shareable web application."
                }
              ].map((item, index) => (
                <div key={index} className="card-premium p-8 animate-fade-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Bootcamp Schedule 📚</h2>
              <p className="text-xl text-muted-foreground">One day of focused, hybrid learning</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
              {/* Day 1 */}
              <div className="card-premium p-10 border-primary/20 animate-fade-up shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-extrabold text-primary">1 Day — Comprehensive AI Training</h3>
                  <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold">3 Hours</div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
                      Python & Generative AI Basics
                    </h4>
                    <ul className="pl-10 space-y-2 text-muted-foreground">
                      <li>• What is Generative AI & LLMs</li>
                      <li>• Python essentials for AI</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                      Prompt Engineering & APIs
                    </h4>
                    <ul className="pl-10 space-y-2 text-muted-foreground">
                      <li>• Writing professional prompts</li>
                      <li>• Connecting to AI APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
                      Web Apps with Streamlit
                    </h4>
                    <ul className="pl-10 space-y-2 text-muted-foreground">
                      <li>• Turning code into a web interface</li>
                      <li>• Deploying your AI app</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">4</span>
                      Final Project
                    </h4>
                    <p className="pl-10 mb-2 text-sm text-muted-foreground italic">Build your portfolio piece:</p>
                    <ul className="pl-10 space-y-1 text-muted-foreground">
                      <li>• AI Chatbot (like ChatGPT)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4">What Our Community Says 💬</h2>
              <p className="text-xl text-muted-foreground">Real stories from TMT interns and bootcampers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div key={index} className="card-premium p-8 animate-fade-up relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Star className="w-5 h-5 text-yellow-500 mb-4 fill-yellow-500" />
                  <p className="text-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-24 bg-background overflow-hidden relative">
           <div className="container mx-auto px-6 relative z-10 animate-fade-up">
              <div className="text-center mb-12">
                <MapPin className="w-20 h-20 text-primary mx-auto mb-8" />
                <h2 className="text-4xl font-bold mb-6">Visit Our HQ 📍</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join us offline for an immersive experience at our headquarters near IIT Hyderabad.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(255,0,0,0.15)] bg-card">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.293015906262!2d78.0802181758931!3d17.588815383333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfb50d7b7429f%3A0x79f9309f8041a2d9!2sTechMecha%20Torque!5e0!3m2!1sen!2sin!4v1746863675003!5m2!1sen!2sin" 
                  className="w-full h-[450px] border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <HelpCircle className="w-10 h-10 text-primary" />
                FAQ ❓
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-left"
                  >
                    <span className="text-lg font-bold">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-2 text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="card-premium bg-gradient-to-br from-primary/20 via-background to-primary/5 p-16 rounded-3xl text-center border-primary/20 animate-fade-up">
              <h2 className="text-5xl font-extrabold mb-6 text-foreground">Start Your AI Journey Today 🚀</h2>
              <p className="text-2xl text-muted-foreground font-medium mb-4 max-w-2xl mx-auto">
                Join the <span className="text-primary font-bold">FREE</span> Python and AI Bootcamp for Everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-12 italic">Online & Offline Hybrid Mode</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftHmHL3rflnwr_4m6eaebGar2RzhwJXpAF4l469QzNr_qGGA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:-translate-y-1 text-center"
                >
                  Register for Free
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

export default AIBootcamp;
