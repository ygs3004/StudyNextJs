import Link from "next/link";

export default function Header() {
  return (
    <div >
        <Link href="/"><div> Home </div></Link>
        <Link href="/news"> <div> News </div></Link>
    </div>
  );
}
