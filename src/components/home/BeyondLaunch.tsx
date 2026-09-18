import { FadeInView } from "@/components/FadeInView";
import { beyondLaunchDetails } from "@/data/services";

const BeyondLaunch = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Beyond launch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Shipping isn't the finish line.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl divide-y sm:divide-y-0 sm:divide-x divide-border">
          {beyondLaunchDetails.map((item, index) => (
            <FadeInView key={item.title} delay={index * 100} className="py-6 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <item.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondLaunch;
