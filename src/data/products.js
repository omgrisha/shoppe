export const products = [
  {
    title: 'Lira Earrings',
    price: '20',
  },
  {
    title: 'Hal Earrings',
    price: '25',
  },
  {
    title: 'Kaede Hair Pin Set Of 3',
    price: '30',
  },
  {
    title: 'Hair Pin Set Of 3',
    price: '30',
  },
  {
    title: 'Plaine Necklace',
    price: '19',
  },
  {
    title: 'Yuki Hair Pin Set Of 3',
    price: '29',
  },
];

for (const product of products) {
  product.image = '/images/' + product.title
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-') + '.jpg';
}