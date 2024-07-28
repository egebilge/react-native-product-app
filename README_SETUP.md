# Proje Kurulumu ve Çalıştırma Talimatları

### Gereksinimler

1. **Paket Yöneticisi Kurulumu:**

```bash
# Aşağıdaki komutlardan birini kullanarak bağımlılıkları kurun:
yarn install
npm install
pnpm install
bun install
```

2. **iOS Bağımlılıklarının Kurulumu:**

```bash
cd ios
pod install
cd ..
```

3. **Proje Başlatma:**

```bash
# Cache sıfırlayarak projeyi başlatın:
npx react-native start --reset-cache

# veya Android için:
npx react-native run-android

# veya iOS için:
npx react-native run-ios
```

### Özellikler ve Detaylar

- **Genel:**

  - Tüm proje için font olarak "Helvetica" kullanıldı.
  - Modüler bir klasör yapısı oluşturuldu.

- **Header:**

  - Profil ikonuna dropdown menü eklendi.
  - Giriş işlemi simüle edildi.

- **Splash Screen:**

  - Rastgele bir AI ile oluşturulmuş splash screen eklendi.

- **Icon:**

  - Rastgele ikonlar eklendi.

- **Tab Bar:**

  - Ortadaki ikona tıklanınca ayarlar sayfasına gidiyor, buradan dil değiştirilebilir.

- **Profile:**

  - Giriş yaptıktan sonra sağ üstte bulunan profil ikonuna ve ardından dil bölümüne tıklayarak ayarlar sayfasına ulaşabilirsiniz.

- **Content Detail:**

  - Markdown desteği eklendi.

- **ErrorBoundary:**

  - Uygulama çöktüğünde gösterilecek "ErrorBoundaryFallbackComponent" eklendi.
  - Rastgele içerik ve lottie animasyon kullanıldı.

- **.env Ayarlaması:**

  - .env dosyası ayarlandı.

- **Localization:**

  - Türkçe ve İngilizce dilleri eklendi.

- **Dil:**

  - Ayarlar sayfasından dil değiştirilebilir.

- **Theme:**
  - Light ve Dark modları config olarak eklendi.

* Herhangi bir sorun için [contact@egebilge.dev](mailto:contact@egebilge.dev)'den bana ulaşabilirsiniz.
* [https://main.egebilge.dev/](https://main.egebilge.dev/)'den dokümantasyonlarıma ulaşabilirsiniz.
* [https://shop.egebilge.dev/](https://shop.egebilge.dev/)'den next.js ve shadcn ui ile oluşturulmuş e-ticaret siteme ulaşabilirsiniz.
