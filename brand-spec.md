# Especificação de marca — Smart Odontologia

## Direção visual

O site adota uma linguagem de **luxo clínico contemporâneo**, equilibrando autoridade profissional e acolhimento. A composição editorial combina grandes áreas de respiro, imagens reais, azul profundo e dourado discreto. O movimento é suave e orienta a leitura, sem competir com o conteúdo.

## Calibração

| Dimensão | Nível | Aplicação |
|---|---:|---|
| Variação visual | 7/10 | Composição assimétrica, escala editorial e ritmos variados entre seções |
| Intensidade de movimento | 6/10 | Reveals progressivos, parallax discreto e microinterações |
| Densidade de informação | 4/10 | Poucas ideias por seção e chamadas claras |
| Dependência de ativos | 9/10 | Fotografias fornecidas e recortes diretos da identidade visual |
| Fidelidade à marca | 10/10 | Logo preservada sem redesenho, recriação ou alteração gráfica |

## Ativos oficiais fornecidos

| Uso | Arquivo local | Origem |
|---|---|---|
| Logo em área clara | `assets/logo-original-clara.jpg` | Recorte direto de `IMG_20260903_090831.jpg` |
| Logo em área escura | `assets/logo-original-escura.jpg` | Recorte direto de `IMG_20260903_090730.jpg` |
| Logo transparente (área clara) | `assets/logo-clara.png` | Fundo branco removido de `logo-original-clara.jpg` (PNG com alfa) |
| Logo transparente (área escura) | `assets/logo-escura.png` | Fundo escuro removido de `logo-original-escura.jpg` (PNG com alfa, margens aparadas) |
| Hero | `assets/cuidado-sorriso.jpg` | Cópia sem alteração de `IMG_20260903_090730.jpg` |
| Procedimento clínico | `assets/procedimento-clinico.jpg` | Cópia sem alteração de `IMG_20260903_090831.jpg` |
| Extração dentária | `assets/extracao-dentaria.jpg` | Cópia sem alteração de `IMG_20260903_090513.jpg` |
| Reconhecimento profissional | `assets/reconhecimento-profissional.jpg` | Cópia sem alteração de `IMG_20260903_090345.jpg` |
| Galeria — cuidado | `assets/galeria-cuidado.jpg` | Cópia sem alteração de `IMG-20261009-WA0091.jpg` |
| Galeria — sorriso | `assets/galeria-sorriso.jpg` | Cópia sem alteração de `IMG-20261009-WA0095.jpg` |
| Galeria — estrutura | `assets/galeria-estrutura.jpg` | Cópia sem alteração de `IMG-20261009-WA0096.jpg` |
| Galeria — equipe | `assets/galeria-equipe.jpg` | Cópia sem alteração de `IMG-20261009-WA0097.jpg` |
| Galeria — atendimento | `assets/galeria-atendimento.jpg` | Cópia sem alteração de `IMG-20261009-WA0098.jpg` |
| Vídeo de apresentação | `assets/apresentacao.mp4` | `VID-20261013-WA0037.mp4` (remux `+faststart`, sem reencode) |
| Poster do vídeo | `assets/apresentacao-poster.jpg` | Frame extraído do vídeo em `-ss 2` |

> Os arquivos de logo são **recortes diretos dos pixels originais** fornecidos pelo cliente. Não houve vetorização, redesenho, reconstrução, troca de cor, remoção de fundo ou alteração tipográfica.

> **Atualização:** as versões `logo-clara.png` e `logo-escura.png` são derivadas das originais apenas com a **remoção do fundo** (canal alfa), preservando cor e traço. No site elas substituem os `mix-blend-mode` usados anteriormente, dispensando o artifício de mesclagem.

## Sistema visual

| Token | Valor |
|---|---|
| Azul principal | `#071f3a` |
| Azul profundo | `#04172b` |
| Dourado | `#cda956` |
| Dourado claro | `#e2c47d` |
| Marfim | `#f6f2e9` |
| Papel | `#fbfaf6` |
| Display | Cormorant Garamond |
| Texto e interface | Manrope |
| Cantos | Predominantemente retos; círculos apenas para ações e selos |
| Movimento | `cubic-bezier(.2,.72,.25,1)`, duração entre 300 e 850 ms |

## Contatos utilizados

- E-mail: `Odontologia.smart@gmail.com`
- Instagram: `https://www.instagram.com/odontologia.smart?igsh=enI0bGJiOTQ5Z2Ux&igsi=enI0bGJiOTQ5Z2Ux`
- WhatsApp: `+55 31 98412-0177`
- Endereço público: Rua Rio Mantiqueira, 340, Loja 4, Novo Riacho, Contagem — MG, CEP 32280-620
