import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import CaseStudyPurple from './components/CaseStudyPurple';
import CaseStudyGreen from './components/CaseStudyGreen';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'case-study-blue' | 'case-study-purple' | 'case-study-green'>('home');

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const navigateToCaseStudy = (projectIndex: number) => {
    if (projectIndex === 0) {
      setCurrentView('case-study-blue');
    } else if (projectIndex === 1) {
      setCurrentView('case-study-purple');
    } else if (projectIndex === 2) {
      setCurrentView('case-study-green');
    }
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'case-study-blue') {
    return <CaseStudy onBack={navigateToHome} />;
  }

  if (currentView === 'case-study-purple') {
    return <CaseStudyPurple onBack={navigateToHome} />;
  }

  if (currentView === 'case-study-green') {
    return <CaseStudyGreen onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects onProjectClick={navigateToCaseStudy} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
