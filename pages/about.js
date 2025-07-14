import Layout from '../components/Layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>О нас — DachaLine</title>
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">О нас</h1>
        <p className="text-lg">
          Мы — компания DachaLine, специализируемся на продаже стильной мебели из ротанга и товаров для дачи и дома. 
          Работаем по всей России, доставляем в течение 2–3 дней.
        </p>
        <p className="mt-4 text-lg">
          Наша цель — сделать ваш отдых на даче комфортным и красивым. Мы отбираем только качественные товары, проверенные временем.
        </p>
      </main>
    </Layout>
  )
}
