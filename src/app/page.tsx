"use client";

import Image from "next/image";
import { useState } from "react";
import Chat from "./components/Chat";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='font-sans'>
      {/* Disclaimer */}
      <div className='bg-yellow-300 text-center p-4 text-sm'>
        <p>
          Dies ist eine Demo-Website. Kein echter Service wird hier angeboten.
        </p>
      </div>

      {/* Header */}
      <header className='bg-gray-800 text-white'>
        <div className='container mx-auto flex justify-between items-center p-4'>
          <div className='text-xl font-bold'>MontageProfi</div>
          <nav className='hidden md:flex space-x-6'>
            <a href='#services' className='hover:text-yellow-300'>
              Services
            </a>
            <a href='#contact' className='hover:text-yellow-300'>
              Kontakt
            </a>
          </nav>
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-white focus:outline-none'
            >
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className='md:hidden bg-gray-800 text-white p-4 space-y-4'>
            <a href='#services' className='block hover:text-yellow-300'>
              Services
            </a>
            <a href='#contact' className='block hover:text-yellow-300'>
              Kontakt
            </a>
          </nav>
        )}
      </header>

      {/* Hero Banner */}
      <section className='relative bg-gray-800 text-white h-[500px] flex items-center justify-center'>
        <Image
          src='https://picsum.photos/1600/900'
          alt='Montage Banner'
          layout='fill'
          objectFit='cover'
          className='opacity-50'
        />
        <div className='absolute text-center'>
          <h1 className='text-4xl font-bold mb-4'>
            Hochwertige Montagedienstleistungen
          </h1>
          <p className='text-xl mb-6'>
            Fassaden, Dächer, Fenster, Türen und mehr
          </p>
          <a
            href='#'
            onClick={(e) => e.preventDefault()}
            className='bg-yellow-500 text-gray-800 py-2 px-4 rounded hover:bg-yellow-600'
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </section>

      {/* Services */}
      <section id='services' className='container mx-auto py-16 px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Unsere Dienstleistungen
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-100 p-6 text-center'>
            <h3 className='text-2xl font-semibold mb-4'>Fassadenmontage</h3>
            <p>
              Professionelle Montage von Fassaden für Wohn- und Gewerbegebäude.
            </p>
          </div>
          <div className='bg-gray-100 p-6 text-center'>
            <h3 className='text-2xl font-semibold mb-4'>Dachmontage</h3>
            <p>Hochwertige Dachlösungen für alle Arten von Gebäuden.</p>
          </div>
          <div className='bg-gray-100 p-6 text-center'>
            <h3 className='text-2xl font-semibold mb-4'>Fenster & Türen</h3>
            <p>Installation und Austausch von Fenstern und Türen.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='bg-gray-800 text-white py-16 px-4'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Kontaktieren Sie uns</h2>
          <p className='mb-4'>
            Für Anfragen und weitere Informationen erreichen Sie uns unter:
          </p>
          <a
            href='#'
            onClick={(e) => e.preventDefault()}
            className='bg-yellow-500 text-gray-800 py-2 px-4 rounded hover:bg-yellow-600'
          >
            info@montageprofi.de
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-400 py-6 text-center text-sm'>
        <p>
          &copy;{" "}
          <a
            href='https://www.linkedin.com/in/corak/'
            className='hover:text-yellow-500'
          >
            Tarkan Corak
          </a>{" "}
          | Diese Seite ist eine Demo-Website.
        </p>
      </footer>
      <Chat />
    </div>
  );
}
