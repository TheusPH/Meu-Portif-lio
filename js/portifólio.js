document.addEventListener('DOMContentLoaded', () => {
    const techIcons = document.querySelectorAll('.tech-icon');

    techIcons.forEach(icon => {
        const techName = icon.dataset.tech;
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip-text');
        tooltip.textContent = techName;
        icon.appendChild(tooltip);
    });

    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const portfolioSection = document.querySelector('.portifolio');
    const overlay = document.getElementById('overlay');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.dataset.modalTarget;
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });

    document.getElementById('toggle-modo').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('modo-branco');
    });
});

// Função para abrir modal
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('body-modal-aberto');
  }
}

// Função para fechar todos os modais
function fecharModais() {
  document.querySelectorAll('.modal.active').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.classList.remove('body-modal-aberto');
}

// Eventos para botões de fechar e abertura dos modais
window.addEventListener('DOMContentLoaded', function() {
  // Fechar ao clicar no X
  document.querySelectorAll('.modal .close-button').forEach(btn => {
    btn.addEventListener('click', fecharModais);
  });

  // Fechar ao clicar fora do conteúdo
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) fecharModais();
    });
  });

  // Abrir modal ao clicar na div correta
  document.querySelectorAll('.modal-trigger[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal-target');
      abrirModal(modalId);
    });
  });
});