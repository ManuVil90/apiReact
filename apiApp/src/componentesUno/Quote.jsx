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
        <div>
            <h1>the author of the quote is: {quote.author}</h1>
            <h1>Quote</h1>
            <p>{quote.content}</p>
            <button onClick={fetchNewQuote}>Give me another Quote</button>
        </div>
    );


}

export default QuoteAuthor;