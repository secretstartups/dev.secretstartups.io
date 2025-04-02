
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <section id="casestudies" className="py-20 bg-[#0F172A]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            See how companies have accelerated their product development and scaled
            their operations using SecretStartups.io.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Case Study 1 */}
          <div className="glass-card overflow-hidden rounded-xl flex flex-col h-full border border-white/10 hover:border-startup-purple/50 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-startup-purple/20 to-startup-blue/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-startup-purple to-startup-blue">
                  DevSync
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">Developer Tools</div>
                <div className="text-xs bg-startup-purple/20 text-startup-purple px-2 py-1 rounded-full">
                  70% Faster
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">From Concept to Market in 6 Weeks</h3>
              <p className="text-gray-300 mb-4">
                DevSync used Open Dev to launch their developer collaboration tool,
                reducing development time by 70% and securing initial funding within
                two months of launch.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="CEO"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">Sarah Chen</div>
                  <div className="text-sm text-gray-400">CTO, DevSync</div>
                </div>
              </div>
              <blockquote className="italic text-gray-300 text-sm">
                "SecretStartups.io gave us the foundation we needed to focus on our core
                features instead of infrastructure. We launched in weeks, not months."
              </blockquote>
            </div>
            <div className="p-6 pt-0">
              <Button
                variant="ghost"
                className="text-startup-purple hover:text-startup-blue transition-colors p-0"
              >
                Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="glass-card overflow-hidden rounded-xl flex flex-col h-full border border-white/10 hover:border-startup-purple/50 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-startup-blue/20 to-startup-accent/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-startup-blue to-startup-accent">
                  HealthTrack
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">Health Tech</div>
                <div className="text-xs bg-startup-blue/20 text-startup-blue px-2 py-1 rounded-full">
                  3x Growth
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Scaling to 100,000 Users Without Downtime</h3>
              <p className="text-gray-300 mb-4">
                HealthTrack used our scalable architecture to handle rapid user growth,
                expanding from 30,000 to 100,000 users in just three months with zero service disruptions.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="CEO"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">Marcus Johnson</div>
                  <div className="text-sm text-gray-400">Founder, HealthTrack</div>
                </div>
              </div>
              <blockquote className="italic text-gray-300 text-sm">
                "The pre-built scaling solutions saved us from a complete rewrite as we grew.
                Our small team was able to focus on product improvements instead of putting out fires."
              </blockquote>
            </div>
            <div className="p-6 pt-0">
              <Button
                variant="ghost"
                className="text-startup-purple hover:text-startup-blue transition-colors p-0"
              >
                Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="glass-card overflow-hidden rounded-xl flex flex-col h-full border border-white/10 hover:border-startup-purple/50 transition-all duration-300">
            <div className="h-48 bg-gradient-to-r from-startup-accent/20 to-startup-purple/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-startup-accent to-startup-purple">
                  FinFlow
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-400">FinTech</div>
                <div className="text-xs bg-startup-accent/20 text-startup-accent px-2 py-1 rounded-full">
                  50% Cost Reduction
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Building a Secure FinTech Platform in Record Time</h3>
              <p className="text-gray-300 mb-4">
                FinFlow leveraged our security components to build a compliant financial 
                platform in 4 months instead of the projected 8, passing security audits on the first try.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="CEO"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">Alicia Rodriguez</div>
                  <div className="text-sm text-gray-400">CEO, FinFlow</div>
                </div>
              </div>
              <blockquote className="italic text-gray-300 text-sm">
                "The security and compliance features saved us countless hours. Our investors
                were impressed with how quickly we built a secure, production-ready platform."
              </blockquote>
            </div>
            <div className="p-6 pt-0">
              <Button
                variant="ghost"
                className="text-startup-purple hover:text-startup-blue transition-colors p-0"
              >
                Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-gradient">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
