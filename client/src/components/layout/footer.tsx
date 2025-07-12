import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="gm-background-secondary border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold font-mono mb-4">
              <span className="gm-text-teal">Gamers</span>
              <span className="gm-text-pink">Market</span>
            </div>
            <p className="gm-text-secondary mb-4 max-w-md">
              The ultimate marketplace for gaming gear, collectibles, and community. Join millions of gamers buying, selling, and trading with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 gm-background border border-gray-700 rounded-full flex items-center justify-center hover:gm-border-teal transition-colors">
                <span className="text-sm">T</span>
              </a>
              <a href="#" className="w-10 h-10 gm-background border border-gray-700 rounded-full flex items-center justify-center hover:gm-border-teal transition-colors">
                <span className="text-sm">D</span>
              </a>
              <a href="#" className="w-10 h-10 gm-background border border-gray-700 rounded-full flex items-center justify-center hover:gm-border-teal transition-colors">
                <span className="text-sm">R</span>
              </a>
              <a href="#" className="w-10 h-10 gm-background border border-gray-700 rounded-full flex items-center justify-center hover:gm-border-teal transition-colors">
                <span className="text-sm">I</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 font-mono">Shop</h3>
            <ul className="space-y-2 text-sm gm-text-secondary">
              <li><Link href="/category/gaming-keyboards" className="hover:gm-text-teal transition-colors">Gaming Keyboards</Link></li>
              <li><Link href="/category/gaming-mice" className="hover:gm-text-teal transition-colors">Gaming Mice</Link></li>
              <li><Link href="/category/gaming-headsets" className="hover:gm-text-teal transition-colors">Headsets</Link></li>
              <li><Link href="/category/gaming-chairs" className="hover:gm-text-teal transition-colors">Gaming Chairs</Link></li>
              <li><Link href="/category/collectibles" className="hover:gm-text-teal transition-colors">Collectibles</Link></li>
              <li><Link href="/category/consoles" className="hover:gm-text-teal transition-colors">Consoles</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 font-mono">Support</h3>
            <ul className="space-y-2 text-sm gm-text-secondary">
              <li><Link href="/contact" className="hover:gm-text-teal transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:gm-text-teal transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Authentication</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Seller Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 font-mono">Company</h3>
            <ul className="space-y-2 text-sm gm-text-secondary">
              <li><Link href="/about" className="hover:gm-text-teal transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:gm-text-teal transition-colors">Partnerships</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm gm-text-secondary mb-4 md:mb-0">
            © 2024 GamersMarket. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm gm-text-secondary">
            <Link href="/privacy" className="hover:gm-text-teal transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:gm-text-teal transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:gm-text-teal transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
