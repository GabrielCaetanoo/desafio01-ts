export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Método de classe padrão
  getName(): string {
    return this.name;
  }

  // Método de classe padrão
  deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Depósito de R$${value} realizado com sucesso. Novo saldo: R$${this.balance}`);
    }
  }

  // Método de classe padrão
  withdraw(value: number): void {
    if(this.validateStatus() && this.balance > value){
      this.balance -= value;
      console.log(`Saque de R$${value} realizado com sucesso. Novo saldo: R$${this.balance}`);
    } else {
      console.log('Saldo insuficiente ou conta inválida.');
    }
  }

  // Método de classe padrão
  getBalance(): void {
    console.log(`Saldo atual: R$${this.balance}`);
  }

  // Método de classe padrão
  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
