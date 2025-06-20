import React from 'react';

export interface ElementItem {
  id: string;
  type: string;
  content?: string;
}

interface ElementListProps {
  elements: ElementItem[];
  onDelete: (id: string) => void;
}

// Base props for all element components
interface ElementComponentProps {
  element: ElementItem;
  onDelete: (id: string) => void;
}

// Delete button component
const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shrink-0"
  >
    Delete
  </button>
);

// InputElement component
const InputElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
      <input 
        className="border border-gray-300 p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
        value={content} 
        onChange={(e) => updateElementContent(e.target.value)}
        placeholder="Enter text"
      />
      <DeleteButton onClick={() => onDelete(element.id)} />
    </div>
  );
};

// ButtonElement component
const ButtonElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
      <div className="flex gap-2 flex-grow items-center">
        <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition-colors">
          {content}
        </button>
        <input 
          className="border border-gray-300 p-1 rounded w-40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Button text"
        />
      </div>
      <DeleteButton onClick={() => onDelete(element.id)} />
    </div>
  );
};

// TextareaElement component
const TextareaElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
        <textarea 
          className="border border-gray-300 p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none h-16 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Enter text here..."
        ></textarea>
        <DeleteButton onClick={() => onDelete(element.id)} />
      </div>
    </div>
  );
};

// LabelElement component
const LabelElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
      <div className="flex gap-2 flex-grow items-center">
        <label className="text-gray-700 font-medium">{content}</label>
        <input 
          className="border border-gray-300 p-1 rounded w-40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Label text"
        />
      </div>
      <DeleteButton onClick={() => onDelete(element.id)} />
    </div>
  );
};

// SelectElement component
const SelectElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [selectedOption, setSelectedOption] = React.useState("Option 1");
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
      <div className="relative flex-grow">
        <select 
          className="border border-gray-300 p-2 pr-8 rounded w-full appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
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
      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">Selected: {selectedOption}</span>
      <DeleteButton onClick={() => onDelete(element.id)} />
    </div>
  );
};

// DivElement component
const DivElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
        <div className="border border-dashed border-gray-300 p-4 rounded flex-grow bg-gray-50 shadow-inner text-gray-800">
          {content}
        </div>
        <DeleteButton onClick={() => onDelete(element.id)} />
      </div>
      <div className="ml-[72px] -mt-1">          <input 
          className="border border-gray-300 p-1 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Div content"
        />
      </div>
    </div>
  );
};

// SpanElement component
const SpanElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
      <div className="flex gap-2 flex-grow items-center">
        <span className="text-indigo-600 px-2 py-1 bg-indigo-50 rounded">{content}</span>          <input 
          className="border border-gray-300 p-1 rounded w-40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Span text"
        />
      </div>
      <DeleteButton onClick={() => onDelete(element.id)} />
    </div>
  );
};

// ParagraphElement component
const ParagraphElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
        <p className="text-gray-700 flex-grow">{content}</p>
        <DeleteButton onClick={() => onDelete(element.id)} />
      </div>
      <div className="ml-[72px] -mt-1">          <input 
          className="border border-gray-300 p-1 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Paragraph text"
        />
      </div>
    </div>
  );
};

// H1Element component
const H1Element: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">{content}</h1>
        <DeleteButton onClick={() => onDelete(element.id)} />
      </div>
      <div className="ml-[72px] -mt-1">          <input 
          className="border border-gray-300 p-1 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Heading text"
        />
      </div>
    </div>
  );
};

// ImageElement component
const ImageElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => {
  const [content, setContent] = React.useState(element.content || '');
  
  const updateElementContent = (newContent: string) => {
    element.content = newContent;
    setContent(newContent);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
        <div className="flex-grow">
          <img 
            className="h-24 w-auto object-cover rounded" 
            src={content || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80"} 
            alt="Image preview" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&w=300&q=80";
            }}
          />
        </div>
        <DeleteButton onClick={() => onDelete(element.id)} />
      </div>
      <div className="ml-[72px] -mt-1">          <input 
          className="border border-gray-300 p-1 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 bg-white"
          value={content}
          onChange={(e) => updateElementContent(e.target.value)}
          placeholder="Image URL"
        />
      </div>
    </div>
  );
};

// UnknownElement component for fallback
const UnknownElement: React.FC<ElementComponentProps> = ({ element, onDelete }) => (
  <div className="flex items-center gap-2">
    <span className="text-indigo-600 w-16 font-medium shrink-0">{element.type}</span>
    <span className="text-gray-700 italic">Unknown element</span>
    <DeleteButton onClick={() => onDelete(element.id)} />
  </div>
);

const ElementList: React.FC<ElementListProps> = ({ elements, onDelete }) => {
  // Function to determine which component to render based on element type
  const renderElement = (element: ElementItem) => {
    switch (element.type) {
      case "Input":
        return <InputElement element={element} onDelete={onDelete} />;
      case "Button":
        return <ButtonElement element={element} onDelete={onDelete} />;
      case "Textarea":
        return <TextareaElement element={element} onDelete={onDelete} />;
      case "Label":
        return <LabelElement element={element} onDelete={onDelete} />;
      case "Select":
        return <SelectElement element={element} onDelete={onDelete} />;
      case "Div":
        return <DivElement element={element} onDelete={onDelete} />;
      case "Span":
        return <SpanElement element={element} onDelete={onDelete} />;
      case "P":
        return <ParagraphElement element={element} onDelete={onDelete} />;
      case "H1":
        return <H1Element element={element} onDelete={onDelete} />;
      case "Img":
        return <ImageElement element={element} onDelete={onDelete} />;
      default:
        return <UnknownElement element={element} onDelete={onDelete} />;
    }
  };

  if (elements.length === 0) {
    return (
      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500">No elements added yet. Select an element from the dropdown above.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
        <span>Elements</span>
        <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
          {elements.length}
        </span>
      </h2>
      <div className="space-y-4">
        {elements.map((element) => (
          <div key={element.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-md transition-shadow">
            {renderElement(element)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementList;
