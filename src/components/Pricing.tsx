
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}) => (
  <div
    className={`glass-card relative p-6 md:p-8 border ${
      isPopular ? "border-startup-purple" : "border-white/10"
    } rounded-xl flex flex-col h-full`}
  >
    {isPopular && (
      <div className="absolute -top-3 right-6 bg-startup-purple text-white text-xs font-medium px-3 py-1 rounded-full">
        Popular
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">{price}</span>
      {price !== "Custom" && <span className="text-gray-400 ml-1">/month</span>}
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      className={`mt-auto ${
        isPopular ? "btn-gradient" : "bg-white/10 hover:bg-white/20"
      }`}
    >
      {ctaText}
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#111827] to-startup-dark">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include access to our 
            core platform with different levels of support and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingTier
            title="Startup"
            price="$499"
            description="Perfect for early-stage startups building their first product."
            features={[
              "Access to Open Dev workspace",
              "Basic component library",
              "Standard authentication system",
              "Email support within 24 hours",
              "1 development environment",
              "Community forum access",
              "Basic analytics dashboard"
            ]}
          />

          <PricingTier
            title="Scale-up"
            price="$1,999"
            description="For growing startups ready to scale their product and team."
            features={[
              "Everything in Startup plan",
              "Extended component library",
              "Advanced authentication & security",
              "Priority email support (12 hours)",
              "3 development environments",
              "1 engineering support session monthly",
              "Advanced analytics & reporting",
              "Custom domain & whitelabeling"
            ]}
            isPopular={true}
          />

          <PricingTier
            title="Enterprise"
            price="Custom"
            description="Tailored solutions for established companies with complex needs."
            features={[
              "Everything in Scale-up plan",
              "Full access to all components",
              "Enterprise-grade security",
              "Dedicated support engineer",
              "Unlimited development environments",
              "Weekly engineering support sessions",
              "Custom integrations & development",
              "On-premises deployment option",
              "SLA guarantees"
            ]}
            ctaText="Contact Sales"
          />
        </div>

        <div className="glass-card p-8 border border-white/10 rounded-xl">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-gray-300">
                Contact our team to discuss your specific requirements and get a tailored quote.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button className="btn-gradient">Get in Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
