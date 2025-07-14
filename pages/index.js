import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DachaLine — мебель для дачи и дома</title>
      </Head>

      {/* ✅ Убрали ограничение ширины и отступы */}
      <main className="w-full py-8">

        <div className="w-full text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">Добро пожаловать в DachaLine</h1>
          <p className="text-lg">Мебель из ротанга и товары для дачи и дома</p>
        </div>

        {/* ✅ Баннер на всю ширину */}
        <Image
          src="/images/banner.jpg"
          width={1920}
          height={600}
          alt="Баннер магазина"
          className="w-full object-cover mb-10"
        />

        {/* Каталог товаров */}
        <h2 className="text-3xl font-semibold mb-4 px-4">Каталог товаров</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={`/images/product${id}.jpg`}
                alt={`Товар ${id}`}
                width={600}
                height={400}
                className="mb-2 rounded"
              />
              <h3 className="text-lg font-medium">Товар {id}</h3>
              <p className="text-sm text-gray-500">Описание товара {id}</p>
              <p className="font-bold mt-1">Цена: 9990 ₽</p>
              <button className="mt-2 px-4 py-1 bg-black text-white rounded">В корзину</button>
            </div>
          ))}
        </div>

        {/* Достижения */}
        <div className="max-w-5xl mx-auto px-4">
  <h2 className="text-2xl font-semibold mb-4">Наши достижения</h2>
  <Swiper spaceBetween={10} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
    <SwiperSlide>
      <Image
        src="/images/award1.jpg"
        alt="Грамота 1"
        width={800}
        height={500}
        className="rounded-xl shadow-md w-full"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/award2.jpg"
        alt="Грамота 2"
        width={800}
        height={500}
        className="rounded-xl shadow-md w-full"
      />
    </SwiperSlide>
  </Swiper>
</div>

      </main>
    </Layout>
  )
}
