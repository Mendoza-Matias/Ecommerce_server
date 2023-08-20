

const Header = () => {
  return (
    <nav className="w-4/5 h-20 px-16 py-5 ml-24 mt-10 rounded-full bg-primary justify-between items-center gap-2.5 inline-flex">
  <div className=" w-[133px] h-[18px] relative">
    <a className="left-0 top-0 absolute text-zinc-100 text-base font-normal uppercase">Destacados</a>
    <a className="left-[110px] top-0 absolute text-zinc-100 text-base font-normal uppercase">Catalogo</a>
  </div>
  <div className="w-[133px] h-[18px] relative">
    <a className="left-0 top-0 absolute text-zinc-100 text-base font-normal uppercase">Sing In</a>
    <a className="w-16 h-[18px] left-[69px] top-0 absolute">
      <div className="left-0 top-0 absolute text-zinc-100 text-base font-normal uppercase">Card</div>
    </a>
  </div>
</nav>
  )
}

export default Header