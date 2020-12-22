import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

export const CodeBlock = ({language, value}: any) => {
  return (
    <div className="codeblock">
      <SyntaxHighlighter showLineNumbers={true} language={language}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}
