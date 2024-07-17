import Pri from "../images/pri.png";
import Email from "../images/email.png";
import Linkedin from "../images/linkedin.png";

export default function Header() {
  return (
    <div>
      <img className="profile-image" src={Pri} alt="Profile Image" />
      <div className="header--content">
        <h1>Priyanka Bhaukajee</h1>
        <h3>React Developer</h3>
        <p className="header--email">pbhaukajee@gmail.com</p>
        <div className="header--button">
          <button>
            <span>
              <img className="icon icon-email" src={Email} alt="email" />
            </span>
            Email
          </button>

          <button className="button-2">
            <span>
              <img className="icon icon-linkedin" src={Linkedin} alt="email" />
            </span>
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}
