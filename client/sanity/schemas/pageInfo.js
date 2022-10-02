export default {
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroInfo",
      title: "Hero Info",
      type: "text",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ]
}
