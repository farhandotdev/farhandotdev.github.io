import React from "react";
import "./QuoteList.css";
import quotes from "./quote";

const QuoteList = () => {
  return (
    <div>
      {quotes.map((quote) => (
        <div className="quote" style={{backgroundColor:quote.bg}}>
          <div className="heading">{quote.quote}</div>
          <div className="by">{quote.by}</div>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
