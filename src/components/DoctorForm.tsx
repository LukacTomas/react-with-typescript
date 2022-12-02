import React from "react";
import {Doctor, DoctorAction} from "../Types/Types";
import {Box, Button, TextField} from "@mui/material";

type DoctorFormProps = {
	doctor: Doctor,
	setState: React.Dispatch<DoctorAction>
}

export function DoctorForm({doctor, setState}: DoctorFormProps) {
	const {name, telephone: phone, rating} = doctor;

	function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newName: Doctor["name"] = event.target.value;
		setState({
			type: "NAME",
			payload: newName
		})
	}

	function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newPhone: Doctor["telephone"] = event.target.value;
		setState({
			type: "PHONE",
			payload: newPhone
		})
	}

	function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newRating: Doctor["rating"] = parseInt(event.target.value);
		if (newRating > 5 || newRating < 0) {
			return;
		}

		setState({
			type: "RATING",
			payload: newRating
		})
	}

	return (
		<>
			<Box sx={{my: 2}}>
				<TextField label="name" value={name} onChange={handleNameChange}/>
			</Box>
			<Box sx={{my: 2}}>
				<TextField label="telephone" type="tel" value={phone} onChange={handlePhoneChange}/>
			</Box>
			<Box sx={{my: 2}}>
				<TextField label="rating" type="number" value={rating} onChange={handleRatingChange}/>
			</Box>
			<Button type="submit" variant={"outlined"}>Submit</Button>
		</>
	)
}