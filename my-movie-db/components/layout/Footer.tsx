import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 mb-6">
          <Link href="/movies">
            <span className="hover:text-accent transition">Movies</span>
          </Link>
          <Link href="/tv">
            <span className="hover:text-accent transition">TV Shows</span>
          </Link>

          <span className="hover:text-accent transition">About</span>

          <span className="hover:text-accent transition">Contact</span>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-5 mb-6">
          <a href="#" target="_blank" className="hover:text-accent transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-accent transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-accent transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-accent transition">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CineTrack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
