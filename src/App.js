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
         <Divider text=' ”Disinformation - Information that is false and deliberately created to harm a person, social group, organisation or country” - Unesco' imgsrc="/img/blog1.png"/>
         <CampaignInfo/>
         <Divider text="Your inspirational quote here" imgsrc="/img/blog1.png"/>
        <Blogs/>
        <Divider text="Your inspirational quote here" imgsrc="/img/blog1.png"/>
        <Comments/>
        <Divider text="Your inspirational quote here" imgsrc="/img/blog1.png"/>
        <About/>
    </div>
  );
}

export default App;