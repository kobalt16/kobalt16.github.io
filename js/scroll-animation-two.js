function onEntryTwo(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show-two');
    }
  });
}

let optionsTwo = {
  threshold: [0.5] };
let observerTwo = new IntersectionObserver(onEntryTwo, optionsTwo);
let elementsTwo = document.querySelectorAll('.element-animation-two');

for (let elm of elementsTwo) {
  observerTwo.observe(elm);
}

