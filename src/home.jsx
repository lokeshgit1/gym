import './Home.css'; // Import the CSS file
import logo from './assets/logo1.png';
import { useNavigate } from 'react-router-dom'; // 👈 Add this

const Home = () => {
  const navigate = useNavigate(); // 👈 Initialize navigation

  const handleJoinClick = () => {
    navigate('/login'); // 👈 Navigate to login page
  };

  return (
    <div className="home-background">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Gym Logo" className="logo" />
          <span className="brand-name">FitZone</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Programs</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="home-container">
        <h1 className="hero-title">Level Up Your Fitness Journey 💪</h1>
        <p className="hero-subtitle">
          Join our gym and get access to world-class equipment, professional trainers, and a community that keeps you going.
        </p>
        <button className="join-btn" onClick={handleJoinClick}>Join Now</button>

        <div className="features">
          <div className="feature-card">
            <h2>Personal Training</h2>
            <p>Get 1-on-1 training with certified professionals.</p>
          </div>
          <div className="feature-card">
            <h2>Group Classes</h2>
            <p>Stay motivated with bootcamps, HIIT, yoga & more.</p>
          </div>
          <div className="feature-card">
            <h2>Modern Equipment</h2>
            <p>Top-tier gear for strength, cardio, and conditioning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
