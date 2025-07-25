// 1923 Çalıştay - Constants

// Sayfa Rotaları
export const ROUTES = {
  HOME: '/',
  ABOUT: '/biz-kimiz',
  DATETIME: '/tarih-mekan',
  COMMITTEES: '/komiteler',
  APPLICATION: '/basvuru',
  TEAM: '/ekibimiz',
  CONTACT: '/iletisim',
  SCHEDULE: '/akis'
} as const;

// Navigasyon Menüsü
export const NAVIGATION_ITEMS = [
  { label: 'Ana Sayfa', path: ROUTES.HOME },
  { label: 'Tarih & Mekan', path: ROUTES.DATETIME },
  { label: 'Biz Kimiz?', path: ROUTES.ABOUT },
  { label: 'Komiteler', path: ROUTES.COMMITTEES },
  { label: 'Başvuru', path: ROUTES.APPLICATION },
  { label: 'Ekibimiz', path: ROUTES.TEAM },
  { label: 'İletişim', path: ROUTES.CONTACT },
  { label: 'Akış', path: ROUTES.SCHEDULE }
] as const;

// Komiteler
export const COMMITTEES = [
  {
    id: 'hukuk',
    name: 'Hukuk',
    description: 'Cumhuriyet döneminin hukuki reformları ve modern hukuk sisteminin temelleri',
    icon: '⚖️'
  },
  {
    id: 'psikoloji',
    name: 'Psikoloji',
    description: 'Toplumsal değişimin bireysel ve kolektif psikolojik etkileri',
    icon: '🧠'
  },
  {
    id: 'sosyoloji',
    name: 'Sosyoloji',
    description: 'Cumhuriyet\'in sosyal yapı ve toplumsal dönüşüm üzerindeki etkisi',
    icon: '👥'
  },
  {
    id: 'uluslararasi-iliskiler',
    name: 'Uluslararası İlişkiler',
    description: 'Türkiye\'nin uluslararası konumu ve diplomasi tarihçesi',
    icon: '🌍'
  },
  {
    id: 'felsefe',
    name: 'Felsefe',
    description: 'Cumhuriyet düşüncesinin felsefi temelleri ve modern değerler',
    icon: '💭'
  },
  {
    id: 'siyaset',
    name: 'Siyaset',
    description: 'Demokratik sistem, siyasi katılım ve vatandaşlık bilinci',
    icon: '🏛️'
  },
  {
    id: 'tarih',
    name: 'Tarih',
    description: 'Cumhuriyet\'in kuruluş süreci ve tarihsel önemi',
    icon: '📚'
  },
  {
    id: 'edebiyat',
    name: 'Edebiyat',
    description: 'Cumhuriyet dönemi edebiyatı ve kültürel dönüşüm',
    icon: '✍️'
  },
  {
    id: 'ekonomi',
    name: 'Ekonomi',
    description: 'Ekonomik kalkınma modelleri ve sosyal refah politikaları',
    icon: '💰'
  },
  {
    id: 'egitim',
    name: 'Eğitim',
    description: 'Eğitim reformları ve toplumsal gelişimdeki rolü',
    icon: '🎓'
  }
] as const;

// Misyon & Vizyon Metinleri
export const MISSION_TEXT = `
Cumhuriyet'in bize kazandırdığı en temel değerlerden biri olan ifade özgürlüğünü esas alarak; gençlerin kendi düşüncelerini özgürce dile getirebildiği, farklı bakış açılarını saygıyla dinleyebildiği ve fikir alışverişinde bulunabildiği güvenli bir alan oluşturmak için çalışıyoruz.

Liseliler tarafından hayata geçirilen bu oluşum, gençlerin toplumsal konulara dair bilinç geliştirmelerini, aktif vatandaşlık anlayışıyla hareket etmelerini ve dayanışma kültürünü içselleştirmelerini teşvik eder.

Bizler, sadece konuşan değil aynı zamanda dinleyen, sorgulayan, düşünen ve üreten bir gençliğin parçası olmak istiyoruz.

Toplumsal sorunlara duyarlı, çözüm odaklı projelerle katkı sunan, hak temelli ve eşitlikçi bir yaklaşımla hareket eden bireyler olarak, Cumhuriyet değerlerini yaşatmayı ve yaygınlaştırmayı görev biliyoruz.
`;

export const VISION_TEXT = `
Cumhuriyet'i sadece geçmişin bir kazanımı değil, bugünün ve geleceğin ortak sorumluluğu olarak gören bir gençlik topluluğu oluşturmak en büyük hedefimizdir.

Hayalimiz, her gencin özgürce düşünebildiği, kendini ifade etmekten çekinmediği, fikirlerinin değer gördüğü bir toplum yapısına katkı sunan bir platforma dönüşmektir.

Farklılıkların zenginlik kabul edildiği, çok sesliliğin güç verdiği ve ortak aklın ön planda tutulduğu bir kültür inşa etmek istiyoruz.

Bu yolda; gençlerin kendi potansiyellerini keşfetmelerini destekleyen, demokratik katılımı önceleyen, haklara ve özgürlüklere duyarlı, sosyal sorumluluk sahibi bir nesil yetişmesine katkı sunmayı amaçlıyoruz.

Uzun vadede ise, bu platformun yerel ve ulusal düzeyde örnek teşkil eden, sürdürülebilir, ilham verici bir gençlik hareketi olmasını hedefliyoruz.
`;

// İletişim Bilgileri
export const CONTACT_INFO = {
  email: 'iletisim@1923calistay.org',
  phone: '+90 (XXX) XXX XX XX',
  address: 'Adres bilgisi eklenecek',
  socialMedia: {
    instagram: 'https://instagram.com/1923calistay',
    twitter: 'https://twitter.com/1923calistay',
    linkedin: 'https://linkedin.com/company/1923calistay'
  }
} as const;

// Etkinlik Bilgileri
export const EVENT_INFO = {
  name: '1923 Cumhuriyet Çalıştayı',
  date: '2024-XX-XX', // Gerçek tarih eklenecek
  time: 'XX:XX - XX:XX',
  location: 'Etkinlik mekanı belirlenecek',
  applicationDeadline: '2024-XX-XX'
} as const;
