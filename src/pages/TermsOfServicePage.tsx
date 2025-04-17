import { ChevronDown, FileText, Scale, Shield, DollarSign, Lock } from "lucide-react";
import { useState } from "react";

const TermsOfServicePage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "Introduction",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">
            Welcome to SecretStartups.io. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our platform.
          </p>
        </>
      )
    },
    {
      title: "Definitions",
      icon: <FileText className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>"Platform" refers to the SecretStartups.io website and all related services</li>
            <li>"User" refers to anyone who accesses or uses the Platform</li>
            <li>"Content" refers to all materials uploaded, posted, or otherwise made available on the Platform</li>
            <li>"Services" refers to the various offerings provided through SecretStartups.io, including employment solutions, project work marketplace, investment opportunities, and product marketplace</li>
          </ul>
        </>
      )
    },
    {
      title: "Account Registration",
      icon: <Shield className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-4">To access certain features of our Platform, you must register for an account. You agree to:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and update your information</li>
            <li>Keep your account credentials secure</li>
            <li>Be responsible for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
        </>
      )
    },
    {
      title: "User Conduct",
      icon: <FileText className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">When using our Platform, you agree not to:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Post or transmit harmful, fraudulent, or deceptive content</li>
            <li>Attempt to gain unauthorized access to any part of the Platform</li>
            <li>Use the Platform for any illegal or unauthorized purpose</li>
            <li>Interfere with the proper functioning of the Platform</li>
          </ul>
        </>
      )
    },
    {
      title: "Intellectual Property",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <h4 className="text-lg font-medium mb-2">Our Intellectual Property</h4>
          <p className="mb-4">
            The Platform and its content, features, and functionality are owned by SecretStartups.io and are protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h4 className="text-lg font-medium mb-2">Your Content</h4>
          <p className="mb-4">
            You retain ownership of your content, but grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and display your content for the purpose of providing and promoting our Services.
          </p>
        </>
      )
    },
    {
      title: "Services",
      icon: <Shield className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <h4 className="text-lg font-medium mb-2">Employment Solutions</h4>
          <p className="mb-4">
            We provide a platform for evaluating candidates based on their portfolios and optional payroll outsourcing services. We do not guarantee employment or the quality of candidates.
          </p>

          <h4 className="text-lg font-medium mb-2">Project Work Marketplace</h4>
          <p className="mb-4">
            We facilitate connections between project posters and contractors. We are not responsible for the quality of work performed or disputes between parties.
          </p>

          <h4 className="text-lg font-medium mb-2">Investment Opportunities</h4>
          <p className="mb-4">
            We provide a platform for browsing and investing in marketplace MVPs. We do not guarantee returns on investments or success of any ventures.
          </p>

          <h4 className="text-lg font-medium mb-2">Buy/Lease/Subscribe Products</h4>
          <p className="mb-4">
            We offer a marketplace for subscription-based products. We are not responsible for the quality, functionality, or support of third-party products.
          </p>
        </>
      )
    },
    {
      title: "Payments and Fees",
      icon: <DollarSign className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Payment terms are specified at the time of purchase or subscription</li>
            <li>All fees are non-refundable unless otherwise specified</li>
            <li>We reserve the right to change our pricing structure with appropriate notice</li>
          </ul>
        </>
      )
    },
    {
      title: "Termination",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">
            We reserve the right to suspend or terminate your access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
          </p>
        </>
      )
    },
    {
      title: "Disclaimer of Warranties",
      icon: <Shield className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-4">
            THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
        </>
      )
    },
    {
      title: "Limitation of Liability",
      icon: <Lock className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SECRETSTARTUPS.IO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
        </>
      )
    },
    {
      title: "Indemnification",
      icon: <Scale className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">
            You agree to indemnify and hold harmless SecretStartups.io and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising from your use of the Platform or violation of these Terms.
          </p>
        </>
      )
    },
    {
      title: "Governing Law",
      icon: <Scale className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
          </p>
        </>
      )
    },
    {
      title: "Changes to Terms",
      icon: <FileText className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform. Your continued use of the Platform after changes constitutes acceptance of the modified Terms.
          </p>
        </>
      )
    },
    {
      title: "Contact Information",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Email: legal@secretstartups.io</li>
            <li>Address: [Your Company Address]</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last Updated: April 17, 2025</p>
          </div>

          <div className="glass-card p-8">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-white/10 last:border-0">
                <button
                  className="w-full flex items-center justify-between py-4 px-2 focus:outline-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">{section.icon}</div>
                    <h3 className="text-xl font-medium">{section.title}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openSection === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === index && (
                  <div className="py-4 px-2 pl-10 text-gray-300">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;