"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, UtensilsCrossed, Globe, IceCream, Wind, Sparkles } from "lucide-react";

interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn?: string;
  descAr?: string;
  price: string;
  isPopular?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  heritage: [
    { id: "h1", nameEn: "Traditional Mansaf (Meat)", nameAr: "منسف لحم بلدي تقليدي", descEn: "Slow cooked local meat in fermented jameed, served on turmeric rice and shrak bread with roasted pine nuts.", descAr: "لحم بلدي مطهو بالجميد الكركي، يقدم فوق الأرز البلدي وخبز الشراك مع الصنوبر واللوز المقلي.", price: "14.50", isPopular: true },
    { id: "h2", nameEn: "Mansaf Chicken", nameAr: "منسف دجاج", descEn: "Roasted tender half chicken in rich jameed yogurt sauce.", descAr: "نصف دجاجة محمرة ومطبوخة بمرق الجميد الغني والمذاق الأصيل.", price: "8.50" },
    { id: "h3", nameEn: "Baked Ouzi", nameAr: "أوزي صرر", descEn: "Spiced rice mixed with peas, nuts, and meat, baked inside delicate puff pastry.", descAr: "أرز متبل مع البازلاء والمكسرات واللحم المفروم، يخبز داخل عجينة الباف اللذيذة.", price: "9.00" },
    { id: "h4", nameEn: "Freekeh with Roasted Meat", nameAr: "فريكه باللحم المحمر", descEn: "Green cracked wheat slow-simmered and topped with spiced slow-roasted meat.", descAr: "فريكه خضراء مطهوة ببطء، تعلوها قطع اللحم المحمر والمتبل بالمكسرات.", price: "11.00" },
    { id: "h5", nameEn: "Meat Sajia", nameAr: "صاجية لحم بلدي", descEn: "Sizzling pan of tender lamb strips cooked with onions, colored peppers, and special spices.", descAr: "مقلاة ساخنة من قطع لحم الخروف البلدي مع البصل والفلفل الملون والبهارات الخاصة.", price: "12.50", isPopular: true },
    { id: "h6", nameEn: "Chicken Fakhara", nameAr: "فخارة دجاج بالفرن", descEn: "Slow roasted spiced chicken chunks inside an earthen pot with potatoes.", descAr: "قطع الدجاج المتبلة والمطهوة داخل فخارة فخارية بالفرن مع البطاطا والخضار.", price: "8.00" },
    { id: "h7", nameEn: "Zinger Fakhara", nameAr: "فخارة زنجر بالجبنة", descEn: "Crispy zinger chicken baked with liquid cheddar cheese and special cream sauce.", descAr: "قطع زنجر مقرمشة مطبوخة بجبن التشيدر السائل والكريمة داخل الفخارة.", price: "7.50" },
  ],
  grill: [
    { id: "g1", nameEn: "Mixed Grills Plateau", nameAr: "مشكل مشاوي فاخر", descEn: "Elegant selection of Kebab, Shish Tawook, and Shaff meat skewers.", descAr: "تشكيلة ملكية من أسياخ الكباب البلدي والشيش طاووق والشقف المشوية على الفحم.", price: "13.00", isPopular: true },
    { id: "g2", nameEn: "Kebab Halabi", nameAr: "كباب حلبي", descEn: "Ground lamb with parsley, garlic, and tomatoes grilled over hot coals.", descAr: "كباب لحم بلدي مفروم مع البقدونس والثوم، يقدم مع صلصة الطماطم المشوية.", price: "10.50" },
    { id: "g3", nameEn: "Shish Tawook", nameAr: "شيش طاووق", descEn: "Marinated chicken breast cubes grilled to perfection, served with garlic dip.", descAr: "مكعبات صدور الدجاج المتبلة بخلطتنا الخاصة والمشوية، تقدم مع كريم الثوم.", price: "8.50" },
    { id: "g4", nameEn: "Lamb Shaff Skewers", nameAr: "شقف لحم خروف", descEn: "Tender lamb cubes marinated and grilled over charcoal embers.", descAr: "قطع لحم خروف طرية متبلة ومشوية بإتقان على جمر الفحم.", price: "12.00" },
    { id: "g5", nameEn: "Kofta Trays (Tahini/Tomato)", nameAr: "صواني كفتة (طحينية أو بندورة)", descEn: "Baked minced meat tray layered with your choice of rich tahini or tangy tomato sauce.", descAr: "صينية لحم مفروم مخبوزة بالفرن مع اختيارك من الطحينية الغنية أو صلصة البندورة.", price: "9.00" },
    { id: "g6", nameEn: "Eggplant Manzalah", nameAr: "منزلة باذنجان", descEn: "Layered baked eggplant with minced spiced meat and fresh tomato sauce.", descAr: "طبقات الباذنجان المخبوز مع اللحم المفروم المتبل وصلصة الطماطم الطازجة.", price: "7.50" },
  ],
  intl: [
    { id: "i1", nameEn: "Italian Lasagna", nameAr: "لازانيا إيطالية", descEn: "Layers of pasta sheet, beef bolognese, and creamy bechamel, baked with mozzarella.", descAr: "طبقات من الباستا، لحم البولونيز، البشاميل الكريمي، ومخبوزة بجبنة الموزاريلا.", price: "8.00" },
    { id: "i2", nameEn: "Fettuccine Alfredo Chicken", nameAr: "فيتوتشيني ألفريدو بالدجاج", descEn: "Fettuccine pasta tossed in creamy parmesan alfredo sauce with chicken and mushrooms.", descAr: "مكرونة فيتوتشيني بصلصة الفريدو الكريمية مع جبن البارميزان، الدجاج والفطر.", price: "8.50", isPopular: true },
    { id: "i3", nameEn: "Spaghetti Bolognese", nameAr: "سباغيتي بولونيز", descEn: "Classic spaghetti with slow-simmered minced beef sauce and herbs.", descAr: "السباغيتي الكلاسيكية مع صلصة اللحم المفروم المطهوة ببطء مع الأعشاب الإيطالية.", price: "7.00" },
    { id: "i4", nameEn: "Golden Zinger Meals", nameAr: "وجبات زنجر ذهبية", descEn: "Spicy, crispy chicken breast fillet, served with golden fries and coleslaw.", descAr: "صدر دجاج حار ومقرمش، يقدم مع البطاطا الذهبية وسلطة الملفوف.", price: "6.50" },
    { id: "i5", nameEn: "Chicken Tenders Platter", nameAr: "طبق تشيكن تندرز مقرمش", descEn: "Crisp breaded chicken breast strips served with honey mustard dipping.", descAr: "شرائح صدور الدجاج المقرمشة تقدم مع صوص العسل والخردل المميز.", price: "6.00" },
    { id: "i6", nameEn: "Kids Meal Mini Burger", nameAr: "وجبات أطفال (ميني برغر)", descEn: "Kid-friendly beef slider or nuggets, served with juice box and fries.", descAr: "برغر لحم صغير أو ناجتس يناسب الأطفال، يقدم مع علبة عصير وبطاطا.", price: "4.50" },
  ],
  sweet: [
    { id: "s1", nameEn: "Royal Kunafa", nameAr: "كنافة نابلسية ملوكية", descEn: "Crunchy pastry melted with Nabulsi cheese and sweetened with warm blossom syrup.", descAr: "كنافة مقرمشة بالجبنة النابلسية المذابة والمحلاة بالقطر الدافئ وماء الزهر.", price: "4.50", isPopular: true },
    { id: "s2", nameEn: "Traditional Um Ali", nameAr: "أم علي بالمكسرات", descEn: "Warm bread pudding rich in condensed milk, nuts, coconut, and heavy cream.", descAr: "حلوى رقائق الخبز الدافئة بالحليب والمكسرات وجوز الهند والقشطة الطازجة.", price: "5.00" },
    { id: "s3", nameEn: "Salti Shaba'niyat", nameAr: "شعبانيات سلطية أصلية", descEn: "Authentic traditional local Salti sweet pastry filled with fresh cream and nuts.", descAr: "الحلويات الشعبية السلطية التقليدية المحشوة بالقشطة والمكسرات والقطر.", price: "4.00" },
    { id: "s4", nameEn: "San Sebastian Cheesecake", nameAr: "سان سباستيان تشيز كيك", descEn: "Burnt crustless creamy cheesecake topped with warm Belgian milk chocolate.", descAr: "تشيز كيك محروق كريمي القوام، يغرق بصلصة الشوكولاتة البلجيكية الدافئة.", price: "5.50", isPopular: true },
    { id: "s5", nameEn: "Premium Waffles & Crepes", nameAr: "وافل وكريب فاخر", descEn: "Fresh made to order with your choice of Nutella, Pistachio, or fruits.", descAr: "يحضر طازجاً حسب الطلب مع النوتيلا، صوص الفستق الحلبي أو الفواكه الطازجة.", price: "5.50" },
    { id: "s6", nameEn: "Signature Red Velvet Milkshake", nameAr: "ريد فيلفت ميلك شيك", descEn: "Creamy shake blended with actual red velvet cake crumbles and cream cheese whip.", descAr: "ميلك شيك كريمي مخفوق مع فتات كعكة الريد فيلفت وتغطية كريمة الجبنة.", price: "4.50" },
  ],
  shisha: [
    { id: "sh1", nameEn: "Two Apples Nakhlah", nameAr: "شيشة تفاحتين فاخر (نخلة)", descEn: "Classic, timeless rich tobacco blend for traditional connoisseurs.", descAr: "النكهة الكلاسيكية الغنية التي يعشقها المتذوقون التقليديون.", price: "6.00", isPopular: true },
    { id: "sh2", nameEn: "Lemon Mint Refresher", nameAr: "شيشة ليمون ونعناع منعش", descEn: "Cooling and crisp summer blend providing absolute fresh smoke.", descAr: "مزيج منعش وبارد يوفر سحبة دخان غنية بالحيوية.", price: "6.00" },
    { id: "sh3", nameEn: "Blueberry Mist Extra", nameAr: "شيشة بلوبيري (توت بري)", descEn: "Sweet, aromatic blueberry flavor with a touch of ice cool.", descAr: "نكهة التوت البري العطرية والحلوة مع لمسة من البرودة الخفيفة.", price: "7.00" },
    { id: "sh4", nameEn: "View Alquds Special Blend", nameAr: "شيشة خلطة طلة القدس الخاصة", descEn: "Our signature master blend combining secret fruits and pure mint coolness.", descAr: "خلطتنا الحصرية والسرية التي تجمع بين الفواكه الاستوائية وبرودة النعناع.", price: "8.50", isPopular: true },
  ],
};

