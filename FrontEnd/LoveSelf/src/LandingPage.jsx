import Testimonials from "./Testimonials";
import calmLady from "./assets/calmlady.jpeg";
import calendar from "./assets/calendar.png";
import Logo from "./assets/tempLogo.png"
import {Link} from "react-router-dom"
import ColorSquare from "./Square";

const LandingPage = () => {
  const WelcomeVideo = () => {
    const vidURL = "https://www.youtube.com/embed/7NxP0ZGahmE";
    return (
      <iframe
        id="sherVid"
        src={vidURL}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  };

  const WhatWeDo = () => {
    return (
      <div id="whatWeDo">
        <h3>What we do</h3>
        <p>
          LoveSelf offers one-on-one meditations, as well as lateral group
          courses centered on .
        </p>
       </div>

    )
  }

  const IntroBlurb = () => {
    return (
      <div id="introBlurbParent">
        <div id="introBlurb">
          <p id="blurb">
            Hello! My name is Halli Wonder. I&apos;ve dedicated my life to
            health care, starting back in 1978. A survivor turned thriver, my
            journey took a transformative turn in 1996 when I faced stage IV
            breast cancer. Through a spiritual awakening, I explored holistic
            healing with prayer, meditation, and self-love. This path led to
            extraordinary results, inspiring me to share these life-changing
            techniques with you. Join me in transforming self-perception and
            embracing a brighter future!
          </p>
        </div>
        <WelcomeVideo />
      </div>
    );
  };

  const CTA = () => {
    return (
      <>
        <Link to="/services" id="hpCTA" className="brightT">
          <Testimonials />
          <div id="ctaText" className="brightT">
            <img src={calendar} width="10%" /> <div>begin your journey ➤</div>
          </div>
        </Link>
      </>
    );
  };

  const WelcomeBlock = () => {
    return (
      <div id="introWelcome">
        <div id="introBlurbTitle"><img src={Logo} width="100%" /></div>
        <h2>choosing love over fear through mindful, spiritual meditation</h2>
      </div>
    );
  };

  return (
    <div id="landingPage">
      <div className="intro">
        <WelcomeBlock />
        <div id="introContent">
          <IntroBlurb />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
