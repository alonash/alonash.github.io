import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Search, Lightbulb, Palette, RefreshCw, Users, Target, Zap, Layout, CheckCircle2, ArrowDown, Layers, FileText, Settings, X, TrendingUp, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mobideoImage from 'figma:asset/a148c8485ee54d3cf02d990d1b403661209ec13d.png';
import taskResultsImage from 'figma:asset/c3b8589c6f4bbde70c02934dfcab6f7fcaf3c471.png';
import taskImage1 from 'figma:asset/fb516c9d0a01fcd94e88bf7298e6d2efa42e88a6.png';
import taskImage2 from 'figma:asset/24d2aa04639f054b69259972b43b53559d8acebd.png';
import taskImage3 from 'figma:asset/858e5c28ffd5dc83492ec919bb90e66e1f5033e8.png';
import Frame169 from '../imports/Frame169';
import Vector1 from '../imports/Vector1';
import Frame170 from '../imports/Frame170-68-4760';
import Overview from '../imports/Overview';
import Frame346 from '../imports/Frame346';
import DeviceMockupPurple from './DeviceMockupPurple';

interface CaseStudyPurpleProps {
  onBack: () => void;
}

// Diamond Icon Component
const DiamondIcon = ({ icon: Icon }: { icon: any }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "50", "--transform-inner-height": "50" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#9333EA] relative rounded-[12px] size-[50px] flex items-center justify-center">
            <Icon className="w-5 h-5 text-white -rotate-[45deg]" />
            <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-[-5px] pointer-events-none rounded-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Task Results Interactive Component
const TaskResultsInteractive = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showTablePopup, setShowTablePopup] = React.useState(false);
  const [activeZoom, setActiveZoom] = React.useState<string | null>(null);

  React.useEffect(() => {
    const animationSequence = async () => {
      // Wait a bit before starting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Collapse → Expand transition
      setIsExpanded(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Zoom on nested items
      setActiveZoom('nested');
      await new Promise(resolve => setTimeout(resolve, 2000));
      setActiveZoom(null);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show table icon popup
      setShowTablePopup(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      setShowTablePopup(false);
      
      // Reset and loop
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsExpanded(false);
      await new Promise(resolve => setTimeout(resolve, 2000));
    };
    
    const interval = setInterval(animationSequence, 15000);
    animationSequence();
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl relative w-full">
      {/* Toggle Button */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-2 bg-[#9333EA] text-white rounded-lg hover:bg-[#7c2cca] transition-colors flex items-center gap-2"
        >
          {isExpanded ? 'Collapse Table' : 'Expand Table'}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Main Interface Container */}
      <div className="relative bg-[#f5f7fa] rounded-xl overflow-hidden" style={{ width: '100%', aspectRatio: '1920/1080' }}>
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={taskResultsImage}
                alt="Mobideo Task Results - Collapsed"
                className="w-full h-full object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                <Overview />
                
                {/* Nested Items Zoom Highlight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={activeZoom === 'nested' ? { 
                    opacity: 1,
                    boxShadow: '0 0 0 4px rgba(245, 158, 11, 0.6), 0 20px 80px rgba(245, 158, 11, 0.4)'
                  } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-[5%] top-[38%] right-[5%] h-[35%] bg-[#F59E0B]/10 rounded-xl border-3 border-[#F59E0B] pointer-events-none z-50"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Table Icon Button - Only visible in expanded state */}
        <AnimatePresence>
          {isExpanded && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTablePopup(true)}
              className="absolute top-[46%] right-[9%] w-10 h-10 bg-[#9333EA] rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow z-50"
            >
              <Layers className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showTablePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4"
            onClick={() => setShowTablePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl relative overflow-hidden"
              style={{ width: '1102px', height: '564px', maxWidth: '95vw', maxHeight: '85vh' }}
            >
              <button 
                onClick={() => setShowTablePopup(false)}
                className="absolute top-4 right-4 z-[110] w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="w-full h-full overflow-auto">
                <Frame346 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Indicators */}
      <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
        <motion.div
          animate={!isExpanded ? { scale: 1.05, backgroundColor: '#F3E8FF' } : { scale: 1, backgroundColor: '#F9FAFB' }}
          className="flex items-center gap-3 p-4 rounded-lg transition-colors"
        >
          <div className="w-3 h-3 rounded-full bg-[#9333EA]" />
          <span className="text-gray-700">Collapsed View - Quick Overview</span>
        </motion.div>
        
        <motion.div
          animate={isExpanded ? { scale: 1.05, backgroundColor: '#FEF3C7' } : { scale: 1, backgroundColor: '#F9FAFB' }}
          className="flex items-center gap-3 p-4 rounded-lg transition-colors"
        >
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="text-gray-700">Expanded View - Nested Task Details</span>
        </motion.div>
      </div>
    </div>
  );
};

export default function CaseStudyPurple({ onBack }: CaseStudyPurpleProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pl-32 pt-8">
        <motion.button
          onClick={() => {
            scrollToTop();
            setTimeout(onBack, 300);
          }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-gray-600 hover:text-[#9333EA] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Overlay from Right */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F3E8FF]/50 via-transparent to-transparent pointer-events-none z-0" />
        
        <div className="relative z-10 flex items-start">
          {/* Left - Text from Figma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 pl-32 pr-8 py-20"
          >
            <div className="relative h-[670px] w-[686px] bg-transparent">
              <Frame169 />
            </div>
          </motion.div>

          {/* Right - Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-start justify-end pr-12"
          >
            <div className="w-full" style={{ maxWidth: '900px' }}>
              <DeviceMockupPurple />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Storytelling */}
      <section className="py-20 px-8 bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#9333EA] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              Process
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              Working in close collaboration with the Product Manager, we started by mapping the complete flow of field operations — from task assignment to completion.
            </p>
          </motion.div>

          {/* Discovery Phase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 shadow-lg border border-purple-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#9333EA] flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    Discovery & Research
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Through user interviews with site operators and shadowing sessions in the field, we identified key friction points:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9333EA] mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Redundant forms and unclear task states</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9333EA] mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Filters and views that didn't adapt to user needs</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9333EA] mt-2 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Lack of visual feedback when actions were completed</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-100">
                <p className="text-gray-600 italic">
                  I translated these insights into wireframes and interactive prototypes, iterating weekly with the development team to validate feasibility and maintain design–tech alignment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Highlights - Story-based layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[#9333EA] text-center mb-12" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              Design Highlights
            </h2>

            {/* Highlight 1 - Task Management */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#9333EA]/10 flex items-center justify-center">
                      <span className="text-[#9333EA]" style={{ fontSize: '1.2rem', fontWeight: 700 }}>01</span>
                    </div>
                    <h3 className="text-gray-800" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Task Management Redesign
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We introduced a clean, modular layout for task lists.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Users can quickly filter by priority or status</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">A new "My View" feature allows each user to personalize their workspace and focus on relevant items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dynamic counters and icons give instant clarity about task progress and filter states</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={taskImage1}
                      alt="Task Management Interface"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10" />
                </motion.div>
              </div>
            </div>

            {/* Highlight 2 - Field Form */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative order-2 md:order-1"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={taskImage2}
                      alt="Field Form Optimization"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-1 md:order-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#9333EA]/10 flex items-center justify-center">
                      <span className="text-[#9333EA]" style={{ fontSize: '1.2rem', fontWeight: 700 }}>02</span>
                    </div>
                    <h3 className="text-gray-800" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Field Form Optimization
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The on-site form experience was rebuilt from the ground up:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Simplified inputs with conditional logic (showing only relevant fields per task type)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Integrated quick actions like Take Photo, Add Signature, and Upload File, reducing context switching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Consistent layout across mobile and desktop, ensuring clarity even in harsh field conditions</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Highlight 3 - System Consistency */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#9333EA]/10 flex items-center justify-center">
                      <span className="text-[#9333EA]" style={{ fontSize: '1.2rem', fontWeight: 700 }}>03</span>
                    </div>
                    <h3 className="text-gray-800" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      System Consistency
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A unified visual language was established:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Clear hierarchy and spacing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Distinct color system to indicate severity (Low / Medium / High / Critical)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Integration into a scalable Design System shared with developers</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={taskImage3}
                      alt="System Consistency"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#9333EA] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              Collaboration & Implementation
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This project required tight cross-functional collaboration.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-[#9333EA]" />
                  <h4 className="text-gray-800" style={{ fontWeight: 600 }}>Product Partnership</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I partnered daily with the Product Manager to prioritize features and balance complexity with usability.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Layout className="w-6 h-6 text-blue-600" />
                  <h4 className="text-gray-800" style={{ fontWeight: 600 }}>Engineering Sync</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Weekly design reviews with developers ensured each component was implemented accurately — from responsive behaviors to interaction microstates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#9333EA] mb-4" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              Impact
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              After launch, usability feedback from field teams was overwhelmingly positive:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#9333EA]/10 mb-4">
                <TrendingUp className="w-8 h-8 text-[#9333EA]" />
              </div>
              <div className="text-[#9333EA] mb-2" style={{ fontSize: '3rem', fontWeight: 700 }}>30%</div>
              <p className="text-gray-700">Faster task completion time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-green-600 mb-2" style={{ fontSize: '3rem', fontWeight: 700 }}>↓</div>
              <p className="text-gray-700">Significant reduction in input errors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-blue-600 mb-2" style={{ fontSize: '3rem', fontWeight: 700 }}>↑</div>
              <p className="text-gray-700">Higher adoption among new users due to simplified onboarding</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-10 text-center"
          >
            <Award className="w-12 h-12 text-[#9333EA] mx-auto mb-4" />
            <p className="text-gray-800 leading-relaxed text-lg">
              The project also became a <span className="text-[#9333EA]" style={{ fontWeight: 600 }}>blueprint for future Mobideo modules</span>, influencing how the company now approaches UX for industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-[#9333EA] mb-8" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
              Reflection
            </h2>
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Quote mark decoration */}
              <div className="absolute top-6 left-6 text-[#9333EA]/10" style={{ fontSize: '8rem', lineHeight: 0 }}>"</div>
              <p className="text-gray-800 leading-relaxed text-lg relative z-10 italic">
                This project reinforced my belief that great design happens through empathy, clarity, and collaboration.
                <br /><br />
                Working side-by-side with product and engineering allowed me to design not just <span className="text-[#9333EA]" style={{ fontWeight: 600 }}>for</span> users — but <span className="text-[#9333EA]" style={{ fontWeight: 600 }}>with</span> them — turning operational complexity into an intuitive, human experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project Button */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            onClick={() => {
              scrollToTop();
              setTimeout(onBack, 300);
            }}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-3 text-[#9333EA] transition-colors cursor-pointer group"
          >
            <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Let's see another project</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
