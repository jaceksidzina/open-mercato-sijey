
import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center text-sm text-gray-500">
        <Icon name="dashboard" className="w-5 h-5 text-gray-400" />
        <span className="mx-2">/</span>
        <span>Deals</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Sales Pipeline</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Icon name="search" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-white border border-gray-300 rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">⌘K</kbd>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Organization</span>
          <select className="border border-gray-300 rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>sijey</option>
          </select>
        </div>
        <div className="flex items-center">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Manage</a>
            <Icon name="user" className="w-8 h-8 text-gray-400 ml-3 bg-gray-200 rounded-full p-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
