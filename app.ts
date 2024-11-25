// Clase Persona:
// Crea e instancia una clase Persona con:
// Dos propiedades, una pública y una privada. Ambas deben ser pasadas al constructor.
// Un método estático para devolver un saludo genérico.
// Un método no estático que devuelva el nombre y edad de la persona.

class Persona {
    public name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
 
    static greet(): string {
      return "Hello! I am a person.";
    }
  
   
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  

  const persona1 = new Persona("Alice", 25);
  

  console.log(Persona.greet());
  

  console.log(persona1.getDetails());
  /*
Clase Animal:
Crea e instancia una clase Animal con:
Cuatro propiedades: dos públicas (nombre y especie) y dos privadas (edad y peso).
Las propiedades públicas deben ser pasadas al constructor.
Las privadas deben inicializarse dentro de la clase.
Un método estático que indique el sonido de un animal genérico.
Un método no estático que devuelva todos los datos del animal.
  */

class Animal {
    public nombre: string;
    public especie: string;
    private edad: number;
    private peso: number;

    constructor(nombre: string, especie: string) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = 0;
        this.peso = 0;
    }

    static generarSonido(): string {
        return 'wooooooooooooooooooooo'
    }

    obtenerInfo(): string{
         return `nombre: ${this.nombre}, especie: ${this.especie}, edad: ${this.edad}, peso: ${this.peso}`
    }
}
const animal1 = new Animal("tony", "perro");
  

console.log(Animal.generarSonido());


console.log(animal1.obtenerInfo());


/*

Clase Calculadora:
Crea e instancia una clase Calculadora con:
Dos propiedades públicas (operando1 y operando2) que deben ser pasadas al constructor.
Métodos estáticos para realizar sumas y restas.
Métodos no estáticos para multiplicar y dividir los operandos.


*/

class Calculadora {
    public operando1: number;
    public operando2: number;
  
    constructor(operando1: number, operando2: number) {
      this.operando1 = operando1;
      this.operando2 = operando2;
    }
  
    static sumar(a: number, b: number): number {
      return a + b;
    }
  
    static restar(a: number, b: number): number {
      return a - b;
    }
  

    multiplicar(): number {
      return this.operando1 * this.operando2;
    }
  
    dividir(): number {
      return this.operando2 !== 0 ? this.operando1 / this.operando2 : Infinity;
    }
  }
  

  const calc = new Calculadora(10, 5);
  console.log(Calculadora.sumar(10, 5)); 
  console.log(Calculadora.restar(10, 5)); 
  console.log(calc.multiplicar()); 
  console.log(calc.dividir()); 
  

/*

Clase Vehículo:
Crea e instancia una clase Vehículo con:
Cuatro propiedades: dos públicas (marca, modelo) y dos privadas (kilometraje, capacidad).
Todas las propiedades deben ser pasadas al constructor.
Métodos estáticos para comparar capacidades de vehículos.
Métodos no estáticos para describir el vehículo.

*/


class Vehiculo {
    public marca: string;
    public modelo: string;
    private kilometraje: number;
    private capacidad: number;
  
    constructor(marca: string, modelo: string, kilometraje: number, capacidad: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.kilometraje = kilometraje;
      this.capacidad = capacidad;
    }

    static compararCapacidades(v1: Vehiculo, v2: Vehiculo): string {
      return v1.capacidad > v2.capacidad
        ? `${v1.marca} tiene mayor capacidad.`
        : `${v2.marca} tiene mayor capacidad.`;
    }
  

    describir(): string {
      return `Vehículo: ${this.marca} ${this.modelo}, Kilometraje: ${this.kilometraje} km, Capacidad: ${this.capacidad} personas.`;
    }
  }
  const veh1 = new Vehiculo("Toyota", "Corolla", 50000, 5);
  const veh2 = new Vehiculo("Ford", "Explorer", 30000, 7);
  console.log(veh1.describir());
  console.log(Vehiculo.compararCapacidades(veh1, veh2));

