// const http = require('http')
// acima estamos com CommonJS, quase não utilizado como padrão de código

import http from 'http'
// acima estamos usando módulo interno do NodeJS
// acima estamos com ESModules, para usar ESmodules no NodeJs precisamos informar no package.json o "type": "module"
// por padrão o NodeJS não suporta p Ecma Script Modules
// import crypto from 'node:crypto'
// acima estamos usando módulo de terceiros que é instalado pelo npm

const server = http.createServer((req, res) => res.end('Hello World'))

server.listen(3333, () => console.log('Server is Running on 3333'))

// 'localhost:3333' no navegador
// 'http localhost:3333' na linha de comando com HTTPie https://httpie.io/docs/cli/url-shortcuts-for-localhost
// 'node --watch src/server.js' assim o servidor dará auto reload a cada modificação de código
// script para rodar o comando acima
