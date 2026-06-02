import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Calendar, Rocket } from "lucide-react";

const AIBootcamp = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            STAY TUNED
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-foreground leading-tight tracking-tighter">
            BOOTCAMPS
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">COMING SOON</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We are crafting intensive, hands-on learning experiences. Get ready to elevate your skills with industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-sm">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground font-medium">Expected Launch</p>
                <p className="font-bold text-foreground">TBA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 shadow-sm text-primary">
              <Rocket className="w-6 h-6" />
              <div className="text-left">
                <p className="text-sm font-medium opacity-80">Status</p>
                <p className="font-bold">In Development</p>
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
