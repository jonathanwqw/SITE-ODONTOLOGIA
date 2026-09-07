# Site Smart Odontologia

Site institucional responsivo criado exclusivamente com **HTML, CSS e JavaScript puro**, sem frameworks e sem dependências externas em tempo de execução.

## Como visualizar

Abra o arquivo `index.html` diretamente no navegador. Para testar em um servidor local, execute na pasta do projeto:

```bash
python3 -m http.server 8080
```

Depois, visite `http://localhost:8080`.

## Contato por e-mail

Como o projeto é totalmente estático e não utiliza servidor, o formulário prepara a mensagem e abre o aplicativo de e-mail do visitante usando `mailto:`. O destinatário é `Odontologia.smart@gmail.com`.

Para envio silencioso em segundo plano, seria necessário integrar posteriormente um serviço de formulário ou backend. A versão entregue respeita a exigência de usar somente HTML, CSS e JavaScript.

## Estrutura

- `index.html`: conteúdo e estrutura semântica
- `styles.css`: sistema visual, responsividade e animações
- `script.js`: menu, animações, progresso e formulário
- `assets/`: fotos, recortes originais da logo e fontes locais
- `brand-spec.md`: especificação visual e origem dos ativos

## Identidade visual

A logo não foi redesenhada. As versões utilizadas são recortes diretos das imagens fornecidas e mantêm os pixels originais da marca.
