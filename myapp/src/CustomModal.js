import { Button, Modal } from 'react-bootstrap';

function CustomModal(props) {

return (
  <Modal
    {...props}
		size="lg"
    ria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
    	<Modal.Title>{props.movie.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Released: {props.movie.released}</p>
      <p>Runtime: {props.movie.runtime}</p>
      <p>Genre: {props.movie.genre}</p>
      <p>Director: {props.movie.director}</p>
      <p>Writer: {props.movie.writer}</p>
      <p>Actors: {props.movie.actors}</p>
      <p>Plot: {props.movie.plot}</p>
      <p>IMDb rating: {props.movie.rating}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary"
			onClick={props.onHide}>Close</Button>
		</Modal.Footer>
  </Modal>
);
}

export default CustomModal;