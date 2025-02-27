console.log('cargando cards')

const dataCards = [
{
"title":"Juego del año",
"url_image":"./img/goty.png",
"desc":"Este impresionante juego hecho para los mas exigentes , requiere de mucha habilidad ",
"cta":"Mostrar mas...",
"link":"https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
},
{
    "title":"Juego del año",
"url_image":"",
"desc":"Este impresionante juego hecho para los mas exigentes , requiere de mucha habilidad ",
"cta":"Mostrar mas...",
"link":"https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
},
{
    "title":"Juego del año",
"url_image":"",
"desc":"Este impresionante juego hecho para los mas exigentes , requiere de mucha habilidad ",
"cta":"Mostrar mas...",
"link":"https://www.chiclestore.com/product/sekiro-shadows-die-twice-edicion-juego-del-ano-2/"
}

];

(funtion () {

let Card = {
    init:funtion(){
        let_self= this;
        this.insertData(_self);
    },

    insertData:funtion(_self){
dataCards.map(funtion (ClipboardItem,index){
document.querySelector('.cards-list')insertAdjacentHTML('beforeend',_self.tplCardItem);

});

    },

    tplCardItem:funtion(item,index){
        return(`div class='cards-item id='card-number-${index}'>
            <img src='$item.url_image}'>
            <div class='card-info'>
            <p class='card-tittle'>${item.title}</p>
            <p class='card-desc'>${item.desc}</p>
<a class='card-cta' target='blank' href='${item.link}'>${item.cta}></a>
            </div>)
            </div>`)

    },
}
CARD.init();
        })();
