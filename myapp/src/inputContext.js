import { createContext } from "react";

// Initialize variables and setter functions
const InputContext = createContext({
    type: "movie",
    setType: (input) => {},
    name: '', 
    setName: (input) => {},
    page: 1,
    setPage: (input) => {},
    totalPages: 1,
    setTotalPages: (input) => {},
    movieDetails: {},
    setMovieDetails: (input) => {}
});

export default InputContext;