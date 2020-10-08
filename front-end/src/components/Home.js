import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1>Stone pole stock checker</h1>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          className=""
          placeholder="Polo"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
          value={this.state.searchTerm}
        />
      </form>
      <button onClick="">Search</button>
    </Fragment>
  );
};

export default Home;
