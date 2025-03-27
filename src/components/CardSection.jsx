import { motion } from 'framer-motion';

const CardSection = ({ title, content, image, imageAlt }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 w-full">
      <motion.div 
        className="max-w-6xl w-full mx-auto bg-background-alt p-8 md:p-12 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={`flex flex-col ${image ? 'md:flex-row' : ''} gap-8`}>
          {image && (
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image} 
                alt={imageAlt || title} 
                className="w-full h-auto rounded-lg object-cover shadow-sm"
              />
            </motion.div>
          )}
          
          <div className={image ? 'md:w-3/5' : 'w-full'}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: image ? 0.2 : 0.1 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: image ? 0.3 : 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-text-secondary"
            >
              {typeof content === 'string' ? (
                <p className="text-lg">{content}</p>
              ) : (
                content
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;
