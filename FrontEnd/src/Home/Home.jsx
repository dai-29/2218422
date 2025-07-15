import { useState } from "react";
import { Log } from "../utils/logger";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState(30);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    try {
      if (!url) {
        setError("URL is required");
        return;
      }

      setError("");
      setShortUrl("");

      const urlPattern =
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()+,;=]*)?$/;
      if (!urlPattern.test(url)) {
        setError("Invalid URL format");
        await Log("frontend", "warn", "handler", "Invalid URL entered");
        return;
      }

<<<<<<< HEAD
      const base = "http://localhost:3000/";
=======
      const base = "https://short.ly/";
>>>>>>> 87884aec9347351b6bb3c65bc43bfdb35428117f
      const code = shortcode || Math.random().toString(36).substring(2, 8);
      const generatedShortUrl = base + code;

      const existingData = JSON.parse(localStorage.getItem("shortUrls")) || {};
      existingData[code] = {
        originalUrl: url,
        validityMinutes: parseInt(validity),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("shortUrls", JSON.stringify(existingData));

      setShortUrl(generatedShortUrl);
      await Log("frontend", "info", "handler", "URL shortened locally");
    } catch (err) {
      setError("Unexpected Error");
      await Log("frontend", "fatal", "handler", "Unexpected error in handler");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>URL Shortener</h2>

      {error && (
        <div style={{ color: "red", marginBottom: "1rem", fontWeight: "bold" }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <label>Enter URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Custom Shortcode (optional)</label>
        <input
          type="text"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Validity (minutes)</label>
        <input
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </div>

      <button
        onClick={handleShorten}
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Shorten URL
      </button>

      {shortUrl && (
        <div style={{ marginTop: "1.5rem" }}>
          <strong>Short URL:</strong>{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
