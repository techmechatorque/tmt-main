import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to implement TechMecha Torque?",
    answer: "Implementation typically takes 2-4 weeks depending on your institution's size and requirements. Our team handles data migration, training, and setup to ensure a smooth transition."
  },
  {
    question: "Can we customize the platform for our specific needs?",
    answer: "Yes! Our platform is highly customizable. We work with each institution to configure workflows, add custom fields, and integrate with existing systems to match your unique requirements."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, dedicated account managers, regular training sessions, and comprehensive documentation. Our team is always available to help you maximize the platform's value."
  },
  {
    question: "Is our data secure and compliant?",
    answer: "Absolutely. We use enterprise-grade encryption, maintain SOC 2 compliance, and follow international data protection standards including GDPR. All data is backed up daily with disaster recovery protocols."
  },
  {
    question: "Can we integrate with our existing systems?",
    answer: "Yes! Our platform offers robust API integration capabilities and works seamlessly with popular learning management systems, student information systems, and other educational tools."
  },
  {
    question: "What is the pricing model?",
    answer: "We offer flexible pricing based on your institution's size and selected modules. Contact us for a customized quote that fits your budget and requirements."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers to help you get started
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-professional border-0 px-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
