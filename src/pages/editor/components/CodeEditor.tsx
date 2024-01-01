import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
import { editor } from 'monaco-editor';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor){
    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(editorRef.current.getValue());
    });

    editor.getModel()?.updateOptions({ tabSize: 2 });
  }

  return (
    <div className="editor-wrapper">
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={initialValue}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
