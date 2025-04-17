import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Products = () => {
  return (
    <section
      id="opendev"
      className="py-20 bg-[#111827] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-startup-purple/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-startup-blue/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      <div className="flex justify-center">
        <p className="w-1/2 text-xl text-gray-300 mb-10 text-center">
          SecretStartups.io empowers companies to accelerate product development
          by leveraging pre-built components, powerful toolsets, and expert
          engineering support.
        </p>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
              <span className="text-startup-purple mr-2">⚡</span>
              <span>Our Flagship Product</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Introducing <span className="text-gradient">Open Dev</span>
            </h2>

            <p className="text-xl text-gray-300 mb-6">
              A pre-configured coder workspace that gives your developers
              everything they need to build powerful applications right from day
              one.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-startup-accent/20 flex items-center justify-center mr-3">
                  <Check className="h-3.5 w-3.5 text-startup-accent" />
                </span>
                <span className="text-gray-200">
                  <strong className="text-white">
                    Pre-configured environment
                  </strong>{" "}
                  – Skip weeks of setup and configuration
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-startup-accent/20 flex items-center justify-center mr-3">
                  <Check className="h-3.5 w-3.5 text-startup-accent" />
                </span>
                <span className="text-gray-200">
                  <strong className="text-white">
                    Integrated cluster components
                  </strong>{" "}
                  – Access databases, queues, and services seamlessly
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-startup-accent/20 flex items-center justify-center mr-3">
                  <Check className="h-3.5 w-3.5 text-startup-accent" />
                </span>
                <span className="text-gray-200">
                  <strong className="text-white">
                    Built-in infrastructure
                  </strong>{" "}
                  – Deploy with confidence using our proven architecture
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-startup-accent/20 flex items-center justify-center mr-3">
                  <Check className="h-3.5 w-3.5 text-startup-accent" />
                </span>
                <span className="text-gray-200">
                  <strong className="text-white">Customizable blocks</strong> –
                  Build on top of our engineering team's existing components
                </span>
              </li>
            </ul>

            <Button className="btn-gradient">
              Explore Open Dev <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              {/* Code editor mockup */}
              <div className="glass-card p-4 border border-white/10 rounded-lg overflow-hidden">
                <div className="flex items-center mb-4 border-b border-white/10 pb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="mx-auto font-mono text-sm text-gray-400">
                    open-dev-workspace
                  </div>
                </div>

                <div className="font-mono text-sm">
                  <p className="text-gray-400">
                    // SecretStartups.io Open Dev Workspace
                  </p>
                  <p className="text-gray-400">
                    // Pre-configured with all the tools you need
                  </p>
                  <p className="text-gray-400 mb-4">
                    // Start building immediately:
                  </p>

                  <p className="text-startup-blue">
                    import{" "}
                    <span className="text-startup-purple">
                      {"{"} SecretComponents{" "}
                      <span className="text-white">{"}"}</span>
                    </span>{" "}
                    from{" "}
                    <span className="text-startup-accent">
                      '@secret/components'
                    </span>
                    ;
                  </p>
                  <p className="text-startup-blue">
                    import{" "}
                    <span className="text-startup-purple">
                      {"{"} useDatabase{" "}
                      <span className="text-white">{"}"}</span>
                    </span>{" "}
                    from{" "}
                    <span className="text-startup-accent">'@secret/data'</span>;
                  </p>
                  <p className="text-startup-blue">
                    import{" "}
                    <span className="text-startup-purple">
                      {"{"} Auth <span className="text-white">{"}"}</span>
                    </span>{" "}
                    from{" "}
                    <span className="text-startup-accent">'@secret/auth'</span>;
                  </p>
                  <p className="text-white mb-4">
                    <br />
                    <span className="text-startup-blue">const</span>{" "}
                    <span className="text-startup-purple">App</span> = (){" "}
                    {"=> {"}
                    <br />
                    &nbsp;&nbsp;<span className="text-startup-blue">
                      const
                    </span>{" "}
                    db ={" "}
                    <span className="text-startup-purple">useDatabase</span>();
                    <br />
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-startup-blue">return</span> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"<"}
                    <span className="text-startup-accent">
                      SecretComponents.Container
                    </span>
                    {">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}
                    <span className="text-startup-accent">Auth.Provider</span>
                    {">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}
                    <span className="text-startup-accent">
                      YourAwesomeProduct
                    </span>{" "}
                    <span className="text-startup-purple">db</span>={"{db}"}
                    {" />"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</"}
                    <span className="text-startup-accent">Auth.Provider</span>
                    {">"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"</"}
                    <span className="text-startup-accent">
                      SecretComponents.Container
                    </span>
                    {">"}
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    {"};"}
                  </p>

                  <p className="text-gray-400">
                    // That's it! Your app is connected to our secure
                    infrastructure
                  </p>
                  <p className="text-gray-400">
                    // Focus on building your product, not configuring tools
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-startup-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-startup-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
