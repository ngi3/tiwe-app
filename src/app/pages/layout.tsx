import Nav from "../components/Nav";
import Header from "../components/Header";
export default function PagesLayout({ children,
}: Readonly< {
  children: React.ReactNode;
}>)  {
    return(
        <>
        {/* <Header/> */}
        <div className="flex ">
            {/* Sidebar Nav : largeur fixe, scroll interne */}
              <aside className="fixed w-full border-r border-gray-300 bg-white ">
              <Nav />
            </aside>  

            
            {/* Contenu principal : prend tout l'espace restant pl-64 */}
            <main className="mt-24 w-full">
              {children}
            </main>
        </div>
        </>
    )
}