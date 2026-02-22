import { Link } from "react-router-dom";
export default function Header({setEvents}) {

    return (
        <header>
            <nav>
                <p>
                    <Link className="linktext" to="/">Home</Link>
                </p>
                <p>
                    <Link className="linktext" to="/create">Create event</Link>
                </p>
            </nav>
        </header>
    )
}