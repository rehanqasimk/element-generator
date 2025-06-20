"use client";

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface ElementItem {
  id: string;
  type: string;
  content?: string;
}

export default function Home() {
  const [selectedElement, setSelectedElement] = useState<string>("");
  const [elements, setElements] = useState<ElementItem[]>([]);
  const [previewContent, setPreviewContent] = useState<string>("");

  const elementTypes = [
    "Input",
    "Label",
    "Textarea",
    "Button",
    "Select",
    "Div",
    "Span",
    "P",
    "H1",
    "Img"
  ];

  const handleElementChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedElement(e.target.value);
  };

  const addElement = () => {
    if (!selectedElement) return;
    
    const newElement: ElementItem = {
      id: uuidv4(),
      type: selectedElement,
      content: getDefaultContent(selectedElement)
    };
    
    setElements([...elements, newElement]);
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(element => element.id !== id));
  };

  const getDefaultContent = (type: string): string => {
    switch (type) {
      case "Input":
        return "Enter text";
      case "Button":
        return "Click Me";
      case "Textarea":
        return "Enter text here...";
      case "Label":
        return "Label Text";
      case "Span":
        return "This is a span";
      case "P":
        return "This is a paragraph";
      case "H1":
        return "Heading";
      default:
        return "";
    }
  };

  const renderPreview = () => {
    if (!selectedElement) return "Select an element to display";
    
    switch (selectedElement) {
      case "Input":
        return <input className="border border-gray-300 p-2 rounded w-full" placeholder="Enter text" />;
      case "Button":
        return <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">Click Me</button>;
      case "Textarea":
        return <textarea className="border border-gray-300 p-2 rounded w-full" placeholder="Enter text here..."></textarea>;
      case "Label":
        return <label className="text-gray-700">Label Text</label>;
      case "Select":
        return (
          <select className="border border-gray-300 p-2 rounded w-full">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        );
      case "Div":
        return <div className="border border-dashed border-gray-300 p-4 rounded">This is a div</div>;
      case "Span":
        return <span className="text-indigo-600">This is a span</span>;
      case "P":
        return <p className="text-gray-700">This is a paragraph</p>;
      case "H1":
        return <h1 className="text-2xl font-bold text-gray-800">Heading</h1>;
      case "Img":
        return <img className="h-24 w-auto" src="https://via.placeholder.com/150" alt="Placeholder" />;
      default:
        return "Unknown element type";
    }
  };

  const renderElement = (element: ElementItem) => {
    switch (element.type) {
      case "Input":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <input className="border border-gray-300 p-2 rounded flex-grow" placeholder={element.content} />
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Button":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
              {element.content}
            </button>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Textarea":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <textarea className="border border-gray-300 p-2 rounded flex-grow" placeholder={element.content}></textarea>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Label":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <label className="text-gray-700">{element.content}</label>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Select":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <select className="border border-gray-300 p-2 rounded flex-grow">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Div":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <div className="border border-dashed border-gray-300 p-4 rounded flex-grow">This is a div</div>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Span":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <span className="text-indigo-600">{element.content}</span>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "P":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <p className="text-gray-700 flex-grow">{element.content}</p>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "H1":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <h1 className="text-2xl font-bold text-gray-800">{element.content}</h1>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      case "Img":
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <img className="h-24 w-auto" src="https://via.placeholder.com/150" alt="Placeholder" />
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 w-16">{element.type}</span>
            <span className="text-gray-700">Unknown element</span>
            <button 
              onClick={() => deleteElement(element.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        );
    }
  };

  useEffect(() => {
    if (selectedElement) {
      addElement();
    }
  }, [selectedElement]);

  return (
    <div className="min-h-screen p-8 bg-[#d9f5f5]">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">HTML Element Generator</h1>
        
        <div className="mb-8">
          <select 
            className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedElement}
            onChange={handleElementChange}
          >
            <option value="">Select an HTML Element</option>
            {elementTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-8">
          <p className="text-center text-indigo-600 mb-2">
            {selectedElement ? selectedElement : "Select an element to display"}
          </p>
          <div className="flex justify-center">
            {renderPreview()}
          </div>
        </div>
        
       
        {elements.length > 0 && (
          <div className="mb-6 font-medium text-gray-700 text-lg">
            Total Elements: {elements.length}
          </div>
        )}
        
        <div className="space-y-4">
          {elements.map((element) => (
            <div key={element.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              {renderElement(element)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
