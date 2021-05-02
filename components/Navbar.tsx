import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="brand">Todo App</h3>
      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/add-todo">
          <a>Add Todo</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
