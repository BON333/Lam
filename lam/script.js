// Registar o plugin ScrollTrigger do GSAP
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("sequenceCanvas");
const context = canvas.getContext("2d");

// Define a resolução interna estável para o Canvas
canvas.width = 1920;
canvas.height = 1080;

// =============================================================
//  CONFIGURAÇÃO CORRIGIDA COM OS TEUS NOMES DE FICHEIROS
// =============================================================

// Altera este número se o teu último ficheiro for maior do que 36 (ex: ezgif-frame-050.jpg)
const frameCount = 36; 

// Padrão exato mapeado da imagem 6bb968bc-7425-42d7-831e-a549f6cc1131
const currentFrame = index => `frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

// =============================================================
//  LÓGICA DE PRÉ-CARREGAMENTO EM MEMÓRIA
// =============================================================
const images = [];
const airPlane = { frame: 1 };

// Força o download em cache de todos os frames em background
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

// =============================================================
//  VÍNCULO DO SCROLL AUTOMÁTICO COM O GSAP
// =============================================================
gsap.to(airPlane, {
    frame: frameCount - 1,
    snap: "frame", // Força números inteiros absolutos
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5 // Controlo suave e fluido
    },
    onUpdate: render // Renderiza a imagem correspondente à posição atual do scroll
});

// Desenha o primeiro frame assim que a imagem inicial carregar
images[0].onload = render;

// Força o render caso o browser já tenha as imagens prontas em cache
if (images[0].complete) {
    render();
}

function render() {
    if (images[airPlane.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airPlane.frame], 0, 0, canvas.width, canvas.height);
    }
}