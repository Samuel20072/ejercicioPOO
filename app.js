// Clase Persona:
// Crea e instancia una clase Persona con:
// Dos propiedades, una pública y una privada. Ambas deben ser pasadas al constructor.
// Un método estático para devolver un saludo genérico.
// Un método no estático que devuelva el nombre y edad de la persona.
var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.greet = function () {
        return "Hello! I am a person.";
    };
    Persona.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Persona;
}());
var persona1 = new Persona("Alice", 25);
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
var Animal = /** @class */ (function () {
    function Animal(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = 0;
        this.peso = 0;
    }
    Animal.generarSonido = function () {
        return 'wooooooooooooooooooooo';
    };
    Animal.prototype.obtenerInfo = function () {
        return "nombre: ".concat(this.nombre, ", especie: ").concat(this.especie, ", edad: ").concat(this.edad, ", peso: ").concat(this.peso);
    };
    return Animal;
}());
var animal1 = new Animal("tony", "perro");
console.log(Animal.generarSonido());
console.log(animal1.obtenerInfo());
/*

Clase Calculadora:
Crea e instancia una clase Calculadora con:
Dos propiedades públicas (operando1 y operando2) que deben ser pasadas al constructor.
Métodos estáticos para realizar sumas y restas.
Métodos no estáticos para multiplicar y dividir los operandos.


*/
var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.operando1 * this.operando2;
    };
    Calculadora.prototype.dividir = function () {
        return this.operando2 !== 0 ? this.operando1 / this.operando2 : Infinity;
    };
    return Calculadora;
}());
var calc = new Calculadora(10, 5);
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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, kilometraje, capacidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
        this.capacidad = capacidad;
    }
    Vehiculo.compararCapacidades = function (v1, v2) {
        return v1.capacidad > v2.capacidad
            ? "".concat(v1.marca, " tiene mayor capacidad.")
            : "".concat(v2.marca, " tiene mayor capacidad.");
    };
    Vehiculo.prototype.describir = function () {
        return "Veh\u00EDculo: ".concat(this.marca, " ").concat(this.modelo, ", Kilometraje: ").concat(this.kilometraje, " km, Capacidad: ").concat(this.capacidad, " personas.");
    };
    return Vehiculo;
}());
var veh1 = new Vehiculo("Toyota", "Corolla", 50000, 5);
var veh2 = new Vehiculo("Ford", "Explorer", 30000, 7);
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
var Dispositivo = /** @class */ (function () {
    function Dispositivo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.serie = "SN123456";
        this.año = new Date().getFullYear();
    }
    Dispositivo.esCompatible = function (red) {
        return red === "WiFi" || red === "Bluetooth";
    };
    Dispositivo.prototype.mostrarInformacion = function () {
        return "Dispositivo: ".concat(this.marca, " ").concat(this.modelo, ", Serie: ").concat(this.serie, ", A\u00F1o: ").concat(this.año);
    };
    return Dispositivo;
}());
var disp = new Dispositivo("Samsung", "Galaxy S21");
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
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, grado, edad, calificaciones) {
        this.nombre = nombre;
        this.grado = grado;
        this.edad = edad;
        this.calificaciones = calificaciones;
    }
    Estudiante.calcularPromedio = function (calificaciones) {
        var total = calificaciones.reduce(function (acc, nota) { return acc + nota; }, 0);
        return total / calificaciones.length;
    };
    Estudiante.prototype.mostrarDatos = function () {
        return "Estudiante: ".concat(this.nombre, ", Grado: ").concat(this.grado, ", Edad: ").concat(this.edad, ", Promedio: ").concat(Estudiante.calcularPromedio(this.calificaciones).toFixed(2));
    };
    return Estudiante;
}());
var estudiante = new Estudiante("Carlos", "10°", 16, [4.5, 3.7, 4.0, 5.0]);
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
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = "123456789";
        this.tipoCuenta = "Ahorros";
    }
    CuentaBancaria.convertirMoneda = function (monto, tasaCambio) {
        return monto * tasaCambio;
    };
    CuentaBancaria.prototype.depositar = function (monto) {
        this.saldo += monto;
    };
    CuentaBancaria.prototype.retirar = function (monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            return true;
        }
        return false;
    };
    return CuentaBancaria;
}());
var cuenta = new CuentaBancaria("Ana", 5000);
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
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(tipo, marca, potencia, peso) {
        this.tipo = tipo;
        this.marca = marca;
        this.potencia = potencia;
        this.peso = peso;
    }
    Electrodomestico.compararPotencia = function (e1, e2) {
        return e1.potencia > e2.potencia
            ? "".concat(e1.tipo, " tiene mayor potencia.")
            : "".concat(e2.tipo, " tiene mayor potencia.");
    };
    Electrodomestico.prototype.encender = function () {
        return "".concat(this.tipo, " de ").concat(this.marca, " est\u00E1 encendido.");
    };
    Electrodomestico.prototype.apagar = function () {
        return "".concat(this.tipo, " de ").concat(this.marca, " est\u00E1 apagado.");
    };
    return Electrodomestico;
}());
var microondas = new Electrodomestico("Microondas", "LG", 1200, 18);
var licuadora = new Electrodomestico("Licuadora", "Oster", 700, 5);
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
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, genero, desarrollador, calificacion) {
        this.titulo = titulo;
        this.genero = genero;
        this.desarrollador = desarrollador;
        this.calificacion = calificacion;
    }
    Videojuego.recomendarPorGenero = function (genero, juegos) {
        return juegos.filter(function (juego) { return juego.genero === genero; });
    };
    Videojuego.prototype.descripcion = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Desarrollador: ").concat(this.desarrollador, ", Calificaci\u00F3n: ").concat(this.calificacion, "/10.");
    };
    return Videojuego;
}());
var juego1 = new Videojuego("The Witcher 3", "RPG", "CD Projekt Red", 10);
var juego2 = new Videojuego("Halo", "Shooter", "Bungie", 9);
var juegos = [juego1, juego2];
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
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, stock, codigo) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
    }
    Producto.calcularDescuento = function (precio, porcentaje) {
        return precio - (precio * porcentaje) / 100;
    };
    Producto.prototype.mostrarInformacion = function () {
        return "Producto: ".concat(this.nombre, ", Precio: $").concat(this.precio.toFixed(2), ", Stock: ").concat(this.stock, ", C\u00F3digo: ").concat(this.codigo);
    };
    Producto.prototype.actualizarStock = function (cantidad) {
        this.stock += cantidad;
    };
    return Producto;
}());
var producto = new Producto("Laptop", 1500, 10, "LAP123");
console.log(producto.mostrarInformacion());
producto.actualizarStock(-2);
console.log(producto.mostrarInformacion());
console.log(Producto.calcularDescuento(producto.precio, 10)); // Precio con 10% de descuento
