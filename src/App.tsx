import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Bunner } from './components/Bunner';
import { Achievement } from './components/Achievement';
import { Footer } from './components/Footer';
import { Slider } from './components/Slider';
import { ContactUs } from './components/ContactUs';
import { Response } from './types/Response';
import { Modal } from './components/Modal';

function App() {
  const [response, setResponse] = useState<Response | null>(null);
  
  return (
    <>
      {response && <Modal response={response} setResponse={setResponse} />}
      <div className="App">
        <Header />

        <Bunner />

        <Achievement />

        <Slider />

        <ContactUs onSubmit={setResponse} />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
