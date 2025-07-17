import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Crafted by Yuval Shalom</p>
      </aside>
    </footer>
  );
};

export default Footer;
