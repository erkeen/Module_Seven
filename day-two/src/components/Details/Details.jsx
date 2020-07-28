import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
class Details extends Component {
  state = {
    student: null,
    projects: null,
  };

  fetchData = (id) => {
    fetch("http://localhost:3001/students/" + id)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          student: response,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  // fetchProjects = (id) => {
  //   fetch("http://localhost:3001/projects/" + id)
  //     .then((response) => response.json())
  //     .then((response) =>
  //       this.setState({
  //         projects: response,
  //       })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount() {
    this.fetchData(this.props.match.params.id);
    console.log(this.props.match.params.id);
    // this.fetchProjects(this.props.match.params.id);
  }

  render() {
    console.log(this.state.student);
    return (
      <Container>
        <Row className="mt-5">
          <Col>
            <h2>Student Details</h2>
            <p className="ml-3">{this.state.student.name}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;
