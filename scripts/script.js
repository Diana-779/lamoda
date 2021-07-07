const headerCityButton = document.querySelector('.header__city-button'); //lucram cu selectorul din index.html

if (localStorage.getItem('lamoda-location')) {
   headerCityButton.textContent = localStorage.getItem('lamoda-location')
}


//atunci cand utilizatorul face click pe buton, va aparea fereastra indicati orasul dvn,
//orasul pe care utilizatorul il introduce se va pastra in constanta city
headerCityButton.addEventListener('click', () => {
   const city = prompt('Indicati orasul dvn');
   headerCityButton.textContent = city;
   localStorage.setItem('lamoda-location', city);

});

//blocarea scrolului

const disableScroll = () => {
   const widthScroll = window.innerWidth - document.body.offsetWidth;
   document.body.dbScrollY = window.scrollY;

   document.body.style.cssText = `
   position:fixed;
   top: ${-window.scrollY}px;
   left:0;
   width:100%;
   height:100vh;
   overflow:hidden;
   padding-right: ${widthScroll}px;
`;
};
const enableScroll = () => {
   document.body.style.cssText = '';
   window.scroll({
      top: document.body.dbScrollY,
   })

};


//fereastra modala
const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
   cartOverlay.classList.add('cart-overlay-open')
   disableScroll();
};

const cartModalClose = () => {
   cartOverlay.classList.remove('cart-overlay-open')
   enableScroll()
};
subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
   const target = event.target;

   if (target.classList.contains('cart__btn-close') || target.classList.contains('cart-overlay')) {
      cartModalClose();
   }
});