export default function Menu() {
  const { t, language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("heritage");

  const categories = [
    { id: "heritage", label: t("menu.categories.heritage"), icon: <UtensilsCrossed size={18} /> },
    { id: "grill", label: t("menu.categories.grill"), icon: <Flame size={18} /> },
    { id: "intl", label: t("menu.categories.intl"), icon: <Globe size={18} /> },
    { id: "sweet", label: t("menu.categories.sweet"), icon: <IceCream size={18} /> },
    { id: "shisha", label: t("menu.categories.shisha"), icon: <Wind size={18} /> },
  ];

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#0c0b09]">
      {/* Design Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,146,45,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 block">
            {t("menu.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal">
            {t("menu.title")}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-5 mx-auto" />
        </div>

        {/* Sticky category tabs wrapper */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-6 mb-12 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-3 md:gap-4">
          {categories.map((cat) => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 cursor-pointer border ${
                  active
                    ? "bg-gold-400 text-[#0e0c0a] border-gold-400 shadow-[0_4px_20px_rgba(212,146,45,0.3)]"
                    : "bg-white/[0.02] border-white/[0.08] text-beige-200/70 hover:text-gold-300 hover:border-gold-500/30"
                }`}
              >
                <span className={active ? "text-[#0e0c0a]" : "text-gold-400"}>{cat.icon}</span>
                <span className="font-tajawal">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid with AnimatePresence */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuData[activeTab].map((item, idx) => {
                const name = language === "ar" ? item.nameAr : item.nameEn;
                const desc = language === "ar" ? item.descAr : item.descEn;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="group flex flex-col border-b border-white/[0.06] pb-6 hover:border-gold-400/30 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <h4 className="text-lg md:text-xl font-semibold text-beige-100 font-tajawal group-hover:text-gold-300 transition-colors flex items-center gap-2">
                        {name}
                        {item.isPopular && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gold-400/10 text-gold-400 border border-gold-400/20">
                            <Sparkles size={10} className="mr-1" />
                            {isRTL ? "مميز" : "Chef's Choice"}
                          </span>
                        )}
                      </h4>
                      {/* Dotted separator */}
                      <div className="flex-grow border-b border-dotted border-beige-200/20 mx-2 h-0 min-w-[20px] hidden sm:block" />
                      <span className="text-gold-400 font-bold font-outfit whitespace-nowrap">
                        {item.price} {isRTL ? "د.أ" : "JOD"}
                      </span>
                    </div>
                    {desc && (
                      <p className="text-sm text-beige-300/60 font-light leading-relaxed line-clamp-2 font-tajawal group-hover:text-beige-300/90 transition-colors">
                        {desc}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA bottom to menu booking */}
        <div className="mt-16 text-center">
          <p className="text-sm text-beige-300/50 italic font-serif mb-4">
            * {isRTL ? "تخضع الأسعار لضريبة المبيعات وخدمة الصالة الفاخرة" : "Prices are subject to sales tax and luxury lounge service charge."}
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-gold-400 font-bold hover:text-gold-300 transition-colors pb-1 border-b border-gold-400/50 hover:border-gold-300 group"
          >
            <span className="font-tajawal">{t("menu.orderNow")}</span>
            <span className={`transform group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
