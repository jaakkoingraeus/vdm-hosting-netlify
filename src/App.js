import NavbarContainer from "./components/NavbarContainer.jsx";
import Blogs from './pages/Blogs';
import Comments from './pages/Comments';
import About from './pages/About';
import Frontpage from './pages/Frontpage';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <NavbarContainer></NavbarContainer>
        <Frontpage/>
         <Search/>
        <Blogs/>
        <Comments/>
        <About/>
    </div>
  );
}

export default App;