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
      name: "heroButton1Text",
      title: "Hero Button1 Text",
      type: "string",
    },
    {
      name: "button1Link",
      title: "Button 1 Link",
      type: "url",
    },
    {
      name: "heroButton2Text",
      title: "Hero Button2 Text",
      type: "string",
    },
    {
      name: "button2Link",
      title: "Button 2 Link",
      type: "url",
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
