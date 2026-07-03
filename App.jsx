import hero from "./assets/bharathi pic.jpeg";
function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <img 
        src={hero}
        alt="Bharathi"
        style={{
          width: "220px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
        />
        <h1 style={{ fontSize: "3rem", color: "#facc15",
    textShadow: "0 0 10px #38bdf8, 0 0 20px #0ea5e9",
        }}>👋 Hi, I'm Bharathi Devi</h1>
        <h2 style={{ color: "#38bdf8" }}>
          MERN Stack & Generative AI Developer
        </h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Passionate about building modern web applications and AI-powered
          solutions. I love creating beautiful and responsive user experiences.
        </p>

        <button
          style={{
            background: "#38bdf8",
            color: "black",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </section>

      {/* About */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ color: "#00E5FF"}}>🙋 About Me</h2>
        <p>
          I am a Computer Science student interested in MERN Stack Development,
          React.js, and Generative AI. My goal is to become a
          full-stack developer and build impactful applications.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ color: "#00E5FF"}}>🛠 Skills</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Generative AI",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ color: "#00E5FF"}}>🚀 Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ color: "#EC4899"}}>Portfolio Website</h3>
            <p>Personal portfolio built using React.js.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ color: "#EC4899"}}>AI Chatbot</h3>
            <p>AI-powered chatbot using Generative AI APIs.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ color: "#EC4899"}}>Weather App</h3>
            <p>Weather forecast application using API integration.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ color: "#00E5FF"}}>📞 Contact Me</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/bharathi-padi-a12a64332</p>
        <p>GitHub: github.com/bharathipadi4-oss</p>
      </section>
    </div>
  );
}

export default App;