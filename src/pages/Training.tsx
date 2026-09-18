import { Link } from "react-router-dom";
import { ArrowRight, Code2, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const Training = () => {
  usePageMeta({
    title: "Training & Certification",
    description: "Coding courses, certifications, and internship training tracks from TechMecha Torque.",
    path: "/training",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Training & Certification
            </h1>
            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed">
              Structured courses in C, C++, Java, and Python, delivered through
              Learning Spaces, plus certification tracks and bootcamps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
            <Link to="/training/certifications" className="card-professional group p-5 sm:p-8">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Certifications</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Learning tracks across Data Structures & Algorithms, Full-Stack Web,
                AI & ML, and Enterprise Java, each with basics and internship tracks.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm">
                View tracks
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/training/bootcamps" className="card-professional group p-5 sm:p-8">
              <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Bootcamps</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Intensive, hands-on programs. Currently in planning.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
