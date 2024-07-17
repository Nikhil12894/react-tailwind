import { useTextmenuStates } from "../../menus/TextMenu/hooks/useTextmenuStates"; //'@/components/menus/TextMenu/hooks/useTextmenuStates'
import { ColorPicker } from "../../panels";
import { Icon } from "@/components/ui/Icon";
import { Surface } from "@/components/custom/Surface";
import { Toolbar } from "@/components/custom/Toolbar";
import * as Popover from "@radix-ui/react-popover";
import { icons } from "lucide-react";
import { memo, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTextmenuCommands } from "../../menus/TextMenu/hooks/useTextmenuCommands";
const MemoButton = memo(Toolbar.Button);
const MemoColorPicker = memo(ColorPicker);
const TableMenu = ({ editor }: { editor: any }) => [
  {
    id: 1,
    name: "Insert Table",
    action: () =>
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run(),
  },
  {
    id: 2,
    name: "Add Column Before",
    action: () => editor.chain().focus().addColumnBefore().run(),
  },
  {
    id: 3,
    name: "Add Column After",
    action: () => editor.chain().focus().addColumnAfter().run(),
  },
  {
    id: 4,
    name: "Delete Column",
    action: () => editor.chain().focus().deleteColumn().run(),
  },
  {
    id: 5,
    name: "Add Row Before",
    action: () => editor.chain().focus().addRowBefore().run(),
  },
  {
    id: 6,
    name: "Add Row After",
    action: () => editor.chain().focus().addRowAfter().run(),
  },
  {
    id: 7,
    name: "Delete Row",
    action: () => editor.chain().focus().deleteRow().run(),
  },
  {
    id: 8,
    name: "Delete Table",
    action: () => editor.chain().focus().deleteTable().run(),
  },
  {
    id: 9,
    name: "Merge Cells",
    action: () => editor.chain().focus().mergeCells().run(),
  },
  {
    id: 11,
    name: "Toggle Header Column",
    action: () => editor.chain().focus().toggleHeaderColumn().run(),
  },
  {
    id: 12,
    name: "Toggle Header Row",
    action: () => editor.chain().focus().toggleHeaderRow().run(),
  },
  {
    id: 13,
    name: "Toggle Header Cell",
    action: () => editor.chain().focus().toggleHeaderCell().run(),
  },
  {
    id: 14,
    name: "Merge Or Split",
    action: () => editor.chain().focus().mergeOrSplit().run(),
  },
  {
    id: 15,
    name: "Set Cell Attribute",
    action: () => editor.chain().focus().setCellAttribute("colspan", 2).run(),
  },
];

