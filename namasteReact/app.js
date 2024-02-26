import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" />
      <nav className="nav">
        <div>home</div>
        <div>profile</div>
        <div>cart</div>
      </nav>
    </div>
  );
};
const Body = () => {};
const Footer = () => {};
const Layout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
