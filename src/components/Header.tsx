import { motion } from 'motion/react';
import { Smartphone, Mail } from 'lucide-react';
import Frame171 from '../imports/Frame171';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-10 flex items-center justify-center">
            <Frame171 />
          </div>
          <span className="text-gray-900 flex items-center">Alon Ashkenazy</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </motion.a>
          <motion.a
            href="#works"
            whileHover={{ y: -2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Works
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </motion.a>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Smartphone className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
