import React from 'react';
import {
  DocumentTextIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive services for your business needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a range of services to help you with your business
            accounting and consulting needs.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <div className="flex-shrink-0">
                <DocumentTextIcon
                  className="h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Bookkeeping
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Our bookkeeping service ensures your financial records are
                  accurate and up-to-date. We handle everything from recording
                  daily transactions to preparing accounts, allowing you to
                  focus on what you do best - running your business.
                </p>
                <Link
                  to="/services"
                  className="mt-3 text-blue-600 hover:text-blue-500 flex items-center"
                >
                  <b>Learn more</b>
                  <ArrowRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex-shrink-0">
                <CurrencyDollarIcon
                  className="h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Corporation Taxes
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Navigating the complexities of corporation taxes can be
                  daunting. Our service takes care of everything, from filing
                  income tax to understanding provincial and territorial
                  corporate tax. We help you stay compliant while maximizing
                  your business tax credits.
                </p>
                <Link
                  to="/services"
                  className="mt-3 text-blue-600 hover:text-blue-500 flex items-center"
                >
                  <b>Learn more</b>
                  <ArrowRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.25 }}
            >
              <div className="flex-shrink-0">
                <BriefcaseIcon
                  className="h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Business Consulting
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Our business consulting service is designed to drive your
                  business forward. We provide expert advice, insights, and
                  recommendations tailored to your business needs. Whether it’s
                  optimizing performance or overcoming challenges, we’re here to
                  help.
                </p>
                <Link
                  to="/services"
                  className="mt-3 text-blue-600 hover:text-blue-500 flex items-center"
                >
                  <b>Learn more</b>
                  <ArrowRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
