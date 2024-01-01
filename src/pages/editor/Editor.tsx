import { useEffect, useState } from "react";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";

function Editor() {
  const [input, setinput] = useState("");
  const [code, setcode] = useState("");

  useEffect(() => {
    async function startService() {
      await esbuild.initialize({
        wasmURL: "./node_modules/esbuild-wasm/esbuild.wasm",
        worker: true
      });
    }
    startService();
  }, []);

  const handleSubmit = async () => {
    const result = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });
    setcode(result.outputFiles[0].text);
  };


  return (
    <div className="m-4">
      <CodeEditor initialValue={input} onChange={(e) => setinput(e)} />
      <div>
        <button
          onClick={handleSubmit}
          className="px-3 py-1 rounded-sm bg-babypurple"
        >
          Submit
        </button>
      </div>
      <Preview code={code}/>
    </div>
  );
}

export default Editor;
