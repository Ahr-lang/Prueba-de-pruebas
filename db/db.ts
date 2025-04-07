const estudiantes = [
    { matricula: "A001", calificacion: 95, tieneAdeudo: false, nombre: "Juan Perez" },
    { matricula: "A002", calificacion: 88, tieneAdeudo: true, nombre: "Maria Lopez" },
    { matricula: "A003", calificacion: 60, tieneAdeudo: false, nombre: "Carlos Sanchez" },
    { matricula: "A004", calificacion: 50, tieneAdeudo: true, nombre: "Ana Martinez" },
];

export const obtenerEstudiantePorMatricula = (matricula: string) => {
    return estudiantes.find(estudiante => estudiante.matricula === matricula);
};
