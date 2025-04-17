import { Button } from "@/components/ui/button";
import { BarChart, Code, Database, Layers, Link, ShieldCheck, Zap } from "lucide-react";

const ToolCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-card p-6 border border-white/10 hover:bg-white/5 transition-all duration-300">
    <div className="h-12 w-12 rounded-lg bg-startup-purple/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-startup-purple" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Toolsets = () => {
  return (
    <section id="toolsets" className="py-20 bg-[#0F172A]">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empower Your Team with <span className="text-gradient">Comprehensive Toolsets</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            SecretStartups.io provides everything your development team needs to build, deploy, and scale products efficiently. From pre-built APIs to advanced analytics, we’ve got you covered.
          </p>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <ToolCard 
            icon={Code}
            title="APIs & SDKs"
            description="Accelerate development with pre-built APIs and SDKs for seamless integrations."
          />
          <ToolCard 
            icon={Layers}
            title="UI Components"
            description="Access a library of responsive, customizable UI components to match your brand."
          />
          <ToolCard 
            icon={Database}
            title="Data Layer"
            description="Simplify data access with built-in caching, filtering, and real-time capabilities."
          />
          <ToolCard 
            icon={Zap}
            title="DevOps Automation"
            description="Streamline your workflows with automated CI/CD pipelines and infrastructure as code."
          />
          <ToolCard 
            icon={ShieldCheck}
            title="Security Framework"
            description="Ensure enterprise-grade security with built-in authentication and data protection."
          />
          <ToolCard 
            icon={BarChart}
            title="Analytics Suite"
            description="Gain insights with tools to track usage, performance, and user behavior."
          />
        </div>

        {/* Exclusive Engineering Support */}
        <div className="glass-card p-8 border border-white/10 rounded-xl mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">
                Exclusive Engineering Support
              </h3>
              <p className="text-gray-300 mb-6">
                Partner with our experienced engineers to overcome challenges, from initial architecture to scaling. Our team is here to ensure your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-startup-purple/20 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-startup-purple" />
                  </div>
                  <span>Rapid response support</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-startup-blue/20 flex items-center justify-center mr-3">
                    <Link className="h-5 w-5 text-startup-blue" />
                  </div>
                  <span>Community forums</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-startup-accent/20 flex items-center justify-center mr-3">
                    <Code className="h-5 w-5 text-startup-accent" />
                  </div>
                  <span>Pair programming</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button size="lg" className="btn-gradient w-full md:w-auto">
                Access Engineering Support
              </Button>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <Button className="btn-gradient">
            Explore All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Toolsets;