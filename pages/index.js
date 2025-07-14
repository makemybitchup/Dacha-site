import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Добро пожаловать в DachaLine</h1>
      <p className="mb-4">Продажа мебели из ротанга и товаров для дачи и дома.</p>
      <Link href="/about" className="text-blue-500 underline">О нас</Link>
    </div>
  )
}