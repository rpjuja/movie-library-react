import { createContext, useState } from "react";

const InputContext = createContext({
  name: String,
  setName: () => {},
  type: "movie",
  setType: () => {},
  page: 1,
  setPage: () => {},
  totalPages: 1,
  setTotalPages: () => {},
  movieDetails: Object,
  setMovieDetails: () => {},
});

function InputProvider({ children }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movieDetails, setMovieDetails] = useState({});

  // Return the provider with values for App.js
  return (
    <InputContext.Provider
      value={{
        name: name,
        setName: setName,
        type: type,
        setType: setType,
        page: page,
        setPage: setPage,
        totalPages: totalPages,
        setTotalPages: setTotalPages,
        movieDetails: movieDetails,
        setMovieDetails: setMovieDetails,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export { InputContext, InputProvider };
