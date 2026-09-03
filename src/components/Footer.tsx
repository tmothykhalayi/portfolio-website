export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-primary-600/10 py-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-400">
              © 2024 Timothy Khalayi. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
