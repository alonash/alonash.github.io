import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Search, Lightbulb, Palette, RefreshCw, Layers, X, CheckCircle2, Users, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/1bc49adfec60b220797d1bf7ff0b8f052108b71b.png';
import finalSolutionImage from 'figma:asset/757f9ac189521e26dd145a3d238eef22344a3999.png';
import Frame169Blue from '../imports/Frame169Blue';
import Vector1 from '../imports/Vector1';
import Overview from '../imports/Overview';
import Frame346 from '../imports/Frame346';
import WireframeTaskView from './WireframeTaskView';
import ConfettiSvg from '../imports/Frame170-126-51';

interface CaseStudyProps {
  onBack: () => void;
}

// Diamond Icon Component
const DiamondIcon = ({ icon: Icon }: { icon: any }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "50", "--transform-inner-height": "50" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#3b6ff0] relative rounded-[12px] size-[50px] flex items-center justify-center">
            <Icon className="w-5 h-5 text-white -rotate-[45deg]" />
            <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-[-5px] pointer-events-none rounded-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Confetti Component - Using the Figma SVG with correct proportions
const ConfettiPiece = ({ delay }: { delay: number }) => {
  const randomStart = Math.random() * 120 - 20; // -20% to 100%
  const randomDrift = (Math.random() - 0.5) * 30; // -15 to 15
  const randomSize = 0.08 + Math.random() * 0.08; // 0.08x to 0.16x (very small for slow fall)
  const randomRotation = Math.random() * 360;
  const randomDuration = 30 + Math.random() * 20; // 30-50 seconds - very slow

  return (
    <motion.div
      initial={{ 
        y: -150, 
        x: `${randomStart}%`,
        opacity: 0,
        rotate: randomRotation,
        scale: randomSize
      }}
      animate={{ 
        y: '110vh',
        x: `${randomStart + randomDrift}%`,
        opacity: [0, 0.7, 0.7, 0.5, 0],
        rotate: randomRotation + (Math.random() > 0.5 ? 720 : -720) // more rotation
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 10 + Math.random() * 8, // 10-18 seconds between repeats
        ease: "linear" // constant speed for realistic fall
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1,
        width: '300px', // Fixed width for correct proportions (SVG is 1502x418)
        height: 'auto' // Auto height maintains aspect ratio
      }}
    >
      <div style={{ width: '100%', height: 'auto' }}>
        <ConfettiSvg />
      </div>
    </motion.div>
  );
};

// Design Priority Feature Card
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  details,
  color,
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  details: string[];
  color: string;
  delay: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
          className="mb-6"
        >
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 mt-4">
                <ul className="space-y-2">
                  {details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Indicator */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="absolute bottom-4 right-4 text-gray-400"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Task Results Interactive Component
const TaskResultsInteractive = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentCycle, setCurrentCycle] = useState(0);

  // Auto-cycle animation
  useEffect(() => {
    const cycleDuration = 15000; // 15 seconds per cycle
    
    const cycle = setInterval(() => {
      setCurrentCycle(prev => prev + 1);
    }, cycleDuration);

    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const step = currentCycle % 4;
    
    if (step === 0) {
      // Step 1: Collapse
      setIsExpanded(false);
      setShowPopup(false);
    } else if (step === 1) {
      // Step 2: Expand after 1.5s
      setTimeout(() => setIsExpanded(true), 1500);
    } else if (step === 2) {
      // Step 3: Show popup after 2s
      setTimeout(() => setShowPopup(true), 2000);
    } else if (step === 3) {
      // Step 4: Hide popup after 3s and prepare for next cycle
      setTimeout(() => setShowPopup(false), 3000);
    }
  }, [currentCycle]);

  return (
    <div className="relative w-full">
      {/* State Indicators */}
      <div className="flex gap-2 justify-center mb-6">
        <motion.div
          animate={{
            backgroundColor: !isExpanded ? '#3B6FF0' : '#E5E7EB',
            scale: !isExpanded ? 1.05 : 1,
            color: !isExpanded ? '#FFFFFF' : '#6B7280'
          }}
          className="px-4 py-2 rounded-full text-sm transition-colors"
        >
          {!isExpanded ? '📊 Overview' : 'Overview'}
        </motion.div>
        <motion.div
          animate={{
            backgroundColor: isExpanded && !showPopup ? '#3B6FF0' : '#E5E7EB',
            scale: isExpanded && !showPopup ? 1.05 : 1,
            color: isExpanded && !showPopup ? '#FFFFFF' : '#6B7280'
          }}
          className="px-4 py-2 rounded-full text-sm transition-colors"
        >
          {isExpanded && !showPopup ? '🔍 Detailed View' : 'Detailed View'}
        </motion.div>
        <motion.div
          animate={{
            backgroundColor: showPopup ? '#3B6FF0' : '#E5E7EB',
            scale: showPopup ? 1.05 : 1,
            color: showPopup ? '#FFFFFF' : '#6B7280'
          }}
          className="px-4 py-2 rounded-full text-sm transition-colors"
        >
          {showPopup ? '📋 Table Popup' : 'Table Popup'}
        </motion.div>
      </div>

      {/* Interactive Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-2 bg-[#3B6FF0] text-white rounded-lg hover:bg-[#2d5acc] transition-colors"
        >
          {isExpanded ? 'Collapse Table' : 'Expand Table'}
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
        <AnimatePresence mode="wait">
          {isExpanded && (
            // Expanded State - Overview Component
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Zoom highlight on nested tasks area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 60%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)',
                }}
              />
              
              <div className="w-full h-full">
                <Overview />
              </div>

              {/* Floating Table Button - Only in Expanded State */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                onClick={() => setShowPopup(true)}
                className="absolute top-4 right-4 bg-[#3B6FF0] text-white p-3 rounded-full shadow-lg hover:bg-[#2d5acc] transition-colors z-10 group"
                title="View Extended Table"
              >
                <Layers className="w-6 h-6" />
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Extended Details
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Popup Modal with Frame346 */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            >
              {/* Popup Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl relative overflow-hidden"
                style={{ 
                  width: '1102px', 
                  height: '564px',
                  maxWidth: '95vw',
                  maxHeight: '85vh'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Frame346 Component */}
                <div className="w-full h-full overflow-auto">
                  <Frame346 />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CaseStudy({ onBack }: CaseStudyProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Background - 8 instances with staggered delays */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ConfettiPiece key={i} delay={i * 3.5 + Math.random() * 2} />
      ))}

      {/* Back Button */}
      <div className="pl-32 pt-8 relative z-10">
        <motion.button
          onClick={() => {
            scrollToTop();
            setTimeout(onBack, 300);
          }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-gray-600 hover:text-[#3B6FF0] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Overlay from Right */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F5F8FC]/50 via-transparent to-transparent pointer-events-none z-0" />
        
        <div className="relative z-10 flex items-start">
          {/* Left - Text from Figma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 pl-32 pr-8 py-20"
          >
            <div className="relative h-[670px] w-[686px] bg-transparent">
              <Frame169Blue />
            </div>
          </motion.div>

          {/* Right - Image Only - Full Bleed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-start justify-end"
          >
            <ImageWithFallback
              src={heroImage}
              alt="Mobideo Dashboard Interface"
              className="w-[70%] h-auto object-contain object-right-top"
            />
          </motion.div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="px-8 py-16 bg-gradient-to-b from-white to-blue-50/30 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-[#3B6FF0] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
            The Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            A user-centered approach guided every step of the design journey, from initial research to final implementation
          </p>

          {/* Icons with connecting line */}
          <div className="relative mt-12 mb-16">
            {/* Connecting Line SVG - positioned behind icons */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-[-34px] w-[80%] h-[145px] pointer-events-none"
              style={{ maxWidth: '920px' }}
            >
              <div className="w-full h-full">
                <Vector1 />
              </div>
            </motion.div>

            {/* Icons Grid */}
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  number: 1,
                  icon: Search,
                  title: 'Research & Discovery',
                  description: 'Conducted user interviews and competitive analysis to understand pain points and opportunities in the market.',
                },
                {
                  number: 2,
                  icon: Lightbulb,
                  title: 'Define & Ideate',
                  description: 'Created user personas and mapped out user journeys to identify key features and functionalities.',
                },
                {
                  number: 3,
                  icon: Palette,
                  title: 'Design & Prototype',
                  description: 'Developed wireframes and high-fidelity prototypes, iterating based on user feedback and testing.',
                },
                {
                  number: 4,
                  icon: RefreshCw,
                  title: 'Test & Iterate',
                  description: 'Performed usability testing with real users and refined the design to ensure optimal user experience.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Diamond Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="mb-6 relative z-20"
                  >
                    <DiamondIcon icon={step.icon} />
                  </motion.div>

                  <h3 className="text-gray-800 mb-3" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Solution - Work Design Priorities - Detailed & Interactive */}
      <section className="px-8 py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-400 rounded-full opacity-60 blur-2xl" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-60 blur-2xl" />
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-yellow-400 rounded-full opacity-60 blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-60 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1600px] mx-auto relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#3B6FF0] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              The Solution | Work Design Priorities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '1.1rem' }}>
              A comprehensive design system focusing on clarity, efficiency, and seamless collaboration. 
              Each priority was carefully crafted to address specific user needs and business goals.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={Target}
              title="Intuitive Task Management"
              description="Streamlined workflows that reduce cognitive load and increase productivity"
              details={[
                "Drag-and-drop interface for effortless task organization",
                "Smart categorization with AI-powered suggestions",
                "Visual hierarchy using color coding and priority indicators",
                "Quick actions menu for common operations",
                "Bulk operations for managing multiple tasks simultaneously"
              ]}
              color="#3B6FF0"
              delay={0}
            />

            <FeatureCard
              icon={Users}
              title="Real-Time Collaboration"
              description="Connect teams seamlessly with instant updates and shared context"
              details={[
                "Live cursor tracking showing who's working where",
                "Instant notifications for task assignments and updates",
                "Comment threads with @mentions and file attachments",
                "Presence indicators showing team availability",
                "Collaborative editing with conflict resolution"
              ]}
              color="#10B981"
              delay={0.1}
            />

            <FeatureCard
              icon={Zap}
              title="Performance & Speed"
              description="Optimized architecture delivering lightning-fast response times"
              details={[
                "Sub-second page load times with lazy loading",
                "Optimistic UI updates for instant feedback",
                "Efficient data caching and state management",
                "Progressive web app capabilities for offline work",
                "Minimal bandwidth usage for mobile users"
              ]}
              color="#F59E0B"
              delay={0.2}
            />

            <FeatureCard
              icon={Palette}
              title="Accessible Design System"
              description="Inclusive interface meeting WCAG 2.1 AA standards"
              details={[
                "High contrast ratios for improved readability",
                "Keyboard navigation for all interactive elements",
                "Screen reader optimization with ARIA labels",
                "Customizable text sizes and spacing",
                "Focus indicators and skip navigation links"
              ]}
              color="#8B5CF6"
              delay={0.3}
            />
          </div>

          {/* Visual Showcase - Wireframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Wireframe & Information Architecture
              </h3>
              <p className="text-gray-600">
                Mapping out the structure and user flow before diving into visual design
              </p>
            </div>

            {/* Wireframe - Design System Sketch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <WireframeTaskView />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Solution - Task Results */}
      <section className="px-8 py-16 bg-gradient-to-b from-white to-gray-50 relative z-10 overflow-hidden">
        {/* Falling Confetti Container - Above entire section */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-30" style={{ height: '100%' }}>
          {/* Falling Confetti - 15 slow instances */}
          {[...Array(15)].map((_, i) => {
            const randomX = Math.random() * 100; // Random horizontal position 0-100%
            const randomDelay = Math.random() * 4; // Random delay 0-4s
            const randomDuration = 10 + Math.random() * 10; // 10-20 seconds - slow fall
            const randomRotation = Math.random() * 360;
            const randomSize = 0.12 + Math.random() * 0.15; // 0.12x to 0.27x size - varied sizes
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  y: -200, 
                  x: `${randomX}%`,
                  opacity: 0,
                  rotate: randomRotation,
                  scale: randomSize
                }}
                animate={{ 
                  y: 2000,
                  opacity: [0, 0.9, 0.9, 0.7, 0],
                  rotate: randomRotation + (Math.random() > 0.5 ? 720 : -720),
                  x: `${randomX + (Math.random() - 0.5) * 30}%` // more horizontal drift
                }}
                transition={{ 
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: i * 0.8 + randomDelay,
                  ease: "linear"
                }}
                className="absolute"
                style={{
                  width: '280px', // Adjusted width
                  height: 'auto',
                  left: 0,
                  top: 0
                }}
              >
                <div style={{ width: '100%', height: 'auto' }}>
                  <ConfettiSvg />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1600px] mx-auto text-center relative z-10"
        >
          <h2 className="text-[#3B6FF0] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
            The Solution | Task Results
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Detailed task management with real-time updates and comprehensive tracking capabilities
          </p>

          <TaskResultsInteractive />

          {/* Final Solution Image */}
          <div className="w-full relative mt-16">

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full rounded-2xl overflow-hidden shadow-2xl relative z-10"
            >
              <ImageWithFallback
                src={finalSolutionImage}
                alt="Final Solution - Task Management Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Thank You Section */}
      <section className="px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-[#3B6FF0] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
            Thank you for watching this journey
          </h2>
          <p className="text-gray-600 mb-12">from concept to solution</p>

          <motion.button
            onClick={() => {
              scrollToTop();
              setTimeout(onBack, 300);
            }}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-3 text-[#3B6FF0] transition-colors cursor-pointer group"
          >
            <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Let's see another project</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