/*


Clase Dispositivo:
Crea e instancia una clase Dispositivo con:
Dos propiedades públicas (marca y modelo) y dos privadas (serie y año).
Las propiedades públicas deben ser pasadas al constructor.
Las propiedades privadas deben ser inicializadas dentro de la clase.
Métodos estáticos para verificar compatibilidad con una red.
Métodos no estáticos para mostrar información del dispositivo.

*/

class Dispositivo {
    public marca: string;
    public modelo: string;
    private serie: string;
    private año: number;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.serie = "SN123456";
      this.año = new Date().getFullYear();
    }
  
    static esCompatible(red: string): boolean {
      return red === "WiFi" || red === "Bluetooth";
    }
  
    mostrarInformacion(): string {
      return `Dispositivo: ${this.marca} ${this.modelo}, Serie: ${this.serie}, Año: ${this.año}`;
    }
  }
  
  const disp = new Dispositivo("Samsung", "Galaxy S21");
  console.log(Dispositivo.esCompatible("WiFi"));
  console.log(disp.mostrarInformacion());
  

/*

Clase Estudiante:
Crea e instancia una clase Estudiante con:
Cuatro propiedades: dos públicas (nombre, grado) y dos privadas (edad, calificaciones).
Todas las propiedades deben ser pasadas al constructor.
Métodos estáticos para calcular el promedio de un conjunto de calificaciones.
Métodos no estáticos para mostrar los datos del estudiante.

*/

class Estudiante {
    public nombre: string;
    public grado: string;
    private edad: number;
    private calificaciones: number[];
  
    constructor(nombre: string, grado: string, edad: number, calificaciones: number[]) {
      this.nombre = nombre;
      this.grado = grado;
      this.edad = edad;
      this.calificaciones = calificaciones;
    }
  
    static calcularPromedio(calificaciones: number[]): number {
      const total = calificaciones.reduce((acc, nota) => acc + nota, 0);
      return total / calificaciones.length;
    }
  
    mostrarDatos(): string {
      return `Estudiante: ${this.nombre}, Grado: ${this.grado}, Edad: ${this.edad}, Promedio: ${Estudiante.calcularPromedio(this.calificaciones).toFixed(2)}`;
    }
  }
  

  const estudiante = new Estudiante("Carlos", "10°", 16, [4.5, 3.7, 4.0, 5.0]);
  console.log(estudiante.mostrarDatos());


/*

Clase CuentaBancaria:
Crea e instancia una clase CuentaBancaria con:
Dos propiedades públicas (titular, saldo) y dos privadas (númeroCuenta, tipoCuenta).
Las propiedades públicas deben ser pasadas al constructor.
Las propiedades privadas deben inicializarse dentro de la clase.
Métodos estáticos para realizar conversiones de moneda.
Métodos no estáticos para retirar y depositar dinero.

*/

class CuentaBancaria {
    public titular: string;
    public saldo: number;
    private numeroCuenta: string;
    private tipoCuenta: string;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
      this.numeroCuenta = "123456789";
      this.tipoCuenta = "Ahorros";
    }
  
    static convertirMoneda(monto: number, tasaCambio: number): number {
      return monto * tasaCambio;
    }
  

    depositar(monto: number): void {
      this.saldo += monto;
    }
  
    retirar(monto: number): boolean {
      if (monto <= this.saldo) {
        this.saldo -= monto;
        return true;
      }
      return false;
    }
  }
  
  const cuenta = new CuentaBancaria("Ana", 5000);
  cuenta.depositar(1500);
  console.log(cuenta.saldo); 
  console.log(cuenta.retirar(2000)); 
  console.log(cuenta.saldo); 

