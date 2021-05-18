import NavbarContainer from "./components/NavbarContainer.jsx";
import Blogs from './pages/Blogs';
import Comments from './pages/Comments';
import About from './pages/About';
import Frontpage from './pages/Frontpage';
import Search from './pages/Search';
import CampaignInfo from "./pages/CampaignInfo.jsx";
import Divider from "./components/Divider.jsx";
function App() {
  return (
    <div className="App">
      <NavbarContainer></NavbarContainer>
        <Frontpage/>
         <Search/>
         <Divider color="#ffe749" textColor="#000000" text=' ”Disinformation - Information that is false and deliberately created to harm a person, social group, organisation or country” - Unesco' imgsrc="/img/blog1.png"/>
         <CampaignInfo/>
         <Divider color="#74c82e" textColor="#FFFFFF" text='“Sustainability is now a big baggy sack in which people throw all kinds of old ideas, hot air and dodgy activities in order to be able to greenwash their products and feel good.”
― Kevin McCloud' imgsrc="/img/blog1.png"/>
        <Blogs/>
        <Divider color="#000000" textColor="#FFFFFF" text="Your inspirational quote here" imgsrc="/img/blog1.png"/>
        <Comments/>
        <Divider  color="#333333" textColor="#FFFFFF" text="Your inspirational quote here" imgsrc="/img/blog1.png"/>
        <About/>
    </div>
  );
}

export default App;