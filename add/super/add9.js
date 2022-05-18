// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];



// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.

//let address = [];
// for (const user of users) {
//     address.push(user.address);
// }
//
// console.log(address);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (const user of users) {
//     const vid = document.createElement('div');
//
//     for (const i in user) {
//         if(typeof user[i] !== 'object'){
//         vid.innerHTML += `${i} - ${user[i]} </br>`
//         }else {
//             for (const iKey in user.address) {
//                 vid.innerHTML += `${iKey} - ${user.address[iKey]} </br>`
//             }
//         }
//     }
//
//     vid.style.margin = '20px';
//     document.body.append(vid);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     const div = document.createElement('div');
//     for (const i in user) {
//         const div2 = document.createElement('div');
//        if(typeof user[i] !== 'object'){
//            div2.innerHTML = `${i} - ${user[i]}`;
//            div.append(div2);
//        }else{
//            const div3 = document.createElement('div');
//            for (const j in user.address) {
//                div3.innerHTML += `${j} - ${user.address[j]} </br>`;
//            }
//            div.append(div3);
//        }
//     }
//
//     document.body.append(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     const mainDiv = document.createElement('div');
//     for (const i in user) {
//         const div1 = document.createElement('div');
//         if(typeof user[i] !== 'object'){
//             div1.innerHTML = `${i} - ${user[i]}`;
//             mainDiv.append(div1);
//         }else {
//             const div2 = document.createElement('div');
//             for (const j in user.address) {
//                 const div3 = document.createElement('div');
//                 div3.innerHTML = `${j} - ${user.address[j]}`;
//                 div2.append(div3);
//             }
//             mainDiv.append(div2);
//         }
//     }
//
//     document.body.append(mainDiv);
// }


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// const h = document.getElementsByTagName('h2');
//
// let func = h2 =>{
//     const arr = [];
//     for (const txt of h2) {
//         arr.push(txt.innerText);
//     }
//    const ul = document.createElement('ul');
//     for (const item of arr) {
//         const li = document.createElement('li');
//         li.innerHTML = `${item}`;
//         ul.append(li);
//     }
//
//     const iD = document.getElementById('content');
//
//     iD.append(ul);
// }
//
// func(h);






//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


// for (const rule of rules) {
//     const divRule = document.createElement('div');
//     for (const titleBody in rule) {
//         const divTitleBody = document.createElement('div');
//         divTitleBody.innerHTML = `${rule[titleBody]}`;
//         divRule.append(divTitleBody);
//     }
//
//     const wrap = document.getElementById('wrap');
//     wrap.append(divRule);
// }