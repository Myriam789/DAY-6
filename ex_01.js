function displayAgentInfo() {
    const agent = {
        firstName: "James",
        lastName: "Bond",
        code: "007",
        age: 57
    };
    
const info = 'My name is ${agent.lastName}, 


const p = document.querySelector("#container p");


p.textContent = info;
}

document.addEventListener('DOMContentLoaded',function(){
displayAgentInfo();
});
    

