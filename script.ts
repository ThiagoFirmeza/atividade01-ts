class ItemMenu {
    opcao: string;
    textoDaOpcao: string;
  
    constructor(opcao: string, textoDaOpcao: string) {
      this.opcao = opcao;
      this.textoDaOpcao = textoDaOpcao;
    }
  }
  
class Menu {
    itens: ItemMenu[];
  
    constructor(itens: ItemMenu[]) {
      this.itens = itens;
    }
  
imprimirMenu(): string {
    for (let item of this.itens) {
        console.log(`${item.opcao} - ${item.textoDaOpcao}`);
    }
  
    let opcao = prompt("Selecione uma opção: ") || "valor padrão";
        return opcao;
    }
  }
  
const item1 = new ItemMenu("1", "Atacar");
const item2 = new ItemMenu("2", "Ataque especial");
const item3 = new ItemMenu("3", "Tomar poção de cura de HP");
const item4 = new ItemMenu("4", "Tomar poção que restaura MP");
const item5 = new ItemMenu("5", "Defender");
const menu = new Menu([item1, item2, item3, item4, item5]);
let opcao = menu.imprimirMenu();
console.log(`Você selecionou a opção: ${opcao}`);
  
class Coliseu {
    hp: number;
    ataque: number;
    defesa: number;
  
    constructor(hp: number, ataque: number, defesa: number) {
        this.hp = hp;
        this.ataque = ataque;
        this.defesa = defesa;
    }
  
    receberDano(dano: number): number {
        if (this.hp <= 0) {
            console.log("Coliseu destruído!");
            return this.hp;
    }
  
        this.hp -= Math.max(0, dano - this.defesa);
            return this.hp;
    }
  
    atacar(): number {
        return this.ataque;
    }
}
  
class Equipamento {
    nome: string;
    aumentoDeAtaque: number;
    aumentoDeDefesa: number;
  
    constructor(nome: string, aumentoDeAtaque: number, aumentoDeDefesa: number) {
        this.nome = nome;
        this.aumentoDeAtaque = aumentoDeAtaque;
        this.aumentoDeDefesa = aumentoDeDefesa;
    }
}
  
let coroadeRei = new Equipamento("Coroa de Rei", 10, 20);
let chapeudeMago = new Equipamento("Chapéu de Mago", 20, 30);
let capaceteViking = new Equipamento("Capacete Viking", 15, 25);
let elmodeValquiria = new Equipamento("Elmo de Valquiria", 30, 40);
  
let vestimentaDeBatalha = new Equipamento("Vestimenta de Batalha", 30, 45);
let vestidodeFada = new Equipamento("Vestido de Fada", 10, 15);
let mantodeValquiria = new Equipamento("Manto de Valquiria", 40, 55);
let armaduraDeOssos = new Equipamento("Armadura de Ossos", 45, 60);
 
let machadodeGuerra = new Equipamento("Machado de Guerra", 30, 0);
let lancadodestino = new Equipamento("Lança do Destino", 45, 5);
let foicedoInferno = new Equipamento("Foice do Inferno", 50, 20);
let bestadePrecisao = new Equipamento("Besta de Precisão", 55, 25);
  
class Lutador {
    hp: number;
    mp: number;
    ataqueDoJogador: number;
    equipamentoCabeca: Equipamento;
    equipamentoCorpo: Equipamento;
    equipamentoMao: Equipamento;
  
    constructor(hp: number, mp: number, ataque: number) {
        this.hp = hp;
        this.mp = mp;
        this.ataqueDoJogador = ataque;
    }
}