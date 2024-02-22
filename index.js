"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// la ou va etre stocker les resultat 
let userData;
// on récupère les données 
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('https://randomuser.me/api/?results=24')
        .then((res) => res.json())
        .then((data) => userData = data.results);
    // le resultat sera un array vide car il a pas le temps de charger les user que le console.log est joué donc il faut de l'asynchrone on aurait pu faire avec then mais on va utiliser async et await
    console.log(userData);
});
// On fait apparaitre les user .. il nous dit que userData est vide car les donner nont pas le temps de charger que fetch user Est exécuter dans la fonction userdispay donc on lui met un carton bleu pour qu'il ralentisse async / await
const userDisplay = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetchUser();
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return newDate;
    };
    const dayRegister = (date) => {
        let day = new Date().valueOf() - new Date(date).valueOf();
        let result = Math.ceil((day / 86400) / 1000);
        return result;
    };
    userData.map((user) => {
        document.body.innerHTML += `
        <div class="card">
        <img src=${user.picture.large} alt=${user.name.first} />
        <h3>${user.name.first}</h3> 
        <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
        <em>Membre depuis : ${dayRegister(user.registered.date)} jours</em>
        </div>
        
        `;
    });
});
userDisplay();
// console.log(data.results);
// const users =data.results;
// users.forEach( (element:any) => {
//     console.log(element)
//     // console.log(element.name.first)
//     const card = document.createElement('div');
//     card.classList.add('card')
//     document.body.appendChild(card);
//     // Image
//     const img = document.createElement('img');
//    img.src= element.picture.large;
//     card.appendChild(img);
//     // user name 
//     const h3 = document.createElement('h3');
//     h3.textContent = element.name.first + " " + element.name.last 
//     card.appendChild(h3);
//     // date of birth
//     const p = document.createElement('p');
//     let date = element.dob.date;
//     let location = element.location.city
//     p.textContent = location+", "+ date.split("T")[0];
//     card.appendChild(p);
//     // date 
//     let dateRegistered =  new Date().valueOf() - new Date(element.registered.date).valueOf() 
//     console.log(Math.ceil((dateRegistered/ 86400)/1000 ));
//     const fromRegisteredNowadays:any = document.createElement('p');
//     fromRegisteredNowadays.textContent ="Membre depuis: "+ Math.ceil((dateRegistered/ 86400)/1000) + " jours";
//     card.appendChild(fromRegisteredNowadays);
// });
// --------------
// Deuxieme méthode 
// --------------
// const fetchUser = ()=>{
//     fetch('https://randomuser.me/api/?results=24')
//     .then((res)=> res.json())
//     .then((data) =>{
//         console.log(data.results);
//         const users =data.results;
//         users.forEach( (element:any) => {
//             console.log(element)
//             // console.log(element.name.first)
//             const card = document.createElement('div');
//             card.classList.add('card')
//             document.body.appendChild(card);
//             // Image
//             const img = document.createElement('img');
//            img.src= element.picture.large;
//             card.appendChild(img);
//             // user name 
//             const h3 = document.createElement('h3');
//             h3.textContent = element.name.first + " " + element.name.last 
//             card.appendChild(h3);
//             // date of birth
//             const p = document.createElement('p');
//             let date = element.dob.date;
//             let location = element.location.city
//             p.textContent = location+", "+ date.split("T")[0];
//             card.appendChild(p);
//             // date 
//             let dateRegistered =  new Date().valueOf() - new Date(element.registered.date).valueOf() 
//             console.log(Math.ceil((dateRegistered/ 86400)/1000 ));
//             const fromRegisteredNowadays:any = document.createElement('p');
//             fromRegisteredNowadays.textContent ="Membre depuis: "+ Math.ceil((dateRegistered/ 86400)/1000) + " jours";
//             card.appendChild(fromRegisteredNowadays);
//         });
//     })
// }
// fetchUser()
