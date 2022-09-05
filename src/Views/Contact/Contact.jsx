import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaGitSquare } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  //eslint-disable-next-line
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    message: "",
    user_nameError: "",
    user_emailError: "",
    messageError: "",
  });

  const form = useRef();
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let user_nameError = "";
    let user_emailError = "";
    let messageError = "";
    if (!user?.user_name) {
      user_nameError = "Name is required!";
    }
    if (!user?.user_email || reg.test(user?.user_email) === false) {
      user_emailError = "Email is Invalid!";
    }
    if (!user?.message) {
      messageError = "Message is required!";
    }
    if (user_nameError || user_emailError || messageError) {
      setUser({ user_nameError, user_emailError, messageError });
      return false;
    }
    return true;
  };

  const onFinish = (values) => {
    values.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_g4abld2",
          "template_4f3mrbf",
          form.current,
          "EC571qUOCIA2_nAtg"
        )
        .then(
          (result) => {
            toast.success('Message Send Successfully 😊', {
              autoClose: 3000,
            });
            console.log("message sent");
          },
          (error) => {
            toast.error(`Message Not Send Successfully ${error.text}`, {
              autoClose: 3000,
            });
            console.log(error.text);
          }
        );
      setUser({
        user_name: "",
        user_email: "",
        message: "",
        user_nameError: "",
        user_emailError: "",
        messageError: "",
      });
    }
  };

  return (
    <>
      <div className="main_head pb-3">
        <h4>Contact Me
          <p>Lets Keep In Touch</p>
        </h4>
      </div>
      <div className="col-10 mx-auto for_shadow mb-5 mt-4">
        <div className=" shadows">
          <div className="row  mx-2">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="contact-info mx-5 mt-4 my-5 py-5">
                <h6>
                  Get In Touch
                </h6>
                <h5>
                  Send Your Email Here!
                  Or <br />
                  Visit
                </h5>
                <div className="home_icons">
                  <span data-tip="Visit Linkedin"><AiFillLinkedin /></span>
                  <ReactTooltip place="top" type="dark" effect="float" />
                  <span data-tip="Visit Github"><FaGitSquare /></span>
                  <ReactTooltip place="top" type="dark" effect="float" />
                  <span data-tip="Visit Facebook"><AiFillFacebook /></span>
                  <ReactTooltip place="top" type="dark" effect="float" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <form
                name="myForm"
                ref={form}
                onSubmit={onFinish}
                className="py-3"
              >
                <div>
                  <label className="label">
                    Name <span>*</span>
                  </label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="user_name"
                    value={user.user_name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                  />
                  <div style={{ color: "red" }}>{user.user_nameError}</div>
                </div>
                <div>
                  <label className="label">
                    Email <span>*</span>
                  </label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="user_email"
                    value={user.user_email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                  />
                  <div style={{ color: "red" }}>{user.user_emailError}</div>
                </div>
                <div className="message">
                  <label className="label">
                    Message <span>*</span>
                  </label>
                  <textarea
                    className="form-control my-2"
                    name="message"
                    value={user.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter Your Message...."
                  />
                  <div style={{ color: "red" }}>{user.messageError}</div>
                </div>

                <div className="text-center home_intro">
                  <button
                    className="btn1 my-3"
                    type="submit"
                  >Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
