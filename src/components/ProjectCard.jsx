import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, tags, image, githubUrl, liveUrl } = project;
  
  return (
    <motion.div 
      className="bg-background-alt rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image || 'https://via.placeholder.com/400x300'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-primary-light text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0 flex space-x-3">
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-accent text-white text-center font-medium rounded-lg hover:bg-accent-light transition-colors"
        >
          Live Demo
        </a>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 border border-accent text-accent text-center font-medium rounded-lg hover:bg-accent hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
