export const portfolioData = {
  categories: [
    { id: 'wedding', label: 'Mariages' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'family', label: 'Famille' },
    { id: 'event', label: 'Événements' },
    { id: 'corporate', label: 'Corporate' }
  ],
  projects: [
    {
      id: '1',
      type: 'photo',
      title: 'Mariage de Sophie & Thomas',
      description: 'Une célébration élégante dans un château historique, capturant l\'essence de leur amour.',
      thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
      images: [
        { 
          url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
          alt: 'Les mariés dans le jardin du château'
        },
        {
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
          alt: 'Préparatifs de la mariée'
        },
        {
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
          alt: 'Cérémonie dans la chapelle'
        }
      ],
      category: 'wedding',
      tags: ['Mariage', 'Extérieur', 'Château'],
      duration: '12 heures',
      team: '2 photographes'
    },
    {
      id: '7',
      type: 'photo',
      title: 'Mariage de Claire & Pierre',
      description: 'Une cérémonie magique au bord de la mer.',
      thumbnail: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
          alt: 'Les mariés au coucher du soleil'
        },
        {
          url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
          alt: 'Échange des vœux sur la plage'
        },
        {
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
          alt: 'Réception en bord de mer'
        }
      ],
      category: 'wedding',
      tags: ['Mariage', 'Plage', 'Coucher de soleil'],
      duration: '10 heures',
      team: '2 photographes'
    },
    {
      id: '8',
      type: 'photo',
      title: 'Mariage de Marie & Antoine',
      description: 'Une célébration champêtre dans les Alpes.',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
          alt: 'Cérémonie en plein air'
        },
        {
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
          alt: 'Les mariés dans les montagnes'
        },
        {
          url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
          alt: 'Réception sous chapiteau'
        }
      ],
      category: 'wedding',
      tags: ['Mariage', 'Montagne', 'Nature'],
      duration: '12 heures',
      team: '3 photographes'
    },
    {
      id: '2',
      type: 'video',
      title: 'Conférence Tech Innovation 2024',
      description: 'Couverture complète de l\'événement tech majeur de l\'année.',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      images: [],
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'corporate',
      tags: ['Entreprise', 'Tech', 'Conférence'],
      duration: '2 jours',
      team: 'Équipe de 4'
    },
    {
      id: '3',
      type: 'photo',
      title: 'Portrait Corporate de Marie',
      description: 'Séance photo professionnelle pour une dirigeante d\'entreprise.',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          alt: 'Portrait professionnel en studio'
        },
        {
          url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
          alt: 'Portrait en situation de travail'
        }
      ],
      category: 'portrait',
      tags: ['Portrait', 'Business', 'Studio'],
      duration: '2 heures',
      team: '1 photographe'
    }
  ]
};