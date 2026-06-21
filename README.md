# Lam
Testing animations in sites and learning a bit more about web development 
PT:
LAM - Linhas Aéreas de Moçambique (Conceito Premium)

Este projeto apresenta um conceito digital interativo para a página inicial da LAM (Linhas Aéreas de Moçambique). A interface combina uma estética minimalista moderna com uma transição cinematográfica de alta performance atrelada ao scroll do utilizador, simulando o voo e a aterragem de uma aeronave enquanto os painéis de conteúdo são navegados.
Tecnologias Utilizadas

    HTML5 (Estrutura de dados e tags semânticas)

    CSS3 (Estilização avançada, variáveis nativas e efeito de vidro fosco com backdrop-filter)

    JavaScript (Lógica de pré-carregamento e manipulação de estado)

    HTML5 Canvas (Renderização gráfica de alta performance)

    GSAP (GreenSock Animation Platform) - Biblioteca principal de animação

    GSAP ScrollTrigger - Módulo de controlo e sincronização baseado na rolagem da página

Como Funciona a Arquitetura

Para mitigar os problemas comuns de bloqueio de renderização e quebra de frames que ocorrem ao tentar manipular a propriedade currentTime de ficheiros de vídeo nativos (.mp4 ou .webm) em tempo real, o projeto adota uma abordagem baseada em sequência de imagens fixas.

    Camada Visual (Canvas): O vídeo original foi decodificado numa sequência numerada de frames individuais de alta definição guardados na pasta /frames.

    Ciclo de Pré-carregamento: Ao inicializar a página, o JavaScript instancia objetos Image virtuais em background para descarregar todos os frames diretamente para a memória cache do navegador, eliminando flashes pretos ou atrasos visuais.

    Interpolação de Scroll: O ScrollTrigger monitoriza a posição exata da barra de rolagem. Conforme o utilizador navega, o GSAP calcula o número inteiro do frame correspondente e executa o método drawImage() no Canvas, limpando o frame anterior instantaneamente. O amortecimento mecânico (scrub) garante uma transição suave em qualquer taxa de atualização de monitor.

Estrutura do Projeto

A árvore de diretórios deve ser mantida da seguinte forma para o correto funcionamento dos caminhos relativos:
Plaintext

LAM/
├── index.html        # Estrutura do documento e motor de busca de voos
├── script.js         # Motor de animação GSAP e controlo do Canvas
├── style.css         # Regras de estilo, tipografia e responsividade
└── frames/           # Diretoria contendo a sequência de imagens
    ├── ezgif-frame-001.jpg
    ├── ezgif-frame-002.jpg
    └── [restantes frames sequenciais]

Configuração e Customização

Caso pretendas alterar o número de frames utilizados na animação, ajusta as seguintes variáveis dentro do ficheiro script.js:

    frameCount: Modifica para o número exato de ficheiros de imagem contidos na pasta de frames.

    currentFrame: Se os nomes dos teus ficheiros forem alterados, ajusta a expressão regular ou string literal nesta função para refletir o novo padrão de nomenclatura.

Como Executar o Projeto

    Transfere ou clona este repositório para a tua máquina local.

    Certifica-te de que a pasta frames contém a sequência completa de imagens com o padrão de nome correto.

    Abre o ficheiro index.html diretamente num navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).

    Utiliza a roda do rato ou a barra de rolagem lateral para interagir com a animação.