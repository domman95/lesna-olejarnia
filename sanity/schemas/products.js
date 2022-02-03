export default {
  name: 'products',
  title: 'Produkty',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa produktu',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'nutritional',
      title: 'Wartości odzywcze',
      type: 'string',
      initialValue: 'T: , B: , W:',
      description: 'np. T: 40g, B: 9g, W: 3g',
    },
    {
      name: 'price',
      title: 'cena',
      type: 'number',
      initialValue: 0,
      description: 'np. 49, 99, 129, 199 etc.',
    },
    {
      name: 'capacity',
      title: 'Pojemność',
      type: 'string',
      initialValue: '100ml oraz 250ml',
      description: 'np. 100ml oraz 250ml',
    },
    {
      name: 'composition',
      title: 'Skład',
      type: 'string',
      initialValue: '100% naturalny olej z ',
      description: 'np. 100% naturalny olej z...',
    },
  ],
};
