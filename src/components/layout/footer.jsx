import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { platform: 'GitHub', url: '/', icon: <FaGithub size={20} /> },
    { platform: 'LinkedIn', url: '/', icon: <FaLinkedin size={20} /> },
    { platform: 'Twitter', url: '/', icon: <FaTwitter size={20} /> }
  ];

  return (
    <footer className="bg-background-alt py-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">SegmaDesigns</Link>
            <p className="text-text-secondary mt-1 text-sm">
              Software Engineer & Designer
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label={link.platform}
              >
                {/* Using React Icon component directly */}
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary/10 text-center text-text-secondary text-sm">
          <p>© {currentYear} SegmaDesigns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
