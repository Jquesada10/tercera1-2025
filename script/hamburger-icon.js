console.log('Cargando Hamburguer-Icon');

(function(){
const MAIN_OBJ = {
        init:function(){
            this.eventhandlers()
        },

        eventhandlers:function(){
            document.querySelector('hamburguer-icon').addEventListener('click',function(){
document.querySelector('.menu-container').classList.to('menu-open');
            });
        }
}

MAIN_OBJ.init()

})();
