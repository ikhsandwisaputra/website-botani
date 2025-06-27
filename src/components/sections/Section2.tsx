'use client';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
// Impor komponen Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Impor modul Swiper yang akan kita gunakan
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardFeatures: React.FC = () => {
    return (
        // Section pembungkus dengan warna latar gelap dan padding vertikal
        <section className='bg-[#002720] py-20 px-4 sm:px-6 lg:px-8'>
            {/* Kontainer utama untuk mengatur layout dan jarak antar kolom */}
            <div className='container mx-auto flex flex-col lg:flex-row items-center gap-16'>
                {/* KOLOM KIRI: VISUAL (GAMBAR & OVERLAY) */}
                <div className='w-full lg:w-1/2'>
                    {/* Kontainer ini 'relative' untuk menjadi acuan posisi bagi elemen 'absolute' di dalamnya */}
                    <div className='relative'>
                        {/* Gambar Utama */}
                        <Image
                            src='/plant-shop.jpg' // GANTI DENGAN GAMBAR ANDA DI FOLDER /public
                            alt='Interior of a plant shop'
                            width={600}
                            height={400}
                            className='rounded-2xl object-cover w-full h-auto shadow-lg'
                        />

                        {/* Overlay 1: Tag Lokasi */}
                        <div className='absolute top-4 left-4 flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-lg shadow-md'>
                            <FaMapMarkerAlt className='text-green-700' />
                            <span className='font-semibold text-sm'>
                                123 Apple St, Edinburg
                            </span>
                        </div>

                        {/* Overlay 2: Kartu "25+ Years" */}
                        {/* Diposisikan 'absolute' dengan nilai bottom dan right negatif agar "keluar" dari gambar */}
                        <div className='absolute bottom-[-30px] right-[-20px] md:right-[-30px] bg-[#0A4D3B] p-6 rounded-2xl shadow-xl border-2 border-[#1E5E4E]'>
                            <p className='text-5xl font-bold text-yellow-500'>
                                25+
                            </p>
                            <p className='mt-1 text-gray-200'>
                                Years Of Experience
                            </p>
                            {/* Garis bawah dekoratif */}
                            <div className='mt-2 h-1 w-12 bg-yellow-500 rounded-full'></div>
                        </div>
                    </div>
                </div>

                {/* KOLOM KANAN: TEKS & CALL TO ACTION */}
                <div className='w-full lg:w-1/2 mt-16 lg:mt-0 text-white'>
                    <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
                        Where Plants Find Their People.
                    </h1>
                    <p className='mt-4 text-gray-300 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <button className='mt-8 bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105'>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

// Tentukan tipe data untuk properti 'plant'
interface Plant {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface PlantCardProps {
    plant: Plant;
}

const plantData = [
    {
        id: 1,
        name: 'Boncellensis',
        description: 'Very popular succulent plant.',
        image: '/plant1.jpg',
    },
    {
        id: 2,
        name: 'Monstera',
        description: 'Iconic and easy to care for.',
        image: '/plant2.jpg',
    },
    {
        id: 3,
        name: 'Calathea',
        description: 'Known for its beautiful leaves.',
        image: '/plant3.webp',
    },
];

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
    return (
        // Kontainer kartu dengan sudut membulat dan overflow hidden
        <div className="relative h-96 w-full rounded-xl overflow-hidden group shadow-lg">
            {/* Gambar Latar Belakang */}
            <Image
                src={plant.image}
                alt={plant.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Overlay Gradien untuk keterbacaan teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Konten Teks */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{plant.name}</h3>
                <p className="mt-1 text-gray-300">{plant.description}</p>
            </div>
        </div>
    );
};

const CardCarrousel: React.FC = () => {
    return (
        <>
            <section className='bg-[#002720] py-20'>
                <div className='container mx-auto px-4'>
                    {/* Judul dan Deskripsi */}
                    <div className='text-center text-white mb-12'>
                        <h1 className='text-4xl lg:text-5xl font-bold'>
                            Our Best Seller Plants
                        </h1>
                        <p className='mt-4 text-gray-300 max-w-2xl mx-auto'>
                            Here are some of our most popular plants, loved by
                            our customers for their beauty and resilience. Find
                            your new green friend today.
                        </p>
                    </div>

                    {/* Komponen Swiper Carousel */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={30} // Jarak antar slide
                        slidesPerView={1} // Default: 1 slide per tampilan (mobile)
                        // Breakpoints untuk tampilan di layar yang lebih besar
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        navigation // Mengaktifkan tombol navigasi (panah)
                        pagination={{ clickable: true }} // Mengaktifkan pagination dots
                        loop={true} // Membuat slider berputar tanpa henti
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className='pb-16' // Beri padding bawah untuk ruang pagination
                    >
                        {plantData.map((plant) => (
                            <SwiperSlide key={plant.id}>
                                <PlantCard plant={plant} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default function Section2() {
    return (
        <>
            <CardFeatures />
            <CardCarrousel />
        </>
    );
}
