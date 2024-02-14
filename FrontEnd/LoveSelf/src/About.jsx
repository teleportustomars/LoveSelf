import halliPic from './assets/sherryTempPic.jpeg'

const AboutOrganization = () => {
  return (
    <div id="aboutPage" className="pageContent">
      <h1>About LoveSelf</h1>
      <p><img id="sherry" src={halliPic} />Our organization is a nonprofit dedicated to using meditation and meditative practices to help those in need. We provide resources and support via internet video calls to those who are struggling financially, emotionally, or physically. We strive to make a difference in the lives of those we serve.</p>
      <p>We are committed to providing quality services and programs that meet the needs of our community. We believe in creating a safe and supportive environment for all individuals. We value diversity and inclusion and strive to create an equitable society.</p>
      <p>We are always looking for volunteers and donations to help us continue our mission. If you would like to get involved, please contact us today!</p>
      <div id="aboutDivider" />
      <div id="mvv">
        <div><h2>My Mission:</h2> Our mission is to empower individuals to lead healthier and more fulfilling lives through the use of meditation and meditative practices.</div>
        <div><h2>My Vision:</h2> Our vision is to create a world where everyone has access to the tools and resources needed to live a life of balance and wellbeing.</div> 
      </div>

    </div>
  );
};

export default AboutOrganization;