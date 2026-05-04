import { Building2 } from "lucide-react";

const clients = [
  "IIT Technology Institute",
  "Global University",
  "National College of Technology",
  "State Engineering College",
  "Metropolitan Business School",
  "Regional Medical College"
];

const Clients = () => {
  return (
    <section className="py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-muted-foreground text-lg mb-8">
            Trusted by leading educational institutions across the country
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform animate-fade-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-center text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
