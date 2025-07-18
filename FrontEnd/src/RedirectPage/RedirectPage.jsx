import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const localRedirect = () => {
      const allData = JSON.parse(localStorage.getItem("shortUrls")) || {};
      const data = allData[shortcode];

      if (data) {
        const { originalUrl, createdAt, validityMinutes } = data;
        const expiryTime =
          new Date(createdAt).getTime() + validityMinutes * 60 * 1000;
        const now = Date.now();

        if (now < expiryTime) {
          window.location.href = originalUrl.startsWith("http")
            ? originalUrl
            :`http://${originalUrl}`;
          
      const storedItem = localStorage.getItem(`shortlink_${shortcode}`);

      if (storedItem) {
        const parsed = JSON.parse(storedItem);
        const now = new Date().getTime();
        if (!parsed.expiry || now < parsed.expiry) {
          window.location.href = parsed.url;

        } else {
          alert("Short URL has expired");
        }
      } else {
        alert("Short URL not found");
      }
    };

    localRedirect();
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
