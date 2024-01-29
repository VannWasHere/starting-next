import Image from "next/image";
import logo from "../favicon.ico";

export default function NavigationBar() {
    const navData = ['Stories', 'Listen', 'Team', 'Tools']
    return (
        <nav className="w-full flex p-3 justify-between">
            <section className="flex w-fit">
                <Image 
                    src={logo}
                    alt="Web Logo"
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
                <h1 className="text-2xl font-semibold">.Design</h1>
            </section>
            <section className="w-fit">
                <ul className="flex">
                    {navData.map((value, index) => (
                    <section>
                        <div>
                            <li 
                            className="mr-8 font-semibold flex flex-col"
                            key={index}>
                                <a className="transition ease-in-out hover:text-rose-400 duration-300" 
                                href={(value == 'Stories') ? '/' : value.replace(' ', '-')}>{value}</a>
                            </li>
                        </div>
                    </section>
                    ))}
                </ul>
            </section>
        </nav>
    );
}