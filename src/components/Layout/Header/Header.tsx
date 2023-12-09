function Header() {
  return (
    <div className="flex justify-between bg-white h-[50px] w-full px-3 items-center sticky top-0">
      <a
        href="https://www.hurtopony.pl/"
        className="text-[27px] -mt-1 font-[300]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-red font-[800] text-[28px]">HURT</span>OPONY
      </a>
      <a
        href="https://github.com/SkorczanFFF/hurtopony-kalkulator"
        className="text-grey duration-150 font-[500] -mt-[1px] opacity-70 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="github.svg" alt="GitHub" />
      </a>
    </div>
  );
}

export default Header;
