import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            This website is designed by Smriti Saroj Sinha with{' '}
            <Heart className="w-4 h-4 text-red-500 mx-1" />
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;