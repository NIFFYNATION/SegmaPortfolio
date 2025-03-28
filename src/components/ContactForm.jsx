import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // EmailJS integration
      // Replace these with your actual EmailJS service, template, and user IDs
      const serviceId = 'service_31vddrf';
      const templateId = 'template_uy3qsba';
      const publicKey = 'kIruyMvzmRBlPyAm0';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Seriki Oluwagbenga', // The recipient's name
      };
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      
      // Hide success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('FAILED...', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-background-alt p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
      
      {submitSuccess && (
        <motion.div 
          className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Thanks for your message! I'll get back to you soon.
        </motion.div>
      )}
      
      {errors.submit && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
          {errors.submit}
        </div>
      )}
      
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-primary/30'
            } bg-background focus:outline-none focus:ring-2 focus:ring-accent/30`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-primary/30'
            } bg-background focus:outline-none focus:ring-2 focus:ring-accent/30`}
            placeholder="Your email"
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-primary/30'
            } bg-background focus:outline-none focus:ring-2 focus:ring-accent/30`}
            placeholder="Your message"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium ${
            isSubmitting 
              ? 'bg-accent-light text-white/80 cursor-not-allowed' 
              : 'bg-accent text-white hover:bg-accent-light'
          } transition-colors`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
