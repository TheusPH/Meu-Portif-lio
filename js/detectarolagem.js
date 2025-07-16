document.addEventListener('DOMContentLoaded', function() {
    const originalNavbar = document.getElementById('original-navbar');
    const floatingNavbar = document.getElementById('floating-navbar');

    // Inicializa scrollTriggerPoint, será recalculado no resize e no início
    let scrollTriggerPoint = 0;

    function calculateScrollTriggerPoint() {
        if (originalNavbar) {
            // Calcula o ponto onde a parte inferior da originalNavbar sai da tela
            // originalNavbar.offsetTop: distância do topo do documento
            // originalNavbar.offsetHeight: altura da originalNavbar
            scrollTriggerPoint = originalNavbar.offsetTop + originalNavbar.offsetHeight;
        } else {
            // Caso a originalNavbar não seja encontrada ou tenha um setup diferente,
            // defina um ponto de rolagem padrão (ex: 200px do topo do documento)
            scrollTriggerPoint = 200;
            console.warn("Original Navbar não encontrada. Usando scrollTriggerPoint padrão de 200px.");
        }
    }

    function handleScroll() {
        // Verifica se a rolagem atual (window.scrollY) ultrapassou o ponto de gatilho
        if (window.scrollY >= scrollTriggerPoint) {
            // Quando a originalNavbar sai da tela
            floatingNavbar.classList.add('show-floating-navbar'); // Mostra a floating navbar
            originalNavbar.style.opacity = '0'; // Faz a nav bar original sumir
            originalNavbar.style.visibility = 'hidden';
            originalNavbar.style.pointerEvents = 'none'; // Desabilita cliques na nav bar original
        } else {
            // Quando a originalNavbar estiver visível novamente
            floatingNavbar.classList.remove('show-floating-navbar'); // Esconde a floating navbar
            originalNavbar.style.opacity = '1'; // Faz a nav bar original aparecer
            originalNavbar.style.visibility = 'visible';
            originalNavbar.style.pointerEvents = 'auto'; // Habilita cliques
        }
    }

    // Calcula o ponto de gatilho e define o estado inicial ao carregar a página
    calculateScrollTriggerPoint();
    handleScroll();

    // Recalcula o ponto de gatilho e verifica o estado quando a janela é redimensionada
    // (útil para lidar com diferentes tamanhos de tela ou rotação de dispositivos)
    window.addEventListener('resize', () => {
        calculateScrollTriggerPoint();
        handleScroll();
    });

    // Adiciona o "ouvinte" de eventos de rolagem
    window.addEventListener('scroll', handleScroll);
});