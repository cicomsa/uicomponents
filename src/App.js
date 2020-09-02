import React from 'react';
import Accordion from './components/Accordion'
import accordionData from './components/Accordion/data'
import './App.scss'

const App = () => {
  return (
    <Accordion accordionData={accordionData} />
  );
}

export default App;
