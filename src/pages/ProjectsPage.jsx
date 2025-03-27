import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  //  (replace with your actual projects data)
  useEffect(() => {
    //  data file
    const projectsData = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://picsum.photos/400/300',
        githubUrl: '/',
        liveUrl: '/'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'A task management application with drag and drop functionality and team collaboration.',
        tags: ['React', 'Firebase', 'PHP'],
        image: 'https://picsum.photos/200/300',
        githubUrl: '/',
        liveUrl: '/'
      },
      ,
      {
        id: 3,
        title: 'Task Management App',
        description: 'A task management application with drag and drop functionality and team collaboration.',
        tags: ['Flutter', 'Firebase', 'CSS'],
        image: 'https://picsum.photos/200/300',
        githubUrl: '/',
        liveUrl: '/'
      },
        // Add more projects...
    ];
    
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);
  
  // Filter projects by tech stack
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.tags.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);
  
  // Get all unique tags for filter options
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">My Projects</h1>
          <p className="text-text-secondary mb-8">Explore my recent work and personal projects</p>
        
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag 
                    ? 'bg-accent text-white' 
                    : 'bg-background-alt text-text-secondary hover:bg-primary-light'
                }`}
              >
                {tag === 'all' ? 'All Projects' : tag}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
