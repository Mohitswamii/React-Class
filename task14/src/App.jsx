
import React, { useState } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submittedData, setSubmittedData] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        setSubmittedData({
            name: name,
            email: email,
            message: message
        });

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="container">

            <h1>Contact Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button type="submit">
                    Submit
                </button>

            </form>

            {submittedData && (
                <div className="result">

                    <h2>Submitted Details</h2>

                    <p>Name: {submittedData.name}</p>

                    <p>Email: {submittedData.email}</p>

                    <p>Message: {submittedData.message}</p>

                </div>
            )}

        </div>
    );
}

export default App;
