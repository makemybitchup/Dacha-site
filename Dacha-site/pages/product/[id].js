import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2">Товар {id}</h1>
      <p>Описание, цена, наличие, доставка: 2–3 дня</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Добавить в корзину</button>
    </div>
  );
}
