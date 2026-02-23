import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">
            Learn Smarter with <span>LMS Portal</span>
          </h1>
          <p className="hero-subtitle">
            A modern learning management system designed to help students
            access courses, track progress, and achieve their goals efficiently.
          </p>

          <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>📚 Interactive Courses</h3>
            <p>Access structured courses with rich learning materials.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Track Progress</h3>
            <p>Monitor your learning journey with real-time analytics.</p>
          </div>

          <div className="feature-card">
            <h3>🎓 Certifications</h3>
            <p>Earn certificates and showcase your achievements.</p>
          </div>
        </section>
      </div>

      {/* CSS inside same file */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', sans-serif;
          color: white;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          min-height: 100vh;
          text-align: center;
          padding: 60px 20px;
        }

        .hero {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero-title span {
          color: #38bdf8;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .cta-button {
          background-color: #38bdf8;
          color: black;
          font-size: 18px;
          padding: 15px 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 80px;
          flex-wrap: wrap;
        }

        .feature-card {
          background: #1e293b;
          padding: 30px;
          border-radius: 12px;
          width: 250px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
        }

        .feature-card h3 {
          margin-bottom: 15px;
          color: #38bdf8;
        }

        .feature-card p {
          font-size: 14px;
          color: #cbd5e1;
        }
      `}</style>
    </>
  );
}

export default Home;