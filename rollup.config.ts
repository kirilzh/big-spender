import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: "./src/index.tsx",
    output: {
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: true
    },
    plugins: [
        typescript(),
        nodeResolve({ extensions: ['.js'] }),
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        babel({ presets: ['@babel/preset-react']}),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ['', 'src'],
            host: '0.0.0.0',
            port: 3000
        }),
        livereload({ watch: 'dist' })
    ]
}
