import {Toolbar, Typography} from "@mui/material";
import React from "react";
import logo from "../assets/healthineers.png"
export function Heading() {
	return <Toolbar><img src={logo} alt={"Siemens Healthineers"}/><Typography variant="h3">Doctor Setup</Typography></Toolbar>;}