// Clase Persona:
// Crea e instancia una clase Persona con:
// Dos propiedades, una pública y una privada. Ambas deben ser pasadas al constructor.
// Un método estático para devolver un saludo genérico.
// Un método no estático que devuelva el nombre y edad de la persona.

class person {
    public name: string
    static greetingMenssage: string = "hello!!"
    public age: string



    constructor(name: string, age: string) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(person.greetingMenssage);
    }
    nameAndAge(name: string, age: string) {
        console.log(`Hola mi nombre es ${name} y mi edad es: ${age}`);
    }

}
let persona1 = new person('samuel', '17');
persona1.nameAndAge('samuel','2')

