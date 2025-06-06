import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      console.log('Email submitted:', email);
    }, 1000);
  };

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
    <footer className="bg-black w-full px-16 py-[83px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1104px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[74%] max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col items-stretch max-md:mt-10">
                    <h3 className="text-white text-2xl font-bold">
                      Marijn Snoeren
                    </h3>
                    <p className="text-white text-base font-normal leading-6 mt-[39px] max-md:mr-[9px]">
                      UI/UX Designer & Frontend Developer helping businesses
                      create digital experiences that convert.
                    </p>
                    <div className="flex items-stretch gap-4 mt-[42px] max-md:mt-10">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.href}
                          className="hover:opacity-70 transition-opacity"
                          aria-label={link.alt}
                        >
                          <img
                            src={link.src}
                            alt={link.alt}
                            className="aspect-[0.96] object-contain w-[47px] shrink-0"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
                  <nav className="flex flex-col text-base text-white font-normal max-md:mt-10">
                    <h4 className="text-lg font-semibold leading-loose self-stretch">
                      Company
                    </h4>
                    {companyLinks.map((link, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="mt-8 first:mt-[35px] hover:text-gray-300 transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[43%] max-md:w-full max-md:ml-0">
                  <nav className="flex flex-col text-base text-white font-normal max-md:mt-10">
                    <h4 className="text-lg font-semibold leading-loose">
                      Services
                    </h4>
                    {serviceLinks.map((link, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="mt-7 first:mt-[38px] hover:text-gray-300 transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col text-base text-white font-semibold max-md:mt-10">
                    <h4 className="text-lg leading-loose">
                      Get Started
                    </h4>
                    <p className="font-normal leading-6 self-stretch mt-[41px] max-md:mt-10">
                      Ready to transform your digital presence? Let's discuss
                      your project.
                    </p>
                    <form onSubmit={handleEmailSubmit}>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black text-center mt-[31px] px-[23px] py-4 max-md:px-5 hover:bg-gray-100 transition-colors disabled:opacity-50 w-full"
                      >
                        {isSubmitting ? 'Sending...' : 'Afspraak Maken'}
                      </button>
                    </form>
                    <div className="text-sm leading-none mt-[25px]">
                      Email
                    </div>
                    <a 
                      href="mailto:hello@marijn.dev"
                      className="text-sm font-normal leading-none mt-4 hover:text-gray-300 transition-colors"
                    >
                      hello@marijn.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-stretch gap-5 text-sm text-white font-normal leading-none flex-wrap justify-between mt-[104px] max-md:max-w-full max-md:mt-10">
        <nav className="flex items-stretch gap-[26px]">
          {legalLinks.map((link, index) => (
            <a 
              key={index}
              href="#"
              className="hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="text-right">
          © 2025 Marijn Snoeren. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
