import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="mx-auto mt-6 h-1 overflow-hidden rounded-full bg-gray-200"
        >
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 200 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="h-full bg-primary-600"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-sm text-gray-600"
        >
          Loading amazing travel experiences...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;