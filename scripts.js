
// This function can type out the intro text at the top like a typewriter. Choosing not to use it for now.
// // typewriter text function when page loads
// let i = 0;
// let text = `Hello! I'm Scott Griffin, a web developer`;
// let speed = 35;

// const typewriter = () => {
//   if (i < text.length) {
//     document.getElementById('hello').innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typewriter, speed);
//   }
// };

// // window.onload = () => {
// //   typewriter();
// // };

// navbar functions
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll('.nav-link');

selectElement('.burger-menu-icon').addEventListener('click', () => {
  // Toggle nav when hamburger clicked
  selectElement('.nav-list').classList.toggle('active');

  // animate links in nav
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.4s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5);
    }
  });

  //hamburger turns to X
  selectElement('.burger-menu-icon').classList.toggle('toggle');
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    selectElement('.burger-menu-icon').classList.toggle('toggle');
  });
});

