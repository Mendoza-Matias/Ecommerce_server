import { Link } from "react-router-dom"

const Navegacion = () => {
    return (
        <>
            <nav className="w-4/5 h-20 px-16 py-5 ml-24 mt-10 rounded-full bg-primary justify-between items-center gap-2.5 inline-flex">
                <div className=" w-[133px] h-[18px] relative">
                    <Link to={'/'} className="left-0 top-0 absolute text-zinc-100 text-base font-normal uppercase">Inicio</Link>
                    <Link to={'/Login'} className="left-[110px] top-0 absolute text-zinc-100 text-base font-normal uppercase">Ingresar</Link>
                </div>
                <div className="w-[133px] h-[18px] relative">
                    <Link to={'/Register'} className="left-5 top-0 absolute text-zinc-100 text-base font-normal uppercase">Registrarse</Link>
                    
                </div>
            </nav>
        </>
    )
}

export default Navegacion;