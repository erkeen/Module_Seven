import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import listStudents from "../../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(fetchStudentsApi()),
});

const fetchStudentsApi = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => {
        console.log("DATA", getState());
        dispatch({ type: "FETCH_STUDENTS", payload: data });
      });
  };
};

class Students extends Component {
  componentDidMount = () => {
    this.props.fetchStudents();
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     students: [],
  //   };
  // }

  // componentDidMount = () => {
  //   fetch("http://localhost:3001/students")
  //     .then((response) => response.json())
  //     .then((responseObject) => {
  //       console.log("DATA", responseObject.data);
  //       this.setState({ students: responseObject.data });
  //     })
  //     .catch((err) => {
  //       this.setState({ error: true });
  //       console.log("An error has occurred:", err);
  //     });
  // };
  render() {
    // console.log(this.state.students);
    return (
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              {this.props.listStudents.students.map((student) => (
                <tbody>
                  <tr>
                    <td>
                      <Link to={"/details/" + student._id}>{student._id}</Link>
                    </td>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{student.email}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
