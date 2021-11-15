import { useState, useEffect, useContext } from "react";
import { Row, Col } from 'react-bootstrap';
import InputContext from "./inputContext";

function Movie() {

	const apiKey = process.env.REACT_APP_API_KEY;
	// Get type and name from input context for url
	const { type, name } = useContext(InputContext);
	let [movies, setMovies] = useState([]);
	let [skipFetch, setSkipFetch] = useState(true);

  useEffect(() => {
    // Skip fetch when component is originally loaded
		if (skipFetch) setSkipFetch(false);
		else
			fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=${type}`)
    	.then((hr) => hr.json())
    	.then((result) => {
			let newMovies = [];
			result.Search.forEach((movie) => {
				// console.log(movie);
				newMovies.push({ title: movie.Title, year: movie.Year });
			})
			setMovies(newMovies);
			})
     	.catch(err => console.log(err))
	// Fetch on changes to input context variables
  }, [name, type]);

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