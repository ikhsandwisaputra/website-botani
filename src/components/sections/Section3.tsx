import React from "react"
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from "next/link";
// Impor ikon-ikon yang akan kita gunakan untuk setiap layanan
import { GiGardeningShears, GiSpade, GiPlantSeed, GiHomeGarage } from 'react-icons/gi';
// Daftar logo sponsor. Ganti dengan path dan nama file Anda.
const logos = [
    { id: 1, src: '/logos/logo1.svg', alt: 'Sponsor Logo 1' },
    { id: 2, src: '/logos/logo2.svg', alt: 'Sponsor Logo 2' },
    { id: 3, src: '/logos/logo3.svg', alt: 'Sponsor Logo 3' },
    { id: 4, src: '/logos/logo4.svg', alt: 'Sponsor Logo 4' },
    { id: 5, src: '/logos/logo5.svg', alt: 'Sponsor Logo 5' },
    { id: 6, src: '/logos/logo6.svg', alt: 'Sponsor Logo 6' },
];

// Mendefinisikan tipe untuk properti yang akan diterima komponen
interface ServiceCardProps {
    // Icon akan berupa komponen React, jadi kita gunakan React.ElementType
    Icon: React.ElementType;
    title: string;
    description: string;
}

const Sponsor: React.FC = () => {
  
        // Kita duplikasi array logo untuk menciptakan efek loop yang mulus
    const extendedLogos = [...logos, ...logos];

    return (
        <section className="bg-[#002720] py-10">
            {/* Kontainer utama yang menjadi bar kuning.
                - overflow-hidden: Menyembunyikan bagian dari track yang berada di luar.
                - group: Diperlukan untuk pause-on-hover (lihat di CSS).
                - mask-image: Trik untuk membuat efek fade di tepi kiri dan kanan.
            */}
            <div className="group w-full overflow-hidden bg-yellow-500 py-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                {/* Lintasan (track) yang akan dianimasikan.
                    - flex: Membuat semua logo berjajar.
                    - animate-scroll: Kelas kustom untuk animasi (kita definisikan di globals.css).
                    - group-hover:paused: Menghentikan animasi saat mouse berada di atas kontainer.
                */}
                <div className="flex animate-scroll group-hover:paused">
                    {/* Render logo yang sudah diduplikasi */}
                    {extendedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 mx-8">
                             {/* Menggunakan next/image untuk optimasi.
                               - filter & invert: Trik CSS untuk membuat gambar menjadi satu warna (hijau).
                               - Hapus filter jika SVG Anda sudah berwarna hijau.
                             */}
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150} // Sesuaikan ukuran logo Anda
                                height={40}
                                className="h-10 w-auto filter grayscale brightness-[0.2] invert-[0.3] sepia-[1] hue-rotate-[100deg]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
    return (
        // Kartu utama dengan gradient, border, padding, dan efek transisi
        <div className="flex flex-col bg-gradient-to-b from-green-500/10 to-transparent p-8 rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:border-yellow-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/5">
            {/* Ikon Layanan */}
            <Icon className="text-5xl text-yellow-500" />
            
            {/* Judul Layanan */}
            <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
            
            {/* Deskripsi Layanan */}
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {description}
            </p>

            {/* Tombol "Learn More" */}
            {/* mt-auto akan mendorong link ini ke bagian paling bawah kartu */}
            <Link href="#" className="mt-auto pt-4 flex items-center gap-2 text-yellow-500 font-semibold text-sm group">
                Learn More
                <FaArrowCircleRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
};

// Data layanan kita definisikan di sini
const servicesData = [
    {
        id: 1,
        Icon: GiGardeningShears,
        title: 'Garden Care',
        description: 'We provide top-notch garden care services to keep your green space beautiful and healthy.'
    },
    {
        id: 2,
        Icon: GiSpade,
        title: 'Lawn Care',
        description: 'Our lawn care solutions ensure a lush, green, and perfectly manicured lawn all year round.'
    },
    {
        id: 3,
        Icon: GiPlantSeed,
        title: 'Plant Store',
        description: 'Explore our wide variety of healthy and beautiful plants to find the perfect addition to your home.'
    },
    {
        id: 4,
        Icon: GiHomeGarage,
        title: 'Garden Design',
        description: 'Our experts will help you design a stunning and functional garden that reflects your personal style.'
    }
];

const Services: React.FC = () => {
    return (
        <section className='bg-[#002720] py-20'>
            <div className='container mx-auto px-4'>
                {/* Header Teks */}
                <div className='text-center text-white mb-16 max-w-2xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-bold'>
                        Service We Provide
                    </h1>
                    <p className='mt-4 text-gray-300'>
                        We are dedicated to offering a comprehensive range of
                        services to meet all your gardening and landscaping
                        needs with quality and expertise.
                    </p>
                </div>

                {/* Grid untuk Kartu Layanan */}
                {/* - grid-cols-1: 1 kolom di mobile
                    - sm:grid-cols-2: 2 kolom di tablet
                    - lg:grid-cols-4: 4 kolom di desktop
                */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            Icon={service.Icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
            
        </section>
    );
}

// [1] Mendefinisikan tipe data untuk setiap item statistik menggunakan TypeScript
// Ini membuat kode kita lebih aman dan mudah dipahami.
type StatItem = {
    value: string;
    label: string;
  };
  
  // [2] Menyimpan data statistik dalam sebuah array.
  // Jika Anda ingin menambah, mengubah, atau mengurangi statistik, cukup edit array ini.
  const statsData: StatItem[] = [
    { value: '256k+', label: 'Happy Customer' },
    { value: '98%', label: 'Client Testimonial' },
    { value: '308+', label: 'Type of Plant' },
    { value: '20+', label: 'Good Staff' },
  ];
  
  const Achieved: React.FC = () => {
    return (
      // [3] Section utama dengan background hijau tua gelap, sesuai referensi.
      <section className="bg-[#0A1D1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* [4] Container utama menggunakan Flexbox.
            - 'flex-col': Defaultnya, item akan tersusun vertikal (mobile-first).
            - 'lg:flex-row': Di layar besar (lg), susunan berubah menjadi horizontal.
            - 'items-center': Menyelaraskan item di tengah secara vertikal saat di mode 'row'.
            - 'gap-12 lg:gap-16': Memberi jarak antar elemen.
          */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:justify-between gap-12 lg:gap-16">
            
            {/* [5] Bagian Kiri: Judul Utama */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We Achieved Best
                <br />
                From Gardening
              </h2>
            </div>
  
            {/* [6] Bagian Kanan: Grid Statistik
              - 'grid grid-cols-2': Di layar kecil, tampilkan sebagai grid 2x2.
              - 'lg:grid-cols-4': Di layar besar, ubah menjadi grid 1x4 (berjajar).
              - 'gap-x-8 gap-y-12': Memberi jarak antar item statistik.
            */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full lg:w-auto">
              {/* [7] Melakukan 'mapping' dari array data untuk membuat elemen statistik secara dinamis.
                Ini adalah cara modern dan efisien untuk merender list di React.
              */}
              {statsData.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <p className="text-4xl font-bold tracking-tight text-[#D4AF37] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default function Section3() {
    return (
        <>
            <Sponsor />
            <Services />
            <Achieved/>
        </>
    )
}