/*

Clase Electrodoméstico:
Crea e instancia una clase Electrodoméstico con:
Cuatro propiedades: dos públicas (tipo, marca) y dos privadas (potencia, peso).
Todas las propiedades deben ser pasadas al constructor.
Métodos estáticos para comparar potencia entre electrodomésticos.
Métodos no estáticos para encender y apagar el electrodoméstico.

*/
class Electrodomestico {
    public tipo: string;
    public marca: string;
    private potencia: number;
    private peso: number;
  
    constructor(tipo: string, marca: string, potencia: number, peso: number) {
      this.tipo = tipo;
      this.marca = marca;
      this.potencia = potencia;
      this.peso = peso;
    }

    static compararPotencia(e1: Electrodomestico, e2: Electrodomestico): string {
      return e1.potencia > e2.potencia
        ? `${e1.tipo} tiene mayor potencia.`
        : `${e2.tipo} tiene mayor potencia.`;
    }
  
    encender(): string {
      return `${this.tipo} de ${this.marca} está encendido.`;
    }
  
    apagar(): string {
      return `${this.tipo} de ${this.marca} está apagado.`;
    }
  }
  
  const microondas = new Electrodomestico("Microondas", "LG", 1200, 18);
  const licuadora = new Electrodomestico("Licuadora", "Oster", 700, 5);
  
  console.log(Electrodomestico.compararPotencia(microondas, licuadora));
  console.log(microondas.encender());
  console.log(licuadora.apagar());


/*

Clase Videojuego:
Crea e instancia una clase Videojuego con:
Dos propiedades públicas (título, género) y dos privadas (desarrollador, calificación).
Todas las propiedades deben ser inicializadas dentro de la clase.
Métodos estáticos para recomendar videojuegos según género.
Métodos no estáticos para mostrar la descripción del videojuego.

*/

class Videojuego {
    public titulo: string;
    public genero: string;
    private desarrollador: string;
    private calificacion: number;
  
    constructor(titulo: string, genero: string, desarrollador: string, calificacion: number) {
      this.titulo = titulo;
      this.genero = genero;
      this.desarrollador = desarrollador;
      this.calificacion = calificacion;
    }
  o
    static recomendarPorGenero(genero: string, juegos: Videojuego[]): Videojuego[] {
      return juegos.filter((juego) => juego.genero === genero);
    }
  
    descripcion(): string {
      return `Título: ${this.titulo}, Género: ${this.genero}, Desarrollador: ${this.desarrollador}, Calificación: ${this.calificacion}/10.`;
    }
  }
  
  const juego1 = new Videojuego("The Witcher 3", "RPG", "CD Projekt Red", 10);
  const juego2 = new Videojuego("Halo", "Shooter", "Bungie", 9);
  const juegos = [juego1, juego2];
  
  console.log(Videojuego.recomendarPorGenero("RPG", juegos));
  console.log(juego1.descripcion());

  

/*

Clase Producto:
Crea e instancia una clase Producto con:
Cuatro propiedades: dos públicas (nombre, precio) y dos privadas (stock, código).
Todas las propiedades deben ser pasadas al constructor.
Métodos estáticos para calcular descuentos.
Métodos no estáticos para mostrar información del producto y actualizar el stock.

*/


class Producto {
    public nombre: string;
    public precio: number;
    private stock: number;
    private codigo: string;
  
    constructor(nombre: string, precio: number, stock: number, codigo: string) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.codigo = codigo;
    }
  
    static calcularDescuento(precio: number, porcentaje: number): number {
      return precio - (precio * porcentaje) / 100;
    }
  
    mostrarInformacion(): string {
      return `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Stock: ${this.stock}, Código: ${this.codigo}`;
    }
  
    actualizarStock(cantidad: number): void {
      this.stock += cantidad;
    }
  }

  const producto = new Producto("Laptop", 1500, 10, "LAP123");
  console.log(producto.mostrarInformacion());
  producto.actualizarStock(-2);
  console.log(producto.mostrarInformacion());
  console.log(Producto.calcularDescuento(producto.precio, 10));
  