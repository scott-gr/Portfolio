// typewriter text function when page loads
let i=0;
let text = 
`Hello! I'm Scott Griffin, a web developer`
let speed = 35;

const typewriter = () => {
  if (i <text.length) {
    document.getElementById("hello").innerHTML +=text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

window.onload = () => {
  typewriter()
}

