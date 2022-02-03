export default {
  name: 'about',
  title: 'O nas',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Kolejność wyświetlania',
      description: 'Wskaz kolejność, aby zachować prawidłowy ciąg informacji',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
