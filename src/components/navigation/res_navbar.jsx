import Close from "../icons/close";

export default function ResNavbar({ toggle, handleMenu }) {
    return (
        <section className={ toggle ? "w-full h-screen z-50 top-0 right-0 absolute block bg-white md:hidden" : "hidden md:hidden" }>
            <section className="flex items-center justify-end px-4 py-2">
                <button onClick={ handleMenu }><Close /></button>
            </section>
            <nav className="flex flex-col px-8 py-4 space-y-10 font-bold text-[2.8rem]">
                <a href="#" onClick={ handleMenu }>projects</a>
                <a href="#" onClick={ handleMenu }>technologies</a>
                <a href="#" onClick={ handleMenu }>about me</a>
                <a href="#" onClick={ handleMenu }>contact me</a>
            </nav>
        </section>
    )
}