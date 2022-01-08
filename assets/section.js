/*buy-tikits */
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
//them class open 
function showBuyTickets() {
    modal.classList.add('open')
}
// xoa class open
function hideBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)

// noi bot modaiContainer
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

/*mobile-menu */
var header=document.getElementById('header')
console.log(header)
var mobileMenu = document.getElementById('menu-mobile')
var mobileHeight = header.clientHeight
mobileMenu.onclick=function(){
var isClose = header.clientHeight === mobileHeight
if(isClose){
    header.style.height ='auto'
}else{
    header.style.height =null
}

}
// tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i <menuItems.length;i++){
    var menuItem = menuItems[i]
    menuItem.onclick=function(){
        // console.log(this);
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            header.style.height =null
        }else{
            event.preventDefault();
        }
    }

}
