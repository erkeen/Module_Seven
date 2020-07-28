import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./style.css";
import NavBar from "../components/Navbar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Students from "../components/Students/Students";
import Footer from "../components/Footer/Footer";
import Details from "../components/Details/Details";
function App() {
  return (
    <Container>
      <Router>
        <NavBar />
        <Route path="/" exact component={Students} />
        <Route path="/details/:id" render={(props) => <Details {...props} />} />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
