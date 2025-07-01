import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    // Chama o construtor da classe pai (DioAccount)
    super(name, accountNumber);
  }

  // Método de empréstimo convertido para a sintaxe padrão
  getLoan(value: number): void {
    if(this.validateStatus()){
      // Se a conta for válida, realiza o depósito do valor do empréstimo
      console.log('Você pegou um empréstimo de R$', value);
      this.deposit(value); // Esta chamada agora funciona perfeitamente
    }
  }
}
