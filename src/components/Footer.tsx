import React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/d1772f00b82b875c3a2e1f09baee7424bb5aa983?placeholderIfAbsent=true", alt: "LinkedIn", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/ae50fc2c4852b7022ccee488bd326c28f5f5df44?placeholderIfAbsent=true", alt: "Twitter", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/150c483475b55e35f9d44612ae0af65fe353a0f5?placeholderIfAbsent=true", alt: "GitHub", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4bfaf042babf4f058c6e929fb8210c61/62a447e2abf396d76e38290094af677a713ec472?placeholderIfAbsent=true", alt: "Dribbble", href: "#" }
  ];
  const companyLinks = ["About Me", "Projecten", "Reviews", "Contact"];
  const serviceLinks = ["UI/UX Design", "Frontend Development"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="bg-black text-white w-full py-20">
      <div className="max-w-6xl mx-auto w-full px-8 max-md:px-4 flex flex-col gap-12">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="min-w-[220px] flex-1">
            <h3 className="text-2xl font-bold mb-4">Marijn Snoeren</h3>
            <p className="text-base mb-8">UI/UX Designer & Frontend Developer helping businesses create digital experiences that convert.</p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} aria-label={link.alt} className="hover:opacity-70 transition-opacity">
                  <img src={link.src} alt={link.alt} className="w-10 h-10 object-contain" />
                </a>
              ))}
            </div>
          </div>
          <div className="min-w-[140px] flex-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((link, idx) => (
                <a key={idx} href="#" className="hover:text-gray-300 transition-colors">{link}</a>
              ))}
            </nav>
          </div>
          <div className="min-w-[140px] flex-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link, idx) => (
                <a key={idx} href="#" className="hover:text-gray-300 transition-colors">{link}</a>
              ))}
            </nav>
          </div>
          <div className="min-w-[220px] flex-1">
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="mb-4">Ready to transform your digital presence? Let's discuss your project.</p>
            <a href="#" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors mb-4">Afspraak Maken</a>
            <div className="text-sm font-normal">Email</div>
            <a href="mailto:hello@marijn.dev" className="text-sm font-normal hover:text-gray-300 transition-colors">hello@marijn.dev</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center border-t border-zinc-800 pt-8 mt-8 text-sm">
          <nav className="flex gap-6">
            {legalLinks.map((link, idx) => (
              <a key={idx} href="#" className="hover:text-gray-300 transition-colors">{link}</a>
            ))}
          </nav>
          <div className="text-right mt-4 md:mt-0">© 2025 Marijn Snoeren. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
