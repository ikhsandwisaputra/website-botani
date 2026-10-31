import React from 'react';
import Image from 'next/image';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section className='relative overflow-hidden'>
            {/* Gambar Latar Belakang (Tidak berubah) */}
            <Image
                src='/background-leaves.jpg'
                alt='Leafy background'
                layout='fill'
                objectFit='cover'
                className='z-0'
                priority
            />

            {/* 1. Lapisan Overlay Gradien (MODIFIKASI DI SINI) */}
            {/* Menggunakan gradien dari atas (from-transparent) ke bawah (to-[#002720])
                - bg-gradient-to-b: Membuat gradien ke arah bawah (bottom).
                - from-transparent: Mulai dari transparan di bagian atas.
                - via-[#002720]/40: Warna transisi hijau pudar di tengah (opsional, tapi memperhalus).
                - to-[#002720]: Warna hijau pekat di bagian bawah.
            */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#002720]/40 to-[#002720] z-10'></div>

            <div className='relative z-20 container mx-auto px-6 lg:px-8 pt-28 pb-16'>
                <div className='flex flex-col items-center lg:gap-8'>
                    <div className='w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0'>
                        {/* 2. Warna Teks Diubah Menjadi Putih */}
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight shadow-sm'>
                          Find You Lovely Planst Today.
                        </h1>
                        <p className='mt-4 text-lg text-gray-200 max-w-xl mx-auto lg:mx-0'>
                            Discover a wide range of beautiful and healthy
                            plants to bring nature into your home and workspace.
                            Freshness delivered to your door.
                        </p>

                        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            {/* Tombol utama tidak perlu diubah, sudah kontras */}
                            <button className='w-full sm:w-auto bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105'>
                                Call Us Now
                            </button>

                            {/* 3. Warna Border dan Teks Tombol Sekunder Diubah */}
                            <button className='w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105'>
                                <AiFillPlayCircle size={24} />
                                Watch Our Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Komponen kecil untuk badge fitur agar kode tidak berulang (DRY principle)
const FeatureBadge: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
    <div className={`absolute bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm ${className}`}>
        <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>{text}</span>
        </div>
    </div>
);

const CardSatu = () => {
    return (
        <>
            <section className='bg-[#002720] py-20 px-4'>
                {/* 1. KARTU PEMBUNGKUS UTAMA */}
                {/* Div ini sekarang HANYA sebagai 'positioning context' (relative), tanpa background atau overflow. */}
                <div className='relative max-w-5xl mx-auto'>
                    {/* 2. LATAR BELAKANG KARTU (SEKALIGUS "TOPENG") */}
                    {/* Div inilah yang memiliki background, sudut membulat, dan overflow-hidden.
                   Ini akan memotong semua elemen di dalamnya (yaitu lingkaran).
                */}
                    <div className='absolute inset-0 bg-gradient-to-br from-[#105a49] to-[#0a4d3b] rounded-2xl shadow-2xl overflow-hidden'>
                        {/* 3. LINGKARAN DEKORATIF DIPINDAHKAN KE SINI */}
                        {/* Sekarang ia menjadi anak dari div "topeng", sehingga akan terpotong dengan rapi. */}
                        <div className='hidden lg:block absolute bottom-[-160px] right-[-50px] w-[400px] h-[400px] bg-[#c77b11] rounded-full'></div>
                    </div>

                    {/* 4. KONTAINER KONTEN UTAMA */}
                    {/* Diberi 'relative' dan 'z-10' agar berada di atas div latar belakang. */}
                    <div className='relative z-10 flex flex-col lg:flex-row p-8 md:p-12'>
                        {/* Kolom Kiri: Testimoni & Info Klien (Tidak ada perubahan di sini) */}
                        <div className='w-full lg:w-3/5 lg:pr-10'>
                            <div className='flex items-center gap-2'>
                                <div className='flex text-yellow-400'>
                                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{' '}
                                    <FaStar />
                                </div>
                                <span className='text-sm font-semibold'>
                                    (5/5)
                                </span>
                            </div>
                            <p className='mt-4 text-gray-200 leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam.
                            </p>
                            <hr className='my-6 border-white/20' />
                            <div className='flex items-center gap-4'>
                                <Image
                                    src='/client-avatar.jpg'
                                    alt='Estelle Darcy'
                                    width={50}
                                    height={50}
                                    className='rounded-full'
                                />
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        Estelle Darcy
                                    </h3>
                                    <p className='text-gray-300 text-sm'>
                                        Our Client
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Placeholder untuk gambar (Tidak ada perubahan di sini) */}
                        <div className='w-full lg:w-2/5 mt-10 lg:mt-0'>
                            <div className='lg:hidden relative h-80 w-full'>
                                <Image
                                    src='/calathea-plant.png'
                                    alt='Calathea Plant'
                                    layout='fill'
                                    objectFit='contain'
                                    className='z-10'
                                />
                                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#c77b11]/50 rounded-full z-0'></div>
                            </div>
                        </div>
                    </div>

                    {/* 5. GAMBAR TANAMAN (TETAP SEPERTI SEMULA) */}
                    {/* Karena parent-nya (pembungkus utama) tidak punya overflow-hidden, ia tetap bebas "keluar".
                   Diberi z-index lebih tinggi (z-20) agar di atas segalanya.
                */}
                    <div className='hidden lg:block absolute bottom-0 right-[-50px] w-[450px] h-[450px] z-20'>
                        <Image
                            src='/calathea-plant.png'
                            alt='Calathea Plant'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    {/* Badge Fitur (diposisikan relatif terhadap pembungkus utama) */}
                    <div className='relative z-30'>
                        <FeatureBadge
                            text='Good Quality Plant'
                            className='hidden md:flex top-[-300px] right-[26%]'
                        />
                        <FeatureBadge
                            text='24/7 Fast Service'
                            className='hidden md:flex top-[-150px] right-[40%]'
                        />
                        <FeatureBadge
                            text='Quick Payment'
                            className='hidden md:flex top-[-350px] right-[10%]'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default function Section1() {
    return (
        <>
            <Hero />
            <CardSatu />
        </>
    );
}
