import React, { useState} from "react";
import {Box} from "@mui/material";
import {Heading} from "./components/Heading";
import {Doctor} from "./Types/Types";
import {DoctorForm} from "./components/DoctorForm";

function App() {
	const [name, setName] = useState<Doctor["name"]>("");
	const [phone, setPhone] = useState<Doctor["telephone"]>("");
	const [rating, setRating] = useState<Doctor["rating"]>(0);

	function addDoctor(event: React.FormEvent) {
		event.preventDefault();
		// take all values and submit it
		console.log("Making new post Request with usestate")
		console.log({
			name,
			phone,
			rating
		})
	}

	return (
		<>
			<Heading/>
			<Box className="App" sx={{width: 1024, margin: "0 auto"}}>
				<form onSubmit={addDoctor}>
					<DoctorForm
						name={name}
						phone={phone}
						rating={rating}
						setName={setName}
						setPhone={setPhone}
						setRating={setRating}
					/>
				</form>
			</Box>
		</>
	)
}

export default App
