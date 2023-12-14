import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';
import { useNavigate, useParams } from 'react-router-dom';

// Function to generate a page component based on the page name
const GeneratePage = (pageName) => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  if (auth.token) {
    if (pageName === 'login' || pageName === 'register') {
      pageName = 'home';
      navigate('/');
    }
  }

  console.log('pageName: ', pageName);

  // Dynamically import the component using the page name
  const Component = lazy(() => import(`./pages/${pageName}`).catch(() => ({ default: NotFound })));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

// Main PageRender component
const PageRender = () => {
  const { page, id } = useParams();
  const pageName = id ? `${page}/[id]` : page;

  return GeneratePage(pageName);
};

export default PageRender;
