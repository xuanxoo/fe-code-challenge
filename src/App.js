import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';
import Playground from './pages/Playground';
import People from './pages/People';
import AddEditPeople from './pages/AddEditPeople';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/people" element={<People />} />
          <Route path="/people/new" element={<AddEditPeople />} />
          <Route path="/people/edit/:id" element={<AddEditPeople />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<Navigate to="/people" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
