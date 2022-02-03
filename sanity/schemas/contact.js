export default {
  name: 'contact',
  title: 'Kontakt',
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
      name: 'iconsAndLinks',
      title: 'Linki',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'links' }],
        },
      ],
    },
  ],
};
