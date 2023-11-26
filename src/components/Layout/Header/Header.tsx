function Header() {
  return (
    <div className="flex justify-between bg-white h-[50px] w-full px-3 items-center sticky top-0">
      <a href="https://www.hurtopony.pl/" className="text-[28px]">
        <span className="text-[#ff0000] font-[700]">HURT</span>OPONY
      </a>
      <a
        href="https://github.com/SkorczanFFF/hurtopony-kalkulator"
        className="text-[#ff0000] opacity-50 hover:opacity-100 duration-150 font-[500] -mt-[1px]"
      >
        GitHub
      </a>
    </div>
  );
}

export default Header;
