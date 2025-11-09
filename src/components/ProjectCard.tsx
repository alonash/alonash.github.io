import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import HamburgerMenuOpen from '../imports/HamburgerMenu-21-1107';
import HamburgerMenuClosed from '../imports/HamburgerMenu-21-1284';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundColor: string;
  index: number;
  onProjectClick?: () => void;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  index,
  onProjectClick,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Start with menu OPEN

  // Toggle menu every 4 seconds for project 3
  useEffect(() => {
    if (index === 2 && isInView) {
      const interval = setInterval(() => {
        setIsMenuOpen((prev) => !prev);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden shadow-xl"
        style={{ background: backgroundColor, borderRadius: '50px' }}
      >
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center space-y-6 p-12 pr-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            >
              <p className="text-sm text-gray-500 mb-4" style={{ letterSpacing: '0.02em' }}>{subtitle}</p>
              <h3 className="text-4xl md:text-5xl mb-6" style={{ 
                lineHeight: '1.2', 
                fontFamily: "'Lateef', serif", 
                fontWeight: 700, 
                color: index === 2 ? '#10B981' : index === 1 ? '#9333EA' : '#3B6FF0'
              }}>{title}</h3>
              <p className="text-gray-700 mb-6">{description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            >
              <motion.button
                onClick={onProjectClick}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 text-gray-600 transition-colors cursor-pointer"
              >
                <motion.span 
                  variants={{
                    hover: { x: -4 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="font-medium"
                >
                  See Project
                </motion.span>
                <motion.div
                  variants={{
                    hover: { scale: 1.1, x: 4 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full shadow-md"
                  style={{ backgroundColor: index === 2 ? '#10B981' : index === 1 ? '#9333EA' : '#3B6FF0' }}
                >
                  <motion.div
                    variants={{
                      hover: { x: 2 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 30, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            className="relative flex items-center justify-end"
          >
            <motion.div
              whileHover={{ 
                scale: index === 1 ? 1.03 : 1.05, 
                rotate: index === 1 ? 0 : 2,
                y: index === 1 ? -5 : 0 
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-full flex items-center"
            >
              {index === 2 ? (
                // UI Elements - Hamburger Menu Animation
                <div className="relative w-full h-[600px] flex items-center justify-center px-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Menu container with width animation - no background, original size */}
                    <motion.div
                      animate={{
                        width: isMenuOpen ? '310px' : '82px',
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="relative overflow-hidden flex items-start"
                      style={{ 
                        height: '600px',
                      }}
                    >
                      {/* Open Menu - Slides and fades */}
                      <motion.div
                        animate={{
                          opacity: isMenuOpen ? 1 : 0,
                          x: isMenuOpen ? 0 : -30,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="absolute top-0 left-0"
                      >
                        <HamburgerMenuOpen />
                      </motion.div>

                      {/* Closed Menu - Slides and fades */}
                      <motion.div
                        animate={{
                          opacity: isMenuOpen ? 0 : 1,
                          x: isMenuOpen ? 30 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="absolute top-0 left-0"
                      >
                        <HamburgerMenuClosed />
                      </motion.div>
                    </motion.div>

                    {/* Green glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-green-500/20 blur-3xl -z-10 rounded-3xl"
                      animate={{
                        opacity: isMenuOpen ? 0.7 : 0.4,
                        scale: isMenuOpen ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Additional accent glow */}
                    <motion.div 
                      className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-400/25 blur-3xl rounded-full -z-10"
                      animate={{
                        opacity: isMenuOpen ? 0.5 : 0.25,
                        scale: isMenuOpen ? 1.3 : 0.8,
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              ) : index === 1 ? (
                // Real workers using tablet in factory
                <div className="relative w-full h-[500px] overflow-hidden rounded-r-[50px]">
                  {/* Main photo - workers using tablet */}
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1574184383650-5f859b6793c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZXJzJTIwdGFibGV0JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjIwODU5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Workers using tablet in factory"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Purple brand gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-600/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />
                  
                  {/* Top badge - Active in field */}
                  <motion.div 
                    className="absolute top-6 left-6 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 shadow-2xl">
                      <motion.div 
                        className="w-2.5 h-2.5 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="text-white text-sm">Active In Field</span>
                    </div>
                  </motion.div>
                  
                  {/* Bottom right - App preview card */}
                  <motion.div 
                    className="absolute bottom-6 right-6 z-20"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl"
                         style={{ width: '280px' }}>
                      {/* App screenshot */}
                      <div className="relative rounded-lg overflow-hidden bg-black/30"
                           style={{ boxShadow: '0 0 40px rgba(147, 51, 234, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset' }}>
                        <ImageWithFallback
                          src={image}
                          alt={title}
                          className="w-full h-auto object-cover"
                          style={{ filter: 'brightness(1.1) contrast(1.08) saturate(1.12)' }}
                        />
                        
                        {/* Screen glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay pointer-events-none" />
                        
                        {/* Live indicator on screenshot */}
                        <motion.div 
                          className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full shadow-lg"
                          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      
                      {/* Label under screenshot */}
                      <div className="mt-2.5 px-1">
                        <p className="text-white/90 text-xs">Real-time Interface</p>
                      </div>
                    </div>
                    
                    {/* Purple glow from card */}
                    <div className="absolute inset-0 bg-purple-500/40 blur-2xl scale-110 -z-10 rounded-2xl" />
                  </motion.div>
                  
                  {/* Ambient purple light effect */}
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-600/20 blur-3xl pointer-events-none" />
                </div>
              ) : (
                <ImageWithFallback
                  src={image}
                  alt={title}
                  className="h-full w-auto object-cover rounded-tl-[30px] rounded-bl-[30px]"
                  style={{ maxHeight: '500px' }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
