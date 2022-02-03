export default {
  name: 'category',
  title: 'Kategoria produktów',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nazwa kategorii produktów',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Opis kategorii produktów',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Zdjęcie kategorii',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'listOfProducts',
      title: 'Lista produktów',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'products' }],
        },
      ],
    },
  ],
};
