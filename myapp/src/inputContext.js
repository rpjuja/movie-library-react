import { createContext } from "react";

const InputContext = createContext({
    type: "movie",
    setType: (input) => {},
    name: '', 
    setName: (input) => {},
    page: 1,
    setPage: (input) => {},
    totalPages: 1,
    setTotalPages: (input) => {}
});

export default InputContext;