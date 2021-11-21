import { useContext } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import InputContext from './inputContext.js';

function Page() {

  const { page, setPage, totalPages } = useContext(InputContext);
  

  return (
    <InputGroup 
		style={{display: 'flex', justifyContent: 'center'}}
		className="mt-3">
      <Button type="submit" 
			variant="secondary"
			className="mr-3"
			onClick={() => 
				setPage(prevPage => prevPage - 1)}
			disabled={page === 1}>Previous</Button>
      <Button type="submit" 
			variant="secondary"
			onClick={() => 
				setPage(prevPage => prevPage + 1)}
			// Disable next page button if page is smaller than total pages
			// or if totalPages is nan which means search was invalid
			disabled={isNaN(totalPages) || page >= totalPages}>Next</Button>
    </InputGroup>
  );
};

export default Page;