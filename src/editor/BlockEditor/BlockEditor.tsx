"use client";

import { EditorContent } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";

import { LinkMenu } from "../menus/LinkMenu";

import { useBlockEditor } from "../useBlockEditor";
import "@/editor/styles/global.css";

import ImageBlockMenu from "../extensions/ImageBlock/components/ImageBlockMenu";
import { ColumnsMenu } from "../extensions/MultiColumn/menus";
import { TableColumnMenu, TableRowMenu } from "../extensions/Table/menus";
import { TextMenu } from "../menus/TextMenu";
import { EditorHeader } from "./components/EditorHeader";
import { TiptapProps } from "./types";
import { cn } from "@/lib/utils";

export const BlockEditor = ({ content, isEditable = true }: TiptapProps) => {
  const menuContainerRef = useRef(null);
  // const editorRef = useRef<PureEditorContent | null>(null)
  const [isEnabled, setIsEnabled] = useState(isEditable);
  const { editor, characterCount } = useBlockEditor({ content });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEnabled);
    }
  }, [editor, isEnabled]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className={cn([
        "flex  w-screen prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert dark:sm:prose-invert dark:lg:prose-invert dark:xl:prose-invert",
        isEnabled ? "h-[80vh]" : "h-screen",
      ])}
      ref={menuContainerRef}
    >
      {/* <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor} /> */}
      <div className="relative flex flex-col flex-1 h-full overflow-hidden">
        {isEnabled && (
          <EditorHeader
            characters={characterCount.characters()}
            words={characterCount.words()}
            editor={editor}
            // isSidebarOpen={leftSidebar.isOpen}
            // toggleSidebar={leftSidebar.toggle}
          />
        )}
        <EditorContent editor={editor} className="flex-1 overflow-y-auto " />
        {/* <ContentItemMenu editor={editor} /> */}
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  );
};

export default BlockEditor;
