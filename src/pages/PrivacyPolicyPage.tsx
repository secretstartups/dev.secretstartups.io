import Layout from "@/components/Layout";
import { ChevronDown, Shield, Lock, FileText } from "lucide-react";
import { useState } from "react";

const PrivacyPolicyPage = () => {
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
            Welcome to SecretStartups.io. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </>
      )
    },
    {
      title: "Information We Collect",
      icon: <Shield className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <h4 className="text-lg font-medium mb-2">Information You Provide to Us</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Account information (name, email address, company details)</li>
            <li>Profile information (professional background, portfolio, skills)</li>
            <li>Payment and billing information</li>
            <li>Communications with us</li>
            <li>Information submitted for projects, investments, or marketplace listings</li>
          </ul>

          <h4 className="text-lg font-medium mb-2">Information Automatically Collected</h4>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Usage data (pages visited, time spent, actions taken)</li>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </>
      )
    },
    {
      title: "How We Use Your Information",
      icon: <FileText className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Match employers with candidates and projects with contractors</li>
            <li>Facilitate investment opportunities and marketplace transactions</li>
            <li>Send administrative information, updates, and marketing communications</li>
            <li>Monitor and analyze usage trends and preferences</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      title: "Analytics",
      icon: <FileText className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">
            We use analytics tools to better understand user journeys through our platform. This helps us improve user experience and optimize our services. The analytics data collected includes:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Traffic sources</li>
            <li>User behavior and navigation patterns</li>
            <li>Feature usage statistics</li>
            <li>Conversion metrics</li>
            <li>Session duration and frequency</li>
          </ul>
        </>
      )
    },
    {
      title: "Sharing Your Information",
      icon: <Lock className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners for joint offerings</li>
            <li>Other users as necessary to facilitate connections (limited to information you choose to make visible)</li>
            <li>Legal authorities when required by law</li>
            <li>Potential buyers in case of a business transaction (merger, acquisition, etc.)</li>
          </ul>
        </>
      )
    },
    {
      title: "Your Rights",
      icon: <Shield className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to processing</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </>
      )
    },
    {
      title: "Security",
      icon: <Lock className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data, but no system is completely secure. We encourage responsible security practices when using our platform.
          </p>
        </>
      )
    },
    {
      title: "International Transfers",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your country of residence, where privacy laws may be different.
          </p>
        </>
      )
    },
    {
      title: "Children's Privacy",
      icon: <Shield className="h-5 w-5 text-startup-purple" />,
      content: (
        <>
          <p className="mb-4">
            Our services are not directed to individuals under 18 years of age, and we do not knowingly collect personal information from children.
          </p>
        </>
      )
    },
    {
      title: "Changes to This Policy",
      icon: <FileText className="h-5 w-5 text-startup-blue" />,
      content: (
        <>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </>
      )
    },
    {
      title: "Contact Us",
      icon: <FileText className="h-5 w-5 text-startup-accent" />,
      content: (
        <>
          <p className="mb-4">If you have questions about this privacy policy, please contact us at:</p>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Email: privacy@secretstartups.io</li>
            <li>Address: [Your Company Address]</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <Layout>
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
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
    </Layout>
  );
};

export default PrivacyPolicyPage;