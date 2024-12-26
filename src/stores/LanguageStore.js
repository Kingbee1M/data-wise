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
            ],
            Sector2: [
                "Why DataWise?",
                "We are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable, and intuitive solutions that drive growth and efficiency. ",
                "Our team of expert data scientists, engineers, and strategists combines cutting-edge technology with deep industry knowledge to deliver custom AI solutions that cater to unique business challenges. "
            ],
            Sector3: [
                "Solutions",
                "Revolutionize Your Business with Our AI-Powered Features",
                "Advanced Data Analytics",
                "Predictive analytics to gain actionable insights and forecast future trends.",
                "Operations with Automation",
                "Enhance your operational efficiency with our AI-driven automated workflows.",
                "Unlock Insights with NLP",
                "Language processing to extract meaningful unstructured data.",
                "Custom AI for Your Needs",
                "Collaborate with our team of AI experts to build and deploy bespoke models.",
                "Explore solutions",
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
                ],
                Sector2: [
                    "Why DataWise?",
                    "We are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable, and intuitive solutions that drive growth and efficiency.",
                    "Our team of expert data scientists, engineers, and strategists combines cutting-edge technology with deep industry knowledge to deliver custom AI solutions that cater to unique business challenges. "
                ],
                Sector3: [
                    "Solutions",
                    "Revolutionize Your Business with Our AI-Powered Features",
                    "Advanced Data Analytics",
                    "Predictive analytics to gain actionable insights and forecast future trends.",
                    "Operations with Automation",
                    "Enhance your operational efficiency with our AI-driven automated workflows.",
                    "Unlock Insights with NLP",
                    "Language processing to extract meaningful unstructured data.",
                    "Custom AI for Your Needs",
                    "Collaborate with our team of AI experts to build and deploy bespoke models.",
                    "Explore solutions",
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
                ],
                Sector2: [
                    "¿Por qué DataWise?",
                    "Nos mueve la visión de transformar las empresas con inteligencia artificial. Fundada en 2024, hemos superado constantemente los límites de la IA para ofrecer soluciones inteligentes, escalables e intuitivas que impulsan el crecimiento y la eficiencia.",
                    "Nuestro equipo de científicos de datos, ingenieros y estrategas expertos combina tecnología de vanguardia con un profundo conocimiento de la industria para ofrecer soluciones de IA personalizadas que se adaptan a desafíos comerciales únicos."
                ],
                Sector3: [
                    "Soluciones",
                    "Revolucione su negocio con nuestras funciones impulsadas por IA",
                    "Análisis de datos avanzados",
                    "Análisis predictivo para obtener información útil y pronosticar tendencias futuras",
                    "Operaciones con automatización",
                    "Mejore su eficiencia operativa con nuestros flujos de trabajo automatizados impulsados ​​por IA",
                    "Desbloquee información con NLP",
                    "Procesamiento del lenguaje para extraer datos no estructurados significativos",
                    "IA personalizada para sus necesidades",
                    "Colabore con nuestro equipo de expertos en IA para crear e implementar modelos a medida",
                    "Explorar soluciones",
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
                ],
                Sector2: [
                    "Pourquoi DataWise ?",
                    "Nous sommes animés par la vision de transformer les entreprises grâce à l'intelligence artificielle. Fondée en 2024, nous avons constamment repoussé les limites de l'IA pour offrir des solutions intelligentes, évolutives et intuitives qui stimulent la croissance et l'efficacité.",
                    "Notre équipe d'experts en data scientists, ingénieurs et stratèges combine une technologie de pointe avec une connaissance approfondie du secteur pour fournir des solutions d'IA personnalisées qui répondent à des défis commerciaux uniques."
                ],
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
                ],
                Sector2: [
                    "Kí nìdí DataWise?",
                    "A n ṣakoso nipasẹ iran ti awọn iṣowo iyipada pẹlu itetisi atọwọda. Ti a da ni 2024, a ti tẹ awọn aala ti AI nigbagbogbo lati funni ni imọran, ti iwọn, ati awọn iṣeduro ti o ni imọran ti o nmu idagbasoke ati ṣiṣe daradara. ",
                    "Ẹgbẹ wa ti awọn onimọ-jinlẹ data iwé, awọn onimọ-ẹrọ, ati awọn onimọ-jinlẹ darapọ imọ-ẹrọ gige-eti pẹlu imọ ile-iṣẹ jinlẹ lati fi awọn solusan AI aṣa ti o ṣaajo si awọn italaya iṣowo alailẹgbẹ. "
                ],
                Sector3: [
                    "Awọn ojutu",
                    "Ṣatunṣe Iṣowo Rẹ pẹlu Awọn ẹya Agbara AI Wa",
                    "Itupalẹ Data To ti ni ilọsiwaju",
                    "Awọn atupale isọtẹlẹ lati ni awọn oye ṣiṣe ati ṣe asọtẹlẹ awọn aṣa iwaju.",
                    "Awọn iṣẹ pẹlu Adaṣiṣẹ",
                    "Ṣe ilọsiwaju ṣiṣe iṣẹ ṣiṣe rẹ pẹlu awọn iṣan-iṣẹ adaṣe adaṣe adaṣe AI wa.",
                    "Ṣii Awọn oye pẹlu NLP",
                    "Ṣiṣeto ede lati jade data ti ko ni itumọ ti o ni itumọ.",
                    "AI Aṣa fun Awọn aini Rẹ",
                    "Ṣajọpọ pẹlu ẹgbẹ wa ti awọn amoye AI lati kọ ati ran awọn awoṣe bespoke ṣiṣẹ.",
                    "Ṣawari awọn ojutu",
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
                ],
                Sector2: [
                    "为什么选择 DataWise?",
                    "我们致力于通过人工智能改变业务。我们成立于 2024 年，一直不断突破人工智能的界限，提供智能、可扩展且直观的解决方案，推动增长和效率",
                    "我们的专业数据科学家、工程师和战略家团队将尖端技术与深厚的行业知识相结合，提供满足独特业务挑战的定制人工智能解决方案。"
                ],
                Sector3: [
                    "解决方案",
                    "利用我们的 AI 功能彻底改变您的业务",
                    "高级数据分析",
                    "预测分析可获得可操作的见解并预测未来趋势。",
                    "自动化运营",
                    "利用我们的 AI 驱动的自动化工作流程提高您的运营效率。",
                    "使用 NLP 解锁见解",
                    "语言处理以提取有意义的非结构化数据。",
                    "根据您的需求定制 AI",
                    "与我们的 AI 专家团队合作构建和部署定制模型。",
                    "探索解决方案",
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
                ],
                Sector2: [
                    "Naze DataWise o erabu no ka?'",
                    "Tōsha wa, jinkō chinō de bijinesu o henkaku suru to iu bijon ni tsuki ugokasa rete imasu. 2024-Nen ni setsuritsu sa rete irai, tōsha wa AI no genkai o tsuneni oshi hiroge, seichō to kōritsu-sei o sokushin suru sumāto de sukēraburu, katsu chokkan-tekina soryūshon o teikyō shite kimashita.",
                    "Tōsha no jukuren shita dēta saientisuto, enjinia, sutoratejisuto no chīmu wa, saisentan no tekunorojī to fukai gyōkai chishiki o kumiawasete, dokuji no bijinesu kadai ni taiō suru kasutamu AI soryūshon o teikyō shite imasu."
                ],
                Sector3: [
                    "ソリューション",
                    "AI を活用した機能でビジネスを変革",
                    "高度なデータ分析",
                    "実用的な洞察を得て将来の傾向を予測する予測分析",
                    "自動化による運用",
                    "AI 駆動の自動化ワークフローで運用効率を向上",
                    "NLP で洞察を解き放つ",
                    "意味のある非構造化データを抽出するための言語処理",
                    "ニーズに合わせたカスタム AI",
                    "AI エキスパートのチームと協力して特注モデルを構築および展開",
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
                ],
                Sector2: [
                    "لماذا DataWise؟",
                    "نحن مدفوعون برؤية تحويل الأعمال باستخدام الذكاء الاصطناعي. تأسست الشركة في عام 2024، وقد عملنا باستمرار على دفع حدود الذكاء الاصطناعي لتقديم حلول ذكية وقابلة للتطوير وبديهية تعمل على تعزيز النمو والكفاءة.",
                    "يجمع فريقنا من خبراء علوم البيانات والمهندسين والاستراتيجيين بين التكنولوجيا المتطورة والمعرفة العميقة بالصناعة لتقديم حلول الذكاء الاصطناعي المخصصة التي تلبي تحديات الأعمال الفريدة."
                ],
                Sector3: [
                    "الحلول",
                    "أحدث ثورة في عملك باستخدام ميزاتنا التي تعمل بالذكاء الاصطناعي",
                    "تحليلات البيانات المتقدمة",
                    "التحليلات التنبؤية للحصول على رؤى قابلة للتنفيذ والتنبؤ بالاتجاهات المستقبلية",
                    "العمليات باستخدام الأتمتة",
                    "عزز كفاءتك التشغيلية باستخدام سير العمل الآلية التي تعمل بالذكاء الاصطناعي",
                    "اكتشف الرؤى باستخدام معالجة اللغة الطبيعية",
                    "معالجة اللغة لاستخراج بيانات غير منظمة وذات مغزى",
                    "ذكاء اصطناعي مخصص لاحتياجاتك",
                    "تعاون مع فريق خبراء الذكاء الاصطناعي لدينا لبناء ونشر نماذج مخصصة",
                    "استكشف الحلول",
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
                ],
                Sector2: [
                    "Почему DataWise?",
                    "Мы движимы видением трансформации бизнеса с помощью искусственного интеллекта. Основанные в 2024 году, мы последовательно расширяем границы ИИ, предлагая умные, масштабируемые и интуитивно понятные решения, которые стимулируют рост и эффективность",
                    "Наша команда экспертов в области данных, инженеров и стратегов объединяет передовые технологии с глубокими отраслевыми знаниями для предоставления индивидуальных решений на основе ИИ, которые отвечают уникальным бизнес-задачам"
                ],
                Sector3: [
                    "Решения",
                    "Измените свой бизнес с помощью наших функций на основе ИИ",
                    "Расширенная аналитика данных",
                    "Прогностическая аналитика для получения действенных идей и прогнозирования будущих тенденций",
                    "Операции с автоматизацией",
                    "Повысьте эффективность своей работы с помощью наших автоматизированных рабочих процессов на основе ИИ",
                    "Откройте для себя идеи с помощью обработки естественного языка",
                    "Обработка языка для извлечения значимых неструктурированных данных»",
                    "Пользовательский ИИ для ваших нужд",
                    "Сотрудничайте с нашей командой экспертов по ИИ для создания и развертывания индивидуальных моделей",
                    "Изучите решения",
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
                ],
                Sector2: [
                    "डेटावाइज़ क्यों?",

                    "हम आर्टिफिशियल इंटेलिजेंस के साथ व्यवसायों को बदलने की दृष्टि से प्रेरित हैं। 2024 में स्थापित, हमने लगातार AI की सीमाओं को आगे बढ़ाया है ताकि स्मार्ट, स्केलेबल और सहज समाधान पेश किए जा सकें जो विकास और दक्षता को बढ़ावा देते हैं।",

                    "विशेषज्ञ डेटा वैज्ञानिकों, इंजीनियरों और रणनीतिकारों की हमारी टीम अत्याधुनिक तकनीक को गहन उद्योग ज्ञान के साथ जोड़ती है ताकि कस्टम AI समाधान प्रदान किए जा सकें जो अद्वितीय व्यावसायिक चुनौतियों को पूरा करते हैं।"
                ],
                Sector3: [
                    "समाधान",
                    "हमारे AI-संचालित सुविधाओं के साथ अपने व्यवसाय में क्रांति लाएँ",
                    "उन्नत डेटा एनालिटिक्स",
                    "कार्रवाई योग्य जानकारी प्राप्त करने और भविष्य के रुझानों का पूर्वानुमान लगाने के लिए पूर्वानुमानित विश्लेषण।",
                    "स्वचालन के साथ संचालन",
                    "हमारे AI-संचालित स्वचालित वर्कफ़्लो के साथ अपनी परिचालन दक्षता बढ़ाएँ।",
                    "NLP के साथ जानकारी अनलॉक करें",
                    "अर्थपूर्ण असंरचित डेटा निकालने के लिए भाषा प्रसंस्करण।",
                    "आपकी ज़रूरतों के लिए कस्टम AI",
                    "बेस्पोक मॉडल बनाने और तैनात करने के लिए AI विशेषज्ञों की हमारी टीम के साथ सहयोग करें।",
                    "समाधानों का पता लगाएँ",
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