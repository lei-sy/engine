import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import {cleandir} from 'rollup-plugin-cleandir'
import {terser} from 'rollup-plugin-terser'

const Pligins = [
	typescript(),
	commonjs(),
	nodeResolve(),
	terser({
		compress: { drop_console: false },
		format: { comments: false }
	})
]

export default [{
	input: "src/web.ts",
	output: { file: "dist/web.js", format: "cjs" },
	plugins: [...Pligins, cleandir("dist")]
}, {
	input: "src/web.ts",
	output: { file: "dist/web.esm.js", format: "esm" },
	plugins: Pligins
}, {
	input: "src/web.umd.ts",
	output: { file: "dist/web.umd.js", format: "umd", name: "BruceUs" },
	plugins: Pligins
}, {
	input: "src/node.ts",
	output: { file: "dist/node.js", format: "cjs" },
	plugins: Pligins
}, {
	input: "src/node.ts",
	output: { file: "dist/node.esm.js", format: "esm" },
	plugins: Pligins
},{
	input: "src/index.ts",
	output: { file: "dist/index.d.ts", format: "esm" },
	plugins: [dts()]
}];