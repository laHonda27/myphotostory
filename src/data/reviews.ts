import { Review } from '../types/reviews';

export const categories = [
  { id: 'all', label: 'Tous les avis' },
  { id: 'mariages', label: 'Mariages' },
  { id: 'naissances', label: 'Naissances' },
  { id: 'anniversaires', label: 'Anniversaires' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'evenements', label: 'Événements' }
];

export const reviews: Review[] = [
  // Mariages
  {
    id: '1',
    name: 'Sophie & Thomas',
    rating: 5,
    comment: 'Une expérience magique ! Le photographe a su capturer l\'essence même de notre mariage. Chaque photo raconte une histoire et nous permet de revivre ces moments précieux.',
    date: '2024-02-15',
    service: 'Mariages',
    verified: true
  },
  {
    id: '2',
    name: 'Emma & Lucas',
    rating: 5,
    comment: 'Des photos sublimes qui dépassent toutes nos attentes. Un véritable artiste qui sait mettre en valeur chaque moment.',
    date: '2024-02-10',
    service: 'Mariages',
    verified: true
  },
  {
    id: '3',
    name: 'Julie & Marc',
    rating: 5,
    comment: 'Professionnalisme et créativité au rendez-vous. Nos photos de mariage sont tout simplement magnifiques.',
    date: '2024-02-05',
    service: 'Mariages',
    verified: true
  },
  {
    id: '4',
    name: 'Laura & Antoine',
    rating: 4,
    comment: 'Très belle prestation, quelques petits délais dans la livraison mais le résultat en vaut la peine.',
    date: '2024-01-30',
    service: 'Mariages',
    verified: true
  },

  // Naissances
  {
    id: '5',
    name: 'Marie P.',
    rating: 5,
    comment: 'Des photos tendres et naturelles de notre petit Louis. Une séance tout en douceur.',
    date: '2024-02-12',
    service: 'Naissances',
    verified: true
  },
  {
    id: '6',
    name: 'Sarah M.',
    rating: 5,
    comment: 'Moments précieux capturés avec talent. Notre bébé était si à l\'aise pendant la séance.',
    date: '2024-02-08',
    service: 'Naissances',
    verified: true
  },
  {
    id: '7',
    name: 'Claire D.',
    rating: 5,
    comment: 'Des souvenirs inoubliables de nos premiers moments en famille. Merci infiniment !',
    date: '2024-02-01',
    service: 'Naissances',
    verified: true
  },

  // Anniversaires
  {
    id: '8',
    name: 'Patricia L.',
    rating: 5,
    comment: 'Superbe reportage pour l\'anniversaire de ma fille. Des souvenirs pour toute la vie.',
    date: '2024-02-14',
    service: 'Anniversaires',
    verified: true
  },
  {
    id: '9',
    name: 'Michel R.',
    rating: 4,
    comment: 'Très bon photographe qui a su capter l\'ambiance de la fête. Recommandé !',
    date: '2024-02-07',
    service: 'Anniversaires',
    verified: true
  },

  // Portraits
  {
    id: '10',
    name: 'Léa S.',
    rating: 5,
    comment: 'Une séance portrait exceptionnelle ! Un vrai talent pour mettre en valeur.',
    date: '2024-02-13',
    service: 'Portraits',
    verified: true
  },
  {
    id: '11',
    name: 'Thomas B.',
    rating: 5,
    comment: 'Photos professionnelles parfaites pour mon CV. Très satisfait du résultat.',
    date: '2024-02-06',
    service: 'Portraits',
    verified: true
  },
  {
    id: '12',
    name: 'Camille F.',
    rating: 5,
    comment: 'Un regard unique qui sublime chaque portrait. Je recommande vivement !',
    date: '2024-02-03',
    service: 'Portraits',
    verified: true
  },

  // Événements
  {
    id: '13',
    name: 'Pierre D.',
    rating: 5,
    comment: 'Excellent travail lors de notre événement d\'entreprise. Photos dynamiques et professionnelles.',
    date: '2024-02-11',
    service: 'Evenements',
    verified: true
  },
  {
    id: '14',
    name: 'Sophie V.',
    rating: 4,
    comment: 'Bonne couverture de notre séminaire. Quelques photos auraient pu être plus spontanées.',
    date: '2024-02-04',
    service: 'Evenements',
    verified: true
  },
  {
    id: '15',
    name: 'Laurent M.',
    rating: 5,
    comment: 'Reportage photo parfait pour notre inauguration. Très professionnel.',
    date: '2024-02-02',
    service: 'Evenements',
    verified: true
  },

  // Plus de mariages pour la pagination
  {
    id: '16',
    name: 'Aurélie & Nicolas',
    rating: 5,
    comment: 'Un talent fou pour capturer les émotions. Nous sommes enchantés !',
    date: '2024-01-28',
    service: 'Mariages',
    verified: true
  },
  {
    id: '17',
    name: 'Charlotte & Maxime',
    rating: 5,
    comment: 'Des photos qui nous ressemblent, naturelles et pleines d\'émotions.',
    date: '2024-01-25',
    service: 'Mariages',
    verified: true
  },
  {
    id: '18',
    name: 'Marine & Hugo',
    rating: 4,
    comment: 'Très belle prestation, des photos magnifiques de notre journée.',
    date: '2024-01-20',
    service: 'Mariages',
    verified: true
  }
];