import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Import icons from React Icons library
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
// For more modern looking icons, you can also use:
// import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
// Or for brand icons with a different style:
// import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-32 h-full flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content - Text and CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Seriki Oluwagbenga</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl text-text-secondary mt-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Software Engineer & Designer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-text-secondary max-w-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            I build exceptional digital experiences with clean, maintainable code
            and eye-catching designs that help businesses grow.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
            >
              Contact Me
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <span className="text-text-secondary">Connect with me:</span>
            <div className="flex gap-4">
              {/* Social links with React Icons */}
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full border border-primary-light/30 hover:border-primary"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full border border-primary-light/30 hover:border-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full border border-primary-light/30 hover:border-primary"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full border border-primary-light/30 hover:border-primary"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right content - Profile image or illustration */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Background circles for visual effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary-light/10 z-0"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-primary-light/20 z-10"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            {/* Profile image container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary overflow-hidden border-4 border-white shadow-lg z-20">
              {/* Replace with your photo */}
              <img 
                src="https://picsum.photos/400/300" 
                alt="Seriki Oluwagbenga - Software Engineer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%232563eb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='40' text-anchor='middle' alignment-baseline='middle' fill='white'%3EYN%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            {/* Floating decoration elements */}
            <motion.div 
              className="absolute top-0 right-0 w-12 h-12 bg-primary rounded-lg z-30"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-5 left-0 w-8 h-8 bg-primary-light rounded-full z-30"
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
