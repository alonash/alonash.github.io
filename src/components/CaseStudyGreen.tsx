import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Palette, Layout, Code, Lightbulb, ZoomIn, X, BarChart3, CheckSquare } from 'lucide-react';
import Frame182 from '../imports/Frame182';
import Frame79 from '../imports/Frame79-137-1793';
import Group61 from '../imports/Group61';
import dashboardImage from 'figma:asset/2c5dad8c532aa920d2679bfb4c20e7672ee5206f.png';
import iconsImage from 'figma:asset/5beeda7acb13046be2edae8330d4035bf4fceee2.png';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

interface CaseStudyGreenProps {
  onBack: () => void;
}

export default function CaseStudyGreen({ onBack }: CaseStudyGreenProps) {
  const [showColorsDialog, setShowColorsDialog] = useState(false);
  const [showIconsDialog, setShowIconsDialog] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Placeholder for UI elements - will be added later
  const uiElements = [
    {
      id: 1,
      title: 'Component 1',
      category: 'Buttons',
      image: null, // Will be filled with actual images
    },
    {
      id: 2,
      title: 'Component 2',
      category: 'Forms',
      image: null,
    },
    {
      id: 3,
      title: 'Component 3',
      category: 'Navigation',
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-8 py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981]" style={{ fontWeight: 600 }}>UI Elements & Inspiration</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#10B981] mb-6"
            style={{ fontFamily: "'Lateef', serif", fontSize: '4rem' }}
          >
            UI Elements and Inspiration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A curated collection of interface components, interactions, and design elements that showcase attention to detail, thoughtful user experience, and modern design principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Palette className="w-5 h-5 text-[#10B981]" />
              <span>Design System</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Layout className="w-5 h-5 text-[#10B981]" />
              <span>Components</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Code className="w-5 h-5 text-[#10B981]" />
              <span>Interactions</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Lightbulb className="w-5 h-5 text-[#10B981]" />
              <span>Innovation</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="px-8 py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-[#10B981] mb-6" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
            Design Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Each component is crafted with intention — balancing aesthetics with functionality, 
            creating interfaces that are not just beautiful, but intuitive and delightful to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Visual Harmony</h3>
              <p className="text-gray-600">
                Consistent design language with carefully chosen colors, typography, and spacing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>User-Centric</h3>
              <p className="text-gray-600">
                Interfaces designed with the user's journey and experience at the forefront
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Micro-interactions</h3>
              <p className="text-gray-600">
                Subtle animations and transitions that bring interfaces to life
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Design System Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-[#10B981]/10 px-6 py-3 rounded-full mb-6">
              <Palette className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981]" style={{ fontSize: '0.95rem', fontWeight: 600 }}>Design System</span>
            </div>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
              Unified Design Language
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A comprehensive design system that ensures consistency across all touchpoints — from typography and icons to color palettes and interactive components
            </p>
          </motion.div>

          {/* Unified Design System Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
          >
            {/* Typography Section - Full Width */}
            <div className="p-10 border-b border-gray-200 bg-gradient-to-br from-white to-gray-50/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Typography
                  </h3>
                  <p className="text-gray-500 text-sm">TT COMMONS — Primary Typeface</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <Frame182 />
              </div>
            </div>

            {/* Icons & Colors - Two Columns */}
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              {/* Icons */}
              <div className="p-10 bg-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center">
                    <Layout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                      Icon Library
                    </h3>
                    <p className="text-gray-500 text-sm">Custom crafted icons</p>
                  </div>
                </div>
                <div 
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 relative group cursor-pointer hover:border-[#10B981] transition-all duration-300 hover:shadow-lg"
                  onClick={() => setShowIconsDialog(true)}
                >
                  <div className="overflow-hidden rounded-xl bg-white" style={{ height: '280px' }}>
                    <motion.img 
                      src={iconsImage} 
                      alt="Custom Icon Library" 
                      className="w-full h-full object-cover object-top"
                      style={{ transform: 'scale(0.75)', transformOrigin: 'top center' }}
                      whileHover={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  {/* Zoom Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#10B981] text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                      <span style={{ fontWeight: 600 }}>View All Icons</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="p-10 bg-gradient-to-br from-white to-gray-50/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                      Color System
                    </h3>
                    <p className="text-gray-500 text-sm">Complete palette & guidelines</p>
                  </div>
                </div>
                <div 
                  className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden relative group cursor-pointer hover:border-[#10B981] transition-all duration-300 hover:shadow-lg" 
                  onClick={() => setShowColorsDialog(true)}
                >
                  {/* Container with fixed aspect ratio */}
                  <div className="relative" style={{ paddingBottom: '95%' }}>
                    <div className="absolute inset-0 overflow-hidden p-4">
                      <div 
                        style={{ 
                          width: '2248px', 
                          height: '1842px', 
                          transform: 'scale(0.28)', 
                          transformOrigin: 'top left',
                          pointerEvents: 'none'
                        }}
                      >
                        <Frame79 />
                      </div>
                    </div>
                  </div>
                  
                  {/* Zoom Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#10B981] text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                      <span style={{ fontWeight: 600 }}>View Full Palette</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Stats Footer */}
            <div className="px-10 py-8 bg-gradient-to-r from-[#10B981]/5 via-[#10B981]/10 to-[#10B981]/5 border-t border-gray-200">
              <div className="grid grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-[#10B981]" style={{ fontSize: '2rem', fontWeight: 700 }}>150+</div>
                  <p className="text-gray-600 text-sm mt-1">Custom Icons</p>
                </div>
                <div>
                  <div className="text-[#10B981]" style={{ fontSize: '2rem', fontWeight: 700 }}>24</div>
                  <p className="text-gray-600 text-sm mt-1">Color Variations</p>
                </div>
                <div>
                  <div className="text-[#10B981]" style={{ fontSize: '2rem', fontWeight: 700 }}>8</div>
                  <p className="text-gray-600 text-sm mt-1">Type Styles</p>
                </div>
                <div>
                  <div className="text-[#10B981]" style={{ fontSize: '2rem', fontWeight: 700 }}>100%</div>
                  <p className="text-gray-600 text-sm mt-1">Consistent</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full mb-6">
              <BarChart3 className="w-5 h-5" />
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Dashboard UI</span>
            </div>
            <h2 className="text-slate-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
              Analytics Dashboard
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Data visualization interfaces designed for clarity, efficiency, and actionable insights
            </p>
          </motion.div>

          {/* Main Dashboard Display */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden mb-16"
          >
            <div className="relative">
              <div className="w-full overflow-hidden bg-slate-50 p-8">
                <img 
                  src={dashboardImage} 
                  alt="Analytics Dashboard - Mobideo" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute top-8 right-8 bg-slate-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Live Dashboard</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UI Projects Section - Minimalist Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-slate-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
              UI Projects
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              A collection of interface designs showcasing different approaches to user experience and interaction design
            </p>
          </motion.div>

          {/* Minimalist Grid Layout */}
          <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {/* Dashboard Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12"
            >
              <div className="mb-8">
                <h3 className="text-slate-900 mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Analytics Dashboard
                </h3>
                <p className="text-slate-500">
                  Data visualization interface for Mobideo
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                <img 
                  src={dashboardImage} 
                  alt="Analytics Dashboard - Mobideo" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Task Planning Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-12"
            >
              <div className="mb-8">
                <h3 className="text-slate-900 mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Task Planning Interface
                </h3>
                <p className="text-slate-500">
                  Task management workflow system
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                <div className="w-full" style={{ maxHeight: '600px', overflow: 'auto' }}>
                  <Group61 />
                </div>
              </div>
            </motion.div>

            {/* Placeholder Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-12"
            >
              <div className="mb-8">
                <h3 className="text-slate-400 mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Coming Soon
                </h3>
                <p className="text-slate-400">
                  New project will be added here
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <p className="text-slate-300" style={{ fontSize: '1.25rem' }}>Project #3</p>
              </div>
            </motion.div>

            {/* Placeholder Project 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-12"
            >
              <div className="mb-8">
                <h3 className="text-slate-400 mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Coming Soon
                </h3>
                <p className="text-slate-400">
                  New project will be added here
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <p className="text-slate-300" style={{ fontSize: '1.25rem' }}>Project #4</p>
              </div>
            </motion.div>

            {/* Placeholder Project 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-12"
            >
              <div className="mb-8">
                <h3 className="text-slate-400 mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Coming Soon
                </h3>
                <p className="text-slate-400">
                  New project will be added here
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <p className="text-slate-300" style={{ fontSize: '1.25rem' }}>Project #5</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-8 py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-[#10B981] mb-6" style={{ fontFamily: "'Lateef', serif", fontSize: '2.5rem' }}>
            Crafted with Care
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            Every element is designed to enhance user experience, maintain visual consistency, 
            and create memorable interactions that users love.
          </p>

          <motion.button
            onClick={() => {
              scrollToTop();
              setTimeout(onBack, 300);
            }}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-3 text-[#10B981] transition-colors cursor-pointer group"
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

      {/* Icons Dialog */}
      <Dialog open={showIconsDialog} onOpenChange={setShowIconsDialog}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-4 border-b">
              <DialogTitle className="text-2xl text-[#10B981] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <span>Custom Icon Library</span>
              </DialogTitle>
            </DialogHeader>
            <div className="overflow-y-auto p-6 bg-gray-50" style={{ maxHeight: 'calc(90vh - 100px)' }}>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <img 
                  src={iconsImage} 
                  alt="Custom Icon Library - Full View" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Colors Dialog */}
      <Dialog open={showColorsDialog} onOpenChange={setShowColorsDialog}>
        <DialogContent className="max-w-[92vw] max-h-[92vh] p-0 overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-4 border-b">
              <DialogTitle className="text-2xl text-[#10B981] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span>Complete Color Palette</span>
              </DialogTitle>
            </DialogHeader>
            <div className="overflow-auto" style={{ maxHeight: 'calc(92vh - 100px)' }}>
              <div className="p-6 bg-gray-50">
                <div className="bg-white rounded-lg shadow-sm p-4 inline-block">
                  <Frame79 />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
