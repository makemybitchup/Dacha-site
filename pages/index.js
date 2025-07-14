import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Home() {
  return (
    <>
      <Head>
        <title>DachaLine — мебель для дачи и дома</title>
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать в DachaLine</h1>
        <p className="mb-8">Мебель из ротанга и товары для дачи и дома</p>

        {/* Слайдер с фото магазина */}
        <Swiper spaceBetween={10} slidesPerView={1} className="mb-10">
          <SwiperSlide>
            <img src="/images/store1.jpg" alt="Фото магазина 1" className="rounded-xl shadow-md w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/store2.jpg" alt="Фото магазина 2" className="rounded-xl shadow-md w-full" />
          </SwiperSlide>
        </Swiper>

        {/* Каталог товаров */}
        <h2 className="text-2xl font-semibold mb-4">Каталог товаров</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((id) => (
            <div key={id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={`/images/product${id}.jpg`} alt={`Товар ${id}`} className="mb-2 rounded" />
              <h3 className="text-lg font-medium">Товар {id}</h3>
              <p className="text-sm text-gray-500">Описание товара {id}</p>
              <p className="font-bold mt-1">Цена: 9990 ₽</p>
              <button className="mt-2 px-4 py-1 bg-black text-white rounded">В корзину</button>
            </div>
          ))}
        </div>

        {/* Слайдер с достижениями */}
        <h2 className="text-2xl font-semibold mb-4">Наши достижения</h2>
        <Swiper spaceBetween={10} slidesPerView={2}>
          <SwiperSlide>
            <img src="/images/award1.jpg" alt="Грамота 1" className="rounded-xl shadow-md w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/award2.jpg" alt="Грамота 2" className="rounded-xl shadow-md w-full" />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  )
}
