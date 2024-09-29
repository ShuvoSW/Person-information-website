const people =[
    {id:1,
     name:"jhon deo",
     age: 30,
     contact: {
        email:"jhon.doexample.com",
        phone:055554556
     },
     address: {
        city:"ca"
     },
     hobbies: ['running','traveling']  
    },
    {id:2,
     name:"rhon deo",
     age: 40,
     contact: {
        email:"rhon.doexample.com",
        phone:055554556
     },
     hobbies: ['running','traveling'] 
    //  address: {
    //     city:"ca"
    //  }  
    },
    {id:3,
     name:"khon deo",
     age: 50,
     contact: {
        email:"khon.doexample.com"
     },
     address: {
        city:"ba"
     },
     hobbies: ['running','traveling'] 
    }
]
// console.log('conectet')

const peopleList = document.getElementById("People-list"); 
const personInfo = document.getElementById("person-info"); 

const renderPeopleList = (people) => {
    people.map((person) => {
        const li = document.createElement('li');
        li.classList.add("cursor-pointer","text-blue-500","p-2");
        li.textContent = person.name;

        li.addEventListener('click',() => {
            handelPersonClick(person.id);
        })

        peopleList.appendChild(li);
    })
};

const displayPersonInfo = (person) => {
    // console.log(person)
    personInfo.classList.remove('hidden')
    document.getElementById('no-section').classList.add('hidden')
    personInfo.innerHTML = `
    <h2 class="text-2xl font-bold mb-2 "> ${person.name} </h2>
    <p> Number: ${person?.contact.phone || "N/A"}</p>
    <p> City: ${person?.address?.city || "N/A"}</p>
    <p> Hobbies: ${person?.hobbies?.map((hobby) => hobby)}</p>
    `;
} 

const handelPersonClick = (id) => {
    // console.log(id);
    const person = people.find((p) => p.id == id) 
    displayPersonInfo(person)
}

renderPeopleList(people)
// handelPersonClick(2)