import React from 'react';

interface HeaderProps {
  elementCount: number;
}

const Header: React.FC<HeaderProps> = ({ elementCount }) => {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center items-center mb-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            HTML Element Generator
          </span>
        </h1>
      </div>
      
      <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
        Create and preview HTML elements with this interactive generator.
        Select an element type from the dropdown to add it to your collection.
      </p>
      
      {elementCount > 0 ? (
        <div className="mt-6 inline-flex items-center gap-2">
          <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-md border border-indigo-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span className="text-indigo-700 font-medium">Total Elements: </span>
            <span className="ml-1 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
              {elementCount}
            </span>
          </div>
          
          <div className="animate-pulse flex space-x-1">
            <div className="h-2 w-2 bg-indigo-400 rounded-full"></div>
            <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
            <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="mt-6 inline-block px-4 py-2 rounded-md bg-yellow-50 border border-yellow-100">
          <span className="flex items-center text-yellow-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            No elements added yet. Select an element to begin.
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
