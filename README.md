# HTML Element Generator

An interactive web application for creating and managing HTML elements with a modern UI and live preview capabilities.

**Live Demo:** [https://element-generator.rehanqasim.com](https://element-generator.rehanqasim.com)

**Built with Love by Rehan Qasim** ❤️

This project is built with [Next.js](https://nextjs.org) and Tailwind CSS, providing a clean, responsive interface for generating HTML elements.

## Getting Started

### Option 1: Running Locally with Node.js

1. Clone the repository:

```bash
git clone https://github.com/rehanqasimk/element-generator.git
cd element-generator
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Option 2: Running with Docker

1. Clone the repository:

```bash
git clone https://github.com/yourusername/element-generator.git
cd element-generator
```

2. Build the Docker image:

```bash
docker build -t element-generator .
```

3. Run the container:

```bash
docker run -p 3000:3000 element-generator
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to access the application.

## Features

- Interactive element creation with live preview
- Support for multiple HTML elements (Input, Button, Textarea, Select, Div, etc.)
- Dark/Light mode toggle
- Export HTML code
- Copy to clipboard functionality
- Responsive design

## Development

You can customize the application by modifying the following files:

- `src/app/page.tsx`: Main application page
- `src/components/`: Contains all the component files
- `src/components/elementUtils.ts`: Utility functions for elements

## Deployment

The application is currently deployed at:

**[https://element-generator.rehanqasim.com](https://element-generator.rehanqasim.com)**

### Deploying Your Own Version

You can deploy this project using:

1. **Vercel**: The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

2. **Docker**: Use the included Dockerfile to build and deploy in a containerized environment.

```bash
# Build the image
docker build -t element-generator .

# Run the container
docker run -p 3000:3000 element-generator
```

3. **Custom Server**: Build the application and serve it using a static file server or reverse proxy:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Docker

## Application Structure

- **ElementSelector**: Component for selecting HTML element types from a dropdown
- **ElementPreview**: Shows a live preview of the selected element with interactive capabilities
- **ElementList**: Manages the list of added elements with editing and deletion functionality
- **Header**: Contains the application title and branding
- **elementUtils**: Utility functions and default content for different elements

## License

MIT
