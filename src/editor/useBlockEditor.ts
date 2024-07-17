import { Content, useEditor } from "@tiptap/react";

import { ExtensionKit } from "@/editor/extensions/extension-kit";

// declare global {
//   interface Window {
//     editor: Editor | null
//   }
// }

export const useBlockEditor = ({ content }: { content: Content }) => {
  // const leftSidebar = useSidebar()

  const editor = useEditor(
    {
      autofocus: true,
      extensions: [...ExtensionKit({})],

      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full m-0 p-0",
          style: "padding: 0.5rem; margin: 0.5rem; min-height: 100vh;",
          maxWidth: "100vw",
        },
      },
      content: content,
      onUpdate: ({ editor }) => {
        console.log(editor.getHTML());
      },
    },
    [content]
  );

  const characterCount = editor?.storage.characterCount || {
    characters: () => 0,
    words: () => 0,
  };

  // window.editor = editor

  return { editor, characterCount };
};
