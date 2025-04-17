import { Check, ChevronRight, Briefcase, FileText, DollarSign, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-startup-dark to-[#111827]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Help You <span className="text-gradient">Achieve Your Goals</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            SecretStartups.io is designed to empower businesses and individuals by providing tailored solutions for employment, project work, investment opportunities, and subscription-based products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Employment */}
          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-purple/20 flex items-center justify-center mb-6">
              <Briefcase className="h-6 w-6 text-startup-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Employment</h3>
            <p className="text-gray-300 mb-6">
              Evaluate candidates based on their pre-existing portfolios and optionally outsource payroll to SecretStartups with an annual membership.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Streamlined candidate evaluation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Outsource payroll with ease</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Project Work */}
          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-blue/20 flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-startup-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Work</h3>
            <p className="text-gray-300 mb-6">
              Post tenders, evaluate candidates based on their portfolios, and pay freelancers or contractors for completed milestones.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Post and manage project tenders</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Milestone-based payments</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Invest */}
          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-purple/20 flex items-center justify-center mb-6">
              <DollarSign className="h-6 w-6 text-startup-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Invest</h3>
            <p className="text-gray-300 mb-6">
              Browse a list of pre-existing marketplace MVPs and invest in teams to help them launch their products to a wider audience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Support innovative teams</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Help launch scalable products</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Buy/Lease/Subscribe */}
          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-blue/20 flex items-center justify-center mb-6">
              <ShoppingCart className="h-6 w-6 text-startup-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Buy/Lease/Subscribe</h3>
            <p className="text-gray-300 mb-6">
              Browse a list of subscription-based products published by engineers, similar to AppSumo, and find tools to accelerate your business.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Access subscription-based tools</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Discover innovative products</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-gradient">
            Explore Our Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;