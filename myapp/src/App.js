import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Input from './Input.js';
import Movie from './Movie.js'
import Page from './Page.js'
import CustomModal from './CustomModal.js';
import InputContext from './InputContext.js';

function App() {

  // States to use with input context
  const [name, setName] = useState('');
  const [type, setType] = useState('movie');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movieDetails, setMovieDetails] = useState({});
  
  // State to use for showing and hiding the modal
  const [showModal, setShowModal] = useState(false);

  return (
      <Container>
        <h1 className="header">Movie Library</h1>
        <InputContext.Provider 
        value={{ type, setType, name, setName, page, setPage,
         totalPages, setTotalPages, movieDetails, setMovieDetails, setShowModal }} >
          <Input />
          <Movie />
          <Page />
          <CustomModal
          show={showModal}
          onHide={() => setShowModal(false)}/>
        </InputContext.Provider>
      </Container>
  );
}

export default App;


