import Image from "next/image";
import logo from "../favicon.ico";

export default function NavigationBar() {
    const navData = ['Home', 'About', 'Our Service', 'Reach Us']
    return (
        <nav className="w-full flex p-3 justify-between">
            <section className="w-fit">
                <Image 
                    src={logo}
                    alt="Web Logo"
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
            </section>
            <section className="w-fit">
                <ul className="flex">
                    {navData.map((value, index) => (
                        <li 
                        className="mr-8 font-semibold"
                        key={index}>
                            <a href={(value == 'Home') ? '/' : value.replace(' ', '-')}>{value}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </nav>
    );
}