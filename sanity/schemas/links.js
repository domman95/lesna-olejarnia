export default {
  name: 'links',
  title: 'Linki',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ['https', 'http', 'mailto'], // Default is ["https", "http"]
        }),
    },
    {
      name: 'icon',
      title: 'Ikonka',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
