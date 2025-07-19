import React from 'react';
import { APP_CONFIG } from '../constants';

interface HelloWorldProps {
  name?: string;
  className?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({
  name = 'HustleTech',
  className = ''
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 ${className}`}>
      <div className="card p-8 max-w-2xl mx-4 text-center animation-fadeIn">
        <h1 className="text-gradient mb-6">
          Welcome to {name} �
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Professional web development platform built with modern technologies.
          This is your scalable React foundation ready for production deployment on GitHub Pages.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="badge badge-primary">React 19</div>
          <div className="badge badge-secondary">TypeScript</div>
          <div className="badge badge-primary">Tailwind CSS</div>
          <div className="badge badge-secondary">Vite</div>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Ready for GitHub Pages</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Static Build Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Custom Domain Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>GitHub Actions CI/CD</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Performance Optimized</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="btn btn-primary w-full md:w-auto mx-2">
            View Documentation
          </button>
          <button className="btn btn-secondary w-full md:w-auto mx-2">
            GitHub Repository
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Version {APP_CONFIG.version} • Built with ❤️ by {APP_CONFIG.author}
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
