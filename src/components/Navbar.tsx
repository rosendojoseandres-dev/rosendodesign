"use client";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-transparent">
      <div className="container-max flex h-20 sm:h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/images/LOGO.svg" 
            alt="Logo Andres Rosendo" 
            className="h-6 w-auto sm:h-7" 
          />
          <span className="text-[16px] font-normal tracking-wide text-white">
            Andres Rosendo
          </span>
        </div>
        
        <a
          href="#contacto"
          onClick={handleScroll}
          className="rounded-full bg-white px-7 py-2.5 text-[14px] font-medium text-black transition hover:bg-white/90 sm:px-8 sm:text-[15px]"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
