
   
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