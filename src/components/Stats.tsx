import { Users, Building2, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "10+",
    label: "Institutions in Pipeline",
    description: "Universities preparing for digital transformation"
  },
  {
    icon: Users,
    number: "5K+",
    label: "Early Access Users",
    description: "Beta testers and pilot program participants"
  },
  {
    icon: Award,
    number: "98%",
    label: "Beta Satisfaction",
    description: "Early adopters rate our platform highly"
  },
  {
    icon: TrendingUp,
    number: "Coming",
    label: "Full Launch",
    description: "Currently in development and testing phase"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Future of <span className="text-gradient">EdTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently in development - Join us on our journey to transform education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{stat.number}</div>
              <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
