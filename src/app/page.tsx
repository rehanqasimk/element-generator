"use client";

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '@/components/Header';
import ElementSelector from '@/components/ElementSelector';
import ElementPreview from '@/components/ElementPreview';
import ElementList, { ElementItem } from '@/components/ElementList';
import { elementTypes, getDefaultContent } from '@/components/elementUtils';

export default function Home() {
  // State for selected element type and list of added elements
  const [selectedElement, setSelectedElement] = useState<string>("");
  const [elements, setElements] = useState<ElementItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isCodeVisible, setIsCodeVisible] = useState<boolean>(false);
  
  // Handle element selection change
  const handleElementChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedElement(e.target.value);
  };

  // Add a new element to the list
  const addElement = () => {
    if (!selectedElement) return;
    
    const newElement: ElementItem = {
      id: uuidv4(),
      type: selectedElement,
      content: getDefaultContent(selectedElement)
    };
    
    setElements([...elements, newElement]);
  };

  // Delete an element from the list
  const deleteElement = (id: string) => {
    setElements(elements.filter(element => element.id !== id));
  };

  // Clear all elements
  const clearElements = () => {
    if (elements.length === 0) return;
    
    if (window.confirm(`Are you sure you want to remove all ${elements.length} elements?`)) {
      setElements([]);
    }
  };
  
  // Generate HTML code from elements
  const generateHtmlCode = () => {
    let code = '';
    
    elements.forEach(element => {
      switch(element.type) {
        case 'Input':
          code += `<input type="text" placeholder="${element.content || 'Enter text'}" />\n`;
          break;
        case 'Button':
          code += `<button>${element.content || 'Click Me'}</button>\n`;
          break;
        case 'Textarea':
          code += `<textarea placeholder="${element.content || 'Enter text here...'}"></textarea>\n`;
          break;
        case 'Label':
          code += `<label>${element.content || 'Label Text'}</label>\n`;
          break;
        case 'Select':
          code += `<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n  <option>Option 3</option>\n</select>\n`;
          break;
        case 'Div':
          code += `<div>${element.content || 'This is a div'}</div>\n`;
          break;
        case 'Span':
          code += `<span>${element.content || 'This is a span'}</span>\n`;
          break;
        case 'P':
          code += `<p>${element.content || 'This is a paragraph'}</p>\n`;
          break;
        case 'H1':
          code += `<h1>${element.content || 'Heading'}</h1>\n`;
          break;
        case 'Img':
          code += `<img src="${element.content || 'https://via.placeholder.com/150'}" alt="Image" />\n`;
          break;
        default:
          break;
      }
    });
    
    return code;
  };

  // Copy HTML code to clipboard
  const copyHtmlToClipboard = () => {
    const code = generateHtmlCode();
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('HTML code copied to clipboard!');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Toggle code visibility
  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  // Effect to auto-add element when selected
  useEffect(() => {
    if (selectedElement) {
      addElement();
      // Reset selection after adding
      setSelectedElement("");
    }
  }, [selectedElement]);

  return (
    <div className={`min-h-screen p-6 sm:p-8 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-[#d9f5f5] to-[#e5f7f7]'
    }`}>
      <div className={`max-w-3xl mx-auto rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
        isDarkMode 
          ? 'bg-gray-800 text-white border border-gray-700' 
          : 'bg-white'
      }`}>
        {/* Theme toggle */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isDarkMode 
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Header Component */}
        <Header elementCount={elements.length} />
        
        {/* Main Content Area */}
        <div className="grid gap-8">
          {/* Element Selector Component */}
          <ElementSelector 
            selectedElement={selectedElement}
            onElementChange={handleElementChange}
            elementTypes={elementTypes}
          />
          
          {/* Preview Area Component */}
          <ElementPreview selectedElement={selectedElement} />
          
          {/* Actions Bar */}
          {elements.length > 0 && (
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={toggleCodeVisibility}
                className={`text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 text-blue-300 hover:bg-gray-600' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {isCodeVisible ? 'Hide Code' : 'Show HTML Code'}
              </button>
              
              <div className="flex gap-2">
                {isCodeVisible && (
                  <button
                    onClick={copyHtmlToClipboard}
                    className={`text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 text-green-300 hover:bg-gray-600' 
                        : 'bg-green-50 text-green-600 hover:bg-green-100'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Code
                  </button>
                )}
                
                <button
                  onClick={clearElements}
                  className={`text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 text-red-300 hover:bg-gray-600' 
                      : 'bg-red-50 text-red-600 hover:bg-red-100'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Clear All
                </button>
              </div>
            </div>
          )}
          
          {/* HTML Code Display */}
          {isCodeVisible && elements.length > 0 && (
            <div className={`p-4 rounded-md mb-4 font-mono text-sm overflow-x-auto ${
              isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-800'
            }`}>
              <pre className="whitespace-pre-wrap">
                {generateHtmlCode()}
              </pre>
            </div>
          )}
          
          {/* Elements List Component */}
          <ElementList 
            elements={elements} 
            onDelete={deleteElement} 
          />
        </div>
        
        {/* Footer */}
        <footer className={`mt-12 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p className="flex items-center justify-center gap-1">
            HTML Element Generator &copy; {new Date().getFullYear()}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 ml-1"></span>
          </p>
        </footer>
      </div>
    </div>
  );
}
