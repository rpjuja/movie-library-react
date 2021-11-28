import { useState, useEffect, useContext, useRef } from "react";
import { Row, Col, Container, Button, Modal } from 'react-bootstrap';
import InputContext from "./inputContext";

// Check if a specific value changes
function useCompare (val) {
	const prevVal = usePrevious(val)
	return prevVal !== val
}

// Helper function for useCompare
function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		 ref.current = value;
	});
	return ref.current;
}

function Movie() {

	const apiKey = process.env.REACT_APP_API_KEY;
	// Get parameters for url from input context
	const { type, name, page, setMovieDetails, setTotalPages, setShowModal } = useContext(InputContext);
	let [movies, setMovies] = useState([]);
	// State to prevent useEffect running before anything is searched
	let [skipFetch, setSkipFetch] = useState(true);
	// Check if name changes with useCompare
	const hasNameChanged = useCompare(name);

	function fetchDetails(item) {
		// Fetch by imdb id saved to an item from movies state
		fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${item.id}`)
    	.then((hr) => hr.json())
    	.then((result) => {
				console.log(result)
				// Gather important data to show in modal
				setMovieDetails({
					title: result.Title,
					released: result.Released,
					plot: result.Plot,
					genre: result.Genre,
					runtime: result.Runtime,
					director: result.Director,
					actors: result.Actors,
					writer: result.Writer,
					poster: result.Poster,
					rating: result.imdbRating
				});
			})
			.catch(err => console.log(err));
			setShowModal(true);
	}

  useEffect(() => {
    // Skip fetch when component is originally loaded
		if (skipFetch) setSkipFetch(false);
		else
			// Clear old movies if searched name changes because
			// if search is invalid there should be no movies shown
			if(hasNameChanged) {
				setMovies([]);
			}
			// Fetch with search function which works with name and type that user inputs
			// and returns 10 results at a time
			fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=${type}&page=${page}`)
    		.then((hr) => hr.json())
    		.then((result) => {
					// Get total number of pages from fetch results
					setTotalPages(Math.ceil(result.totalResults/10));
					let newMovies = [];
					// Iterate through an array of 10 movies
					result.Search.forEach((movie) => {
						// Save parameters to temporary array
						newMovies.push({ title: movie.Title, year: movie.Year, id: movie.imdbID });
				})
			// Use array in setMovies
			setMovies(newMovies);
			})
     	.catch(err => console.log(err));
	// Fetch on changes to input context variables
  }, [apiKey, name, type, page]);


	return ( 
		<Container fluid='true'>
			{movies.map((item, i) => 
			<Row key={i} className='mt-2 align-items-center'>
				<Col md='8' xs='8'>{item.title}</Col>
				<Col md='2' xs='2'>{item.year}</Col>
				<Col md='2' xs='2' className='text-right'>
					<Button size='sm'
					variant='secondary'
					onClick={() => fetchDetails(item)}>
						Details</Button></Col>
			</Row>)}
		</Container>
		);
};

export default Movie;