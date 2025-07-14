import { useRouter } from 'next/router'

export default function Product() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Товар {id}</h1>
      <p className="mt-2">Описание, характеристики, цена и наличие.</p>
    </div>
  )
}