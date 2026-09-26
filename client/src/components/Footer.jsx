
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-custom">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}
