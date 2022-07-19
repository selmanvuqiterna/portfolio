import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import Git from "../../img/git.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q2vwb6m",
        "template_bbffox3",
        formRef.current,
        "WM2nQ7DkzKKUS8-Oq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Git} alt="" className="c-icon" />
              https://github.com/selmanvuqiterna
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              selmanvuqiterna@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
             Rahovec - Prishtine , Kosovo.
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt="" />
                +38344969040
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Your opinion on my project?</b> If you have time, fill this from and give me your opinion on this Portfiolio Website.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Your form has been sent. Thank you...!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
