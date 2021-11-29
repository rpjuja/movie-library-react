import { useState, useContext } from 'react';
import { Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import InputContext from './InputContext';
import './App.css';

function Input() {

  // Get setters from input context
  const { type, setType, setName, setPage } = useContext(InputContext);
  // State to save input text 
  const [name, changeName] = useState("");

  // When user does a search, set name and reset page number to 1
  function clicked() {
    setName(name);
    setPage(1);
  }

  // When user selects search type, set type and reset page number to 1
  function selected(e) {
    setType(e);
    setPage(1);
  }

  // Action when enter key is pressed on input
  function handleKeyPress(target) {
    if(target.charCode === 13) {
      clicked();
    }
  }

  return (
    <InputGroup
    className="input-group">
      <DropdownButton
        variant="outline-secondary"
        // Display chosen type by using ternary operator on type
        title={(type === "movie" ? "Movies " : "Series ")}
        onSelect={(event) => selected(event)} >
          <Dropdown.Item eventKey="movie">Movies</Dropdown.Item>
          <Dropdown.Item eventKey="series">Series</Dropdown.Item>
        </DropdownButton>
      <FormControl
        placeholder="Search library"
        onChange={(event) => changeName(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button variant="secondary"
      onClick={clicked}>Search</Button>
    </InputGroup>
  );
}

export default Input;