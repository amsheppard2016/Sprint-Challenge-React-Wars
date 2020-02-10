import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "../components/PeopleCard";

const PeopleData = props => {
    console.log("Peoplecardprops", props.data.results);
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(data);
    if (!data) return <h2>Loading .....</h2>;

    return (
        <div className="PeopleCard">
            {data.results.map(data, index => {
                return (
                    <PeopleCard
                        key={index}
                        name={data.results.name}
                        gender={data.results.gender}
                        birthYear={data.results.birth_year}
                        species={data.results.species}
                        height={data.results.height}
                        mass={data.results.mass}
                        homeWorld={data.results.homeworld}
                    />
                );
            })}
        </div>
    );
};
export default PeopleData;
