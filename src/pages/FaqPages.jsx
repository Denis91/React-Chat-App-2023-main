import { Link } from "react-router-dom";
import "../styles/Codex.css"

export function FaqPage() {
    return (
      <div>
        <h1>FAQ</h1>
        <Link to="/">Sign In</Link>
        <div className="codex">
          <p>Just have fun!</p>
        </div>  
      </div>
    );
  }