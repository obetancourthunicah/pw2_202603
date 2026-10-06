import { defineConfig } from "vite";
import path, { resolve } from 'node:path';
import * as glob from "glob";

const __dirname = import.meta.dirname;

const base_path = import.meta.env?.BASE_URL ?? '';
function obtenerHtmlFiles() {
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map((file)=>{
            return [
                file.slice(0, file.length - path.extname(file).length), // nombre del archivo sin extensión
                resolve(__dirname, file) // full path a el archivo
            ]
        })
    );
}

export default defineConfig(
    {
        appType: 'mpa',
        base: base_path,
        build: {
            rolldownOptions: {
                input: obtenerHtmlFiles()
            }
        },
    }
);
