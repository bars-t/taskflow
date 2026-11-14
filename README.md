# Taskflow Görev Yönetim Sistemi
Bu proje ekip içi görevleri takip etmek için Node.js ve Express kullanılarak hazırlanmış bir arka plan servisidir. Sistemde görev ekleme, listeleme, detay görme, güncelleme ve silme işlemleri yapılabilir.

Gelen istekleri konsola saat bilgisiyle yazdıran basit bir logger katmanı bulunmaktadır.

## Kurulum ve Çalıştırma
Projeyi bilgisayarınızda çalıştırmak için:
1. Gerekli paketleri yükleyin:
npm install
2. Sunucuyu geliştirici modunda başlatın:
npm run dev

Sunucu varsayılan http://localhost:3000 adresinde çalışır.

## Kullanılabilir İstekler
- GET /tasks - Tüm görevleri listeler
- GET /tasks/:id - Belirli bir görevin detayını getirir
- POST /tasks - Yeni bir görev ekler
- PUT /tasks/:id - Var olan görevi günceller
- DELETE /tasks/:id - Görevi sistemden siler