import React, { useState, useEffect } from 'react';
import { getDefaultContent } from './elementUtils';

interface ElementPreviewProps {
  selectedElement: string;
}

const ElementPreview: React.FC<ElementPreviewProps> = ({ selectedElement }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Click Me");
  const [selectValue, setSelectValue] = useState<string>("Option 1");
  const [divContent, setDivContent] = useState<string>("This is a div");
  const [spanContent, setSpanContent] = useState<string>("This is a span");
  const [paragraphContent, setParagraphContent] = useState<string>("This is a paragraph with sample text");
  const [headingContent, setHeadingContent] = useState<string>("Heading");
  const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80");
  const [isInteractive, setIsInteractive] = useState<boolean>(true);

  // Reset state when element changes
  useEffect(() => {
    if (selectedElement) {
      setInputValue("");
      setTextareaValue("");
      setButtonText("Click Me");
      setSelectValue("Option 1");
      setDivContent("This is a div");
      setSpanContent("This is a span");
      setParagraphContent("This is a paragraph with sample text");
      setHeadingContent("Heading");
      setImageUrl("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80");
    }
  }, [selectedElement]);

  // Toggle interactive mode
  const toggleInteractive = () => {
    setIsInteractive(!isInteractive);
  };

  const renderPreview = () => {
    if (!selectedElement) return null;
    
    switch (selectedElement) {
      case "Input":
        return (
          <div className="flex flex-col gap-3">
            <input 
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {isInteractive && inputValue && (
              <div className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                Current value: <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">{inputValue}</span>
              </div>
            )}
          </div>
        );
      case "Button":
        return (
          <div className="flex flex-col gap-3">
            <button 
              className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 transform active:scale-95"
              onClick={() => isInteractive && alert('Button clicked!')}
            >
              {buttonText || "Click Me"}
            </button>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change button text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            )}
          </div>
        );
      case "Textarea":
        return (
          <div className="flex flex-col gap-3">
            <textarea 
              className="border border-gray-300 p-2 rounded w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="Enter text here..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              rows={4}
            ></textarea>
            {isInteractive && textareaValue && (
              <div className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                Current value: <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">{textareaValue}</span>
              </div>
            )}
          </div>
        );
      case "Label":
        return (
          <div className="flex flex-col gap-3">
            <label className="text-gray-700 font-medium">{spanContent}</label>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change label text"
                value={spanContent}
                onChange={(e) => setSpanContent(e.target.value)}
              />
            )}
          </div>
        );
      case "Select":
        return (
          <div className="flex flex-col gap-3">
            <div className="relative">
              <select 
                className="border border-gray-300 p-2 pr-8 rounded w-full appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                disabled={!isInteractive}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {isInteractive && (
              <div className="bg-gray-50 p-2 rounded text-sm text-gray-700">
                Selected: <span className="font-medium">{selectValue}</span>
              </div>
            )}
          </div>
        );
      case "Div":
        return (
          <div className="flex flex-col gap-3">
            <div className="border border-dashed border-gray-300 p-4 rounded shadow-inner bg-gray-50 text-gray-800">
              {divContent}
            </div>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change div content"
                value={divContent}
                onChange={(e) => setDivContent(e.target.value)}
              />
            )}
          </div>
        );
      case "Span":
        return (
          <div className="flex flex-col gap-3">
            <span className="text-indigo-600 px-2 py-1 bg-indigo-50 rounded inline-block">{spanContent}</span>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change span content"
                value={spanContent}
                onChange={(e) => setSpanContent(e.target.value)}
              />
            )}
          </div>
        );
      case "P":
        return (
          <div className="flex flex-col gap-3">
            <p className="text-gray-700 leading-relaxed">{paragraphContent}</p>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change paragraph content"
                value={paragraphContent}
                onChange={(e) => setParagraphContent(e.target.value)}
              />
            )}
          </div>
        );
      case "H1":
        return (
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{headingContent}</h1>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change heading content"
                value={headingContent}
                onChange={(e) => setHeadingContent(e.target.value)}
              />
            )}
          </div>
        );
      case "Img":
        return (
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded shadow-md">
              <img 
                className="h-36 w-auto object-cover transition-transform hover:scale-105 duration-300" 
                src={imageUrl} 
                alt="Element preview" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80";
                  setImageUrl("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80");
                }}
              />
            </div>
            {isInteractive && (
              <input
                className="border border-gray-300 p-2 rounded w-full mt-2 text-sm"
                placeholder="Change image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            )}
          </div>
        );
      default:
        return "Unknown element type";
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <p className="text-indigo-600 font-medium">
          {selectedElement ? selectedElement : "Select an element to preview"}
        </p>
        {selectedElement && (
          <button 
            onClick={toggleInteractive}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              isInteractive 
                ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {isInteractive ? 'Interactive Mode: ON' : 'Interactive Mode: OFF'}
          </button>
        )}
      </div>
      <div className="p-6 border border-dashed border-indigo-300 rounded-lg bg-indigo-50/50 shadow-inner">
        <div className="flex justify-center text-gray-800">
          {renderPreview() || (
            <span className="text-gray-500 italic">Preview will appear here</span>
          )}
        </div>
      </div>
      {selectedElement && (
        <div className="mt-3 text-xs text-gray-500 italic text-center">
          {isInteractive ? 'Interactive mode is enabled. Try changing values!' : 'Interactive mode is disabled. Click the button above to enable.'}
        </div>
      )}
    </div>
  );
};

export default ElementPreview;
