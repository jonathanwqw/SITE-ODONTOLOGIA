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
- `script.js`: menu, carrossel da galeria, animações, progresso e formulário
- `assets/`: fotos, vídeo de apresentação, recortes originais da logo e fontes locais
- `brand-spec.md`: especificação visual e origem dos ativos

## Galeria e vídeo

A seção **Galeria** exibe um carrossel responsivo com sete fotos (as duas já existentes mais cinco novas), sem repetição de imagens. A navegação funciona por setas, indicadores, teclado e arraste (swipe) no toque.

A seção **Vídeo** traz a apresentação gravada pela dentista, em player HTML5 nativo (`assets/apresentacao.mp4`, vertical 576×1024), com poster gerado a partir do próprio vídeo e carregamento sob demanda (`preload="metadata"`).

## Identidade visual

A logo não foi redesenhada. As versões utilizadas são recortes diretos das imagens fornecidas e mantêm os pixels originais da marca.