interface MenuBarIconProps {
  id: number;
  name: string;
  icon: keyof typeof icons;
  onClick: () => void;
  disable: boolean;
  isActive?: string;
  hover: boolean;
  split: boolean;
}
const MenuBarIcon = ({ editor }: { editor: any }): MenuBarIconProps[] => [
  {
    id: 1,
    name: "bold",
    icon: "Bold",
    onClick: () => editor.chain().focus().toggleBold().run(),
    disable: !editor.can().chain().focus().toggleBold().run(),
    // isActive: editor.isActive('bold') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 2,
    name: "italic",
    icon: "Italic",
    onClick: () => editor.chain().focus().toggleItalic().run(),
    disable: !editor.can().chain().focus().toggleItalic().run(),
    // isActive: editor.isActive('italic') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 21,
    name: "underline",
    icon: "Underline",
    onClick: () => editor.chain().focus().toggleUnderline().run(),
    disable: false,
    // isActive: editor.isActive('underline') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 3,
    name: "strike",
    icon: "Strikethrough",
    onClick: () => editor.chain().focus().toggleStrike().run(),
    disable: !editor.can().chain().focus().toggleStrike().run(),
    // isActive: editor.isActive('strike') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 4,
    name: "code",
    icon: "Code",
    onClick: () => editor.chain().focus().toggleCode().run(),
    disable: !editor.can().chain().focus().toggleCode().run(),
    // isActive: editor.isActive('code') ? 'is-active text-green-700' : '',
    hover: false,
    split: true,
  },
  {
    id: 5,
    name: "heading1",
    icon: "Heading1",
    onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    disable: false,
    // isActive: editor.isActive('heading', { level: 1 }) ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 6,
    name: "heading2",
    icon: "Heading2",
    onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    disable: false,
    // isActive: editor.isActive('heading', { level: 2 }) ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 13,
    name: "heading3",
    icon: "Heading3",
    onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    disable: false,
    // isActive: editor.isActive('heading', { level: 3 }) ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 7,
    name: "paragraph",
    icon: "Pilcrow",
    onClick: () => editor.chain().focus().setParagraph().run(),
    disable: false,
    // isActive: editor.isActive('paragraph') ? 'is-active text-green-700' : '',
    hover: false,
    split: true,
  },
  {
    id: 8,
    name: "bullet list",
    icon: "List",
    onClick: () => editor.chain().focus().toggleBulletList().run(),
    disable: false,
    // isActive: editor.isActive('bulletList') ? 'is-active text-green-700 list-disc' : '',
    hover: false,
    split: false,
  },
  {
    id: 9,
    name: "ordered list",
    icon: "ListOrdered",
    onClick: () => editor.chain().focus().toggleOrderedList().run(),
    disable: false,
    // isActive: editor.isActive('orderedList') ? 'is-active text-green-700 list-decimal' : '',
    hover: false,
    split: false,
  },
  {
    id: 16,
    name: "align left",
    icon: "AlignLeft",
    onClick: () => editor.chain().focus().setTextAlign("left").run(),
    disable: false,
    // isActive: editor.isActive({ textAlign: 'left' }) ? 'is-active' : '',
    hover: false,
    split: false,
  },
  {
    id: 17,
    name: "align center",
    icon: "AlignCenter",
    onClick: () => editor.chain().focus().setTextAlign("center").run(),
    disable: false,
    // isActive: editor.isActive({ textAlign: 'center' }) ? 'is-active text-green-700 text-center' : '',
    hover: false,
    split: false,
  },
  {
    id: 18,
    name: "align right",
    icon: "AlignRight",
    onClick: () => editor.chain().focus().setTextAlign("right").run(),
    disable: false,
    // isActive: editor.isActive({ textAlign: 'right' }) ? 'is-active' : '',
    hover: false,
    split: false,
  },
  {
    id: 19,
    name: "align justify",
    icon: "AlignJustify",
    onClick: () => editor.chain().focus().setTextAlign("justify").run(),
    disable: false,
    // isActive: editor.isActive({ textAlign: 'justify' }) ? 'is-active' : '',
    hover: false,
    split: true,
  },
  {
    id: 20,
    name: "highlight",
    icon: "Highlighter",
    onClick: () => editor.chain().focus().toggleHighlight().run(),
    disable: false,
    // isActive: editor.isActive('highlight') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 10,
    name: "code block",
    icon: "Braces",
    onClick: () => editor.chain().focus().toggleCodeBlock().run(),
    disable: false,
    // isActive: editor.isActive('codeBlock') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 11,
    name: "blockquote",
    icon: "Quote",
    onClick: () => editor.chain().focus().toggleBlockquote().run(),
    disable: false,
    // isActive: editor.isActive('blockquote') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },

  {
    id: 12,
    name: "table",
    icon: "Table",
    onClick: () =>
      editor
        .chain()
        .focus()
        .insertContent({ rows: 3, cols: 3, withHeaderRow: true })
        .run(),
    disable: false,
    // isActive: editor.isActive('table') ? 'is-active text-green-700' : '',
    hover: true,
    split: true,
  },
  {
    id: 32,
    name: "clear all",
    icon: "RemoveFormatting",
    onClick: () => editor.chain().focus().clearNodes().run(),
    disable: false,
    // isActive: editor.isActive('clearNodes') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 32,
    name: "clear mark",
    icon: "X",
    onClick: () => editor.chain().focus().unsetAllMarks().run(),
    disable: false,
    // isActive: editor.isActive('unsetAllMarks') ? 'is-active text-green-700' : '',
    hover: false,
    split: true,
  },
  {
    id: 32,
    name: "horizontal rule",
    icon: "Minus",
    onClick: () => editor.chain().focus().setHorizontalRule().run(),
    disable: false,
    // isActive: editor.isActive('horizontalRule') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 33,
    name: "link",
    icon: "Link",
    onClick: () => editor.chain().focus().setLink().run(),
    disable: false,
    // isActive: editor.isActive('link') ? 'is-active text-green-700' : '',
    hover: false,
    split: true,
  },
  {
    id: 30,
    name: "undo",
    icon: "Undo",
    onClick: () => editor.chain().focus().undo().run(),
    disable: !editor.can().undo(),
    // isActive: editor.isActive('undo') ? 'is-active text-green-700' : '',
    hover: false,
    split: false,
  },
  {
    id: 31,
    name: "redo",
    icon: "Redo",
    onClick: () => editor.chain().focus().redo().run(),
    disable: !editor.can().redo(),
    // isActive: editor.isActive('redo') ? 'is-active text-green-700' : '',
    hover: false,
    split: true,
  },
];

export function EditorMenuBar({ editor }: { editor: any }) {
  //   const { editor } = useContext(TiptapContext);
  //   const [open, setOpen] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const commands = useTextmenuCommands(editor);
  const states = useTextmenuStates(editor);
  if (!editor) {
    return null;
  }
  const MenuBarIconValue = MenuBarIcon({ editor });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          editor.chain().focus().insertContent({ src: reader.result }).run();
          // setImageURL(reader.result)
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center justify-between">
      <Popover.Root>
        <Popover.Trigger asChild>
          <MemoButton active={!!states.currentColor} tooltip="Text color">
            <Icon name="Palette" />
          </MemoButton>
        </Popover.Trigger>
        <Popover.Content side="top" sideOffset={8} asChild>
          <Surface className="p-1">
            <MemoColorPicker
              color={states.currentColor}
              onChange={commands.onChangeColor}
              onClear={commands.onClearColor}
            />
          </Surface>
        </Popover.Content>
      </Popover.Root>
      {MenuBarIconValue.map((item) =>
        item.hover ? (
          <Menubar className="bg-transparent border-none" key={item.name}>
            <MenubarMenu>
              <MenubarTrigger className="mr-1 p-0">
                {item.disable ? (
                  <span key={item.id} className={`cursor-not-allowed`}>
                    <Icon name={item.icon} />
                  </span>
                ) : (
                  <span key={item.id} className="cursor-pointer">
                    <Icon name={item.icon} />
                  </span>
                )}
              </MenubarTrigger>
              {item.split && (
                <div className="mx-1 w-[1px] flex bg-gray-500 h-6" />
              )}
              <MenubarContent>
                {TableMenu({ editor }).map((menuItem) => (
                  <MenubarItem key={menuItem.id} onClick={menuItem.action}>
                    {menuItem.name}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <div className="flex items-center h-full gap-1" key={item.name}>
            <Button
              variant={"ghost"}
              key={item.id}
              onClick={item.onClick}
              disabled={item.disable}
              className={`${
                item.disable
                  ? "cursor-not-allowed p-1"
                  : "cursor-pointer hover:bg-gray-500 hover:rounded-lg p-1"
              } + ${item.isActive ? item.isActive : ""}`}
            >
              <Icon name={item.icon} />
            </Button>
            {item.split && (
              <div className="mx-1 w-[1px] flex bg-gray-500 h-6" />
            )}
          </div>
        )
      )}
      <div className="cursor-pointer hover:bg-gray-500 hover:rounded-lg p-1">
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />
        {/* <Icons.image /> */}
        <span onClick={handleIconClick}>
          <Icon name="Image" />
        </span>
      </div>
    </div>
  );
}

export const tableHTML = `
  <table class="border-collapse border border-slate-500">
  <thead>
    <tr>
      <th class="border border-slate-600">State</th>
      <th class="border border-slate-600">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700">Indiana</td>
      <td class="border border-slate-700">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-700">Ohio</td>
      <td class="border border-slate-700">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-700">Michigan</td>
      <td class="border border-slate-700">Detroit</td>
    </tr>
  </tbody>
</table>
`;
