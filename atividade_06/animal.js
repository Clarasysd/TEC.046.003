class Animal {
    constructor (apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log (`a ${this.nome} está ronronando`)
    }
}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`a ${this.nome} está feliz`)
    }
}

// criar uma classe de outro animal de estimação
// cobra, calopsita, ramster, etc...
// tem que estender Animal e ter um método próprio

let mia = new Gato ("Mia");
let pandora = new Cachorro ("Pandora");

class Calopsita extends Animal {
    imitarSom(){
        console.log (`o ${this.nome} está imitando o som do gato`);
    }
}
let Gibs = new Calopsita ("Gibs");
Gibs.imitarSom ();

mia.falar ("Miau!");
mia.ronronar ();
pandora.falar ("Au Au!");
pandora.abanarRabo ();


