import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogCard = () => {
  const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnehkZRNAkreoME3BnCO7mINj7pn2wA6tgiw&s';
  const description =
    'Cisco routers are powerful devices that form the backbone of many networks. Configuring a Cisco router for the first time might seem intimidating';

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    return words.length > maxWords
      ? words.slice(0, maxWords).join(' ') + '...'
      : text;
  };

  // Scroll-triggered animation using intersection observer
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-6">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <Link
          to="/blogs/blog"
          className="group block transform transition-all duration-300 hover:scale-[1.02]"
        >
          {/* Glassmorphic Card */}
          <div
            className={`
              relative overflow-hidden rounded-2xl border backdrop-blur-xl
              transition-all duration-500 ease-out h-[500px]
              bg-transparent dark:bg-transparent
              border-white/20 dark:border-white/10
              shadow-2xl shadow-black/10 dark:shadow-black/30
              hover:shadow-3xl hover:border-red-500/40
            `}
          >
            {/* Hover Glow Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-purple-600/30 rounded-2xl blur-xl"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={img}
                  alt="Cisco Router Configuration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h5 className="text-xl font-bold tracking-tight text-white dark:text-white mb-3">
                    Basic Configuration of a Cisco Router: A Beginner's Guide
                  </h5>
                  <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
                    {truncateText(description, 18)}{' '}
                    <span className="text-blue-400 font-medium hover:underline">
                      See more
                    </span>
                  </p>
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium">
                  Read <IoArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Duplicate 2 more cards for demo (remove in real use) */}
      {/* Or map over real blog data */}
    </div>
  );
};

export default BlogCard;