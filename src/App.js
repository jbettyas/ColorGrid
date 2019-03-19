import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Input } from 'reactstrap';
import ColorGrid from './components/GridComponent';
import { COLORS } from './shared/colors';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        randomColor: null
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/"><img src="/assets/logo.png" alt="New Engen logo"></img></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Input type="text" placeholder="Search" />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  class Sidebar extends Component {
  
    render() {
      return (
          <Container fluid style={{ flex: 1 }}>
              <Row>
                  <Col style={{ backgroundColor: '#d6d8d8' }}>
                      
                      <Button outline color="secondary" 
                        style={{ backgroundColor: 'white', marginTop: '20px', marginBottom: '20px' }}
                        onClick={() => this.props.onRandomSelect()}
                        >
                          Random Color</Button>

                      <p>Red</p>
                      <p>Orange</p>
                      <p>Yellow</p>
                      <p>Green</p>
                      <p>Blue</p>
                      <p>Purple</p>
                      <p>Brown</p>
                      <p>Grey</p>
                  </Col>
              </Row>
          </Container>
      );
    }
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: COLORS,
      random: null
    };
  }

  onRandomSelect() {
    this.setState({ random: Math.floor(Math.random() * 100) });
    //console.log(this.state.random);
  }

  onRandomClear() {
    this.setState({ random: null });
    //console.log(this.state.random);
  }

  render() {
    
    return (
        <div>
          <Header />
            <Row>
              <Col lg="2">
                <Sidebar onRandomSelect={() => this.onRandomSelect()}/>
              </Col>
              <Col lg="10">
                <ColorGrid colors={this.state.colors} random={this.state.random} onRandomClear={() => this.onRandomClear()}/>
              </Col>
            </Row>
        </div>
    );
  }
}

export default App;
