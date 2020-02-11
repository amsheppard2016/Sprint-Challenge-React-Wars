import React from "react";
import styled from "styled-components";

const PeopleList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 4%;
    border: 2px solid black;
    padding: 2% 2%;
`;
const PeopleName = styled.h1``;
const RightLeftBox = styled.div`
    display: flex;
`;
const LeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const RightSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const PeopleCard = props => {
    return (
        <PeopleList>
            <div className="hidden" key={props.key} />
            <PeopleName>Name: {props.name}</PeopleName>
            <RightLeftBox>
                <LeftSide>
                    <h3>Gender: {props.gender}</h3>
                    <h3>Birth Year: {props.birthYear}</h3>
                </LeftSide>
                <RightSide>
                    <h3>Height: {props.height}</h3>
                    <h3>Mass: {props.mass}</h3>
                </RightSide>
            </RightLeftBox>
        </PeopleList>
    );
};
export default PeopleCard;
