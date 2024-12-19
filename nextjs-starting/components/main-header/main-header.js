import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href="/public">
                    <Image src={logoImg} alt="음식" priority/>
                    Foodies
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Food</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}