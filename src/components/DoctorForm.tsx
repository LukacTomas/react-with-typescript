import React from "react";
import {Doctor} from "../Types/Types";
import {Box, Button, TextField} from "@mui/material";

type DoctorFormProps = {
	name: Doctor["name"],
	phone: Doctor["telephone"],
	rating: Doctor["rating"],
	setName:  React.Dispatch<React.SetStateAction<Doctor["name"]>>,
	setPhone: React.Dispatch<React.SetStateAction<Doctor["telephone"]>>,
	setRating: React.Dispatch<React.SetStateAction<Doctor["rating"]>>
}

export function DoctorForm(props: DoctorFormProps) {

	const {name, setName, phone, setPhone, rating, setRating} = props;

	function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newName: Doctor["name"] = event.target.value;
		setName(newName);
	}

	function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newPhone: Doctor["telephone"] = event.target.value;
		setPhone(newPhone);
	}

	function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newRating: Doctor["rating"] = parseInt(event.target.value);
		if (isNaN(newRating) || newRating > 5 || newRating < 0) {
			return;
		}
		setRating(newRating);
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