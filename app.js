
function toggleMenu(){
  const nav = document.getElementById('navLinks');
  const isOpen = getComputedStyle(nav).display !== 'none';
  nav.style.display = isOpen ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '0.5rem';
  nav.style.padding = '0.6rem 0';
}
