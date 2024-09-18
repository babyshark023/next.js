// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <nav>
        <ul>
          <li>
            <Link href="/link1">Link 1</Link>
          </li>
          <li>
            <Link href="/link2">Link 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
