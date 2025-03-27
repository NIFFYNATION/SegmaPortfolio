import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen bg-dark-background-alt text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
