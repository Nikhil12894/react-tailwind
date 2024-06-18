import { cn } from "@/lib/utils";
import MDEditor from "@uiw/react-md-editor";
import katex from "katex";
import "katex/dist/katex.css";
import mermaid from "mermaid";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getCodeString } from "rehype-rewrite";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode[];
  [key: string]: any;
}
const mdMermaid = `
This is to display the 
\`\$\$\c = \\pm\\sqrt{a^2 + b^2}\$\$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

The following are some examples of the diagrams, charts and graphs that can be made using Mermaid and the Markdown-inspired text specific to it. 

\`\`\`mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
\`\`\`

\`\`\`mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
\`\`\`


`;

const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);
const Code: any = ({
  inline,
  children = [],
  className,
  ...props
}: CodeProps) => {
  const demoid = useRef(`dome${randomid()}`);
  const [container, setContainer] = useState<any>(null);
  const isMermaid =
    className && /^language-mermaid/.test(className.toLocaleLowerCase());
  const isKatex =
    className && /^language-katex/.test(className.toLocaleLowerCase());
  const code = children
    ? getCodeString(props.node.children)
    : children[0] || "";

  useEffect(() => {
    if (container && isMermaid && demoid.current && code) {
      mermaid
        .render(demoid.current, code)
        .then(({ svg, bindFunctions }) => {
          container.innerHTML = svg;
          if (bindFunctions) {
            bindFunctions(container);
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  }, [container, isMermaid, code, demoid]);

  const refElement = useCallback((node: any) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  if (isMermaid) {
    return (
      <Fragment>
        <code id={demoid.current} style={{ display: "none" }} />
        <code className={className} ref={refElement} data-name="mermaid" />
      </Fragment>
    );
  } else if (isKatex) {
    const html = katex.renderToString(code, {
      throwOnError: false,
    });
    return (
      <code
        style={{ fontSize: "150%" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <code className={cn(["container", className])}>{children}</code>;
};

export default function EditorPreview() {
  //   const [value, setValue] = useState(mdMermaid);
  return (
    // @ts-ignore
    <div className="container">
      {/* <MDEditor
        onChange={(newValue = "") => setValue(newValue)}
        textareaProps={{
          placeholder: "Please enter Markdown text",
        }}
        height={500}
        value={value}
        previewOptions={{
          components: {
            code: Code,
          },
        }}
      /> */}
      <br />
      <hr />

      <MDEditor.Markdown
        components={{
          code: Code,
        }}
        source={mdMermaid}
      />
    </div>
  );
}
