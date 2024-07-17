import Twitter from "../images/twitter.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="icon" src={Twitter} alt="icon-twitter" />
      <img className="icon" src={Facebook} alt="icon-facebook" />
      <img className="icon" src={Instagram} alt="icon-instagram" />
      <img className="icon" src={Github} alt="icon-github" />
    </div>
  );
}
