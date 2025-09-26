// 1923 Çalıştay - Constants

// Sayfa Rotaları
export const ROUTES = {
  HOME: '/',
  ABOUT: '/biz-kimiz',
  DATETIME: '/tarih-mekan',
  COMMITTEES: '/komiteler',
  COMMITTEE_DETAIL: '/komiteler/:id',
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
    icon: '/images/kapakfoto/hukuk.png',
    moderators: [
      {
        name: 'Deniz Selçuk',
        photo: '/images/moderators/Deniz Selçuk_.jpg'
      },
      {
        name: 'Duru Bakan',
        photo: '/images/moderators/Duru Bakan_.jpg'
      }
    ],
    topics: [
      '1923-1927 dönemlerinde uygulanan İstiklal Mahkemeleri ve Takrir-i Sükûun Kanunu',
      'Tek partili rejim',
      'Cumhuriyet ve Anayasa Hukuku',
      'Cumhuriyet ve Medeni Hukuk',
      'Cumhuriyet ve Ceza Hukuku'
    ]
  },
  {
    id: 'psikoloji',
    name: 'Psikoloji',
    description: 'Toplumsal değişimin bireysel ve kolektif psikolojik etkileri',
    icon: '/images/kapakfoto/psikoloji.png',
    moderators: [
      {
        name: 'Asilzana Bozbay',
        photo: '/images/moderators/Asilzana Bozbay.jpg'
      },
      {
        name: 'Gülseren Bölükbaşı',
        photo: '/images/moderators/Gülseren Bölükbaşı_.jpg'
      }
    ],
    topics: [
      'Psikoloji Temelleri: Problem Çözme Süreci, Bilişsel Gelişim, Duygusal Gelişim',
      'Psikolojide Savaş: Savaşın Psikolojik Yıkımı, TSSB, Akut Stres Bozukluğu',
      'Savaş Sonrası Psikolojisi: Barış Süreçlerinin Psikolojik Önemleri',
      'Kolektif Belleğin Yeniden Yazımı',
      'Toplumsal Dönüşümün Birey Üzerindeki Etkisi',
      'Özgürlük ve Sorumluluk İkilemi',
      'Eşitlik İdeallerinin Ruhsal Yansımaları',
      'Eğitim ve Bilinçlenmenin Ruhsal Etkisi',
      'Otorite ve Liderlik Algısı'
    ]
  },
  {
    id: 'sosyoloji',
    name: 'Sosyoloji',
    description: 'Cumhuriyet\'in sosyal yapı ve toplumsal dönüşüm üzerindeki etkisi',
    icon: '/images/kapakfoto/sosyoloji.png',
    moderators: [
      {
        name: 'Rabia Başar Kaş ve Derin Efsa Çakır',
        photo: '/images/moderators/Rabia Başar Kaş ve Derin Efsa Çakır.jpg'
      }
    ],
    topics: [
      'Cumhuriyet ile birlikte kadınların iş ve eğitim hayatına atılması ve ekonomiye etkileri',
      'Okuma yazma oranının artışı ve sınıfsal farklılıkların ortadan kaldırılmasına yönelik çalışmalar',
      'Mustafa Kemal ATATÜRK\'\u00fcn "Ne mutlu Türk\'\u00fcm diyene!" sözü ve ulusal kimlik kavramı',
      'Cumhuriyetin ilanı ile birlikte ortaya çıkan laiklik ilkesinin toplum üzerindeki etkileri',
      'Halifeliğin ortadan kaldırılması ve meclis sistemine geçilme dönemi',
      'Mustafa Kemal ATATÜRK\'\u00fcn "Egemenlik, kayıtsız şartsız milletindir." sözünün halk iradesine etkisi',
      '1923\'ten sonra kadınlara seçme ve seçilme hakkı tanınması ile kadın-erkek eşitliği',
      'Dil devrimi, soyadı kanunu ve şapka kanunu ile Türk milletinin modernleşmesi'
    ]
  },
  {
    id: 'uluslararasi-iliskiler',
    name: 'Uluslararası İlişkiler',
    description: 'Türkiye\'nin uluslararası konumu ve diplomasi tarihçesi',
    icon: '/images/kapakfoto/uluslararası ilişkiler.png',
    moderators: [
      {
        name: 'Asya Ertuğrul',
        photo: '/images/moderators/Asya Ertuğrul_.jpg'
      },
      {
        name: 'Irmak Akman',
        photo: '/images/moderators/Irmak Akman.jpg'
      }
    ],
    topics: [
      'Osmanlı devletinin yıkımına doğru yapılan savaşlarda (1. Dünya Savaşı) ve Kurtuluş Savaşı\'nda dünya politikasındaki yerimiz',
      'Mondros Ateşkes antlaşmasından Lozan\'a doğru yapılan antlaşmalardaki uluslararası tutum',
      'Mustafa Kemal Atatürk\'\u00fcn dünya kamuoyundaki etkileri',
      'Yakın cumhuriyet tarihinde yaşanan iç olayların dış politikaya yansıyışı',
      'İkinci dünya savaşı hazırlık aşamasından sonuna kadar dış politikada yerimiz',
      'Almanya ve Türkiye arası işçi alışverişinin Almanya ile ilişkimize etkileri',
      'NATO tarihindeki yerimiz ve stratejik önemlerimiz',
      '15 Mart 2011 tarihli başlayan Suriye iç savaşında gösterilen tutumun uluslararası ilişkiler tarihindeki önemi',
      'Mavi Vatan meselesi'
    ]
  },
  {
    id: 'felsefe',
    name: 'Felsefe',
    description: 'Cumhuriyet düşüncesinin felsefi temelleri ve modern değerler',
    icon: '/images/kapakfoto/felsefe.png',
    moderators: [
      {
        name: 'H. Feyzan Sincar',
        photo: '/images/moderators/H. Feyzan Sincar.jpg'
      }
    ],
    topics: [
      'Cumhuriyet kelimesi aklınızda neleri çağrıştırıyor? Sizin cumhuriyet tanımınız nedir?',
      'Toplum ilerlerken dinden taviz verilmeli mi?',
      'Din, modern yaşamın ihtiyaçlarına göre yeniden yorumlanabilir mi?',
      'Cumhuriyet, çoğunluğun diktatörlüğüne dönüşebilir mi?',
      'Cumhuriyetin gücü, halkın çıkar çatışmalarından mı doğar?',
      'Cumhuriyet ortak iyiye mi, bireysel özgürlüğe mi dayanır?',
      'Cumhuriyet halkın yönetimi ise, Platon\'un kaygıları haklı mı?',
      'Platon\'un "ideal devlet" anlayışı ile cumhuriyet nasıl ilişkilendirilebilir?',
      'Halk iradesi her zaman hakikati yansıtabilir mi?',
      'Hakikat, çoğunluğun görüşünden bağımsız mıdır?'
    ]
  },
  {
    id: 'siyaset',
    name: 'Siyaset',
    description: 'Demokratik sistem, siyasi katılım ve vatandaşlık bilinci',
    icon: '/images/kapakfoto/siyaset.png',
    moderators: [
      {
        name: 'Efe Yanık',
        photo: '/images/moderators/Efe Yanık.jpg'
      },
      {
        name: 'Gülnisa Kayıran',
        photo: '/images/moderators/Gülnisa Kayıran.jpg'
      }
    ],
    topics: [
      'Milli Mücadele\'den Cumhuriyet\'e: Tek Millet, Azlınlık Hakları ve Kimlik Politikaları',
      'Laiklik İlkesi: Cumhuriyetin Temel Taşı mı, Tartışma Kaynağı mı?',
      'Cumhuriyetin Kuruluş Felsefesi, Siyasi Krizler ve Günümüze Yansımaları',
      'Saltık yapılara karşı verilen tepkisizlik',
      'GTA da polis yakalarken kısa sürede kaçarak kurtulmak',
      'Atatürk günümüz Türkiyesi ve siyasetini görseydi Samsun\'da Milli Mücadele\'ye devam etmek yerine pide yiyip evine geri döner miydi?'
    ]
  },
  {
    id: 'tarih',
    name: 'Cumhuriyet Tarihi',
    description: 'Cumhuriyet\'in kuruluş süreci ve tarihsel önemi',
    icon: '/images/kapakfoto/cumhuriyet tarihi.png',
    moderators: [
      {
        name: 'Berkan Bahadır Kışlakçı',
        photo: '/images/moderators/Berkan Bahadır Kışlakçı.jpg'
      },
      {
        name: 'Duru Elif Kurt',
        photo: '/images/moderators/Duru Elif Kurt_.jpg'
      }
    ],
    topics: [
      'Tarım toplumundan sanayi toplumuna geçişteki tarihsel etkiler',
      'Savaş Döneminden Cumhuriyet\'e: İnkılaplarla Yeniden Doğuş',
      'Cumhuriyet İdealinde Bir Lider: Mustafa Kemal ile Cumhuriyet Yolunda',
      'Cumhuriyetin İlk Yıllarında Toplum ve Devlet İlişkisi',
      '1928 Harf Devrimi sonrası millet mekteplerinin açılması, amacı, insanların eğitime teşvik edilmesi, tarihsel sonuçları',
      'Kadın hakları ve toplumsal eşitlikte Cumhuriyetin tarihten günümüze rolü',
      'Sömürgeciliğe karşıt hareketler ve Cumhuriyetin bu düzendeki rolü',
      'Gençliğe Emanet Cumhuriyet: Bugüne ve Geleceğe Yansıyan Miras'
    ]
  },
  {
    id: 'edebiyat',
    name: 'Edebiyat',
    description: 'Cumhuriyet dönemi edebiyatı ve kültürel dönüşüm',
    icon: '/images/kapakfoto/edebiyat.png',
    moderators: [
      {
        name: 'Adalet Nesrin Helvacı',
        photo: '/images/moderators/Adalet Nesrin Helvacı_.jpg'
      },
      {
        name: 'Sude Kemer',
        photo: '/images/moderators/Sude Kemer.jpg'
      }
    ],
    topics: [
      'Atatürk\'\u00fcn dil ve edebiyat anlayışı: Kültürel bağımsızlığın temeli mi?',
      'Cumhuriyet Dönemi edebiyatında kadın: Yeni bir kimlik mi, eski kalıpların devamı mı?',
      'Cumhuriyet Dönemi edebiyatı: Sanat mı, toplumsal görev mi?',
      'Halk için edebiyat mı? Aydın için edebiyat mı?',
      'İstiklal Marşı Cumhuriyet\'in geleceğine yazılmış bir şiir mi, savaş günlerinin hatırası mı?',
      'Milli edebiyat Dönemi eserlerinin şuanki edebiyatımıza etkisi',
      'Atatürk\'\u00fcn edebiyatımızdaki yeri ve önemi',
      'Ulusal edebiyat ve Türk edebiyatı arasındaki ilişki',
      'Türk edebiyatının dünya edebiyatındaki rolü'
    ]
  },
  {
    id: 'ekonomi',
    name: 'Ekonomi',
    description: 'Ekonomik kalkınma modelleri ve sosyal refah politikaları',
    icon: '/images/kapakfoto/ekonomi.png',
    moderators: [
      {
        name: 'Ayşe Ece Yavuz',
        photo: '/images/moderators/Ayşe Ece Yavuz.jpg'
      },
      {
        name: 'Edanur Emir',
        photo: '/images/moderators/Edanur Emir_.jpg'
      }
    ],
    topics: [
      'Sanayi İnkılabı\'nın Ulusal ve Uluslararası Ekonomik Etkileri',
      'Ülkeler Arası Ekonomik Rekabet: Korumacılık mı, serbest ticaret mi?',
      'Ulusal-Uluslararası Ekonomik Sıkıntılar ve Devlet Müdahelesi',
      '1994 ve 2001 Ekonomik Krizleri: Yapısal sorunlar mı, politik hatalar mı?',
      'Krizler toplumsal yapıyı nasıl etkiledi ve ekonomik politika önceliklerini değiştirdi mi?',
      'Kriz yönetiminde alınan önlemler uzun vadede sürdürülebilir miydi?',
      'Globalleşme ülkeler arasındaki ekonomik eşitsizliği azaltıyor mu?',
      'Globalleşme ekonomik krizleri hızlandırır mı yoksa yavaşlatır mı?',
      'Ülkeler kendi ekonomilerini globalleşmeye göre kontrol edebilir mi?'
    ]
  },
  {
    id: 'egitim',
    name: 'Eğitim',
    description: 'Eğitim reformları ve toplumsal gelişimdeki rolü',
    icon: '/images/kapakfoto/eğitim.png',
    moderators: [
      {
        name: 'Ece Gürlek',
        photo: '/images/moderators/Ece Gürlek_.jpg'
      },
      {
        name: 'Sude Dumlu',
        photo: '/images/moderators/Sude Dumlu_.jpg'
      }
    ],
    topics: [
      'Demokratik kültürün eğitimde sessiz kitlelere ulaşma yolları ne olabilir?',
      'Atatürk\'\u00fcn eğitim anlayışı, günümüz eğitim sistemi için örnek teşkil eder mi?',
      'Yaşayarak ve deneyimleyerek öğrenme, öğrencilerin sorgulama ve düşünme becerilerini nasıl etkiler?',
      'Günümüz eğitim sistemi gençleri bu yönde yeterince teşvik ediyor mu?',
      'Meslek liseleri, Cumhuriyet\'in kuruluşundaki misyonuna sadık kalabiliyor mu?',
      'Atatürk\'\u00fcn eğitim anlayışını günümüz eğitim sistemine nasıl uyarlayabiliriz?',
      'Cumhuriyetin ilk yıllarında kız çocuklarının eğitime katılımı nasıl ilerleme sağladı?',
      'Geleneksel disiplin kuralları ile çağdaş öğrenci merkezli yöntemlerin karşılaştırılması',
      'Farklı sosyoekonomik duruma sahip öğrenciler için fırsat eşitliği nasıl sağlanmalı?',
      'Okullar gençlerin toplumsal sorunlara duyarlılığını artırmalı. Yeterli mi?'
    ]
  },
  {
    id: 'teoloji',
    name: 'Teoloji',
    description: 'Din ve toplum ilişkisi, sekülerleşme süreci',
    icon: '/images/kapakfoto/teoloji.png',
    moderators: [
      {
        name: 'Hamza Zile',
        photo: '/images/moderators/Hamza Zile.jpg'
      },
      {
        name: 'Nisa Şayir',
        photo: '/images/moderators/Nisa Şayir.jpg'
      }
    ],
    topics: [
      'Mitolojik değerler ve Yunan demokrasinin arasındaki bağ nasıldır?',
      'Hz. Muhammed dönemindeki dini yönetim demokratik midir?',
      'Osmanlı\'nın son dönemimlerinden Türkiye Cumhuriyet\'in başına dinsel değerlerin değişimi?',
      'Din kavramı olmayan bir cumhuriyet tanrı etkisinde kalan yönetim modelinden daha meşru kılınabilir mi?',
      'Cumhuriyet ile yönetilen bir ülkede tinsel anlam nedir?',
      'Tanrı üzerine gerçekleşen yeni düşünce akımları demokrasiye etkisi nasıl olmuştur?',
      'Cumhuriyetin dini kimliği bireysel alana indirgemesi toplum kimliğinin oluşumunu nasıl etkilemiştir?',
      'Demokraside çoğulculuk mu laiklik mi önden gelir?',
      'Büyük bir nüfuza sahip dinlerin bireysel hayata çekinmesi çoğulculuk demokrasisine zıt mıdır?'
    ]
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
  email: '1923calistayik@gmail.com',
  phone: '0530 091 92 76',
  contact_person: 'İnsan Kaynakları Başkanı Şehnaz TORAK',
  address: 'İstinye Üniversitesi Topkapı Yerleşkesi',
  socialMedia: {
    instagram: 'https://instagram.com/1923calistayii',
    twitter: 'https://twitter.com/1923calistay',
    linkedin: 'https://linkedin.com/company/1923calistay'
  }
} as const;

