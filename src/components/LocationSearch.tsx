import React, {Fragment, useState} from "react";
import type {Place} from "../api/Place.ts";
import {Box, Button, TextField} from "@mui/material";
import {search} from "../api/search.ts";

interface LocationSearchProps {
    onPlaceClick: (place : Place) => void;
}
const LocationSearch: React.FC = ({onPlaceClick} : LocationSearchProps) => {

    const [places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState<string>("");

    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        setTerm(event.currentTarget.value);
        console.log(event.currentTarget.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("The term is " + term);
        const results = await search(term);
        setPlaces(results);
    }

    return (
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="outlined-basic"
                label="Search" variant="outlined"
                value={term}
                onChange={handleChange}
            />
        </Box>

            <h1>Found Locations</h1>
            {places.map((place) => {
                return (
                    <Fragment key={place.id}>
                        <p>{place.name}</p>
                        <Button
                            onClick={() => onPlaceClick(place)}
                            variant="contained"
                            color="success"
                        >
                            Go
                        </Button>
                    </Fragment>
                );
            })}
        </>
    );
}

export default LocationSearch;

