import Link from "next/link";
import {MainHeader} from "@/components/main-header";

export default function Home() {
    console.log("Server Console")

    return (
        <main>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/meals">Meals</Link></p>
            <p><Link href="/meals/share">Share Meal</Link></p>
            <p><Link href="/community">Community</Link></p>
        </main>
    );
}
