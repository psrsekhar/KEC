import "./Body.css";
import logo from "../assets/react.svg";

export default function Body() {
  return (
    <main>
      <p>Welcome! to Kongu Engineering College</p>
      <img src="vite.svg" width="150" height="150" />
      <img src={logo} width="150" height="150" />
    </main>
  );
}
