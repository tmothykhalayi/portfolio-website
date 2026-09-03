import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-max max-w-2xl">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project in mind? Let's collaborate and create something amazing together!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary-600/10 border border-primary-600/30 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary-600/10 border border-primary-600/30 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-primary-600/10 border border-primary-600/30 rounded-lg focus:border-primary-600 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:timothy@example.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                    timothy@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Follow me on social media:</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-primary-600/10 hover:bg-primary-600/30 rounded-lg border border-primary-600/30 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
