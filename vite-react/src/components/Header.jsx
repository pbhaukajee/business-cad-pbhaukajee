import Pri from "../images/pri.png";

export default function Header() {
  return (
    <div>
      <img className="profile-image" src={Pri} alt="Profile Image" />
      <h1>Priyanka Bhaukajee</h1>
      <h3>React Developer</h3>
      <p>pbhaukajee@gmail.com</p>
      <button>Email</button>
      <button>Linkedin</button>
    </div>
  );
}
