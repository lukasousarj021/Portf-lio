
   
//teste 

function mudarTema() {

    const body = document.body
    let icon = document.getElementById('tema-icon');


    
    document.body.classList.toggle("light");
   
    if( icon.classList.contains("bi-sun")){

        icon.classList.replace("bi-sun", "bi-moon");

    } else {

        icon.classList.replace ("bi-moon", "bi-sun")

    }
   


}

function abrirMennuLateral() {

    const menuLateral = document.querySelector(".menuNavAside");
    const menuHamburguer = document.getElementById("menuHamburguer");

    if( menuLateral.style.display === "none"){

        menuLateral.style.display = "block" ;

        menuHamburguer.classList.replace("bi-list", "bi-x");
        menuHamburguer.style.transform = "rotate(180deg)";


    } else {

        menuLateral.style.display = "none";
        menuHamburguer.classList.replace("bi-x", "bi-list");
        menuHamburguer.style.transform = "rotate(0deg)";

    }


}







const menu = document.getElementById("esconder");
ultimoScrool = 0


window.addEventListener("scroll", () => {
   
  const scroll = window.pageYOffset;

  if (scroll > ultimoScrool ) {
       
      menu.classList.add("esconder");
    
    } else {
    
      menu.classList.remove("esconder");
    
    }

   ultimoScrool = scroll

});





const items = document.querySelectorAll(".item");

setTimeout(() => {

    items.forEach(item => {

        item.addEventListener("click", () => {

            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

        });

    });

}, 9000); // 9 segundos



const idiomaSeleciondo = document.querySelectorAll(".selecionado")

idiomaSeleciondo.forEach(selecionado => {

        selecionado.addEventListener("click", () => {

            idiomaSeleciondo.forEach(i => i.classList.remove("active"));
            selecionado.classList.add("active");

        });

    });


const explorer = document.querySelector(".explorer");
const atalhos = document.querySelector(".atalhos.containerAsideLinks");
const contato = document.querySelector(".contato");

const sections = [explorer, atalhos, contato];


function fecharOutros(atual){

    sections.forEach(section => {

        if(section !== atual){

            section.classList.remove("open");

        }

    });

}

    
sections.forEach(section => {

    const titulo = section.querySelector(".hoverGreen");
    const icone = section.querySelector(".iconeSeta i");

    titulo.addEventListener("click", () => {

        if (window.innerWidth <= 100000) {

            section.classList.toggle("open");

            icone.classList.toggle("bi-chevron-up");
            icone.classList.toggle("bi-chevron-down");

        }

    });

});


