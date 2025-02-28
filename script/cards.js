console.log('cargando cards');

const dataCards = [
  {
    "title": "Juego del año",
    "url_image": "./img/goty.png",
    "desc": "Este impresionante juego hecho para los más exigentes, requiere de mucha habilidad.",
    "cta": "Mostrar más...",
    "link": "https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
  },
  {
    "title": "Juego del año",
    "url_image": "./img/goty.png",
    "desc": "Este impresionante juego hecho para los más exigentes, requiere de mucha habilidad.",
    "cta": "Mostrar más...",
    "link": "https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
  },
  {
    "title": "Juego del año",
    "url_image": "./img/goty.png",
    "desc": "Este impresionante juego hecho para los más exigentes, requiere de mucha habilidad.",
    "cta": "Mostrar más...",
    "link": "https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
  }
];

(function() {
  let Card = {
    init: function() {
      let _self = this;
      this.insertData(_self);
    },

    insertData: function(_self) {
      dataCards.map(function(item, index) {
        document.querySelector('.cards-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function(item, index) {
      return (`<div class='cards-item' id='card-number-${index}'>
        <img src='${item.url_image}'>
        <div class='card-info'>
          <p class='card-title'>${item.title}</p>
          <p class='card-desc'>${item.desc}</p>
          <a class='card-cta' target='_blank' href='${item.link}'>${item.cta}</a>
        </div>
      </div>`);
    }
  };
  
  Card.init();
})();

