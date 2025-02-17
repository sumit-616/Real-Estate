import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl font-bold mb-2"
      >
        About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-500 max-w-80 text-center mb-8"
      >
        Passionate about Properties, Dedicated to Your Vision
      </motion.p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <motion.img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />

        <motion.div
          className="flex flex-col items-center md:items-start mt-10 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="my-10 max-w-lg"
          >
            Find your dream home with ease! Explore properties, filter by location, price, and amenities, and connect with sellers instantly. Enjoy a seamless experience with interactive maps, mortgage calculators, and a sleek, responsive design tailored for effortless property discovery.
          </motion.p>

          <button className="cursor-pointer bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
