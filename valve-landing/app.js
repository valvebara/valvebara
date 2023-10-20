function toggleMenu(index) {
    const menuItems = document.querySelectorAll('.menu .item');
    const activeBar = document.querySelector('.active-bar');
  
    // Calculate the left position for the active bar
    const itemWidth = 100 / menuItems.length;
    const left = itemWidth * index;
  
    // Set the left position for the active bar
    activeBar.style.left = `${left}%`;
  }
  