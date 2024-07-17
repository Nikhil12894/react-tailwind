import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
  addAttributes() {
    return {
      src: {
        default: null,
      },
      // alt: {
      //   default: null,
      // },
      // title: {
      //   default: null,
      // },
      // class: {
      //   default: "ProseMirror-image",
      // },
      // "data-base64": {
      //   default: null,
      // },
      // "data-label": {
      //   default: null,
      // },
    };
  },
});

export { CustomImage };
