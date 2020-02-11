import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./components/PeopleCard";

export default function App() {
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
        <div className="App">
            {data.map((person, index) => {
                return (
                    <PeopleCard
                        key={index}
                        name={person.name}
                        gender={person.gender}
                        birthYear={person.birth_year}
                        height={person.height}
                        mass={person.mass}
                    />
                );
            })}
        </div>
    );
}

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
