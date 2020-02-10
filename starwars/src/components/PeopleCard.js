import React from "react";

const PeopleCard = props => {
    return (
        <div className="PeopleList" key={props.key}>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Species: {props.species}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Home World: {props.homeworld}</p>
        </div>
    );
};
export default PeopleCard;
