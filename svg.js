const logo = document.querySelectorAll('#hero-heading path');
// console.log(logo);
// console.log(logo.length);
for(let i = 0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}