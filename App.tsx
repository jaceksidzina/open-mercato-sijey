
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SalesPipeline from './components/SalesPipeline';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-auto overflow-y-auto bg-white p-6 lg:p-8">
          <SalesPipeline />
        </main>
        <footer className="bg-white border-t border-gray-200 p-4 flex justify-end items-center text-sm text-gray-500">
          <a href="#" className="hover:text-gray-800">Terms</a>
          <a href="#" className="ml-4 hover:text-gray-800">Privacy</a>
          <a href="#" className="ml-4 hover:text-gray-800">Language</a>
          <div className="ml-4">
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>English</option>
              <option>Polski</option>
            </select>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
