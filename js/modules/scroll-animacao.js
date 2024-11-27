// ---- ANIMAÇÃO AO SCROLL ----
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // --> 60% da tela

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // --> relação do elemento e o topo
        const isSectionVisible = sectionTop - windowMetade < 0; // --> fazer com que apareça a transição em uma determinada parte da tela
        if (isSectionVisible){
          // se isSectiorVisible == true, ativa a função
          section.classList.add("ativo");}
        else if(section.classList.contains("ativo")){
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}