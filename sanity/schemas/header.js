export default {
  name: 'header',
  title: 'Nagłówek',
  description: 'max 1!',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Podtytuł',
      type: 'string',
    },
    {
      name: 'leftImage',
      title: 'Zdjęcie (z lewej strony)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rightImage',
      title: 'Zdjęcie (z prawej strony)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
