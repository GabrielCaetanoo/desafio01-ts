import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    // Sobrescrevendo o método de depósito usando a sintaxe padrão
    deposit(value: number): void {
        if(this.validateStatus()){
            const bonus = 10;
            // A chamada 'super.deposit' agora funciona corretamente
            super.deposit(value + bonus);
            console.log(`Você depositou ${value} e ganhou um bônus de ${bonus}!`);
        }
    }
}
