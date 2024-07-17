/* eslint-disable @typescript-eslint/no-explicit-any */
// import "./CodeBlockComponent.scss";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { Copy } from "lucide-react";
const CodeBlockComponent = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
  isEditable = true,
}: any) => (
  <NodeViewWrapper className="code-block flex items-center">
    <div className="relative p-4">
      <pre>
        <NodeViewContent as="code" />
      </pre>
      <span className="absolute top-2 right-2  py-1 px-3 rounded">
        {isEditable ? (
          <Select
            defaultValue={defaultLanguage}
            onValueChange={(value) => updateAttributes({ language: value })}
          >
            <SelectTrigger className="w-[180px] bg-slate-800 text-white font-bold dark:bg-slate-300 dark:text-black">
              <SelectValue placeholder="language" />
            </SelectTrigger>
            <SelectContent className="w-[180px] bg-slate-800 text-white">
              <SelectGroup>
                <SelectItem value="null">auto</SelectItem>
                <SelectItem value="banana" disabled>
                  -
                </SelectItem>
                {extension.options.lowlight
                  .listLanguages()
                  .map((lang: string, index: number) => (
                    <SelectItem key={index} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}

                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : (
          <span className="flex items-center justify-center">
            <Badge variant="secondary">{defaultLanguage}</Badge>
            <Copy
              className="h-4 w-4 cursor-pointer"
              onClick={() => navigator.clipboard.writeText("")}
            />
          </span>
        )}
      </span>
    </div>
  </NodeViewWrapper>
);

export default CodeBlockComponent;
