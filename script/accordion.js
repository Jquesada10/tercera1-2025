console.log('Cargando Acordion');

const dataAccordion = [
    {
        "tittle": "Nuevos lanzamientos",
        "desc": "Ofrecemos lo ultimo en videojuegos "
    }
];

(function () {

    let Accordion = {
        init: function() {
        let_self = this;
        this.insertData(_self);
    this.eventhander(_self);
        },

insertData: function (_self) {
 dataAccordion.map(function (item,index){
    document
    .querySelector(".main-accordion-container")
    .insertAdjacentHTML("beforeend",_self.tplAccordionItem(item));
});
},

eventhander: function (_self) {
let arrayRefs = document.querySelectorAll(".accordion-title");
for (let x = 0; x < arrayRefs.length; x++ ){
    arrayRefs[x].addEventListener("click",function(event){
        //console.log("Evento: ",event );
        _self.showtab(EventTarget);
    });
}
},

tplAccordionItem:function(item){
return `<div class='accordion-item'>
<div class='accordion-title'><p>${item.tittle}</p></div>
<div class='accordion-desc'><p>${item.desc}</p></div>
</div>`;
},

showtab:function(refItem){
let activetab=document.querySelector("tab-active");
if (activetab){
    activetab.classList.remove("tab-active");
}
console.log("Show Tab: " , refItem);
refItem.parentElement.classList.toggle("tab-activate");
},
    };
    Accordion.init();
})();
