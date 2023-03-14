import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import Main from './Main';
/* import Header from './Header'; */
import Profile from './Profile';
import Project from './Project';
import Contact from './Contact';
import React from 'react';
import {Link,  Element, Events, animateScroll as scroll,  scroller } from 'react-scroll'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render(){
    return (
      <div>
        <header className="header">
            <Link to="/"><h1><img src="./img/logo.svg" alt="logo" /></h1>  </Link>
            <nav>
                <ul>
                    <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Home</Link></li>
                    <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >Profile</Link></li>
                    <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Project</Link></li>
                    <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} >Contact</Link></li>

                </ul>
            </nav>
        </header>
        <FullPage duration={1000}>
          <Slide>
            <Element name="test1" className="element" >
              <Main />
            </Element>
          </Slide>
          <Slide>
            <Element name="test2" className="element">
              <Profile />
            </Element>
          </Slide>
          <Slide>
            <Element name="test3" className="element">
              <Project />
            </Element>
          </Slide>
          <Slide>
            <Element name="test4" className="element">
              <Contact />
            </Element>
          </Slide>
        </FullPage>
      </div>
    )
}
};

export default Home;