// handler.ts
import StudentController from "../controller/studentController";

export const handleGetStudent = async (matricula: string) => {
    try {
        const resultado = await StudentController.getStudent(matricula);
        return resultado;
    } catch (error: any) {
        return { error: error.message };
    }
};
