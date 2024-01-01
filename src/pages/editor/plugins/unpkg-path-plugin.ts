import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /(^index\.js$)/ }, (args: any) => {
        return { path: args.path, namespace: 'a' };
      })

      build.onResolve({ filter: /^\.+\// }, async (args: any) => {
        return {
          path:new URL(args.path, "https://unpkg.com" + args.resolveDir  + "/").href,
          namespace:"a"
        }
      })
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          path:`https://www.unpkg.com/${args.path}`,
          namespace: 'a'
        }
      });
    },
  };
};
