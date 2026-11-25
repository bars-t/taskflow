# Taskflow Görev Yönetim Sistemi
Bu proje ekip içi görevleri takip etmek için Node.js ve Express kullanılarak hazırlanmış bir arka plan servisidir. Sistemde görev ekleme, listeleme, detay görme, güncelleme ve silme işlemleri yapılabilir.

Gelen istekleri konsola saat bilgisiyle yazdıran basit bir logger katmanı bulunmaktadır.

## Kurulum ve Çalıştırma
Projeyi bilgisayarınızda çalıştırmak için:

-Projeyi bilgisayarınıza klonlayın ve klasöre girin:
git clone https://github.com/bars-t/taskflow.git 
cd taskflow
-Gerekli bağımlılıkları yükleyin: 
    npm install
-Sunucuyu geliştirici modunda başlatın: 
    npm run dev
Sunucu http://localhost:3000 adresinde çalışır.

Sunucu varsayılan http://localhost:3000 adresinde çalışır.

## Kullanılabilir İstekler
- GET /tasks - Tüm görevleri listeler
- GET /tasks/:id - Belirli bir görevin detayını getirir
- POST /tasks - Yeni bir görev ekler
- PUT /tasks/:id - Var olan görevi günceller
- DELETE /tasks/:id - Görevi sistemden siler
