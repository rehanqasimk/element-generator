import React, { useState } from 'react';

interface ElementSelectorProps {
  selectedElement: string;
  onElementChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  elementTypes: string[];
}

const ElementSelector: React.FC<ElementSelectorProps> = ({
  selectedElement,
  onElementChange,
  elementTypes
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom element icon map for visual representation
  const elementIcons: Record<string, string> = {
    "Input": "✎",
    "Button": "⬢",
    "Textarea": "☰",
    "Label": "❏",
    "Select": "▼",
    "Div": "▣",
    "Span": "⬌",
    "P": "¶",
    "H1": "#",
    "Img": "🖼️"
  };

  return (
    <div className="mb-8">
      <label htmlFor="element-selector" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
        Choose an HTML Element to Add
      </label>
      <div className="relative">
        <select
          id="element-selector"
          className="w-full p-3 border border-indigo-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none shadow-sm transition-all duration-200 hover:border-indigo-400"
          value={selectedElement}
          onChange={(e) => {
            onElementChange(e);
            setIsOpen(false);
          }}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
          style={{ color: selectedElement ? '#4F46E5' : '#6B7280' }}
        >
          <option value="" style={{ color: '#6B7280' }}>Select an HTML Element</option>
          {elementTypes.map((type) => (
            <option key={type} value={type} style={{ color: '#4F46E5' }}>
              {elementIcons[type] ? `${elementIcons[type]} ${type}` : type}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
               viewBox="0 0 20 20" 
               fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {elementTypes.slice(0, 5).map((type) => (
          <button
            key={type}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              selectedElement === type ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => {
              const event = {
                target: { value: type }
              } as React.ChangeEvent<HTMLSelectElement>;
              onElementChange(event);
            }}
          >
            {elementIcons[type]} {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElementSelector;
