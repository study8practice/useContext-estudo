import { createContext, useState } from "react";

export const DadosContext = createContext();

function DadosContextProvider(props) {
  const [notes, setNotes] = useState(['item 1', 'item 2', 'item 3']);

	return (
		<DadosContext.Provider value={{notes}}>
			{props.children}
		</DadosContext.Provider>
	);
}

export default DadosContextProvider;
