const initialGalleryConfig = {
  settings: {
    defaultActiveIndex: 2,
    hoverToExpand: true,
    accordionHeight: '500px',
  },
  images: [
    {
      id: 'img-1',
      title: 'Awesome Landscapes',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Discover More',
      buttonLink: '/discover-landscapes'
    },
    {
      id: 'img-2',
      title: 'City Life',
      imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Explore the City',
      buttonLink: '/explore-city'
    },
    {
      id: 'img-3',
      title: 'Mountain Views',
      imageUrl: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'See the Views',
      buttonLink: '/see-views'
    },
    {
      id: 'img-4',
      title: 'Wildlife Adventures',
      imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Explore Wildlife',
      buttonLink: '/explore-wildlife'
    },
    {
      id: 'img-5',
      title: 'New Horizons',
      imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Start an Adventure',
      buttonLink: '/new-adventures'
    },
  ]
};

export default initialGalleryConfig; 