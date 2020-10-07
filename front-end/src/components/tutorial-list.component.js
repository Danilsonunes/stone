import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class TutorialsList extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    TutorialDataService.getAll().then((response) => {
      this.setState({
        data: response.data,
      });
      console.log(response.data);
    });

  }

  render() {
    return this.retrieveTutorials.data.map(all => {
      return <h1 key={all.all}>{all.all}</h1>
    })
  }
}
