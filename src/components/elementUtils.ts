import React from 'react';
import { ElementItem } from './ElementList';

interface ElementData {
  [key: string]: {
    defaultContent: string;
    placeholder?: string;
  }
}

export const elementData: ElementData = {
  "Input": {
    defaultContent: "Enter text",
    placeholder: "Enter text"
  },
  "Button": {
    defaultContent: "Click Me"
  },
  "Textarea": {
    defaultContent: "Enter text here...",
    placeholder: "Enter text here..."
  },
  "Label": {
    defaultContent: "Label Text"
  },
  "Select": {
    defaultContent: ""
  },
  "Div": {
    defaultContent: "This is a div"
  },
  "Span": {
    defaultContent: "This is a span"
  },
  "P": {
    defaultContent: "This is a paragraph"
  },
  "H1": {
    defaultContent: "Heading"
  },
  "Img": {
    defaultContent: ""
  }
};

// Available element types for the dropdown
export const elementTypes = Object.keys(elementData);

// Get default content based on element type
export const getDefaultContent = (type: string): string => {
  return elementData[type]?.defaultContent || "";
};

// Get placeholder text based on element type
export const getPlaceholder = (type: string): string => {
  return elementData[type]?.placeholder || "";
};
