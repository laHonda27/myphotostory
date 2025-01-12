import { PricingCategory, FAQItem } from '../types/pricing';

export const pricingData: PricingCategory[] = [
  {
    id: 'wedding',
    title: 'Mariage',
    description: 'Immortalisez chaque instant précieux de votre jour J avec notre approche documentaire élégante.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&h=600&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Mariage élégant' },
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Couple de mariés' },
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Cérémonie de mariage' }
    ],
    testimonial: {
      name: "Sophie & Thomas",
      date: "Septembre 2023",
      rating: 5,
      comment: "Une expérience magique ! Le photographe a su capturer l'essence même de notre mariage. Chaque photo raconte une histoire et nous permet de revivre ces moments précieux.",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    startingPrice: 1800,
    features: [
      'Consultation préalable personnalisée',
      'Visite des lieux avant le mariage',
      'Repérage des lieux avant le mariage',
      '10 heures de couverture',
      'Second photographe en option',
      'Album photo premium 30x30cm',
      'Mini-album pour les parents',
      'Livraison express sur demande',
      'Clé USB personnalisée',
      'Tirages photo haute qualité',
      'Assistance choix des photos',
      'Livre photo numérique',
      'Garantie de sauvegarde 10 ans'
    ],
    link: '/services/mariage'
  },
  {
    id: 'engagement',
    title: 'Fiançailles',
    description: 'Une séance photo romantique pour célébrer votre engagement et créer des souvenirs uniques.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&h=600&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Couple fiancé' },
      { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Séance engagement' },
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Moment romantique' }
    ],
    testimonial: {
      name: "Marie & Pierre",
      date: "Octobre 2023",
      rating: 5,
      comment: "Des photos qui nous ressemblent, naturelles et pleines d'émotions. Un véritable artiste qui sait mettre en valeur chaque moment.",
      photo: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=150&h=150&q=80"
    },
    startingPrice: 450,
    features: [
      '2 heures de shooting',
      'Consultation style et tenue',
      'Consultation style et ambiance',
      'Choix du lieu',
      'Repérage des lieux',
      '50+ photos retouchées',
      'Photos en haute résolution',
      'Galerie privée en ligne',
      'Livraison express',
      'Tirages photo inclus',
      'Album photo numérique',
      'Conseils pose et mise en scène',
      'Choix des meilleures photos',
      'Retouches personnalisées',
      'Format web pour partage'
    ],
    link: '/services/fiancailles'
  },
  {
    id: 'portrait',
    title: 'Portraits & Shooting',
    description: 'Révélez votre personnalité à travers des portraits authentiques et élégants.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=600&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Portrait professionnel' },
      { url: 'https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Portrait artistique' },
      { url: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Portrait en studio' }
    ],
    testimonial: {
      name: "Claire D.",
      date: "Novembre 2023",
      rating: 5,
      comment: "Un regard unique qui sublime chaque portrait. Je recommande vivement ! Les photos sont naturelles et magnifiques.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    startingPrice: 350,
    features: [
      '1.5 heures de shooting',
      'Conseils préparation shooting',
      'Consultation pré-shooting',
      'Maquillage professionnel en option',
      '2 changements de tenue',
      'Studio ou extérieur au choix',
      'Studio ou extérieur au choix',
      '30+ photos retouchées',
      'Conseils styling',
      'Book photo numérique',
      'Retouches avancées',
      'Photos format web et print',
      'Choix du style photo',
      'Galerie privée sécurisée',
      'Livraison express disponible'
    ],
    link: '/services/portrait'
  },
  {
    id: 'birth',
    title: 'Famille',
    description: 'Capturez les moments précieux en famille dans une ambiance naturelle et authentique.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Nouveau-né' },
      { url: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Famille' },
      { url: 'https://images.unsplash.com/photo-1577201404214-b725e3212fc6?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Parents et bébé' }
    ],
    testimonial: {
      name: "Emma & Lucas",
      date: "Décembre 2023",
      rating: 5,
      comment: "Des photos tendres et naturelles de notre petit Louis. Une séance tout en douceur qui a su capturer ces premiers moments magiques.",
      photo: "https://images.unsplash.com/photo-1577201404214-b725e3212fc6?auto=format&fit=crop&w=150&h=150&q=80"
    },
    startingPrice: 400,
    features: [
      '2 heures de séance photo',
      'Consultation téléphonique préalable',
      'Consultation préalable',
      'Choix du style photographique',
      'Choix du lieu',
      'Studio aménagé disponible',
      'Photos en famille incluses',
      'Photos individuelles',
      'Accessoires fournis',
      '50+ photos retouchées',
      'Album photo personnalisé',
      'Tirages photo inclus',
      'Version numérique HD',
      'Galerie privée en ligne',
      'Livraison rapide possible'
    ],
    link: '/services/naissance'
  },
  {
    id: 'birthday',
    title: 'Événement',
    description: 'Immortalisez vos événements spéciaux avec un reportage photo professionnel.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&h=600&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Événement corporate' },
      { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Soirée événementielle' },
      { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&h=600&q=80', alt: 'Anniversaire' }
    ],
    testimonial: {
      name: "Thomas B.",
      date: "Janvier 2024",
      rating: 5,
      comment: "Professionnalisme remarquable. Les photos ont parfaitement capturé l'essence de notre événement corporate.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    startingPrice: 300,
    features: [
      '2 heures de couverture',
      'Consultation organisation',
      'Repérage des lieux',
      'Plan de shooting détaillé',
      'Photos de groupe',
      'Photos d\'ambiance',
      'Photos individuelles',
      'Montage photo offert',
      '30+ photos retouchées',
      'Livraison rapide',
      'Galerie privée en ligne',
      'Formats web et impression',
      'Album photo numérique',
      'Retouches personnalisées',
      'Partage facile des photos'
    ],
    link: '/services/anniversaires'
  }
];

export const faqData: FAQItem[] = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Pour les mariages, comptez 3-4 semaines pour la galerie complète. Les séances portrait sont livrées sous 1 semaine."
  },
  {
    question: "Comment réserver une prestation ?",
    answer: "Contactez-nous via le formulaire ou par téléphone. Nous fixerons un rendez-vous de découverte gratuit pour discuter de votre projet."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les virements bancaires, les cartes de crédit et proposons des facilités de paiement en plusieurs fois pour les mariages."
  }
];