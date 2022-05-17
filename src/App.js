import React, { useState } from "react";
import data from "./data";
function App() {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [texts, setTexts] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number <= 0) {
      alert("min = 1 \n max = 8");
    }
  };

  return (
    <section className="section-center">
      <h3>Random text generator</h3>
      <form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="amount">Enter No. of paragraphs</label>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button
          className="btn"
          onClick={() => (number > 0 ? setLoading(true) : setLoading(false))}
        >
          GENERATE
        </button>
      </form>
      <article className="lorem-text">
        {loading &&
          texts.slice(0, number).map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
      </article>
    </section>
  );
}

export default App;
