import './globals.css'
import '../lib/fontawesome'
import { Inter } from 'next/font/google'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://drwskincarejakarta.com'),
  title: 'DRW Skincare - Produk Kecantikan Skincare & Perawatan Kulit Terbaik',
  description: 'DRW Skincare - Pusat kecantikan dan perawatan kulit terpercaya. Menyediakan produk skincare berkualitas, treatment profesional, dan konsultasi dengan dokter berpengalaman. Melayani Jakarta dan Bekasi.',
  keywords: 'DRW Skincare, klinik kecantikan jakarta, produk skincare jakarta, perawatan kulit bekasi, dokter kulit jakarta, facial jakarta, treatment anti aging, skincare profesional, lokasi DRW skincare, klinik kecantikan bekasi',
  authors: [{ name: 'DRW Skincare' }],
  creator: 'DRW Skincare',
  publisher: 'DRW Skincare',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo_drwskincare_square.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://drwskincarejakarta.com',
    siteName: 'DRW Skincare',
    title: 'DRW Skincare - Pusat Kecantikan & Perawatan Kulit Terpercaya',
    description: 'DRW Skincare - Pusat kecantikan dan perawatan kulit terpercaya. Menyediakan produk skincare berkualitas dan treatment profesional oleh dokter berpengalaman.',
    images: [
      {
        url: '/logo_drwskincare_square.png',
        width: 1200,
        height: 1200,
        alt: 'DRW Skincare - Pusat Kecantikan & Perawatan Kulit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRW Skincare - Pusat Kecantikan Terpercaya',
    description: 'Pusat kecantikan dan perawatan kulit terpercaya dengan produk skincare berkualitas dan dokter berpengalaman.',
    images: ['/logo_drwskincare_square.png'],
  },
  alternates: {
    canonical: 'https://drwskincarejakarta.com',
  },
  other: {
    'geo.region': 'ID-JK',
    'geo.placename': 'Jakarta',
    'geo.position': '-6.2088;106.8456',
    'ICBM': '-6.2088, 106.8456',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "DRW Skincare",
    "description": "Produk kecantikan skincare dan perawatan kulit profesional dengan dokter berpengalaman",
    "url": "https://drwskincarejakarta.com",
    "logo": "https://drwskincarejakarta.com/logo_drwskincare_square.png",
    "image": "https://drwskincarejakarta.com/logo_drwskincare_square.png",
    "telephone": "+62-858-5255-5571",
    "email": "info@drwskincare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DRW Skincare Pusat",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "10110",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jakarta"
      },
      {
        "@type": "City", 
        "name": "Bekasi"
      },
      {
        "@type": "City",
        "name": "Depok"
      },
      {
        "@type": "City",
        "name": "Tangerang"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "dr. Wahyu Triasmara, M.Kes AAAM, AIFO-K",
      "jobTitle": "Dokter & Founder DRW Skincare"
    },
    "medicalSpecialty": [
      "Dermatology",
      "Cosmetic Medicine",
      "Anti-Aging Treatment"
    ],
    "serviceType": [
      "Facial Treatment",
      "Anti Aging Treatment",
      "Acne Treatment", 
      "Skin Whitening",
      "Skincare Products",
      "Beauty Consultation"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [
      "https://wa.me/6285790795910"
    ]
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE" />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}