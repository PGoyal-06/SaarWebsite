import React from "react";
import {
  CheckIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  SupportIcon,
  GlobeAltIcon,
  UserIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CashIcon,
  ClipboardListIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

const services = [
  {
    name: "Bookkeeping",
    description:
      "Our bookkeeping service ensures your financial records are accurate and up-to-date. We handle everything from recording daily transactions to preparing accounts, allowing you to focus on what you do best - running your business.",
    icon: DocumentTextIcon,
  },
  {
    name: "Corporation Taxes",
    description:
      "Navigating the complexities of corporation taxes can be daunting. Our service takes care of everything, from filing income tax to understanding provincial and territorial corporate tax. We help you stay compliant while maximizing your business tax credits.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Business Consulting",
    description:
      "Our business consulting service is designed to drive your business forward. We provide expert advice, insights, and recommendations tailored to your business needs. Whether it’s optimizing performance or overcoming challenges, we’re here to help.",
    icon: BriefcaseIcon,
  },
  {
    name: "Personal Taxes",
    description:
      "Filing personal taxes can be stressful. Our service makes it easy. We handle everything from reporting income to claiming deductions, ensuring you get the most out of your tax return. Plus, we keep you updated on filing and payment due dates, and help you check the status of your tax refunds.",
    icon: UserIcon,
  },
  {
    name: "Developing Internal Controls",
    description:
      "Our service helps businesses establish robust internal controls to manage risks and ensure operational efficiency. We design preventative and detective controls, segregate duties, enforce clear recordkeeping, and implement security measures to protect your business assets.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tax Planning",
    description:
      "Our tax planning service helps individuals and businesses optimize their tax strategy. We work to reduce tax liability and maximize available tax deductions. Whether it’s family tax planning or business tax planning, we chart the most beneficial path for your specific situation.",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Preparing Business Plans",
    description:
      "We assist businesses in crafting comprehensive business plans that outline their objectives, strategies, and financial forecasts. Our service covers every aspect of your business plan, from market analysis and organizational structure to financial projections and funding requests.",
    icon: ClipboardListIcon,
  },
  {
    name: "Financial Planning",
    description:
      "Our financial planning service provides a personalized roadmap to your financial future. We take a big-picture view of your financial situation and develop strategies to help you reach your financial goals. This includes cash flow management, investment planning, retirement planning, estate planning, and risk management.",
    icon: ChartBarIcon,
  },
  {
    name: "Corporate Tax Filing",
    description:
      "We provide a corporate tax filing service that ensures compliance with federal and provincial regulations, including T2 returns and services for non-resident shareholders. Our budgeting service helps you create a detailed financial plan, balancing income, savings, and expenses to achieve your financial goals.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "CRA Audits",
    description:
      "Our CRA audit service is designed to help you navigate the complexities of Canada Revenue Agency audits. We closely examine your books and records to ensure they support the amounts filed in your tax returns. This ensures you pay the appropriate amount of taxes and receive any amounts to which you are entitled.",
    icon: ClipboardCheckIcon,
  },
  {
    name: "CashFlow Projections and Forecasts",
    description:
      "Our cash flow projection service provides a financial roadmap for your business. We estimate future cash inflows and outflows within a defined period, usually monthly, quarterly, or annually. This service helps you plan for potential shortfalls, identify surplus funds, and make informed financial decisions.",
    icon: CashIcon,
  },
];

function ServicesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
            Comprehensive Solutions for Your Business
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Explore our wide range of services designed to help your business
            grow and succeed.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <service.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
