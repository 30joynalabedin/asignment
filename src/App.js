import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header title="My Simple React App" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
