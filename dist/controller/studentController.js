"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
class StudentController {
    getStudent(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudiante = (0, db_1.obtenerEstudiantePorMatricula)(matricula);
            if (!estudiante) {
                throw new Error("Estudiante no encontrado");
            }
            // Transformar el objeto para que coincida con el tipo esperado
            const estudianteTransformado = Object.assign(Object.assign({}, estudiante), { adeudo: estudiante.tieneAdeudo });
            return this.evaluarEstudiante(estudianteTransformado);
        });
    }
    evaluarEstudiante(estudiante) {
        const { calificacion, adeudo } = estudiante;
        if (calificacion > 90 && !adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Te graduaste con honores" };
        }
        else if (calificacion > 90 && adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Tenías honores pero tienes adeudos" };
        }
        else if (calificacion >= 70 && calificacion <= 90) {
            return { matricula: estudiante.matricula, mensaje: "Pasaste muy apenas" };
        }
        else if (calificacion < 70 && !adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Como no tienes adeudo, tienes derecho a un examen de recuperación" };
        }
        else if (calificacion < 70 && adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Es expulsado" };
        }
    }
}
exports.default = new StudentController();
