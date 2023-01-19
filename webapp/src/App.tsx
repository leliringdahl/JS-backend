import React, {useEffect, useState } from 'react';
import './App.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ProductProvider, { ProductContext, ProductContextType } from './contexts/context';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';



//går inte att skriva i comment
// shoppingcart går ej att öppna
//notfoundview funkar inte


// koppla webAPI


function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<NotFoundView />} />  /* not found view visas inte alls. jag har försökt med att ändra path. har kollat i 'NotFoundView'-filen och ser inte vart problemet ligger */
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
