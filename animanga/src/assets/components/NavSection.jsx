import { navItems } from "../constants"
const NavSection = () => {
  return (
        <nav className="top-0 z-50 py-3 px-4" style={{ backgroundColor: '#60C0D8' }}>
            <div className="container px-4 relative text-sm">
                <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0">
                    <h1 className="text-4xl tracking-tight font-bold text-white">AniManga</h1>
                </div>
                <ul className="hidden lg:flex ml-auto mr-auto space-x-12 text-white font-bold text-xl">
                    {navItems.map((items, index) => (
                    <li key={index}>
                        <a href={items.href}>{items.label}</a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
  );
}

export default NavSection;
