
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-startup-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-startup-blue/10 rounded-full blur-3xl" />
      </div>

      {/* Fullscreen Phrases Section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container relative z-10 text-center">
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
            <span className="text-startup-accent mr-2">✨</span>
            <span>Accelerate your product development</span>
          </div> */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Build Faster.</span>
            <span className="block">Scale Smarter.</span>
            <span className="block">Launch Sooner.</span>
          </h1>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="btn-gradient">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 hover:bg-white/5"
            >
              Talk to an Expert
            </Button>
          </div>

          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-startup-purple/20 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-startup-purple" />
                </div>
                <h3 className="text-lg font-medium mb-2">Rapid Deployment</h3>
                <p className="text-gray-400 text-sm">
                  Launch your products up to 70% faster with pre-built components.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-startup-blue/20 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-startup-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Developer Workspace</h3>
                <p className="text-gray-400 text-sm">
                  Pre-configured environment with integrated cluster components.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-startup-accent/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-startup-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expert Support</h3>
                <p className="text-gray-400 text-sm">
                  Access our team of engineers to resolve blockers instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
