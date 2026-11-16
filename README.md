# Instagrão: Espelho, Espelho meu, existe alguém mais bonito que eu?

O Instagram é uma rede social que opta pela simplicidade: você, em teoria, só faz uma coisa.
A questão é que o Instagram não á tão simples assim, principalmente quanto ao layout.

Nesse exercício vamos construir uma aplicação clone do Instagram utilizando React. 
É necessário que tudo pareça com a página principal do Instagram, então temos que ter posts, comentários, botões para curtir e comentar. Não é necessário que nada funcione, mas se quiser, pode.

Para que o projeto não fique genérico ou simples demais, vamos dar um foco maior na escolha do conteúdo: imagine que todo o feed do instagram é feito por pessoas que você admira (pessoas que não existem) e o post de cada uma delas é aquilo que esta pessoa mais quer ver. Escolha algumas pessoas e vamos ver o que sai disso.   

Não esqueça de colocar o link para o seu repositório do Github e alguns prints de como ficou o projeto final.

No LinkedIn postem o resultado final do projeto em formato de vídeo contando um pouco sobre o desenvolvimento, seus desafios e seus sucessos. Marque o professor, o Senac e o Instituto PROA se quiserem. Ahhh...

E se quiserem, podem postar no próprio instagram ;)

---

Crie uma versão personalizada de um feed do Instagram usando React. A base possui um cabeçalho, um componente `Post`, dados em JSON e ícones da biblioteca `react-icons`.

## Como executar

```bash
npm install
npm run dev
```

## Imagens

Escolha imagens e coloque-as em `public/images`, seguindo `public/images/README.md`. Os caminhos dos arquivos e demais dados estão em `src/data/posts.json`.

## Desafios sugeridos

1. Altere cores, fonte, logo e textos para uma nova identidade visual.
2. Adicione, remova ou edite publicações diretamente no JSON.
3. Faça o botão de curtir alternar o ícone e atualizar a quantidade de curtidas.
4. Crie uma área de comentários ou um campo para publicar comentários.
5. Inclua uma tela de perfil ou uma lista de stories.

> Os botões são inicialmente apenas visuais. As interações fazem parte do exercício.

---

## Dinogram 🦖

O feed do Instagram, só que de dinossauros. Cada dinossauro posta aquilo que mais queria ver:

| Perfil | O que mais quer ver |
|---|---|
| rex.bracinhos | Os bracinhos alcançando um abraço |
| tri.chifrudo | Um chapéu com furo para os três chifres |
| ptero.voa | O mar lá de cima, sem ninguém pedindo carona |
| estego.zen | O meteoro passando longe |

### O que foi feito

- Nova identidade: nome **Dinogram**, cores verdes, logo e favicon de pegada.
- Imagens próprias em SVG na pasta `public/images`.
- Posts e comentários no `src/data/posts.json`.
- **Curtir:** o coração fica vermelho e a quantidade aumenta. Clicar de novo descurte. Duplo clique na foto também curte.
- **Comentários:** cada post mostra os comentários e tem um campo para publicar um novo.
- **Stories:** no topo do feed. Ao clicar, a borda fica cinza (story visto).
- Menu embaixo no celular.

### Prints

![Dinogram no computador](prints/dinogram-desktop.png)

![Dinogram no celular](prints/dinogram-celular.png)

### Repositório

Link do GitHub: (colocar aqui)
