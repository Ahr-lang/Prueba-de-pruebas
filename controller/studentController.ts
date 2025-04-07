import { obtenerEstudiantePorMatricula } from "../db/db";

class StudentController {
    async getStudent(matricula: string) {
        const estudiante = obtenerEstudiantePorMatricula(matricula);

        if (!estudiante) {
            throw new Error("Estudiante no encontrado");
        }

        // Transformar el objeto para que coincida con el tipo esperado
        const estudianteTransformado = {
            ...estudiante,
            adeudo: estudiante.tieneAdeudo, // Renombrar propiedad
        };

        return this.evaluarEstudiante(estudianteTransformado);
    }

    evaluarEstudiante(estudiante: { calificacion: number; adeudo: boolean; matricula: string; nombre: string }) {
        const { calificacion, adeudo } = estudiante;

        if (calificacion > 90 && !adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Te graduaste con honores" };
        } else if (calificacion > 90 && adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Tenías honores pero tienes adeudos" };
        } else if (calificacion >= 70 && calificacion <= 90) {
            return { matricula: estudiante.matricula, mensaje: "Pasaste muy apenas" };
        } else if (calificacion < 70 && !adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Como no tienes adeudo, tienes derecho a un examen de recuperación" };
        } else if (calificacion < 70 && adeudo) {
            return { matricula: estudiante.matricula, mensaje: "Es expulsado" };
        }
    }
}

export default new StudentController();
