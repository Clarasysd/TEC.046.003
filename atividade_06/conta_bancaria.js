class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
   
    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo}`)
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
    }

    // Criar o método sacar e sacar 100 da sua conta
    sacar(valor){
        this.saldo = this.saldo - valor;
    }
}
let ContaDaClara = new ContaBancaria("Clara", 50000)
ContaDaClara.verSaldo()
ContaDaClara.depositar(555)
ContaDaClara.sacar(100)
ContaDaClara.verSaldo()

let ContaDaDaffinny = new ContaBancaria ("Daffinny", 1000000)
ContaDaDaffinny.verSaldo()
