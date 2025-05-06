const menuItems = document.querySelectorAll('.navbar-nav .nav-link');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = 'red'; 
  });

  item.addEventListener('mouseout', () => {
    item.style.color = ''; 
  });

});
