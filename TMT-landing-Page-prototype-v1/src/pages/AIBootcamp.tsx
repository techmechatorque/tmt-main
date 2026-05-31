import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIBootcamp = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="text-center relative z-10 animate-fade-up px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-foreground leading-tight">
            Coming <span className="text-primary">Soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We are working hard to bring you the best TechMecha Torque's Bootcamps. Stay tuned!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIBootcamp;
