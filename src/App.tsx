import React, {useReducer} from "react";
import {Box} from "@mui/material";
import {Heading} from "./components/Heading";
import {Doctor, DoctorAction} from "./Types/Types";
import {DoctorForm} from "./components/DoctorForm";

const doctorReducer = (state: Doctor, action: DoctorAction): Doctor => {
	switch (action.type) {
		case "NAME":
			return {...state, name: action.payload}
		case "PHONE":
			return {...state, telephone: action.payload}
		case "RATING":
			return {...state, rating: action.payload}
		default:
			return state;
	}
}

const initialValue: Doctor = {
	name: "",
	rating: 0,
	telephone: ""
}

function App() {
	const [doctor, dispatch] = useReducer(doctorReducer, initialValue);

	function addDoctor(event: React.FormEvent) {
		event.preventDefault();
		// take all values and submit it
		console.log("Making new post Request")
		console.log(doctor)
	}

	return (
		<>
			<Heading/>
			<Box className="App" sx={{width: 1024, margin: "0 auto"}}>
				<form onSubmit={addDoctor}>
					<DoctorForm
						doctor={doctor}
						setState={dispatch}
					/>
				</form>
			</Box>
		</>
	)
}

export default App
