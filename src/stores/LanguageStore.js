import { defineStore } from "pinia";

export const useLanguages = defineStore('languages', {
    state: () => ({
        languageOptions: [
            "English", "Español", "Français", "Yoruba", "中国人", "日本語", "عربي", "Русский", "हिंदी"
        ],
        displayText: {
            navbar: [
                "Features",
                "Case Studies",
                "English",
                "Support",
                "Get a demo",
                "Start your free trial"
            ],
            Sector1: [
                "Unleash the Power of Data",
                "Step into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.",
                "Start Your Free Trial",
                "Learn more"
            ]
        },
        languages: {
            English: {
                navbar: [
                    "Features",
                    "Case Studies",
                    "English",
                    "Support",
                    "Get a demo",
                    "Start your free trial"
                ],
                Sector1: [
                    "Unleash the Power of Data",
                    "Step into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.",
                    "Start Your Free Trial",
                    "Learn more"
                ]
            },
            Español: {
                navbar: [
                    "Características",
                    "Estudios de caso",
                    "Español",
                    "Apoyo",
                    "Obtenga una demostración",
                    "Comienza tu prueba gratuita"
                ],
                Sector1: [
                    "Libere el poder de los datos",
                    "Da un paso hacia el futuro con nuestras soluciones de IA de última generación. Libere el potencial del aprendizaje automático para innovar, optimizar y transformar sus procesos comerciales.",
                    "Comience su prueba gratuita",
                    "Más información"
                ]
            },
            Français: {
                navbar: [
                    "Caractéristiques",
                    "Etudes de cas",
                    "Anglais",
                    "Soutien",
                    "Obtenez une démo",
                    "Démarrez votre essai gratuit"
                ],
                Sector1: [
                    "Libérez la puissance des données",
                    "Entrez dans le futur avec nos solutions d’IA de pointe. Libérez le potentiel du machine learning pour innover, optimiser et transformer vos processus métier.",
                    "Commencez votre essai gratuit",
                    "Apprendre encore plus"
                ]
            },
            Yoruba: {
                navbar: [
                    "Awọn ẹya ara ẹrọ",
                    "Iwadi Ọran",
                    "Gẹẹsi",
                    "Atilẹyin",
                    "Gba demo",
                    "Bẹrẹ idanwo ọfẹ rẹ"
                ],
                Sector1: [
                    "Tu Agbara ti Data silẹ",
                    "Igbesẹ si ọjọ iwaju pẹlu awọn solusan AI ti-ti-aworan wa. Ṣe igbasilẹ agbara ti ẹkọ ẹrọ lati ṣe imotuntun, mu dara, ati yi awọn ilana iṣowo rẹ pada.",
                    "Bẹrẹ Idanwo Ọfẹ Rẹ",
                    "Kọ ẹkọ diẹ si"
                ]
            },
            中国人: {
                navbar: [
                    "特征",
                    "案例研究",
                    "英语",
                    "支持",
                    "获取演示",
                    "开始免费试用"
                ],
                Sector1: [
                    "释放数据的力量",
                    "借助我们最先进的人工智能解决方案步入未来。释放机器学习的潜力来创新、优化和转变您的业务流程。",
                    "开始免费试用",
                    "了解更多"
                ]
            },
            日本語: {
                navbar: [
                    " Tokuchō",
                    "`kēsusutadi",
                    " eigo",
                    "sapōto",
                    "`demo o nyūshu' ",
                    "muryō toraiaru o hajimete kudasai"
                ],
                Sector1: [
                    "データの力を解き放つ",
                    "当社の最先端の AI ソリューションで未来への一歩を踏み出しましょう。機械学習の可能性を解き放ち、ビジネス プロセスを革新、最適化、変革します。",
                    "無料トライアルを開始する",
                    "もっと詳しく知る"
                ]
            },
            عربي: {
                navbar: [
                    "سمات",
                    "دراسات الحالة",
                    "إنجليزي",
                    "يدعم",
                    "الحصول على العرض التوضيحي",
                    "ابدأ تجربتك المجانية"
                ],
                Sector1: [
                    "أطلق العنان لقوة البيانات",
                    "انطلق نحو المستقبل من خلال حلول الذكاء الاصطناعي المتطورة لدينا. أطلق العنان لإمكانات التعلم الآلي لابتكار عمليات عملك وتحسينها وتحويلها.",
                    "ابدأ تجربتك المجانية",
                    "يتعلم أكثر"
                ]
            },
            Русский: {
                navbar: [
                    "Функции",
                    "«Кейсы»",
                    "Английский",
                    "Поддерживать",
                    "«Получить демо»",
                    "«Начните бесплатную пробную версию»"
                ],
                Sector1: [
                    "Раскройте потенциал данных",
                    "Шагните в будущее с нашими современными решениями в области искусственного интеллекта. Раскройте потенциал машинного обучения для инноваций, оптимизации и преобразования ваших бизнес-процессов.",
                    "Начните бесплатную пробную версию",
                    "Узнать больше"
                ]
            },
            हिंदी: {
                navbar: [
                    "विशेषताएँ",
                    "मामले का अध्ययन",
                    "अंग्रेज़ी",
                    "सहायता",
                    "डेमो प्राप्त करें",
                    "अपना नि: शुल्क परीक्षण शुरू करो"
                ],
                Sector1: [
                    "डेटा की शक्ति को उजागर करें",
                    "हमारे अत्याधुनिक एआई समाधानों के साथ भविष्य में कदम रखें। अपनी व्यावसायिक प्रक्रियाओं को नया करने, अनुकूलित करने और बदलने के लिए मशीन लर्निंग की क्षमता का उपयोग करें।",
                    "अपना नि: शुल्क परीक्षण शुरू करो",
                    "और अधिक जानें"
                ]
            }
        }
    }),
actions: {
        setDisplayText(newDisplayText) {
            this.displayText = newDisplayText;
        }
    }
});