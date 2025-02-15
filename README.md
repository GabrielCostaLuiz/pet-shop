```
# Criar commit-msg na pasta .husky
# Commitizen - npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
# 📌 Git Branching Guide  

## 📂 Comandos básicos para gerenciamento de branches  

```bash
# Listar todas as branches
git branch

# Reseta o status da branch
git reset

# Rebase git
git rebase

# Criar uma nova branch
git branch <nome-da-branch>

# Deletar uma branch
git branch -d <nome-da-branch>

# Trocar para uma branch existente
git checkout <nome-da-branch>

# Criar uma nova branch e mudar para ela automaticamente
git checkout -b <nome-da-branch>
```

## 🎯 Fluxo para criação de novas features  

Sempre que for codar algo novo:  

1. Criar uma branch com um nome descritivo.  
   Exemplo: Criando a tela de cadastro  
   ```bash
   git checkout -b feat/register-page
   ```
2. Antes de subir o código:
   - Verifique em qual branch está atualmente:  
     ```bash
     git branch
     ```
   - Vá para branch main:  
     ```bash
     git checkout main
     ```
   - Remova a branch antiga, se não for mais necessária:  
     ```bash
     git branch -d <branch-antiga>
     ```

## 🚀 Padrões para nome de branch  

Para manter o repositório organizado, siga este padrão:  

### **Prefixos Permitidos**
| Prefixo     | Significado |
|-------------|------------|
| `feat/`     | Nova funcionalidade |
| `fix/`      | Correção de bug |
| `hotfix/`   | Correção crítica em produção |
| `refactor/` | Refatoração de código sem mudança de funcionalidade |
| `chore/`    | Tarefas menores, como atualização de dependências |
| `test/`     | Adição ou ajuste de testes |

✅ **Exemplo de nomes válidos:**  
```bash
feat/authentication-flow
fix/login-button-not-working
hotfix/payment-gateway-error
refactor/improve-database-performance
chore/update-dependencies
test/add-unit-tests-to-profile
```

❌ **Evite nomes ruins, como:**  
```
new-feature
fixing-bug
teste123
branch-do-fulano
```

## ✅ Padrão para mensagens de commit  

As mensagens de commit devem seguir o formato do **Conventional Commits**:

```
<tipo>(<escopo>): <mensagem curta no imperativo>
```

### **Tipos Permitidos**
| Tipo        | Significado |
|-------------|------------|
| `feat`      | Adiciona uma nova funcionalidade |
| `fix`       | Corrige um bug |
| `hotfix`    | Corrige um problema crítico |
| `refactor`  | Modifica código sem alterar funcionalidade |
| `chore`     | Alterações menores que não afetam código de produção |
| `test`      | Adiciona ou modifica testes |
| `docs`      | Alterações na documentação |
| `style`     | Melhorias de formatação (espaços, ponto e vírgula, etc.) |
| `ci`        | Ajustes no CI/CD |
| `build`     | Mudanças que afetam o processo de build |

✅ **Exemplo de commits válidos:**  
```bash
git commit -m "feat(auth): adiciona fluxo de autenticação com JWT"
git commit -m "fix(login): corrige erro ao clicar no botão de login"
git commit -m "chore(deps): atualiza versão do React para 18"
```

❌ **Exemplos ruins de commits:**  
```
"arrumando bug"
"modificações no código"
"update"
"finalizado"
```

---


