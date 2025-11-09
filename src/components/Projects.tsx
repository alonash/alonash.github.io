import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import mobideoImage from 'figma:asset/bfb8eadf5f58b3cffb38d58176504cd3d389b653.png';
import mobideoTabletImage from 'figma:asset/21207842f4a641540763f521286291e5e9def4b8.png';
import { Layers } from 'lucide-react';

const projects = [
  {
    title: 'Work Management Platform',
    subtitle: '#Design #UX #UI #Design System #CSS #HTML',
    description: 'Enterprise platform for Intel teams to manage work packages, track turbine refinements, and monitor project schedules across multiple sites.',
    image: mobideoImage,
    backgroundColor: 'linear-gradient(90deg, #FFF -2.89%, #DCE8FA 100%)',
  },
  {
    title: 'Field Task Management',
    subtitle: '#Mobile #Real-Time #Field Operations #UI #UX #Design',
    description: 'Mobile task management system for field workers with real-time reporting, activity tracking, and seamless communication between field teams and management.',
    image: mobideoTabletImage,
    backgroundColor: 'linear-gradient(90deg, #FFF -2.89%, #EBDCFA 100%)',
  },
  {
    title: 'UI Elements and Inspiration',
    subtitle: '#Components #Interface #Design System #CSS #HTML',
    description: 'Modular UI components library with smooth animations and intuitive interactions for modern web applications.',
    image: '',
    backgroundColor: 'linear-gradient(90deg, #FFF -2.89%, #DCFAE6 100%)',
  },
];

interface ProjectsProps {
  onProjectClick?: (projectIndex: number) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="works" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block mb-4"
          >
            <Layers className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exploring innovative solutions that blend user needs with business goals
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} onProjectClick={() => onProjectClick?.(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
