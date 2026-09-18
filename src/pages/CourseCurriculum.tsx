import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCourseById } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowLeft, BookOpen, Calendar, MessageCircle } from "lucide-react";

const CourseCurriculum = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;

  usePageMeta({
    title: course?.name ?? "Course",
    description: course?.desc ?? "",
    path: `/training/courses/${courseId ?? ""}`,
  });

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center flex-col">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/training/certifications">
            <Button>Return to Certifications</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in the ${course.name} course. Could you please provide more details?`);
  const whatsappUrl = `https://wa.me/917993442607?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/training/certifications" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Learning Tracks
          </Link>

          <FadeInView className="card-professional p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              {course.icon}
            </div>

            <div className="flex flex-col md:flex-row gap-5 sm:gap-8 items-start md:items-center relative z-10">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-inner border border-primary/20">
                {React.cloneElement(course.icon as React.ReactElement, { className: "w-8 h-8 sm:w-12 sm:h-12 text-primary" })}
              </div>

              <div className="flex-grow">
                <div className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 1 Month Duration
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-foreground">{course.name}</h1>
                <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {course.desc}
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-4 w-full md:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" variant="outline" className="w-full border-[#25D366]/30 hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#25D366] font-semibold rounded-xl h-11 sm:h-14 text-sm sm:text-lg flex items-center justify-center gap-2 transition-all">
                    <MessageCircle className="w-5 h-5" /> Contact to Enroll
                  </Button>
                </a>
              </div>
            </div>
          </FadeInView>

          <div className="mb-8">
            <FadeInView as="h2" className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              Course Curriculum
            </FadeInView>

            <div className="space-y-6 sm:space-y-10">
              {course.curriculum.map((week, index) => (
                <FadeInView key={week.week} delay={index * 100} className="card-professional p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-primary border-b border-primary/10 pb-3 sm:pb-4">
                    Week {week.week}: {week.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                    {week.days.map((day) => (
                      <div key={day.day} className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
                        <div className="text-xs font-bold text-primary tracking-wider uppercase mb-3">Day {day.day}</div>
                        <h4 className="font-semibold text-sm mb-4 text-foreground/90">{day.title}</h4>
                        <ul className="space-y-2.5">
                          {day.topics.map((topic, i) => (
                            <li key={i} className="text-xs flex items-start text-muted-foreground leading-relaxed">
                              <span className="text-primary/50 mr-2 mt-0.5">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseCurriculum;
