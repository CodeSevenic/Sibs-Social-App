import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';

// This function generates a page component based on the page name
const generatePage = (pageName) => {
  // Dynamically import the component using the page name
  const component = () => require(`./pages/${pageName}`).default;
  try {
    // Create an element using the imported component
    return React.createElement(component());
  } catch (err) {
    // If there's an error, log it and return the NotFound component
    console.warn(err);
    return <NotFound />;
  }
};

// This is the main PageRender component
const PageRender = () => {
  // Get the page and id parameters from the URL
  const { page, id } = useParams();
  let pageName = '';
  // If there's an id parameter, use the [id] version of the page name
  if (id) {
    pageName = `${page}/[id]`;
  } else {
    // Otherwise, use the regular page name
    pageName = `${page}`;
  }
  // Generate the page component and return it
  return generatePage(pageName);
};

export default PageRender;
