# CI/CD

O projeto utiliza **GitHub Actions** para integração contínua. O workflow está definido em `.github/workflows/ci.yml` e inclui:

1. Clonar o repositório.
2. Configurar o ambiente Node.js.
3. Instalar dependências.
4. Executar testes com `vitest`.
5. Realizar o build da aplicação.

Certifique-se de que todos os testes passam antes de abrir um Pull Request.