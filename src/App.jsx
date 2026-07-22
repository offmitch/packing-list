import "./App.css";
import { useState } from "react";

function App() {
    const [destination, setDestination] = useState("");
    const [tripType, setTripType] = useState("Vacation");

    return (
        <div className="container">

            <h1>Create Trip</h1>

            <form>

                <label>Destination</label>

                <input
                    type="text"
                    placeholder="Japan"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />

                <br /><br />

                <label>Trip Type</label>

                <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                >

                    <option>Vacation</option>

                    <option>Camping</option>

                    <option>Business</option>

                </select>

                <br /><br />

                <button>
                    Generate
                </button>

            </form>

        </div>
    );
}

export default App;