export class AlumnosUpdate {
  constructor(
    public id_alumnos: number,
    public nombre: string,
    public apellido: string,
    public domicilio: string,
    public edad: number,
    public matricula_alumno: string,
    public numero_telefono: number,
    public jerarquia: number,
    public genero: string,
    public correo: string,
    public password: string,
  ) {

  }
}
