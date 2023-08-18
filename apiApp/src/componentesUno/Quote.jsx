import React, { useState, useEffect } from "react";

function QuoteAuthor() {
    const [quote, setQuote] = useState({});
    useEffect(() => {
        fetchNewQuote();
    }, []);
    const fetchNewQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data);
        } catch (error) {
            console.error("Error fetching the Quote: ", error);
        }
    }
    return (
        <div className="all">
            <div className="glass">
                <h2 className="text-dark">The author is</h2>
                <h1>{quote.author}</h1>
                <p className="fst-italic">"{quote.content}"</p>
                <button onClick={fetchNewQuote}>Give me another Quote</button>
            </div>
        </div>
    );


}

export default QuoteAuthor;