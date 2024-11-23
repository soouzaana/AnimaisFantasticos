//----NAVEGAÇÃO POR TABS----
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // ativar tab de acordo com o numero que foi passado
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // adicionar evento para cada link de acordo com o index clicado
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// ----ACCORDION LIST----
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    //adicionar evento em cada item da lista
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//---- SCROLL SUAVE PARA LINK INTERNO ----
// relacionar a seção com seus respectivos animais (relação entre item e seção)
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  // fazer scroll até o item
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// ---- ANIMAÇÃO AO SCROLL ----
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6; // --> 60% da tela

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // --> relação do elemento e o topo
        const isSectionVisible = (sectionTop - windowMetade) < 0; // --> fazer com que apareça a transição em uma determinada parte da tela
        if (isSectionVisible)  // se isSectiorVisible == true, ativa a função
          section.classList.add('ativo');
        else 
        section.classList.remove('ativo');
      })
    }
    animaScroll();
  window.addEventListener('scroll', animaScroll);
  }  
}
initAnimacaoScroll();
