export default {
  name: "page",
  title: "Stránka",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nadpis",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Náhledový obrázek",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Datum publikování",
      type: "datetime",
    },
    {
      name: "body",
      title: "Stať",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
};
