"use strict";

function callback(entries, bc) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('abc');
    bc.unobserve(entry.target);
  });
}
const options = { threshold:0.5, };

const observer = new IntersectionObserver(callback,options);
const targets = document.querySelectorAll('.animate');
targets.forEach(target => {
  observer.observe(target);
});