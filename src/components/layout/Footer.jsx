import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Dumbbell,
  Send
} from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Personal Training', path: '/trainers' },
    { name: 'Membership', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const programs = [
    { name: 'Strength Training' },
    { name: 'Cardio Fitness' },
    { name: 'Yoga & Pilates' },
    { name: 'CrossFit' },
    { name: 'MMA Training' },
    { name: 'Nutrition Coaching' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      text: '123 Fitness Street, Sports City, SC 12345'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: '+1 (555) 123-4567'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: 'info@powerfitgym.com'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: 'Mon - Fri: 5:00 AM - 11:00 PM | Weekends: 6:00 AM - 10:00 PM'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="pt-16 pb-12 border-b border-gray-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand & Description */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Power<span className="text-red-500">Fit</span>
                </span>
              </Link>
              
              <p className="text-gray-400 leading-relaxed">
                Transform your body, elevate your life. Join 5000+ members achieving their fitness goals with state-of-the-art facilities and expert guidance.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Our Programs
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  Contact Info
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full"></span>
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1 text-blue-400">
                        {item.icon}
                      </div>
                      <span className="text-gray-400 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="pt-6 border-t border-gray-800">
                <h4 className="font-bold mb-4">Join Our Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-red-600 px-4 rounded-r-lg hover:opacity-90 transition-opacity">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PowerFit Gym. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>Made with passion for fitness enthusiasts</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <a
          href="#"
          className="group bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 hover:shadow-glow transition-all duration-300"
        >
          <Phone className="h-4 w-4 group-hover:animate-pulse" />
          <span className="font-semibold">Book a Tour</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;