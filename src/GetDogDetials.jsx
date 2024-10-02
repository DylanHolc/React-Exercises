import React from "react";
import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";

const GetDogDetails = ({ dogs }) => {
    const { name } = useParams();
    if (name) {
        const dog = dogs.find(d => d.name.toLowerCase() === name.toLocaleLowerCase());
        return <DogDetails dog={dog} />
    }
    return null;
}

export default GetDogDetails;