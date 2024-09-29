import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Anshu Puri',
    role: 'CEO of Workcation',
    imageUrl: '/anshu.png',
    review:
      'We do our corporate & personal returns from SAAR Professional Consultant. Really like the way they deal with the clients. True professionals, save you a lot of money with their great investing tips and provide knowledge about how to manage your funds. Rohit has been extremely helpful and is always available whenever we need help with any financial matter.',
  },
  {
    name: 'Manoj Kumar',
    role: 'CEO of Workcation',
    imageUrl: '/manoj.png',
    review:
      'Outstanding Service. Overall experience was pleasant. They are professional, attentive and friendly. They talked me through the process and answered any questions I had. They always promptly responded to my emails and answer any queries that I had. Highly recommend them.',
  },
  {
    name: 'Eklavya Malik',
    role: 'CEO of Workcation',
    imageUrl: '/Eklavya.png',
    review:
      'Rohit is very professional in his dealing. He overdelivers and never misses any committed timeline which speaks volumes about his working style. His understanding of business financing, accounting etc is top notch and he is able to find solutions in the most tax efficient and compliant manner.  It has been a pleasure working with him.',
  },
  {
    name: 'Vidushi Tickoo',
    role: 'CEO of Workcation',
    imageUrl: '/Vidushi.png',
    review:
      'Rohit is very professional, considerate and trustworthy, he always has his clients best interest in mind. I blindly follow his honest opinions and genuine concern. With him, no question is a bad question, feel free to talk to him and he will explain the pros and cons to you with patience.',
  },
  {
    name: 'Angel',
    role: 'CEO of Workcation',
    imageUrl: '/Angel.png',
    review:
      'Best CPA in the entire GTA!! super speedy service. Help provided at every step. You get the service as you like, on-line or in- person. I have been to various other tax filing companies and agents , by far THE MOST EFFICIENT WORK has been only found with them. I highly recommed everyone to come and get the same experience.! Thank you Mr. Rohit for world class experience and help!',
  },
  {
    name: 'Grace Demill',
    role: 'CEO of Workcation',
    imageUrl: '/Grace.png',
    review:
      'This was my first time filing my own return as a new graduate, and Rohit was extremely helpful and responsive in answering my questions. He went above and beyond to ensure that I deferred my Education payment relief correctly, and educated me on the additional areas where I could communicate my costs of working from home. Thank you Rohit!',
  },
  // Add more testimonials as needed
];

function Testimonial() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonies" className="bg-gray-50 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.75 + index * 0.2 }}
              >
                <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow">{testimonial.review}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonial;
