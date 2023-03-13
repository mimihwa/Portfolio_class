import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import Main from './Main';
import Header from './Header';
import Profile from './Profile';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
    return (
    <>
    <Header /> 
    <FullPage duration={1000}>
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <Profile />
      </Slide>
      <Slide>
        <Project />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
    </>
    )
  };
  
  export default Home;