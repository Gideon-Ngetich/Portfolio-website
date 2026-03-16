import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogs } from '../data/blogs';

const BlogCard = () => {
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
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <Link
            to={`/blogs/${blog.slug}`}
            className="group block transform transition-all duration-300 hover:scale-[1.02]"
          >
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
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-purple-600/30 rounded-2xl blur-xl"></div>
              </div>

              <div className="relative h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xl font-bold tracking-tight text-white dark:text-white mb-3">
                      {blog.title}
                    </h5>
                    <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
                      {truncateText(blog.description, 18)}{' '}
                      <span className="text-blue-400 font-medium hover:underline">
                        See more
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium">
                    Read{' '}
                    <IoArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCard;