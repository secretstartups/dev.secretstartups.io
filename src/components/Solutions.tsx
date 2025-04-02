
import { Check, ChevronRight, Code, Layers, LayoutGrid, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-startup-dark to-[#111827]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Help Companies <span className="text-gradient">Ship Products Quickly</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our methodology is simple: leverage existing blocks, customize rapidly, and deploy seamlessly.
            We've built the infrastructure so you can focus on your unique product vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-purple/20 flex items-center justify-center mb-6">
              <Rocket className="h-6 w-6 text-startup-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Faster Go-to-Market</h3>
            <p className="text-gray-300 mb-6">
              Reduce development time by up to 70% by starting with pre-built, production-ready components that 
              can be customized to your needs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Skip boilerplate setup and configuration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Immediate access to tested, scalable architecture</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Continuous deployment pipeline from day one</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-blue/20 flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-startup-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reduced Development Overhead</h3>
            <p className="text-gray-300 mb-6">
              Our components handle the complex infrastructure, security, and scaling challenges, 
              allowing your team to focus on building your core product features.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Simplified state management and data flow</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Built-in authentication and security patterns</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Automated testing frameworks integrated</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-purple/20 flex items-center justify-center mb-6">
              <LayoutGrid className="h-6 w-6 text-startup-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pre-built Scalable Architectures</h3>
            <p className="text-gray-300 mb-6">
              Start with architecture that's designed to scale from day one, avoiding costly 
              rewrites as your user base grows.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Horizontally scalable microservices</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Database patterns optimized for growth</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Cloud-native infrastructure as code</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-startup-blue/20 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-startup-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Engineering Support</h3>
            <p className="text-gray-300 mb-6">
              Get unstuck instantly with access to our team of experienced engineers who
              understand both the platform and your specific business challenges.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Direct access to senior engineers</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Pair programming sessions for complex issues</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-startup-accent mr-2 mt-0.5" />
                <span className="text-gray-300">Custom solution development when needed</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-startup-purple hover:text-startup-blue transition-colors">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-gradient">
            Explore Our Methodology
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
