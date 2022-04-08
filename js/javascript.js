var swiper = new Swiper(".mySwiper", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

const inpt = document.querySelector('.inpt')
const search = document.querySelector('.search')
const poisc = document.querySelector('.poisc')


search.addEventListener('click', () => {
   inpt.style.display = 'flex'
   inpt.style.top = '0'
})

poisc.addEventListener('click', () => {
   inpt.style.top = '-509px'
})


const itemLink = document.querySelector('.item__link')
const mashrutItem = document.querySelector('.mashrut_item')

itemLink.addEventListener('click', () => {
   if (itemLink.innerHTML == 'Подробнее') {
      itemLink.innerHTML = 'Закрыто'
      mashrutItem.style.display = 'flex'
   } else if (itemLink.innerHTML == 'Закрыто') {
      itemLink.innerHTML = 'Подробнее'
      mashrutItem.style.display = 'none'
   }


})

const hoverPhone = document.querySelector('.click_picture')
const cityBtn = document.querySelector('.city_btn')


cityBtn.addEventListener('click', () => {
   if (cityBtn.innerHTML == 'Все фотографии города') {
      hoverPhone.style.display = 'flex'
      cityBtn.innerHTML = 'Закрыто'

   } else if (cityBtn.innerHTML == 'Закрыто') {
      cityBtn.innerHTML = 'Все фотографии города'
      hoverPhone.style.display = 'none'
   }
})






const sidebarMenu = document.querySelector('.sidebar__menu')
const dropList = document.querySelector('.drop_list')
console.log(dropList);
sidebarMenu.addEventListener('click', () => {
   dropList.classList.toggle('active')
   sidebarMenu.classList.toggle('active')
});

