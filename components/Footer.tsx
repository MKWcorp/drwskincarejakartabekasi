import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faTiktok,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-800 text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/logo_drwskincare.png" 
                alt="DRW Skincare - Produk Kecantikan Skincare & Perawatan Kulit Terbaik" 
                width={300}
                height={100}
                className="h-16 w-auto"
                quality={100}
                unoptimized
              />
            </div>
            <p className="text-gray-300 mb-4">
              Solusi perawatan kulit terbaik dengan produk berkualitas dan konsultasi profesional.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 w-5 h-5" />
                <div>
                  <a href="https://wa.me/6285790795910" className="text-gray-300 hover:text-white transition-colors">
                    0857-9079-5910
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faTiktok} className="text-white w-5 h-5" />
                <a href="https://www.tiktok.com/@griyacantikshovia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  @griyacantikshovia
                </a>
              </div>

              {/* Shopee */}
              <div className="flex items-center space-x-3">
                <Image 
                  src="/shopee.ico" 
                  alt="Shopee" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
                <a href="https://shopee.co.id/drwskincare_onlinehop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Drwskincare_Onlinehop
                </a>
              </div>

              {/* Tokopedia */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faShoppingBag} className="text-green-400 w-5 h-5" />
                <a href="https://www.tokopedia.com/drwskincareasli" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  drwskincareasli
                </a>
              </div>

              {/* Facebook Personal */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-400 w-5 h-5" />
                <a href="https://www.facebook.com/shovia.parmawati.2025" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Shovia Parmawati
                </a>
              </div>

              {/* Facebook Fan Page */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-400 w-5 h-5" />
                <a href="https://www.facebook.com/GriyaCantikShovia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Griya Cantik Shovia
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-400 w-5 h-5" />
                <a href="https://instagram.com/griya_cantik_shovia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  @griya_cantik_shovia
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Lokasi Kami</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8456!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e7eaf2!2sJakarta!5e0!3m2!1sid!2sid!4v1635123456789!5m2!1sid!2sid" 
                width="100%" 
                height="200" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48 md:h-56"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 DRW Skincare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;