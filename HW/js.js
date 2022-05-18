// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const block = document.createElement('div');
//
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// block.style.background = '#000000';
// block.style.color = '#ffffff';
// block.style.fontSize = '24px';
// block.innerHTML = 'Some cool text';
// document.body.append(block);
//
// const block2 = block.cloneNode(true);
// document.body.appendChild(block2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// const arr = ['Main','Products','About us','Contacts'];
//
// const menu = document.getElementsByClassName('menu');
//
// for (const item of arr) {
//     const someLi = document.createElement('li');
//     someLi.innerHTML = item;
//     menu[0].append(someLi); // краще також використати цикл, чи й так зійде?
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}];
//
// for (const item of coursesAndDurationArray) {
//     let block = d ocument.createElement('div');
//
//    //  block.innerHTML = `
//    //  ${Object.keys(item)[0]} - ${item.title}</br>
//    // ${Object.keys(item)[1]} - ${item.monthDuration}</br>`;
//
//     let arrK = Object.keys(item);
//     let arrV = Object.values(item);
//
//
//     for (let i = 0; i < arrK.length; i++) { // можна якось нормалізувати?
//         block.innerHTML = `
//         ${arrK[i-1]} - ${arrV[i-1]}</br>
//         ${arrK[i]} - ${arrV[i]}`
//         document.body.appendChild(block);
//
//     }
//
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// for (const item of coursesAndDurationArray) {
//     const a = document.createElement('div');
//     a.classList.add('item');
//         a.innerHTML = `
//             <h1 class="heading">${item.title}</h1>
//             <p class="description">${item.monthDuration}</p>`
//     document.body.append(a);
// }
