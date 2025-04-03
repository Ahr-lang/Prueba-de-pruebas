class StudentController {
    async getStudent(matricula) {
       const studentList = await this.getStudentListFromDB();
       const estudiante = studentList.find((student) => student.matricula === matricula);
       if (!estudiante) {
           throw new Error('Student not found');
       }
    }
}

export default StudentController;