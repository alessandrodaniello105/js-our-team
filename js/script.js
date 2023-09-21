// 1. Creo l'array con gli oggetti e le informazioni
const team = [

  // WAYNE BARNETT
  {
    namelastname: "Wayne Barnett",
    role:	        "Founder & CEO",
    imgstring:    "wayne-barnett-founder-ceo.jpg"
  },
  
  // ANGEL CAROLL
  {
    namelastname: "Angela Caroll",
    role:	        "Chief Editor",
    imgstring:    "angela-caroll-chief-editor.jpg"
  },
  
  // WALTER GORDON
  {
    namelastname: "Walter Gordon",
    role:	        "Office Manager",
    imgstring:    "walter-gordon-office-manager.jpg"
  },
  
  // ANGELA LOPEZ
  {
    namelastname: "Angela Lopez",
    role:	        "Social Media Manager",
    imgstring:    "angela-lopez-social-media-manager.jpg"
  },
  
  // SCOTT ESTRADA
  {
    namelastname: "Scott Estrada",
    role:	        "Developer",
    imgstring:    "scott-estrada-developer.jpg"
  },
  
  // BARBARA RAMOS
  {
    namelastname: "Barbara Ramos",
    role:	        "Graphic Designer",
    imgstring:    "barbara-ramos-graphic-designer.jpg"
  }

];

// console.log(team[2].role);

console.log('----------CICLO GLI OGGETTI----------');

for (let membro of team) {
  
  console.log('---OGGETTO---');
  console.log(membro);

  console.log('---CICLO I VALORI DELLE CHIAVI---');
  for (let key in membro) {
    console.log(key, " - ", membro[key])
  }


}

