import { useState } from "react";
import { ChevronDown, HelpCircle, Users, Briefcase, TrendingUp, ShoppingBag, Code, CreditCard, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  const [expandedCategory, setExpandedCategory] = useState("general");
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestions({
      ...expandedQuestions,
      [questionId]: !expandedQuestions[questionId]
    });
  };

  const categories = [
    {
      id: "general",
      name: "General Questions",
      icon: <HelpCircle className="h-5 w-5 text-startup-accent" />,
      questions: [
        {
          id: "what-is",
          question: "What is SecretStartups.io?",
          answer: "SecretStartups.io is a platform designed to accelerate product development and startup growth by connecting tech founders and businesses with pre-built solutions, talent, investment opportunities, and marketplace products."
        },
        {
          id: "who-for",
          question: "Who is SecretStartups.io for?",
          answer: "Our platform is designed primarily for Tech Founders, Early-Stage Tech Startups, Digital Transformation Consultancies, and Product Teams."
        },
        {
          id: "create-account",
          question: "How do I create an account?",
          answer: "You can create an account by clicking the \"Sign Up\" button in the top right corner of our homepage. Follow the prompts to complete your registration with your name, email, company details, and password."
        }
      ]
    },
    {
      id: "employment",
      name: "Employment Solutions",
      icon: <Users className="h-5 w-5 text-startup-blue" />,
      questions: [
        {
          id: "talent-eval",
          question: "How does the talent evaluation process work?",
          answer: "We evaluate candidates based on their pre-existing portfolio of work rather than traditional resumes. This approach provides a more accurate assessment of a candidate's actual capabilities and experience."
        },
        {
          id: "payroll",
          question: "What is the payroll outsourcing service?",
          answer: "Our payroll outsourcing service allows companies to outsource the administrative burden of managing employee payroll. With an annual membership payment, we handle all aspects of payroll management, tax compliance, and benefits administration."
        },
        {
          id: "find-candidates",
          question: "How do I find candidates for my team?",
          answer: "After creating an account and subscribing to our employment solutions, you can browse our talent pool, filtering by skills, experience level, portfolio quality, and availability. You can directly reach out to candidates through our platform."
        }
      ]
    },
    {
      id: "project",
      name: "Project Work",
      icon: <Briefcase className="h-5 w-5 text-startup-purple" />,
      questions: [
        {
          id: "post-tender",
          question: "How do I post a project tender?",
          answer: "Navigate to the Project Work section and click \"Post New Tender.\" Fill in the project details, requirements, timeline, and budget range. Once submitted, qualified contractors will be able to view and bid on your project."
        },
        {
          id: "milestone-payment",
          question: "How does milestone-based payment work?",
          answer: "Our platform breaks projects into milestones, with payment released only when each milestone is completed and approved. This protects both parties and ensures quality deliverables throughout the project lifecycle."
        },
        {
          id: "verify-contractors",
          question: "How do you verify contractor qualifications?",
          answer: "We verify contractors based on their previous work portfolio, client reviews, skills assessment, and successful project completion history on our platform."
        }
      ]
    },
    {
      id: "investment",
      name: "Investment Opportunities",
      icon: <TrendingUp className="h-5 w-5 text-startup-accent" />,
      questions: [
        {
          id: "how-invest",
          question: "How do I invest in startups through your platform?",
          answer: "Browse our curated list of marketplace MVPs in the Investment section. Each listing includes details about the product, team, market potential, and investment terms. You can express interest directly through the platform."
        },
        {
          id: "startup-types",
          question: "What types of startups are available for investment?",
          answer: "We focus primarily on tech startups with working MVPs, particularly those related to SaaS, marketplace solutions, AI applications, developer tools, and business productivity solutions."
        },
        {
          id: "advisor",
          question: "Is SecretStartups.io an investment advisor?",
          answer: "No, we are not investment advisors. We simply provide a platform for connecting investors with startup opportunities. All investments should be made at your own discretion and risk."
        }
      ]
    },
    {
      id: "marketplace",
      name: "Buy/Lease/Subscribe Products",
      icon: <ShoppingBag className="h-5 w-5 text-startup-blue" />,
      questions: [
        {
          id: "product-types",
          question: "What types of products are available in the marketplace?",
          answer: "Our marketplace features subscription-based tools and products for various business needs, including development tools, business automation solutions, marketing platforms, analytics and reporting tools, and communication and collaboration software."
        },
        {
          id: "publish-product",
          question: "How do I publish my product to the marketplace?",
          answer: "If you're an engineer or company with a product you'd like to list, go to the \"Sell on Marketplace\" section and follow the application process. Products undergo a review process before being listed."
        },
        {
          id: "differences",
          question: "What's the difference between buying, leasing, and subscribing?",
          answer: "Buy: One-time purchase for perpetual use. Lease: Fixed-term access with an option to purchase at the end of the term. Subscribe: Ongoing monthly or annual payment for continued access."
        }
      ]
    },
    {
      id: "technical",
      name: "Technical Questions",
      icon: <Code className="h-5 w-5 text-startup-purple" />,
      questions: [
        {
          id: "api-access",
          question: "Do you offer API access to the platform?",
          answer: "Yes, we offer API access for enterprise customers who want to integrate our services directly into their workflows. Contact our sales team for more information."
        },
        {
          id: "data-security",
          question: "How do you handle data security and privacy?",
          answer: "We employ industry-standard security practices, including data encryption, secure authentication, regular security audits, and strict access controls. Please refer to our Privacy Policy for more details."
        },
        {
          id: "support-options",
          question: "What support options are available?",
          answer: "We offer several support options: Email support for all users, live chat support for paid subscribers, priority phone support for enterprise customers, and community forums for general questions and peer assistance."
        }
      ]
    },
    {
      id: "billing",
      name: "Billing and Account",
      icon: <CreditCard className="h-5 w-5 text-startup-accent" />,
      questions: [
        {
          id: "payment-methods",
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, and bank transfers for enterprise accounts. In select regions, we also support alternative payment methods."
        },
        {
          id: "cancel-subscription",
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time from your Account Settings. Note that most services are billed monthly or annually, and refunds are provided according to our refund policy."
        },
        {
          id: "refunds",
          question: "Do you offer refunds?",
          answer: "Refund eligibility varies by service. Generally, subscription services can be canceled but are non-refundable for the current billing period. One-time purchases may be eligible for refunds within 14 days of purchase if the service has not been substantially used."
        }
      ]
    }
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about SecretStartups.io, our services, and how we help tech founders and startups accelerate their product development.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center justify-center p-4 rounded-lg border transition-all ${
                    expandedCategory === category.id
                      ? "border-startup-accent bg-startup-accent/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="mr-3">{category.icon}</div>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {categories.map((category) => (
              expandedCategory === category.id && (
                <div key={category.id} className="mt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    {category.icon}
                    <span className="ml-3">{category.name}</span>
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item) => (
                      <div
                        key={item.id}
                        className="border border-white/10 rounded-lg overflow-hidden"
                      >
                        <button
                          className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                          onClick={() => toggleQuestion(item.id)}
                        >
                          <h3 className="text-lg font-medium">{item.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              expandedQuestions[item.id] ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expandedQuestions[item.id] && (
                          <div className="p-4 pt-0 text-gray-300 border-t border-white/10">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}

            <div className="mt-12 p-6 border border-white/10 rounded-lg bg-white/5 text-center">
              <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                If you couldn't find the answer to your question, please contact our support team:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-startup-accent/20 flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6 text-startup-accent" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Email Us</h4>
                  <p className="text-gray-400">support@secretstartups.io</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-startup-blue/20 flex items-center justify-center mb-3">
                    <MessageSquare className="h-6 w-6 text-startup-blue" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Live Chat</h4>
                  <p className="text-gray-400">Available 9AM-6PM ET, Monday-Friday</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-startup-purple/20 flex items-center justify-center mb-3">
                    <Phone className="h-6 w-6 text-startup-purple" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Call Us</h4>
                  <p className="text-gray-400">+1 (888) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6 text-center">Send us a message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-startup-accent text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-startup-accent text-white"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your company name" 
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-startup-accent text-white"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project and needs..." 
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-startup-accent text-white"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="btn-gradient">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
