import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDown, MessageCircle, ExternalLink, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { learningTracks } from "@/data/courses";
import { Link } from "react-router-dom";
import React from "react";
import { FadeInView } from "@/components/FadeInView";

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        </div>

        <style>{`
          @keyframes floatDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground leading-tight tracking-tighter">
              LEARNING <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">TRACKS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the most demanded skills through our structured, intensive learning pathways designed for industry readiness.
            </p>
          </div>

          {/* Modular Flow Context Banner */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-lg animate-fade-up max-w-5xl mx-auto">
            <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Modular & Flexible Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each course listed below is an independent, complete <strong>1-month module</strong>. You have the total flexibility to enroll in individual courses based on your current skill level. However, for the best comprehensive learning experience, <strong>we strongly recommend following the tracks in the provided flow from Month 1 to Month 3</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10">
            {learningTracks.map((track, trackIdx) => (
              <div key={trackIdx} className="flex flex-col animate-fade-up" style={{ animationDelay: `${trackIdx * 150}ms` }}>
                
                {/* Track Title Header */}
                <div className="text-center mb-8 pb-4 border-b border-primary/20 relative">
                  <h2 className="text-xl xl:text-lg 2xl:text-xl font-bold text-foreground whitespace-nowrap">{track.title}</h2>
                  <div className="absolute bottom-[-1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </div>

                <div className="flex flex-col flex-grow">
                  {track.courses.map((course, courseIdx) => {
                    const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${course.name} course. Could you please provide more details?`);
                    const whatsappUrl = `https://wa.me/917993442607?text=${whatsappMessage}`;

                    return (
                      <div key={courseIdx} className="flex flex-col items-center w-full">
                        
                        {/* Course Card */}
                        <FadeInView delay={courseIdx * 100} className="w-full">
                          <Card className="w-full h-full min-h-[280px] flex flex-col group border-white/5 bg-card/20 backdrop-blur-sm hover:bg-card/40 hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-primary/10 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          
                          <CardContent className="p-6 flex flex-col h-full items-center text-center relative z-10">
                            
                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                              {React.cloneElement(course.icon as React.ReactElement, { className: "w-6 h-6 text-primary" })}
                            </div>
                            
                            <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                              {course.month}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{course.name}</h3>
                            
                            <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                              {course.desc}
                            </p>
                            
                            {/* Buttons */}
                            <div className="flex items-center w-full gap-2 mt-auto pt-4 border-t border-border/10">
                              <Link to={`/course/${course.id}`} className="flex-1">
                                <Button variant="ghost" size="sm" className="w-full text-xs font-semibold rounded-lg h-9 hover:bg-primary/5 text-foreground/70 hover:text-primary transition-colors">
                                  Curriculum
                                </Button>
                              </Link>
                              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" size="sm" className="w-full text-xs font-semibold rounded-lg h-9 border-[#25D366]/20 hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#25D366] transition-colors">
                                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" /> Contact
                                </Button>
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      </FadeInView>
                        
                        {/* Downward Connector Flow */}
                        {courseIdx < track.courses.length - 1 && (
                          <div className="py-4 flex flex-col items-center justify-center relative w-full z-0">
                            {/* Vertical Track */}
                            <div className="w-[2px] h-12 bg-primary/10 relative rounded-full overflow-hidden">
                              {/* Glowing Animated Segment */}
                              <div 
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-primary"
                                style={{ 
                                  animation: 'floatDown 2s ease-in-out infinite',
                                  animationDelay: `${courseIdx * 0.5}s`
                                }}
                              ></div>
                            </div>
                            {/* Styled Arrow Container */}
                            <div className="absolute bottom-2 bg-card p-1 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] shadow-primary/20 z-10 flex items-center justify-center">
                              <ArrowDown className="w-3 h-3 text-primary animate-bounce" style={{ animationDuration: '3s' }} />
                            </div>
                          </div>
                        )}
                        
                      </div>
                    );
                  })}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certifications;
