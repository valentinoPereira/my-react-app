import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Row, Col, Alert } from 'react-bootstrap';

class Home extends Component {
  state = {
    brands: [],
    unauthorised: false
  };
  componentDidMount() { }

  render() {
    return (

      <div>
        <Header />
        <Container>
          <Alert  variant="primary">
            This is a primary alert—check it out!
          </Alert>
          <Row>
            <Col sm={5}>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Home;
