import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 text-accent">📧</div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-text-secondary hover:text-accent">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-accent">📱</div>
                <div>
                  <h3 className="font-medium">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-accent flex items-center gap-2 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedinIn size={18} />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-accent flex items-center gap-2 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub size={18} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://twitter.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-accent flex items-center gap-2 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <FaTwitter size={18} />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
