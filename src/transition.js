import React, { Component } from 'react';
import {
  Container,
  Toggler,
  List,
  ListItem,
  Menu,
} from './components';

class App extends Component {
  state = {
    showBalloon: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  render() {
    return (
      <Container>
        <Toggler
          active={this.state.showBalloon}
          onClick={this.toggle}
        >
          Items:
        </Toggler>
        <Menu
          in={this.state.showBalloon}
          timeout={350}
          unmountOnExit
        >
          <List>
            <ListItem>1. Item</ListItem>
            <ListItem>2. Item</ListItem>
            <ListItem>3. Item</ListItem>
            <ListItem>4. Item</ListItem>
          </List>
        </Menu>
      </Container>
    );
  }
}

export default App;

