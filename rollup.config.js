import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild'

export default {
	input: 'src/index.ts',
	output: {
    dir: "dist",
    format: "cjs"
  },
  plugins: [nodeResolve(), esbuild()],
};