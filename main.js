const left = document.querySelector('.left');
const right = document.querySelector('.right');
const main = document.querySelector('.container');
const image = document.querySelector('.the-one');
const showers = document.querySelectorAll('.showw');

const sources = [
  "https://i.pinimg.com/736x/12/d9/58/12d9585bdb5183a88abf042397ccd073.jpg",
  "https://i.pinimg.com/736x/27/d7/57/27d757d7258cf8b7f6eed29b7f761383.jpg",
  "https://i.pinimg.com/736x/e9/e5/ec/e9e5ec699e414662b28db5c37d5d9cea.jpg",
  "https://i.pinimg.com/736x/27/a0/6d/27a06d19477bce560b6c6f42dcf22503.jpg",
  "https://i.pinimg.com/736x/0f/a7/52/0fa7520410d2f0928eafe43340d7b3b3.jpg",
  "https://i.pinimg.com/736x/2c/71/f7/2c71f7fc1a57010f17beb9d1841060e1.jpg",
  "https://i.pinimg.com/736x/80/c1/00/80c1009e693609f617bb29bed0707ed5.jpg",
  'https://i.pinimg.com/236x/ab/85/46/ab8546fed52a8b9e4c4ce4f08a5bf30b.jpg',
];
let num = Math.floor(Math.random() * sources.length);
num = 0
function updateImage() {
    if (num === sources.length - 1) {
      num = sources.length - (sources.length + 1);
      image.setAttribute("src", sources[num + 1]);
    } else {
      image.setAttribute("src", sources[num + 1]);
    }
}

updateImage()
function updateShows() {
 showers.forEach((showw, i) => {
   let updater = (num + i) % sources.length;
   showw.setAttribute("src", sources[updater]);
   console.log(updater);
 }); 
}

updateShows();



right.addEventListener('click', plus)

left.addEventListener('click', minus)

document.addEventListener('keypress', (e) => {
    if (e.key === '>') {
        plus();
    } else if (e.key === '<') {
        minus();
    }
})

function plus() {
    if (num === sources.length - 1) {
      num = 0;

      // num++;
    } else {
      num++;
  }
  
  updateShows()
  updateImage()

    
}
function minus() {
     if (num === sources.length - sources.length) {
       num = sources.length - 1;
     } else {
       num--;
  }
  updateShows()
  // image.setAttribute("src", sources[num + 1]);
  //  if (num === 0) {
  //    num = 6;
  //    image.setAttribute("src", sources[num + 1]);
  //  } else {
  //    image.setAttribute("src", sources[num + 1]);
  //  }
  image.setAttribute('src', sources[num + 1])
   
}

