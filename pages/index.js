import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moja Strona</title>
      </Head>
      <main>
        <h1>Witaj na stronie mojej imprezy!</h1>
        <p>Wgraj zdjęcia i filmy z imprezy:</p>
        <img src="/static/images/zdj1.jpg" alt="Zdjęcie z imprezy" />
        <a
          href="https://drive.google.com/drive/folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Załaduj pliki</button>
        </a>
      </main>
    </div>
  )
}
import Head from 'next/head'
