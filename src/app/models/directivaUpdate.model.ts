export class DirectivaUpdate {
  constructor(
    public id_directiva: number,
    public nombre: string,
    public apellido: string,
    public domicilio: string,
    public edad: number,
    public matricula_directiva: string,
    public numero_telefono: number,
    public correo: string,
    public password: string,
    public jerarquia: number,
    public genero: string,
  ) {

  }
}
