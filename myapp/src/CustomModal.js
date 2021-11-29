import { useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import InputContext from './InputContext';
import './App.css';

function CustomModal(props) {

const { movieDetails } = useContext(InputContext);

// Specify information shown in modal by search type
// Movies get release date, runtime and director
const movieData = (
  <>
    <p className='mt-2'>Released: {movieDetails.released}</p>
    <p>Runtime: {movieDetails.runtime}</p>
    <p>Genre: {movieDetails.genre}</p>
    <p>Director: {movieDetails.director}</p>
    <p>IMDb rating: {movieDetails.rating}</p>
  </>
);
// Series get years produced and seasons
const seriesData = (
  <>
    <p className='mt-2'>Years produced: {movieDetails.yearsProduced}</p>
    <p>Seasons: {movieDetails.seasons}</p>
    <p>Genre: {movieDetails.genre}</p>
    <p>IMDb rating: {movieDetails.rating}</p>
  </>
  );

return (
  <Modal
    {...props}
		size="lg"
    ria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
    	<Modal.Title>{movieDetails.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Custom css classes made in App.css */}
      <div className="arrange-horizontally">
        <img alt="new"
        width='25%'
        height='auto'
        src={ movieDetails.poster}/>
        <div className="arrange-vertically">
          {/* Determine modal content by type using ternary operator */}
          {(movieDetails.type === 'movie') ? movieData : seriesData }
        </div>
        <div className="arrange-vertically"> 
          <p className='mt-3'>Writer(s): {movieDetails.writer}</p>
          <p>Actors: {movieDetails.actors}</p>
          <p>Plot: {movieDetails.plot}</p>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary"
			onClick={props.onHide}>Close</Button>
		</Modal.Footer>
  </Modal>
);
}

export default CustomModal;