export class ProfesoresUpdate {
  constructor(
    public id_profesor: number,
    public nombre: string,
    public apellido: string,
    public domicilio: string,
    public licencia: string,
    public matricula_profesor: string,
    public correo: string,
    public password: string,
    public numero_telefono: number,
    public edad: number,
    public jerarquia: number,
    public genero: string,
  ) {

  }
}
