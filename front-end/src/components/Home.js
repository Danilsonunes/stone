import React, { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();

  const onClick = () => {
    console.log(`Should search for ${searchTerm}`);
  };

  return (
    <>
      <h1>Stone pole stock checker</h1>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          className=""
          placeholder="Polo"
          onChange={(e) => setSearchTerm(e.target.value)}
          defaultValue={searchTerm}
        />
      </form>
      <button onClick={onClick}>Search</button>
    </>
  );
};

export default Home;
