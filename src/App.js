import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from "./components/NavbarContainer.jsx";
import Tile from "./components/Tile.jsx";
import {Form, FormControl, Button, CardDeck } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavbarContainer></NavbarContainer>
      <div className="Frontpage page">
        <div className="FrontpageTextContainer"></div>
        <div className="Video"></div>
      </div>
      <div className="Search page">
        <div className="SearchBarContainer">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </div>
        <div className="CarouselContainer">
        <CardDeck>
          <Tile imagesrc="a" text=""></Tile>
          <Tile imagesrc="a" text="a"></Tile>
          <Tile imagesrc="a" text="a"></Tile>
        </CardDeck>
        </div>
      </div>
      <div className="Blogs page"></div>
      <div className="Comments page"></div>
      <div className="About page"></div>
    </div>
  );
}

export default App;
