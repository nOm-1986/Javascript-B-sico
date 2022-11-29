// const h1: HTMLHeadingElement | null = document.querySelector('h1');
// const p: HTMLParagraphElement | null = document.querySelector('p');
// const parrafito: Element | null = document.querySelector('.parrafito');
// const pid: Element | null = document.querySelector('#pid');
// const input: HTMLInputElement | null = document.querySelector('input');
alert('Hola mundo');
const h1: HTMLHeadingElement= document.querySelector('h1') as HTMLHeadingElement;
const p: HTMLParagraphElement | null = document.querySelector('p');
const parrafito: Element | null = document.querySelector('.parrafito');
const pid: Element | null = document.querySelector('#pid');
const input: HTMLInputElement | null = document.querySelector('input');

//console.log({h1, p, parrafito, pid, input});
//console.log(p);

h1.innerHTML = "<h1>Tortuguita <br> rápida<h1>";
