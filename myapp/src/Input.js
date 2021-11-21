import { useState, useContext } from 'react';
import { Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import InputContext from './inputContext.js';

function Input() {

  // Get setters from input context
  const { setType, setName, setPage } = useContext(InputContext)
  // State to save input text 
  let [name, changeName] = useState("");

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
    className="mt-3"
    style={{display: 'flex', justifyContent: 'center'}} >
      <DropdownButton
        variant="outline-secondary"
        title=''
        onSelect={(event) => selected(event)} >
          <Dropdown.Item eventKey="movie">Movies</Dropdown.Item>
          <Dropdown.Item eventKey="series">Series</Dropdown.Item>
        </DropdownButton>
      <FormControl
        placeholder="Search library"
        onChange={(event) => changeName(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button type="button"
      variant="secondary"
      onClick={clicked}>Search</Button>
    </InputGroup>
  );
}

export default Input;