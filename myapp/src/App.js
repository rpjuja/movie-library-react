import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Input from './Input.js';
import Movie from './Movie.js'
import Page from './Page.js'
import CustomModal from './CustomModal.js';
import { InputProvider } from './InputContext.js';

function App() {
  
  // State to use for showing and hiding the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <h1 className="header">Movie Library</h1>
      <InputProvider>
        <Input />
        <Movie value={setShowModal}/>
        <Page />
        <CustomModal
        show={showModal}
         onHide={() => setShowModal(false)}/>
      </InputProvider>
    </Container>
  );
}

export default App;
