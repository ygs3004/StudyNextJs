import Link from "next/link";
import logoImg from "@/assets/logo.png";

export function MainHeader(){
    return (
        <header>
            <Link href="/">
                <img src={logoImg.src} alt="음식"/>
            </Link>

            <nav>
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
    )
}