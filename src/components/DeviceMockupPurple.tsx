import { motion } from 'motion/react';
import desktopImage from 'figma:asset/8f1ecc66623e49f04a1d0bbc8b5fff25ce935c51.png';
import mobileImage from 'figma:asset/9a484320a22ad2ac2dc1c6915614e2898f92e398.png';
import tabletImage from 'figma:asset/fb516c9d0a01fcd94e88bf7298e6d2efa42e88a6.png';

export default function DeviceMockupPurple() {
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center">
      {/* Background gradient - Purple theme - More subtle and blurred */}
      <div className="absolute inset-0 overflow-hidden backdrop-blur-3xl">
        {/* Main purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-purple-100/10 to-transparent" />
        {/* Left fade to blend seamlessly - Extended and softer */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 via-white/40 via-white/15 to-transparent blur-sm" />
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/25 to-violet-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#9333EA 1px, transparent 1px), linear-gradient(to right, #9333EA 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      

      {/* Devices Container */}
      <div className="relative w-full h-full flex items-center justify-center px-12">
        {/* Desktop - Center and largest - Modern Glass */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-30"
          style={{ 
            width: '540px',
            marginTop: '-30px'
          }}
        >
          {/* Floating animation */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Desktop frame - Glass morphism */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/60" style={{
              boxShadow: '0 30px 60px -15px rgba(147, 51, 234, 0.5), 0 0 0 1px rgba(255,255,255,0.8) inset, 0 0 50px rgba(147, 51, 234, 0.2)'
            }}>
              {/* Screen */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-inner" style={{
                aspectRatio: '16/10',
                boxShadow: '0 0 30px rgba(147, 51, 234, 0.3) inset'
              }}>
                <img
                  src={desktopImage}
                  alt="Desktop view"
                  className="w-full h-full object-contain"
                />
                {/* Screen glare - multi-layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-200/20 to-transparent rounded-br-[100px] pointer-events-none" />
                
                {/* Elegant ambient glow pulse */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-300/5 pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Camera notch - glass style */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg border border-white/20" />
              
              {/* Side buttons */}
              <div className="absolute -right-1 top-1/4 w-1 h-12 bg-white/30 rounded-l-full" />
            </div>
            
            {/* Desktop base - Modern minimal */}
            <div className="relative flex flex-col items-center mt-2">
              <div className="h-8 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-lg rounded-b-2xl border border-white/40 border-t-0 shadow-lg" 
                   style={{ width: '240px', boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)' }} />
              <div className="h-2 bg-gradient-to-b from-gray-200/60 to-gray-300/60 backdrop-blur-md rounded-full mt-1 shadow-md" 
                   style={{ width: '320px' }} />
            </div>

            {/* Purple ethereal glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-400/20 to-pink-500/20 blur-3xl -z-10 scale-125 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Tablet - Left side - Glass morphism - Landscape orientation */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-16 z-20"
          style={{ 
            width: '380px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-8deg)'
          }}
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-8, -6, -8],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            {/* Tablet frame - Glass */}
            <div className="relative bg-white/35 backdrop-blur-xl rounded-[32px] p-5 shadow-2xl border border-white/50" style={{
              boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.45), 0 0 0 1px rgba(255,255,255,0.7) inset'
            }}>
              {/* Screen */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-[24px] overflow-hidden shadow-inner" style={{
                aspectRatio: '4/3',
                boxShadow: '0 0 25px rgba(147, 51, 234, 0.25) inset'
              }}>
                <img
                  src={tabletImage}
                  alt="Tablet view"
                  className="w-full h-full object-cover"
                />
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-purple-200/15 to-transparent rounded-bl-[80px] pointer-events-none" />
              </div>
              
              {/* Camera */}
              <div className="absolute top-1/2 left-3 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-md border border-white/20" />
              
              {/* Volume buttons - moved to top edge for landscape */}
              <div className="absolute -top-0.5 left-20 h-0.5 w-8 bg-white/30 rounded-b-full" />
              <div className="absolute -top-0.5 left-32 h-0.5 w-8 bg-white/30 rounded-b-full" />
            </div>

            {/* Purple glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 via-purple-400/15 to-transparent blur-2xl -z-10 scale-110 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Mobile - Right side - Glass morphism */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute right-20 z-20"
          style={{ 
            width: '190px',
            top: '50%',
            transform: 'translateY(-50%) rotate(8deg)'
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [8, 10, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            {/* Mobile frame - Ultra modern glass */}
            <div className="relative bg-white/30 backdrop-blur-xl rounded-[48px] p-3 shadow-2xl border border-white/60" style={{
              boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.5), 0 0 0 1px rgba(255,255,255,0.8) inset'
            }}>
              {/* Screen */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-[40px] overflow-hidden shadow-inner" style={{
                aspectRatio: '9/19.5',
                boxShadow: '0 0 25px rgba(147, 51, 234, 0.3) inset'
              }}>
                <img
                  src={mobileImage}
                  alt="Mobile view"
                  className="w-full h-full object-contain"
                />
                {/* Screen glare - premium */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100/20 to-transparent rounded-br-[60px] pointer-events-none" />
                
                {/* Status bar overlay */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Dynamic Island / Notch - Modern style */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-gray-900 to-black rounded-full shadow-lg border border-white/10" 
                   style={{ width: '80px', height: '28px' }}>
                {/* Camera lens */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rounded-full border border-gray-700" />
                {/* Sensor */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-1.5 bg-gray-800/50 rounded-full" />
              </div>
              
              {/* Side button */}
              <div className="absolute -right-0.5 top-1/3 w-0.5 h-16 bg-white/30 rounded-l-full" />
            </div>

            {/* Purple glow */}
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/30 via-purple-400/20 to-pink-400/15 blur-2xl -z-10 scale-110 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Floating particles for magic effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-[1px]"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Shimmer effect overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 5,
          }}
        />
      </div>
    </div>
  );
}
