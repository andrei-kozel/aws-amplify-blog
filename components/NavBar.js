import Link from "next/link";
import "../configureAmplify";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const suthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setIsAuthenticated(true);
        case "signOut":
          return setIsAuthenticated(false);
        default:
          return;
      }
    });

    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  return (
    <nav className="flex justify-center pt-3 pb-3 space-x-4 border-b bg-gray-200 border-gray-300">
      {[
        ["Home", "/"],
        ["Create post", "/create"],
        ["Profile", "/profile"],
      ].map(([title, url], index) => (
        <Link href={url} key={index}>
          <a className="text-gray-800 hover:text-gray-900">{title}</a>
        </Link>
      ))}
      {isAuthenticated && (
        <Link href="/my-posts">
          <a className="text-gray-800 hover:text-gray-900">My posts</a>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
