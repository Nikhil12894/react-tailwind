// src/components/CustomMDEditor.tsx
import MDEditor, {
  ICommand,
  TextAreaTextApi,
  TextState,
  commands,
} from "@uiw/react-md-editor";
import React, { useState } from "react";

const CustomMDEditor: React.FC = () => {
  const [value, setValue] = useState<string | undefined>("");

  const handleImageUpload = async (file: File, textApi: TextAreaTextApi) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const imageMarkdown = `![image](${base64String})`;
      insertImageMarkdown(imageMarkdown, textApi);
    };
    reader.readAsDataURL(file);
  };

  const insertImageMarkdown = (
    imageMarkdown: string,
    textApi: TextAreaTextApi
  ) => {
    textApi.replaceSelection(imageMarkdown);
  };

  const customImageCommand: ICommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: (
      <svg viewBox="0 0 20 20" width="12" height="12">
        <path
          fill="currentColor"
          d="M16.9 4H3.1C2.4 4 2 4.4 2 5.1v9.8C2 15.6 2.4 16 3.1 16h13.8c.7 0 1.1-.4 1.1-1.1V5.1c0-.7-.4-1.1-1.1-1.1zm-1 9.7H4.1V6h11.8v7.7zM6 9c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1zm2.5 4.1l-1.8-2.3c-.2-.2-.5-.3-.8-.1L4.3 12.7H15.7l-4-5c-.3-.3-.7-.3-1 0L8.5 13.1z"
        />
      </svg>
    ),
    execute: (state: TextState, api: TextAreaTextApi) => {
      console.log(state, api);
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = () => {
        if (input.files && input.files.length > 0) {
          handleImageUpload(input.files[0], api);
        }
      };
      input.click();
    },
  };

  return (
    <div>
      <MDEditor
        value={value}
        onChange={setValue}
        commands={[...commands.getCommands(), customImageCommand]}
      />
    </div>
  );
};

export default CustomMDEditor;
