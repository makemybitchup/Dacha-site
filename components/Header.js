import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">DachaLine</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Главная</Link>
        <Link href="/catalog" className="hover:underline">Каталог</Link>
        <Link href="/about" className="hover:underline">О нас</Link>
        <Link href="/contacts" className="hover:underline">Контакты</Link>
        <Link href="/reviews" className="hover:underline">Отзывы</Link>
        <Link href="/cart" className="font-semibold">🛒</Link>
      </nav>
    </header>
  )
}

