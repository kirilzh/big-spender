import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
    input: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        file: path.join(__dirname, 'dist', 'bundle.js'),
        format: "iife",
        sourcemap: true
    },
    watch: {
        clearScreen: false
    },
    plugins: [
        typescript(),
        nodeResolve({ extensions: ['.js'] }),
        replace({ 
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        babel({ presets: ['@babel/preset-react']}),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ['', 'src'],
            host: '0.0.0.0',
            port: 3001
        }),
        livereload({ watch: 'dist' })
    ]
}
