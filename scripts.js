// typewriter text function when page loads
let i=0;
let text = 
`Hello! I'm Scott Griffin, a web developer`
let speed = 60;

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

const scrollto =(element) => {
  // get the element on the page related to the button
  var scrollToId = element.getAttribute("data-scroll");
  var scrollToElement = document.getElementById(scrollToId);
  // make the page scroll down to where you want
  // ...
}
