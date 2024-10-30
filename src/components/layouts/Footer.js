import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About StudyNotesHub</h3>
            <p className="text-gray-600">
              StudyNotesHub is your one-stop platform for comprehensive study notes, categorized
              by degrees, semesters, and subjects to make learning easier.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/degrees" className="hover:text-blue-500">
                  Degrees
                </Link>
              </li>
              <li>
                <Link href="/semesters" className="hover:text-blue-500">
                  Semesters
                </Link>
              </li>
              <li>
                <Link href="/subjects" className="hover:text-blue-500">
                  Subjects
                </Link>
              </li>
              <li>
                <Link href="/topics" className="hover:text-blue-500">
                  Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <span className="material-icons">facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <span className="material-icons">twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <span className="material-icons">instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <span className="material-icons">linkedin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} StudyNotesHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-500">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-blue-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
