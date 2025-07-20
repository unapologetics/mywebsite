 
 document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = e.clientX + '10px';
    star.style.top = e.clientY + '10px';

    document.body.appendChild(star);

    // Entferne Stern nach Animation
    setTimeout(() => {
      star.remove();
    }, 800);
  });

star.style.width = star.style.height = Math.random() * 6 + 4 + 'px';
star.style.background = `hsl(${Math.random() * 360}, 100%, 75%)`;

