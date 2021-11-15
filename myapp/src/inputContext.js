import { createContext } from "react";

const InputContext = createContext({
    type: "movie",
    setType: (input) => {},
    name: '', 
    setName: (input) => {}
});

export default InputContext;