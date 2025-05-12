import { useState, useEffect } from 'react'; 
import './App.css';
import Form from './components/Contacts/Form';
import Liste from './components/Contacts/Liste';
function App() {
  return (
    <>
    <h2 className='text-center mt-4'>Contacts App</h2>
      <Form /> 
      
    </>
  );
}

export default App;
