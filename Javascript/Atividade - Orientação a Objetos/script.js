//Class ContaBancaria que possui os parâmentros agência, numero, tipo, saldo.

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //_saldo, pois teremos um getter e setter
    }

    //criando getter e setter com o nome saldo
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    //métodos sacar e depositar
    sacar(valor) {
        //checando o saldo
        if (valor > this._saldo){
            return "Operação negada";
        }
        //se não,
        this.saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;

        return this._saldo;
    }
}

//Classe filha ContaCorrente

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); //utilizar as propriedades dos construtor que existem na classe pai
        this.tipo = 'corrente'; //tipo: conta corrente por padrão
        this._cartaoCredito = cartaoCredito;
    }

    //get e set do cartaoCredito
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        //verificação
        this._cartaoCredito = valor;
    }
}

//Classe filha Conta Poupança
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

//Classe filha Conta Universtária
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        //verificar se o valor é maior que 500
        if(valor > 500) {
            return "Operação negada!";
        }
        //se não,
        this._saldo = this._saldo - valor;
    }
}