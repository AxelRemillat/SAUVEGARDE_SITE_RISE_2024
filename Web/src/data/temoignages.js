// Témoignages d'étudiants par continent (clés alignées sur imageData de
// temoignagestempo.jsx).
// - avatar : randomuser.me (réalistes, fallback initiales)
// - photo  : mots-clés ville -> image libre de droits via loremflickr (fallback
//   sur l'image du continent en cas d'échec réseau).

export const TEMOIGNAGES = {
  Europe: [
    {
      name: "Léa Moreau", age: 21, city: "Munich", country: "Allemagne",
      university: "Technische Universität München", program: "Échange — Ingénierie",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg", photo: "munich,germany",
      text: "Munich m'a bluffée. Le campus est immense et hyper bien équipé. Pour le logement, vise les Studentenwerk dès l'acceptation — j'ai galéré 3 semaines avant d'avoir ma chambre. Astuce : la Semesterticket te donne les transports illimités, ça change la vie.",
    },
    {
      name: "Thomas Lefèvre", age: 22, city: "Barcelone", country: "Espagne",
      university: "Universitat Politècnica de Catalunya", program: "Semestre — Architecture",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg", photo: "barcelona,spain",
      text: "Six mois incroyables. La ville vit dehors, les profs sont accessibles. Évite de chercher un appart depuis la France : viens 1 semaine avant et visite sur place, sinon tu te fais avoir sur les prix. Le quartier de Gràcia est parfait pour les étudiants.",
    },
    {
      name: "Camille Rousseau", age: 20, city: "Stockholm", country: "Suède",
      university: "KTH Royal Institute of Technology", program: "Échange — Informatique",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/44.jpg", photo: "stockholm,sweden",
      text: "Le système suédois mise tout sur l'autonomie et le travail de groupe, déroutant au début. La vie est chère mais la qualité de vie est dingue. Prends une carte SL pour les transports et profite des « fika » — les pauses café font partie de la culture.",
    },
    {
      name: "Hugo Bernard", age: 23, city: "Milan", country: "Italie",
      university: "Politecnico di Milano", program: "Double diplôme — Design",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/76.jpg", photo: "milan,italy",
      text: "Le Politecnico est une référence mondiale en design, et ça se sent. Niveau exigeant mais passionnant. Pour le logement, les résidences privées type Campus X sont chères : passe par des groupes Facebook d'étudiants Erasmus pour des colocs abordables.",
    },
    {
      name: "Sarah Petit", age: 21, city: "Delft", country: "Pays-Bas",
      university: "TU Delft", program: "Échange — Génie civil",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/12.jpg", photo: "delft,netherlands",
      text: "Tout se fait à vélo, achète-en un d'occasion dès ton arrivée. Les cours en anglais sont parfaits, beaucoup d'internationaux. Petit conseil : ouvre un compte bancaire local rapidement, certains paiements ne marchent qu'avec une carte néerlandaise.",
    },
  ],
  Asia: [
    {
      name: "Maxime Dubois", age: 22, city: "Tokyo", country: "Japon",
      university: "Waseda University", program: "Semestre — Relations internationales",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/45.jpg", photo: "tokyo,japan",
      text: "Tokyo, c'est un choc culturel positif total. Waseda a un super programme pour les internationaux. Le logement est petit mais bien situé. Indispensable : la carte Suica et apprendre les bases du japonais, ça ouvre énormément de portes avec les locaux.",
    },
    {
      name: "Inès Garcia", age: 21, city: "Séoul", country: "Corée du Sud",
      university: "Yonsei University", program: "Échange — Marketing",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/65.jpg", photo: "seoul,korea",
      text: "Le rythme est intense mais la vie étudiante est folle. Les dortoirs du campus sont le meilleur plan pour rencontrer du monde. Mange dans les cantines universitaires, c'est délicieux et donné. La K-culture en vrai, c'est encore mieux qu'à l'écran !",
    },
    {
      name: "Lucas Fontaine", age: 23, city: "Singapour", country: "Singapour",
      university: "National University of Singapore", program: "Échange — Finance",
      rating: 4, avatar: "https://randomuser.me/api/portraits/men/22.jpg", photo: "singapore,skyline",
      text: "NUS est ultra international, parfait tremplin pour l'Asie. Tout est en anglais, propre et sûr. Le coût de la vie pique (surtout le logement), mais les hawker centers sauvent le budget repas. Profites-en pour voyager dans toute la région le week-end.",
    },
    {
      name: "Chloé Lambert", age: 20, city: "Shanghai", country: "Chine",
      university: "Shanghai Jiao Tong University", program: "Semestre — Commerce international",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/90.jpg", photo: "shanghai,china",
      text: "Une immersion incroyable. Installe WeChat et Alipay avant tout, sans ça tu ne peux rien payer. Le campus est une vraie ville. Quelques barrières de langue au quotidien, mais les étudiants chinois sont curieux et très accueillants.",
    },
    {
      name: "Adam Nguyen", age: 22, city: "Hong Kong", country: "Chine (RAS)",
      university: "HKUST", program: "Échange — Data Science",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/60.jpg", photo: "hongkong,skyline",
      text: "Vue mer depuis le campus, niveau académique top. Hong Kong mélange Asie et international comme nulle part. Le logement sur campus est limité, candidate tôt. Randonnées le week-end, dim sum le matin : équilibre parfait entre études et découvertes.",
    },
  ],
  Oceania: [
    {
      name: "Manon Girard", age: 22, city: "Sydney", country: "Australie",
      university: "UNSW Sydney", program: "Semestre — Biologie marine",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/33.jpg", photo: "sydney,australia",
      text: "Étudier près des plages, un rêve. UNSW est très bien organisée pour les échanges. Le coût de la vie est élevé : un job étudiant (le visa l'autorise) aide vraiment. Achète une carte Opal et explore la côte, Bondi à Coogee est magique.",
    },
    {
      name: "Nathan Roy", age: 23, city: "Melbourne", country: "Australie",
      university: "Monash University", program: "Échange — Génie logiciel",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/12.jpg", photo: "melbourne,australia",
      text: "Melbourne, capitale culturelle, je recommande à 100%. Campus moderne, profs au top. Le logement en sharehouse est le plan le plus économique. Prends le temps de visiter la Great Ocean Road, c'est inoubliable.",
    },
    {
      name: "Émma Vincent", age: 21, city: "Auckland", country: "Nouvelle-Zélande",
      university: "University of Auckland", program: "Semestre — Environnement",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/52.jpg", photo: "auckland,newzealand",
      text: "Nature à couper le souffle et ambiance hyper relax. Les Kiwis sont adorables. Pense à prévoir un budget transport pour explorer les deux îles. Les cours sont participatifs, on apprend beaucoup sur le terrain.",
    },
    {
      name: "Tom Mercier", age: 22, city: "Brisbane", country: "Australie",
      university: "University of Queensland", program: "Échange — Commerce",
      rating: 4, avatar: "https://randomuser.me/api/portraits/men/85.jpg", photo: "brisbane,australia",
      text: "Climat parfait toute l'année et campus magnifique au bord du fleuve. UQ a une vie associative énorme, inscris-toi aux clubs dès la première semaine. Le décalage horaire avec la France rend les appels famille un peu sport, mais on s'habitue.",
    },
  ],
  US: [
    {
      name: "Julien Faure", age: 23, city: "Berkeley", country: "États-Unis",
      university: "UC Berkeley", program: "Échange — Ingénierie",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/3.jpg", photo: "sanfrancisco,california",
      text: "Le niveau et l'énergie de Berkeley sont incomparables. Tout pousse à entreprendre. Attention au coût du logement dans la Bay Area, c'est le poste le plus cher : vise les coops étudiantes. Réseau et opportunités de stage en or.",
    },
    {
      name: "Clara Henry", age: 21, city: "New York", country: "États-Unis",
      university: "New York University", program: "Semestre — Communication",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/24.jpg", photo: "newyork,manhattan",
      text: "Vivre à NYC en étant étudiante, c'est électrisant. NYU est intégrée à la ville, pas de campus fermé. Budget serré conseillé (tout est cher), mais les musées gratuits et les food trucks sauvent la mise. Une expérience qui change une vie.",
    },
    {
      name: "Antoine Girault", age: 22, city: "Montréal", country: "Canada",
      university: "McGill University", program: "Échange — Droit",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/52.jpg", photo: "montreal,canada",
      text: "Montréal, le compromis parfait : ambiance nord-américaine et francophone. McGill est prestigieuse et chaleureuse. Le logement au Plateau est abordable et étudiant. Prépare-toi à l'hiver, mais la ville reste vivante même à -20°C.",
    },
    {
      name: "Marie Lemoine", age: 20, city: "Toronto", country: "Canada",
      university: "University of Toronto", program: "Semestre — Psychologie",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/76.jpg", photo: "toronto,canada",
      text: "Ville hyper multiculturelle et sûre. U of T est exigeante mais les ressources d'accompagnement sont énormes. Le logement proche du campus est cher : la coloc en transit léger est un bon compromis. Niagara à 1h30, à faire absolument.",
    },
    {
      name: "Paul Masson", age: 23, city: "Los Angeles", country: "États-Unis",
      university: "UCLA", program: "Échange — Cinéma",
      rating: 4, avatar: "https://randomuser.me/api/portraits/men/41.jpg", photo: "losangeles,california",
      text: "Pour le cinéma, c'est LE spot. Campus immense et ensoleillé. La voiture est presque indispensable, prévois un budget transport. Les cours pratiques sont incroyables, on côtoie des intervenants de l'industrie.",
    },
  ],
  Africa: [
    {
      name: "Sofia Benali", age: 22, city: "Rabat", country: "Maroc",
      university: "Université Internationale de Rabat", program: "Échange — Ingénierie",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/57.jpg", photo: "rabat,morocco",
      text: "Accueil exceptionnel et campus très moderne. Le coût de la vie est doux pour un budget étudiant. Apprends quelques mots de darija, ça crée tout de suite du lien. Week-ends à Chefchaouen ou dans le désert : des souvenirs pour la vie.",
    },
    {
      name: "Yanis Cherif", age: 23, city: "Le Cap", country: "Afrique du Sud",
      university: "University of Cape Town", program: "Semestre — Sciences politiques",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/64.jpg", photo: "capetown,southafrica",
      text: "UCT a une vue imprenable sur Table Mountain et un niveau académique excellent. Privilégie les quartiers proches du campus pour la sécurité et les transports. Nature, océan, vignobles : l'équilibre études-aventure est parfait.",
    },
    {
      name: "Awa Diallo", age: 21, city: "Dakar", country: "Sénégal",
      university: "Université Cheikh Anta Diop", program: "Échange — Développement",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/79.jpg", photo: "dakar,senegal",
      text: "La Teranga sénégalaise n'est pas un mythe : on m'a accueillie comme une famille. Le rythme est différent, il faut s'adapter, mais l'expérience humaine est immense. Idéal pour un projet à impact social, les opportunités terrain sont nombreuses.",
    },
    {
      name: "Karim Haddad", age: 22, city: "Le Caire", country: "Égypte",
      university: "The American University in Cairo", program: "Semestre — Archéologie",
      rating: 4, avatar: "https://randomuser.me/api/portraits/men/29.jpg", photo: "cairo,egypt",
      text: "Étudier l'histoire à deux pas des pyramides, c'est irréel. L'AUC est très internationale, tout se fait en anglais. La circulation au Caire est chaotique, prévois large pour les trajets. Une immersion culturelle d'une richesse rare.",
    },
  ],
  SouthAmerica: [
    {
      name: "Lucie Caron", age: 22, city: "São Paulo", country: "Brésil",
      university: "Universidade de São Paulo", program: "Échange — Économie",
      rating: 5, avatar: "https://randomuser.me/api/portraits/women/9.jpg", photo: "saopaulo,brazil",
      text: "USP est la meilleure d'Amérique latine et l'ambiance est festive. Apprends le portugais avant de partir, peu de cours en anglais. La vie est abordable et la scène culturelle bouillonnante. Les Brésiliens t'intègrent en deux jours.",
    },
    {
      name: "Diego Martin", age: 23, city: "Buenos Aires", country: "Argentine",
      university: "Universidad de Buenos Aires", program: "Semestre — Architecture",
      rating: 5, avatar: "https://randomuser.me/api/portraits/men/18.jpg", photo: "buenosaires,argentina",
      text: "Buenos Aires a une énergie unique, entre Europe et Amérique latine. La UBA est gratuite et vivante. Le quartier de Palermo est idéal pour les étudiants. Pense au cash (l'économie est particulière) et profite du tango et des asados !",
    },
    {
      name: "Eva Roussel", age: 21, city: "Santiago", country: "Chili",
      university: "Pontificia Universidad Católica", program: "Échange — Géologie",
      rating: 4, avatar: "https://randomuser.me/api/portraits/women/41.jpg", photo: "santiago,chile",
      text: "La PUC est très bien organisée pour les échanges. Santiago est entourée par les Andes, le cadre est magnifique. Niveau d'espagnol requis assez élevé. Profite de la diversité du pays : désert d'Atacama au nord, Patagonie au sud.",
    },
    {
      name: "Mathéo Blanc", age: 22, city: "Medellín", country: "Colombie",
      university: "Universidad EAFIT", program: "Semestre — Entrepreneuriat",
      rating: 4, avatar: "https://randomuser.me/api/portraits/men/97.jpg", photo: "medellin,colombia",
      text: "Medellín, la ville de l'éternel printemps, m'a conquis. EAFIT a un super écosystème entrepreneurial. Coût de la vie très accessible. Les Paisas sont d'une gentillesse incroyable. Idéal pour monter un projet tout en découvrant l'Amérique du Sud.",
    },
  ],
};
