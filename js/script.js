// ARRAY of OBJECTS (Milestone 0)
const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
]

// Milestone 1
// for (let i = 0; i < ourTeam.length; i++) {
//     let curMember = ourTeam[i];
//     // console.log(element);
//     for (let key in curMember) {
//         console.log(curMember[key]);
//     }
// }

// Milestone 2
const myList = document.querySelector("ul");
// console.log(myL);
myListInner = "";
for (let i = 0; i < ourTeam.length; i++) {
    let curMember = ourTeam[i];
    // console.log(element);
    for (let key in curMember) {
        console.log(curMember[key]);
        myListInner += `<li>${[key]}: ${curMember[key]}</li>`;
    }
}
myList.innerHTML = myListInner;