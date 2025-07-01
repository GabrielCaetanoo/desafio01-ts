import { CompanyAccount } from './class/CompanyAccount';
import { DioAccount } from './class/DioAccount';
import { BonusAccount } from './class/BonusAccount';

// --- Testando DioAccount (Conta Padrão) ---
console.log('--- CONTA PADRÃO ---');
// A classe DioAccount é abstrata e não pode ser instanciada diretamente.
// Para testá-la, podemos criar uma classe que a estenda ou remover o 'abstract'.
// Para este exemplo, vamos usar as classes filhas que já a estendem.
// const peopleAccount: DioAccount = new DioAccount('Nath', 1); // Isso daria um erro
// peopleAccount.deposit(100);


// --- Testando CompanyAccount (Conta de Empresa) ---
console.log('\n--- CONTA EMPRESA ---');
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
// Depositando
companyAccount.deposit(200);
// Sacando
companyAccount.withdraw(50);
// Pegando empréstimo
companyAccount.getLoan(1000);
// Verificando saldo final
companyAccount.getBalance();


// --- Testando BonusAccount (Conta com Bônus) ---
console.log('\n--- CONTA BÔNUS ---');
const bonusAccount: BonusAccount = new BonusAccount('John Doe', 30);
// Depositando com bônus
bonusAccount.deposit(100); // Vai depositar 110
// Sacando
bonusAccount.withdraw(30);
// Verificando saldo final
bonusAccount.getBalance();

// --- Testando Validações ---
// Tentar alterar o nome (não deve ser possível por ser readonly)
// companyAccount.name = 'Outro Nome'; // Isso geraria um erro de compilação

// Tentar acessar o saldo diretamente (não deve ser possível por ser private)
// console.log(companyAccount.balance); // Isso geraria um erro de compilação
