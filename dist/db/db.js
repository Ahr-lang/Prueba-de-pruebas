"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEstudiantePorMatricula = void 0;
const estudiantes = [
    { matricula: "A001", calificacion: 95, tieneAdeudo: false, nombre: "Juan Perez" },
    { matricula: "A002", calificacion: 88, tieneAdeudo: true, nombre: "Maria Lopez" },
    { matricula: "A003", calificacion: 60, tieneAdeudo: false, nombre: "Carlos Sanchez" },
    { matricula: "A004", calificacion: 50, tieneAdeudo: true, nombre: "Ana Martinez" },
];
const obtenerEstudiantePorMatricula = (matricula) => {
    return estudiantes.find(estudiante => estudiante.matricula === matricula);
};
exports.obtenerEstudiantePorMatricula = obtenerEstudiantePorMatricula;
