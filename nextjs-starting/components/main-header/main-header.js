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
                    꿀맛사전
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">음식</Link>
                        </li>
                        <li>
                            <Link href="/community">커뮤니티</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}