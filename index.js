// davaleba 1

function expo(num, degree, callback) {
    const result = Math.pow(num, degree);
    callback(result);
  }
  
  function dis(result) {
    console.log(`result is: ${result}`);
  }
  
  expo(5, 3, dis); 

// davaleba 2  

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))
function usercard (body){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = "christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

    const h1 = document.createElement("h1");
    h1.innerText = "Gabi Guimaraes";

    const button = document.createElement("button");
    button.innerText = "button";
    button.classList.add("btn");

    const ul = document.createElement("ul");
    ul.classList.add("ul");
    [
        body,
    ].forEach((el) => {
        const li = document.createElement("li");
        li.innerText = el;
        ul.appendChild(li);
    });

    wrapper.append(img,h1,ul,button);
    return wrapper
}
async function fetchData(){
    try {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await rawData.json()
        console.log(data)
        data.forEach((u) => {
            const user = usercard(u.body)
            document.body.append(user)
        }) 
    } catch (error) {
        console.log(error)
    }
}

fetchData()

// davaleba 3

const person = {
    firstname: 'Novak',
    lastname: 'Djokovic',
    profile: {
        age:36,
        nickname: 'The Joker'
    },
    titles: ['Australian Open', 'French Open', 'Wimbledon', 'US Open']
} 

const person2 ={
    ...person,
    profile: {
        ...person.profile
    },
    titles:[...person.titles]
}

person.profile.age = 55
person.titles =['Maiami Open', 'Madrid Open', 'Cincinnati Masters','Shanghai Masters']

console.log(person.profile.age, person.titles)
console.log(person2.profile.age, person2.titles)

function task (obj) {
    return new Promise((resolve, reject) => {
        if(typeof obj !== 'object') reject ('Error')
        if(typeof obj === 'object') resolve('All Good')
    })
}

task(person2)
.then(res => console.log(res))
.catch(err => console.log(err))