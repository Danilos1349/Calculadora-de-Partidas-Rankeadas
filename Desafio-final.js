class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    golpear() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
        }
    }

    atacar() {
        console.log(`O ${this.nome} com ${this.idade} de experiência, do tipo ${this.tipo}, atacou usando ${this.golpear()}`);
    }
}

let heroiMago = new Heroi("Mago Negro", "500 anos", "mago");
let heroiGuerreiro = new Heroi("Soldado do Lustro Negro", "100 anos", "guerreiro");
let heroiMonge = new Heroi("Jackie Chan", "69 anos", "monge");
let heroiNinja = new Heroi("Haru", "33 anos", "ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
