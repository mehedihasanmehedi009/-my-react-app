 import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-6 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">BrandName</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Building modern, clean, and user-friendly web experiences for everyone.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-base font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#home" className="text-slate-400 hover:text-sky-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-slate-400 hover:text-sky-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal / Support */}
        <div>
          <h3 className="text-white text-base font-semibold mb-4">Support</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#faq" className="text-slate-400 hover:text-sky-400 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-slate-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-slate-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-base font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-slate-400 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 min-w-0 px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-sky-400 hover:bg-sky-300 text-slate-950 text-sm font-semibold transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-emerald-400 mt-2">Thanks for subscribing!</p>
          )}
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-5 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
};