// Etkinlik Bilgileri
export const EVENT_INFO = {
  name: '1923 Cumhuriyet Çalıştayı',
  date: '11-12 Ekim 2025',
  time: '09:00 - 17:00',
  location: 'İstinye Üniversitesi Topkapı Yerleşkesi',
  applicationDeadline: '12/10/2025',
  applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLScbzQzTGmaIlQNH_ZcO4uD3WeI_JYfGd3LmRwglHmMnWmOCtQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAacoGLcnCvBx3vJXg-OYa6Y5cxZBEM1dLOWcz1DT_cVgQ4AAgL0kIpJYtB3-fQ_aem_16ZZ4DUwToS5POlpOl-gMQ',
  basvuruForm: "https://docs.google.com/forms/d/e/1FAIpQLSdeMUBdCLb7e9R1PvV_ULtr0SyiBsB0yQU9PIoHowrSunLs7g/viewform",
} as const;

// Başvuru Ücretleri
export const APPLICATION_FEES = {
  normal: {
    price: 600,
    label: 'Normal Bireysel Başvuru',
    deadline: '05/10/2025',
    description: 'Standart başvuru ücreti'
  },
  normalDelegation: {
    price: 550,
    label: 'Normal Delegasyon Başvuru',
    deadline: '05/10/2025',
    description: 'Delegasyon başvurusu için özel fiyat'
  },
  late: {
    price: 800,
    label: 'Geç Başvuru',
    deadline: '12/10/2025',
    description: 'Son başvuru döneminde ek ücret'
  }
} as const;
