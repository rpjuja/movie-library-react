import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import InputContext from './inputContext.js';

function Input() {

  const { setType, setName } = useContext(InputContext)
  let [name, changeName] = useState("");

  // Action when enter key is pressed on input
  function handleKeyPress(target) {
    if(target.charCode === 13) {
      setName(name);
    }
  }
  
  return (
    <InputGroup
    className="mt-3"
    style={{display: 'flex', justifyContent: 'center'}} >
      <DropdownButton
        variant="outline-secondary"
        title=''
        onSelect={(event) => setType(event)} >
          <Dropdown.Item eventKey="movie">Movies</Dropdown.Item>
          <Dropdown.Item eventKey="series">Series</Dropdown.Item>
        </DropdownButton>
      <FormControl
        placeholder="Search library"
        onChange={(event) => changeName(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button type="submit" onClick={() => setName(name)}>Search</Button>
    </InputGroup>  
  );
}

export default Input;