import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CardSection from '../components/CardSection';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Add a ref to the container
  const containerRef = useRef(null);
  
  // Add custom scroll behavior with useEffect
  useEffect(() => {
    // Apply the CSS properties directly to ensure they work
    if (containerRef.current) {
      containerRef.current.style.scrollSnapType = "y mandatory";
      containerRef.current.style.overflowY = "scroll";
      containerRef.current.style.height = "100vh";
    }
    
    // Get all section elements
    const sections = document.querySelectorAll('.snap-section');
    sections.forEach(section => {
      section.style.scrollSnapAlign = "start";
      section.style.minHeight = "100vh";
    });
  }, []);

  // sections content
  const sections = [
    { 
      id: 'hero', 
      component: <Hero /> 
    },
    { 
      id: 'about', 
      title: 'About Me', 
      content: (
        <div className="space-y-4">
          <p>
            I'm a passionate software Engineer with expertise in building modern web applications.
            With over 5 years of experience, I specialize in creating responsive, user-friendly interfaces
            that deliver exceptional user experiences.
          </p>
          <p>
            My approach combines clean code practices with creative problem-solving to build
            scalable and maintainable solutions for complex challenges.
          </p>
          <div className="pt-4">
            <Link to="/contact" className="inline-flex items-center text-accent hover:text-accent-light transition-colors">
              <span>Let's work together</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      ),
      image: 'https://picsum.photos/510/300',
      imageAlt: 'Professional headshot'
    },
    { 
      id: 'tech-stack', 
      title: 'My Tech Stack', 
      content: (
        <div className="space-y-6">
          <p>
            I leverage modern technologies to build robust and scalable applications.
            Here are the key technologies I work with:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {[
              { name: 'React', icon: '⚛️', description: 'Frontend development' },
              { name: 'Node.js', icon: '🟢', description: 'Backend development' },
              { name: 'TypeScript', icon: '📘', description: 'Type-safe code' },
              { name: 'Tailwind CSS', icon: '🎨', description: 'Styling' },
              { name: 'MongoDB', icon: '🍃', description: 'Database' },
              { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure' }
            ].map(tech => (
              <div key={tech.name} className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <h3 className="font-bold text-lg">{tech.name}</h3>
                <p className="text-text-secondary text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    { 
      id: 'experience', 
      title: 'Experience', 
      content: (
        <div className="space-y-8">
          <p>
            My professional journey has equipped me with a diverse skill set and experience
            working across various domains and technologies.
          </p>
          <div className="space-y-6 pt-2">
            {[
              {
                period: '2021 - Present',
                role: 'Senior Frontend Developer',
                company: 'Tech Innovations Inc.',
                description: 'Leading development of responsive web applications using React and TypeScript.'
              },
              {
                period: '2018 - 2021',
                role: 'Full Stack Developer',
                company: 'Digital Solutions Ltd.',
                description: 'Built and maintained full-stack applications using MERN stack.'
              },
              {
                period: '2016 - 2018',
                role: 'Web Developer',
                company: 'Creative Agency',
                description: 'Developed client websites and implemented UI/UX designs.'
              },
              {
                period: '2016 - 2018',
                role: 'Frontend Developer',
                company: 'Creative Agency',
                description: 'Developed client websites and implemented UI/UX designs.'
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-primary-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <span className="text-sm text-text-secondary">{job.period}</span>
                <h3 className="font-bold text-lg mt-1">{job.role}</h3>
                <h4 className="text-accent">{job.company}</h4>
                <p className="mt-2 text-text-secondary">{job.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="pt-4">
            <Link to="/projects" className="inline-flex items-center text-accent hover:text-accent-light transition-colors">
              <span>View my projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      )
    },
    { 
      id: 'skills', 
      title: 'Skills & Expertise', 
      content: (
        <div className="space-y-6">
          <p>
            My technical skills and expertise cover various aspects of software development,
            from frontend design to deployment and performance optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Development Skills</h3>
              {[
                { name: 'Frontend Development', level: 95 },
                { name: 'Backend APIs', level: 85 },
                { name: 'UI/UX Design', level: 80 },
                { name: 'Database Design', level: 75 }
              ].map(skill => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-sm text-text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background-alt rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Problem Solving',
                  'Communication',
                  'Team Collaboration',
                  'Project Management',
                  'Agile Methodology',
                  'Time Management',
                  'Adaptability',
                  'Attention to Detail'
                ].map(skill => (
                  <motion.div 
                    key={skill} 
                    className="bg-background-alt p-3 rounded-lg flex items-center"
                    whileHover={{ y: -3, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
                  >
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Start a Project?',
      content: (
        <div className="text-center">
          <p className="mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-background border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary-light hover:text-white transition-colors"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Main container with vertical scroll */}
      <div>
        {sections.map((section) => (
          <motion.div 
            key={section.id}
            id={section.id}
            className="py- flex items-center snap-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {section.component || (
              <CardSection
                title={section.title}
                content={section.content}
                image={section.image}
                imageAlt={section.imageAlt}
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <nav className="flex flex-col items-center space-y-2">
          {sections.map((section, index) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center"
            >
              <span className="hidden group-hover:block mr-2 text-xs text-text-secondary whitespace-nowrap">
                {section.title || (index === 0 ? 'Home' : section.id)}
              </span>
              <div 
                className={`w-2 h-2 rounded-full transition-all ${
                  index === 0 ? 'w-3 h-3 bg-primary' : 'bg-primary-light/50 group-hover:bg-primary'
                }`} 
              />
            </a>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default LandingPage;
