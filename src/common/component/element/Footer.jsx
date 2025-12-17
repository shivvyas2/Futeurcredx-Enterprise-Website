import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1600px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full border-t border-neutral-200" style={{ backgroundColor: '#F4F4F2' }}>
      <footer>
        <div className="container mx-auto">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Enterprise Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                Enterprise Solutions
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/banks" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    For Banks
                  </Link>
                </li>
                <li>
                  <Link href="/products/fintechs" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    For Fintechs
                  </Link>
                </li>
                <li>
                  <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                Use Cases
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/use-cases/business" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    For Business
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases/fintech" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    For Fintech
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                Developers
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/developers/quickstart" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Quickstart
                  </Link>
                </li>
                <li>
                  <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <Link href="/developers/api" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.futeurcredx.com/about" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/contact" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Branding and Information */}
          <div className="border-t border-neutral-200 pt-8 pb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-neutral-900 mb-2 uppercase tracking-wide">
                  FUTEURCREDX
                </h1>
                <p className="text-sm text-neutral-600 mb-4">
                  © FUTEURCREDX 2025
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  To find out more about FUTEURCREDX services, please visit our{" "}
                  <a href="https://www.futeurcredx.com/faq" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline font-medium">
                    FAQ page
                  </a>
                  . If you have any questions, please reach out to us via the contact form on our website or through the FUTEURCREDX app.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Service Descriptions */}
          <div className="border-t border-neutral-200 pt-8 pb-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Business Credit Services
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                FUTEURCREDX is a business credit technology platform and program manager. Our LUMIQ AI™ platform provides business credit monitoring, building, and intelligence services to help businesses establish and grow their credit profiles without personal guarantees.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Data Security
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                FUTEURCREDX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
              </p>
            </div>
          </div>

          {/* Final Copyright */}
          <div className="border-t border-neutral-200 pt-6">
            <p className="text-center text-sm text-neutral-600">
              © 2025 FUTEURCREDX. LUMIQ AI™ and FUTEURCREDX® are registered trademarks. All rights reserved. Building business credit, empowering growth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
