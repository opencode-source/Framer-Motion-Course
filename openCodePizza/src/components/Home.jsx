import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home container">
            <h2>
                Welcome to OpenCode Pizza
            </h2>
            <Link to="/base">
                <button>
                    Create Your Pizza
                </button>
            </Link>
        </div>
    );
}
