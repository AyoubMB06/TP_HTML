function afficherDetails(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function alterner(val) {
    var tab= ['myDIV','myDIV1','myDIV2','myDIV3','myDIV4'];
    var x = document.getElementById(val);
    var y;
    if (x.style.display === "none") {
      x.style.display = "block";
      for(var elm of tab)
      {
        if (elm != val)
        {
            y= document.getElementById(elm);
            y.style.display= "none";
            y.style.fontSize = '0.5em';
        }
      }
      zoomtext(val);

    } else {
      x.style.display = "none";
    }
  }

// function Higher(){
//     $("#click-me1").click(function(){
//         $("#p1").animate({fontSize: "30px"});
//       });
// }

function zoomtext(elem){
  console.log(elem)
  var el = document.getElementById(elem);
  if (!el) return
  var style = window.getComputedStyle(el).fontSize;
  var fontSize = parseFloat(style); 

  if (fontSize !== '0.5em') {
    el.style.fontSize =  '1em';

  }

 setTimeout(zoomtext, 1000);
}


tippy('#php', {
  content: 'PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP',
  arrow: true,
  animation: 'scale',
  theme: 'light',
  followCursor: true,
  placement: 'bottom'
});

tippy('#java', {
  content: 'Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy, présenté officiellement le 23 mai 1995 au .SunWorld La société Sun a été ensuite rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.',
  arrow: true,
  animation: 'scale',
  theme: 'light',
  followCursor: true,
  placement: 'bottom'
});

tippy('#html', {
  content: "HTML signifie « HyperText Markup Language » qu'on peut traduire par « langage de balises pour l'hypertexte ».",
  arrow: true,
  animation: 'scale',
  theme: 'light',
  followCursor: true,
  placement: 'bottom'
});

tippy('#kotlin', {
  content: "Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif.",
  arrow: true,
  animation: 'scale',
  theme: 'light',
  followCursor: true,
  placement: 'bottom'
});

tippy('#python', {
  content: "Python est un langage de programmation interprété, multiparadigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.",
  arrow: true,
  animation: 'scale',
  theme: 'light',
  followCursor: true,
  placement: 'bottom'
});


//stars
function  evaluerConnaissance(){
  let competances = document.querySelectorAll("li.tooltip");
  try {
    for(let i=0; i < competances.length; i++){
      let r = competances[i].getElementsByTagName("strong")[0].getAttribute("rating");
      
          if(r!=null){

              let starts = '<span style="color:#eeee6a; "  >' 

              for(let j=0; j< r; j++){
                  starts+="★";
              }
              starts += '</span>';

              starts += '<span>'
              for(let j=r; j<5; j++){
                  starts+="★";
              }
              starts += '</span>';

              competances[i].innerHTML += starts;

          }

      }
  } catch (error) {

  }
}
evaluerConnaissance();
