import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-gray-800  py-6 footer  text-neutral-content p-10">
             <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-4">
                    <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
                </div>
                <div className="space-x-6 mb-4">
                    <a href="https://facebook.com" className="hover:text-blue-500">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://linkedin.com" className="hover:text-blue-700">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    Built with ❤️ by MD ISMAIL.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
