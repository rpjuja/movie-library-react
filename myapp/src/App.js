import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Input from './Input.js';
import Movie from './Movie.js'
import InputContext from "./inputContext.js";

function App() {

  // States to use with input context
  const [name, setName] = useState('')
  const [type, setType] = useState('movie')

  return (
      <Container>
        <h1 style={{"textAlign": "center"}} className="mt-1">Movie Library</h1>
        <InputContext.Provider value={{ type, setType, name, setName }} >
          <Input />
          <Movie />
        </InputContext.Provider>
      </Container>
  );
}

export default App;
