import "./about.css";
import Card from "../../img/card.png";
import Achievement from "../../img/achievement.png";
import Diploma from "../../img/diploma.PNG";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Card}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Hi, My name is Selman Vuqiterna, I am from Kosovo, I am a Web Developer.
          Currently I am studying at UBT in the field of Computer Science and Engineer.
          I have knowledge in ReactJs, NodeJs, JavaScript, HTML/CSS.
          This is the Portfolio that Im going to apply with in StarLabs Intership.
        </p>
        <div className="a-award">
          <img src={Achievement} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certification for Full Stack Web Developer</h4>
            <p className="a-award-desc">
              This is the certification for Fullstack Developer that I got from J-Coders Academy.
            </p>
            <img src={Diploma} alt="" className="a-certificate-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
