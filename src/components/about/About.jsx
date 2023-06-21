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
        <p className="a-desc">
        As a skilled Front-End Developer, I bring expertise in crafting visually appealing and userfriendly interfaces. With a keen eye for design and proficiency in HTML, CSS, JavaScript,
        NodeJs and ReactJs, I create seamless web experiences that exceed user expectations. I
        am adept at collaborating with cross-functional teams to translate client requirements
        into engaging digital solutions. Additionally, my strong problem-solving abilities enable
        me to troubleshoot and optimize code for optimal performance. Committed to
        continuous learning, I stay abreast of emerging trends and technologies to deliver
        cutting-edge web solutions
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
