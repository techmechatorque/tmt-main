import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { learningTracks } from "@/data/courses";
import React from "react";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";

const Certifications = () => {
  usePageMeta({
    title: "Certifications",
    description: "Structured learning tracks and certifications from TechMecha Torque.",
    path: "/training/certifications",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        </div>

        {/* Real, working connector animation between course cards — untouched */}
        <style>{`
          @keyframes floatDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <FadeInView className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 text-foreground leading-tight tracking-tighter">
              LEARNING <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">PROGRAMS</span>
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the most demanded skills through our structured, intensive learning pathways designed for industry readiness.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10">
            {learningTracks.map((track, trackIdx) => (
              <div key={trackIdx} className="flex flex-col">

                {/* Track Title Header — its own reveal; the course cards below each
                    animate independently, not nested inside this one. */}
                <FadeInView delay={trackIdx * 150} className="text-center mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-primary/20 relative">
                  <h2 className="text-base sm:text-xl xl:text-lg 2xl:text-xl font-bold text-foreground whitespace-nowrap">{track.title}</h2>
                  <div className="absolute bottom-[-1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </FadeInView>

                {/* Mobile: one course per row, swipe left to reach the next (scroll-snap
                    carousel). Desktop (md+): unchanged vertical stack with connectors. */}
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none flex-grow gap-6 md:gap-0 -mx-6 px-6 md:mx-0 md:px-0 scroll-pl-6 md:scroll-pl-0">
                  {track.courses.map((course, courseIdx) => {
                    const isBasics = course.month === "Month - 1";
                    const isFirstInternship = course.month === "Month - 2";
                    const isProject = courseIdx === 2;
                    const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${course.name} course. Could you please provide more details?`);
                    const whatsappUrl = `https://wa.me/917993442607?text=${whatsappMessage}`;

                    return (
                      <div key={courseIdx} className="flex flex-col items-center w-full flex-shrink-0 snap-start">

                        {/* Section Labels within flow */}
                        {isBasics && (
                           <div className="bg-primary/10 text-primary border border-primary/20 px-4 sm:px-5 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-sm">
                             Basics (1 Month)
                           </div>
                        )}
                        {isFirstInternship && (
                           <div className="bg-blue-500/10 text-blue-500 border border-blue-500/20 px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center shadow-sm max-w-[90%] leading-tight">
                             Internship Training Program
                           </div>
                        )}
                        {isProject && (
                           <div className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center shadow-sm max-w-[90%] leading-tight">
                             Project
                           </div>
                        )}

                        {/* Course Card — fixed height so every card in the grid matches,
                            regardless of how long its title/description text is */}
                        <FadeInView delay={courseIdx * 100} className="w-full">
                          <Card className="card-professional group w-full h-[310px] sm:h-[400px] flex flex-col p-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                          <CardContent className="p-4 sm:p-6 flex flex-col h-full items-center text-center relative z-10">

                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                              {React.cloneElement(course.icon as React.ReactElement, { className: "w-5 h-5 sm:w-6 sm:h-6 text-primary" })}
                            </div>

                            <div className="bg-primary/10 text-primary text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 uppercase tracking-wider flex-shrink-0">
                              {isBasics ? "Month - 1" : (course.month === "Month - 2" ? "Phase 1" : "Phase 2")}
                            </div>

                            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 flex-shrink-0 group-hover:text-primary transition-colors duration-300">{course.name}</h3>

                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow mb-4 sm:mb-6 line-clamp-3">
                              {course.desc}
                            </p>

                            {/* Buttons */}
                            <div className="flex items-center w-full mt-auto pt-4 sm:pt-5 border-t border-border/10 flex-shrink-0">
                              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full block group/btn">
                                <Button
                                  variant="outline"
                                  className="w-full text-xs sm:text-sm font-semibold rounded-xl h-9 sm:h-11 bg-[#25D366]/5 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 shadow-sm group-hover/btn:shadow-[#25D366]/20"
                                >
                                  <MessageCircle className="w-4 h-4 mr-2" /> Contact
                                </Button>
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      </FadeInView>

                        {/* Downward Connector Flow — vertical layout only, hidden on mobile's horizontal carousel */}
                        {courseIdx < track.courses.length - 1 && (
                          <div className="hidden md:flex py-4 flex-col items-center justify-center relative w-full z-0">
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
