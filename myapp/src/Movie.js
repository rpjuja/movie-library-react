import { useState, useEffect, useContext, useRef } from "react";
import { Row, Col } from 'react-bootstrap';
import InputContext from "./inputContext";

function Movie() {

	const apiKey = process.env.REACT_APP_API_KEY;
	// Get parameters for url from input context
	const { type, name, page, setTotalPages } = useContext(InputContext);
	let [movies, setMovies] = useState([]);
	// State to prevent useEffect running before anything is searched
	let [skipFetch, setSkipFetch] = useState(true);
	// Check if name changes with useCompare
	const hasNameChanged = useCompare(name);

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

  useEffect(() => {
    // Skip fetch when component is originally loaded
		if (skipFetch) setSkipFetch(false);
		else
			// Clear old movies if searched name changes because
			// if search is invalid there should be no movies shown
			if(hasNameChanged) {
				setMovies([]);
			}
			// Fetch with parameters
			fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=${type}&page=${page}`)
    	.then((hr) => hr.json())
    	.then((result) => {
			// Get total number of pages from fetch results
			setTotalPages(Math.ceil(result.totalResults/10));
			console.log(page);
			let newMovies = [];
			// Iterate through an array of 10 movies
			result.Search.forEach((movie) => {
				// Save parameters to temporary array
				newMovies.push({ title: movie.Title, year: movie.Year });
			})
			// Use array in setMovies
			setMovies(newMovies);
			})
     	.catch(err => console.log(err))
	// Fetch on changes to input context variables
  }, [apiKey, name, type, page]);

	return ( 
		<div>
			{movies.map((item, i) => 
			<Row key={i} className='mt-2'>
				<Col>{item.title}</Col>
				<Col className="text-right">Released: {item.year}</Col>
			</Row>)}
		</div>
		);
};

export default Movie;