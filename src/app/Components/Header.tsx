import NavigationBar from "./NavigationBar";

export default function Header() {
    return (
        <header className="bg-slate-100 text-black p-3 w-full fixed top-0">
            <NavigationBar/>
        </header>
    );
}