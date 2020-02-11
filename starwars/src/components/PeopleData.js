import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "../components/PeopleCard";

function PeopleData() {
    console.log("Peopledata");
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response.data.results);
                setData(response.data.results);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(data);
    if (!data) return <h2>Loading .....</h2>;

    return (
        <div className="PeopleCard">
            {data.map((person, index) => {
                return (
                    <PeopleCard
                        key={index}
                        name={person.name}
                        gender={person.gender}
                        birthYear={person.birth_year}
                        species={person.species}
                        height={person.height}
                        mass={person.mass}
                        homeWorld={person.homeworld}
                    />
                );
            })}
        </div>
    );
}
export default PeopleData;
