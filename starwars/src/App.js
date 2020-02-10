import React from "react";
import PeopleCard from "./components/PeopleCard";

export default function App() {
    return (
        <div className="App">
            <PeopleCard />
        </div>
    );
}

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
