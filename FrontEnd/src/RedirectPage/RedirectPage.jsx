import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const localRedirect = () => {
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
