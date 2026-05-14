"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
  isRTL: boolean;
}

const translations = {
  en: {
    nav: {
      about: "Our Story",
      menu: "Menu",
      packages: "Packages",
      features: "Vibe",
      contact: "Visit Us",
      book: "Reserve Table",
    },
    hero: {
      title: "View Alquds Restaurant",
      titleAr: "طلة القدس",
      subtitle: "A breathtaking dining experience above the hills",
      viewMenu: "Explore Menu",
      reservePackage: "Reserve Package",
      whatsapp: "WhatsApp Booking",
    },
    about: {
      tag: "OUR LEGACY",
      title: "Where Heritage Meets Horizon",
      p1: "Perched majestically on the highest ridge of As-Salt's famous 60th Street, View Alquds Restaurant offers a soul-stirring panoramic vista that reaches all the way to Jerusalem. It's not just a destination; it's a luxury retreat designed for your moments.",
      p2: "We weave the profound values of Jordanian and Palestinian hospitality into an elevated culinary tapestry. Whether gathered with family at sunset, or enjoying our vibrant Shisha lounge, every detail echoes our ancestral heritage.",
      heritage: "Authentic Recipes",
      sunset: "Scenic Sunsets",
      hospitality: "Warm Hospitality",
    },
    menu: {
      tag: "CULINARY ART",
      title: "The Heritage Kitchen",
      viewFull: "View Details",
      orderNow: "Inquire Order",
      categories: {
        heritage: "Heritage Kitchen",
        grill: "The Grill",
        intl: "International Favorites",
        sweet: "Sweet Indulgence",
        shisha: "Shisha Lounge",
      },
    },
    packages: {
      tag: "CURATED EXPERIENCES",
      title: "Luxury Special Packages",
      subtitle: "Handcrafted settings tailored to elevate your most cherished celebrations.",
      bookBtn: "Book Now",
      guests: "Guests",
      group: "Group size",
      love: {
        name: "Love Package",
        desc: "A dreamy romantic setup for couples featuring curated flowers, candlelit table, sunset view priority, custom desserts, and a bespoke 3-course menu.",
        price: "JOD 75",
        items: ["Private candlelight setup", "Welcome Mocktails", "Premium Main Entree", "Signature Dessert Platters"],
      },
      winter: {
        name: "Winter Package",
        desc: "Gather around warm golden embers. Includes traditional outdoor heating setups, spiced hot drinks, fireside chestnuts, and slow-cooked heritage roasts.",
        price: "JOD 45",
        items: ["Fireside Luxury Seating", "Signature Salep & Cardamom Coffee", "Assorted Grilled Chestnuts", "Traditional Winter Platter"],
      },
      family: {
        name: "Family Gathering Package",
        desc: "The ultimate weekend lunch feast. Includes shared jumbo platters of Mansaf or Ouzi, endless appetizers, and unlimited Arabic coffee.",
        price: "JOD 120",
        items: ["Large Shared Main Platter", "10+ Heritage Appetizers", "Seasonal Fresh Fruits", "Bottomless Arabic Coffee & Tea"],
      },
      breakfast: {
        name: "Breakfast of the Elite (فطور الرواق)",
        desc: "Wake up to the morning fog rolling over the mountains. A royal spread of Levantine fresh morning delights, eggs cooked to order, and artisan cheeses.",
        price: "JOD 25",
        items: ["Fakhara Sunny-Side Eggs", "Artisan Mountain Cheeses", "Freshly Baked Taboon Bread", "Unlimited Mountain Sage Tea"],
      },
    },
    features: {
      tag: "THE ATMOSPHERE",
      title: "A Symphony of Moments",
      f1: "Panoramic Views",
      d1: "Stunning horizon overlooking the hills of Jerusalem and Palestinian valleys.",
      f2: "Outdoor Terraces",
      d2: "Luxury heated terrace seats optimized for magical sunset observation.",
      f3: "Family Gatherings",
      d3: "Spacious, quiet, and incredibly elegant family-friendly social areas.",
      f4: "Premium Shisha",
      d4: "Finest tobacco blends paired with high-end scenic lounge aesthetics.",
      f5: "Cultural Heritage",
      d5: "Inspired by traditional architecture with golden glow and modern comfort.",
      f6: "Epicurean Mastery",
      d6: "Chefs devoted to resurrecting age-old recipes with Michelin-style finesse.",
    },
    social: {
      tag: "SOCIAL WALL",
      title: "Capturing Moments @view_alquds",
      cta: "Follow on Instagram",
    },
    booking: {
      tag: "RESERVATION",
      title: "Secure Your Golden Hour",
      desc: "Pre-book the best scenic tables or luxurious bespoke packages for your arrival.",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        date: "Preferred Date",
        time: "Preferred Time",
        guests: "Number of Guests",
        package: "Select Package (Optional)",
        noPkg: "Table Only (A La Carte)",
        submit: "Confirm Booking",
      },
      modal: {
        success: "Reservation Successful!",
        desc: "We can't wait to welcome you above the clouds.",
        resId: "Reservation ID",
        note: "A confirmation summary has been sent to your WhatsApp.",
        close: "Close Window",
      },
    },
    contact: {
      tag: "FIND US",
      title: "Journey to the Summit",
      address: "60th Street (شارع الستين), As-Salt, Jordan",
      phone1: "+962 7 9811 1137",
      phone2: "+962 7 9180 8081",
      workingHours: "Everyday: 10:00 AM - 1:00 AM",
      email: "info@viewalquds.com",
      mapsCTA: "Get Directions",
    },
    footer: {
      rights: "All rights reserved.",
      by: "Designed for Royalty.",
    },
  },
  ar: {
    nav: {
      about: "حكايتنا",
      menu: "قائمة الطعام",
      packages: "الباقات الخاصة",
      features: "الأجواء",
      contact: "زيارتنا",
      book: "احجز طاولتك",
    },
    hero: {
      title: "View Alquds Restaurant",
      titleAr: "طلة القدس",
      subtitle: "تجربة طهي ساحرة تخطف الأنفاس فوق قمم الجبال",
      viewMenu: "استكشف القائمة",
      reservePackage: "احجز باقة",
      whatsapp: "حجز عبر واتساب",
    },
    about: {
      tag: "إرثُنا",
      title: "حيث تلتقي الأصالة بالأفق",
      p1: "يتربع مطعم طلة القدس بمهابة على أعلى قمة في شارع الستين الشهير بمدينة السلط، مانحاً زواره إطلالة بانورامية تأسر الروح تصل حتى حدود القدس الشريف. إنه ليس مجرد مطعم؛ بل ملاذ فاخر صُمم ليخلد لحظاتكم.",
      p2: "ننسج قيم الكرم الأردني والضيافة الفلسطينية المتأصلة في لوحة مذاقات راقية. سواء كنتم تجتمعون مع العائلة عند غروب الشمس، أو تستمتعون بأجواء صالة الشيشة الفاخرة، فإن كل تفصيل هنا يعكس تراث الأجداد العريق.",
      heritage: "وصفات أصيلة",
      sunset: "مشهد الغروب",
      hospitality: "كرم الضيافة",
    },
    menu: {
      tag: "فن الطهي",
      title: "المطبخ التراثي",
      viewFull: "عرض التفاصيل",
      orderNow: "استفسر عن الطبق",
      categories: {
        heritage: "المطبخ التراثي",
        grill: "المشاوي",
        intl: "الأطباق العالمية",
        sweet: "الحلويات",
        shisha: "صالة الشيشة",
      },
    },
    packages: {
      tag: "تجارب منسقة",
      title: "الباقات الفاخرة",
      subtitle: "أجواء مصممة بدقة ومخصصة لترتقي بأكثر احتفالاتكم تميزاً.",
      bookBtn: "احجز الآن",
      guests: "أشخاص",
      group: "حجم المجموعة",
      love: {
        name: "باقة الحب ❤️",
        desc: "تنسيق رومانسي حالم للأزواج يتميز بالورود المختارة، وطاولة على ضوء الشموع، وأولوية الإطلالة على الغروب، وحلويات مصممة وقائمة من 3 أطباق.",
        price: "75 د.أ",
        items: ["تنسيق خاص بضوء الشموع", "مشروبات ترحيبية فاخرة", "طبق رئيسي فاخر", "طبق حلويات مميز"],
      },
      winter: {
        name: "الباقة الشتوية ❄️",
        desc: "اجتمعوا حول جمر دافئ. تشمل تدفئة خارجية تقليدية، مشروبات ساخنة بالبهارات، كستناء مشوية على النار، ولحوم مطهوة ببطء.",
        price: "45 د.أ",
        items: ["جلسة فاخرة حول النار", "سحلب وقهوة بالهيل", "تشكيلة كستناء مشوية", "طبق شتوي تراثي مميز"],
      },
      family: {
        name: "باقة اللمة العائلية 👨👩👧",
        desc: "وليمة الغداء المثالية لنهاية الأسبوع. تشمل مناسف أو أوزي عملاقة للمشاركة، مقبلات لا تنتهي، وقهوة عربية مفتوحة.",
        price: "120 د.أ",
        items: ["سدر رئيسي كبير للمشاركة", "أكثر من 10 مقبلات تراثية", "فواكه موسمية طازجة", "قهوة وشاي لا محدود"],
      },
      breakfast: {
        name: "فطور الرواق (للأكابر) 🍳",
        desc: "استيقظوا على ضباب الصباح يعانق الجبال. تشكيلة ملوكية من فطور بلاد الشام، وبيض محضر بالطلب، وأجبان بلدية.",
        price: "25 د.أ",
        items: ["بيض فخار عيون بلدي", "أجبان بلدية من جبال السلط", "خبز طابون ساخن من الفرن", "شاي بالمرمية الجبلية غير محدود"],
      },
    },
    features: {
      tag: "الأجواء الساحرة",
      title: "سيمفونية من اللحظات",
      f1: "إطلالة بانورامية",
      d1: "أفق ساحر يطل على جبال القدس والوديان الفلسطينية الخلابة.",
      f2: "تراسات خارجية",
      d2: "مقاعد تراس دافئة وفاخرة مصممة بأفضل زاوية لمشاهدة الغروب الساحر.",
      f3: "جلسات عائلية",
      d3: "مناطق اجتماعية رحبة وهادئة وغاية في الأناقة تناسب العائلات.",
      f4: "شيشة فاخرة",
      d4: "أفضل خلطات التبغ منتقاة بعناية لتقدم في أجواء صالة راقية.",
      f5: "تراث ثقافي أصيل",
      d5: "تصميم مستوحى من العمارة التقليدية مع توهج ذهبي ولمسة عصرية.",
      f6: "إتقان الطهي الفريد",
      d6: "طهاة مكرسون لإحياء الوصفات القديمة بلمسات فندقية راقية.",
    },
    social: {
      tag: "جدار التواصل",
      title: "التقاط اللحظات @view_alquds",
      cta: "تابعنا على إنستغرام",
    },
    booking: {
      tag: "الحجوزات",
      title: "اضمن مقعدك الذهبي",
      desc: "احجز طاولتك بإطلالة ساحرة أو اختر باقتك المنسقة مسبقاً قبل وصولك.",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        date: "تاريخ الحجز",
        time: "ساعة الحجز",
        guests: "عدد الضيوف",
        package: "اختر الباقة (اختياري)",
        noPkg: "طاولة فقط (حسب الطلب)",
        submit: "تأكيد الحجز",
      },
      modal: {
        success: "تم الحجز بنجاح!",
        desc: "نتشوق لاستقبالكم فوق الغمام والضباب.",
        resId: "رقم الحجز",
        note: "تم إرسال ملخص تفاصيل الحجز إلى الواتساب الخاص بك.",
        close: "إغلاق النافذة",
      },
    },
    contact: {
      tag: "موقعنا",
      title: "رحلة نحو القمة",
      address: "شارع الستين، السلط، الأردن",
      phone1: "+962 7 9811 1137",
      phone2: "+962 7 9180 8081",
      workingHours: "يومياً: 10:00 صباحاً - 1:00 بعد منتصف الليل",
      email: "info@viewalquds.com",
      mapsCTA: "احصل على الاتجاهات",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      by: "صُمم للملوك والأكابر.",
    },
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar"); // Default to Arabic to match the user's preference

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (keyPath: string) => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        return keyPath; // Fallback
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
