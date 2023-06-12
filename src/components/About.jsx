import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
       My name is Muhammad Mujtaba, and I am a passionate and dedicated developer with expertise in React Native and React JS.
       Throughout my professional journey, I have had the opportunity to work on a wide range of projects, where I have honed my skills and gained valuable experience in mobile and web development. I am particularly proud of my accomplishments in building robust and user-friendly applications using React Native and React JS.
       <br className="sm:block hidden" /> What sets me apart is my commitment to delivering high-quality code and creating seamless user experiences. I am meticulous in my approach to development, paying attention to details and ensuring that each line of code I write is optimized for performance and maintainability.
       I take great pride in staying updated with the latest trends and best practices in the industry, constantly expanding my knowledge and skillset. This allows me to leverage cutting-edge technologies and deliver innovative solutions that meet the needs of modern users.
       I am also a strong believer in collaboration and teamwork. <br className="sm:block hidden" />I thrive in dynamic environments where I can work alongside talented individuals, exchange ideas, and collectively solve complex challenges. I believe that through effective communication and collaboration, we can achieve remarkable results.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
