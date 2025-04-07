"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const handler_1 = require("../handler/handler");
const matricula = "A001"; // Puedes cambiar esto para probar otros casos
(0, handler_1.handleGetStudent)(matricula).then(resultado => {
    console.log(resultado);
});
