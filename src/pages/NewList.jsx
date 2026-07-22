import { useState } from "react";


function NewList() {

    const [destination, setDestination] = useState("");
    const [tripType, setTripType] = useState("Vacation");

    return (
        <div className="container">

            <h1>New List</h1>

        </div>
    );

}

export default NewList