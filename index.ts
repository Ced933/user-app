const fetchUser = ()=>{
    fetch('https://randomuser.me/api/?results=24')
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data.results);
        const users =data.results;
        users.forEach( (element:any) => {
            console.log(element)
            // console.log(element.name.first)
            const card = document.createElement('div');
            card.classList.add('card')
            document.body.appendChild(card);
            
            const img = document.createElement('img');
           img.src= element.picture.large;
            card.appendChild(img);


            const h3 = document.createElement('h3');
            h3.textContent = element.name.first + " " + element.name.last 
            card.appendChild(h3);
            

            const p = document.createElement('p');
            let date = element.dob.date;
            let location = element.location.city
            p.textContent = location+", "+ date.split("T")[0];
            card.appendChild(p);


            let dateRegistered =  new Date().valueOf() - new Date(element.registered.date).valueOf() 
            console.log(Math.ceil((dateRegistered/ 86400)/1000 ));
            const fromRegisteredNowadays:any = document.createElement('p');
            fromRegisteredNowadays.textContent ="Membre depuis: "+ Math.ceil((dateRegistered/ 86400)/1000) + " jours";
            card.appendChild(fromRegisteredNowadays);
            
             



        });
        



        

    })


}
fetchUser()