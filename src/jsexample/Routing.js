import { SpaceBar } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Routing() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <SpaceBar></SpaceBar>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Routes>
        </Router>
    );
}

export default Routing;
