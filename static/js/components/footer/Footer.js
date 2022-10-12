import React from "react";
import "./footer.css";
import github from "../../assets/icon_github_green.svg";
import linkedin from "../../assets/icon_linkedinx_green.svg";
import email from "../../assets/icon_email.svg";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footer-wrapper"}>
        <p>Built with React.js & Flask API</p>
        <p>© 2022 Neo Chen. All rights reserved.</p>
        <div className={"footer-icons"}>
          <a href={"https://github.com/onemelon8"}>
            <img src={github} alt={"github"} />
          </a>
          <a href={"https://www.linkedin.com/in/neoc/"}>
            <img src={linkedin} alt={"linkedin"} />
          </a>
          <a href={"mailto:neoc@neoc.me"}>
            <img src={email} alt={"email"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
