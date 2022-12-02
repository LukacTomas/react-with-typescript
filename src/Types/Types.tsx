export type Doctor = {
	name: string,
	telephone: string;
	rating: number
}

export type DoctorAction = {
	type: "NAME",
	payload: Doctor["name"]
} | {
	type: "PHONE",
	payload: Doctor["telephone"]
} | {
	type: "RATING",
	payload: Doctor["rating"]
}