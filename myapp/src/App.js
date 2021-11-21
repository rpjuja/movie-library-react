import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Input from './Input.js';
import Movie from './Movie.js'
import Page from './Page.js'
import InputContext from "./inputContext.js";

function App() {

  // States to use with input context
  const [name, setName] = useState('');
  const [type, setType] = useState('movie');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  return (
      <Container>
        <h1 style={{"textAlign": "center"}} className="mt-1">Movie Library</h1>
        <InputContext.Provider 
        value={{ type, setType, name, setName, page, setPage, totalPages, setTotalPages }} >
          <Input />
          <Movie />
          <Page />
        </InputContext.Provider>
      </Container>
  );
}

export default App;
