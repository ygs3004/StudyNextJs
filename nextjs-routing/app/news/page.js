import Link from "next/link";

export default function News() {return (
    <div id="home">
      <h1>news</h1>
        <Link href="/news/1"><div>뉴스1</div></Link>
        <Link href="/news/2"><div>뉴스2</div></Link>
        <Link href="/news/3"><div>뉴스3</div></Link>
    </div>
  );
}
