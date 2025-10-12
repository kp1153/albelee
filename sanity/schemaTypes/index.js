export const schema = {
  types: [
    {
      name: "product",
      title: "Product",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Product Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "price",
          title: "Price",
          type: "number",
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "stock",
          title: "Stock",
          type: "number",
          validation: (Rule) => Rule.required().min(0),
        },
      ],
    },
  ],
};
