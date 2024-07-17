// src/Tiptap.tsx
import Highlight from "@tiptap/extension-highlight";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import {
  EditorContent,
  JSONContent,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import "highlight.js/lib/languages/css";
import { common, createLowlight } from "lowlight";
import { useEffect, useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import CodeBlockComponent from "./CodeBlockComponent.jsx";
import { EditorMenuBar } from "./EditorMenu";
import { CustomImage } from "./ImageNode";
import "./styles.scss";
const lowlight = createLowlight(common);
// define your extension array
const extensions = [
  Color,
  TextStyle,
  StarterKit.configure({
    codeBlock: false,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Image,
  CustomImage,
  Highlight,
  ImageResize,
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlockComponent);
    },
  }).configure({ lowlight }),
  Table.configure({
    resizable: true,
    HTMLAttributes: {
      class: "table border border-slate-300",
    },
  }),
  TableRow,
  TableHeader,
  TableCell,
  Link.configure({
    HTMLAttributes: {
      target: "_blank",
      class: "text-blue-500 underline-none hover:underline",
    },
  }),
];
/* <img src="http://localhost:8080/taskservice/images/5/string" style="width: 334px; margin: 0px auto;" draggable="true"/> */
const test_content = `
      <h2>Hi there,</h2><h1>Hello</h1><h3>Hello</h3><h4>Hello</h4><h5>Hello</h5><h6>Hello</h6>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
<ul>
  <li>
  That’s a bullet list with one …
  </li>
  <li>
  … or two list items.
  </li>
</ul>
<p class="text-right">Isn’t that great? And all of that is editable. But wait,there’s more. Let’s try a code block:</p>
<pre><code class="language-css">
body {
  display: none;
}
</code></pre>
<p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p>
<blockquote>
Wow, that’s amazing. Good work, boy! 👏
<br />
                                  — Mom
</blockquote>

<pre><code class="language-java">
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Post image request", requiredMode = Schema.RequiredMode.REQUIRED)
public class ImageDTO {
    private Long id;
    private String name;
    private byte[] data;
}
</code></pre>

    `;

const Tiptap = () => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [content, setContent] = useState<string>(test_content);
  const [jsonContent, setJsonContent] = useState<JSONContent>({});
  const editor = useEditor({
    // element: document.querySelector(".element") || undefined,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert dark:sm:prose-invert dark:lg:prose-invert dark:xl:prose-invert mx-auto focus:outline-none text-left",
      },
    },
    extensions,
    content,
    onBlur: ({ editor }) => {
      setContent(editor.getHTML());
      setJsonContent(editor.getJSON());
    },
    autofocus: "end",
  });

  // const [isEditable, setIsEditable] = useState(false);

  // useEffect(() => {
  //   if (editor) {
  //     editor.setEditable(isEditable);
  //   }
  // }, [isEditable, editor]);

  useEffect(() => {
    if (editor && imageURL) {
      editor.commands.insertContent({
        src: imageURL,
      });
    }
  }, [editor, imageURL]);

  // useEffect(() => {
  //   if (editor) {
  //     return editor.destroy();
  //   }
  // }, [editor]);

  return (
    <div className="border border-slate-300 m-5">
      <EditorMenuBar editor={editor} setImageURL={setImageURL} />
      <EditorContent editor={editor} className="border border-slate-300" />
      {/* <div className="element"></div> */}
      {/* <FloatingMenu editor={editor}></FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
      {/* <HtmlResolver doc={jsonContent} extensions={extensions} /> */}
    </div>
  );
};

export default Tiptap;
