export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-transparent">
      <div className="container-max flex h-20 sm:h-24 items-center justify-between">
        <span className="text-[16px] font-semibold tracking-wide text-white">
          Andres Rosendo
        </span>
        
        <a
          href="#contacto"
          className="rounded-full bg-white px-7 py-2.5 text-[14px] font-medium text-black transition hover:bg-white/90 sm:px-8 sm:text-[15px]"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
