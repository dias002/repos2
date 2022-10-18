const tabBtn = document.querySelectorAll('.tab_btn')
// find content boxes for tabs
const contentBoxes = document.querySelectorAll('.content_text')
tabBtn.forEach(function(item){
    item.addEventListener('click', function(){
        // find all elements in contentBoxes
        contentBoxes.forEach(function(item){
            item.classList.add('hidden')
         })
       const tabContent = document.querySelector('#' + this.dataset.tab) 
       tabContent.classList.remove('hidden')
    })
})
tabBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        // переменной присваиваем текущую кнопку
        let currentBtn = item;
        // если кнопка не содержит класс tabsActive, то добавляем класс
        if (!currentBtn.classList.contains('active_tab')) {
            // убираем класс актив с кнопки
            tabBtn.forEach(function(item) {
                item.classList.remove('active_tab');
            });

            // вешаем новый класс на кнопку
            currentBtn.classList.add('active_tab');
        } 
    });
});
