import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Exp';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='experience' element={<Experience/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='skills' element={<Skills/>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
