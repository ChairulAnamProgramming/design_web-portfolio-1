$(document).ready(function(){

  const burger = $('.burger');
  const menu = $('.menu');
  const menuNav = $('.menu-nav');
  const menuBrand = $('.menu-brand');
  const navItem = $('.nav-item');


  let showMenu = false;

  burger.on('click',function()
  {

      if (!showMenu) {
        burger.addClass('close');
        menu.addClass('show');
        menuNav.addClass('show');
        menuBrand.addClass('show');
        $.each(navItem,function(){
          navItem.addClass('show');
        });
        showMenu=true;
      }else{
        burger.removeClass('close');
        menu.removeClass('show');
        menuNav.removeClass('show');
        menuBrand.removeClass('show');
        $.each(navItem,function(){
          navItem.removeClass('show');
        });

        showMenu=false;
      }


  });





})
