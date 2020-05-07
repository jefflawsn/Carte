const fetch = require("node-fetch");
const readline = require('readline');



var ville = "Bondoufle";


var VillePosition = (data_json) => {
  url = `https://api-adresse.data.gouv.fr/search/?q=${ville}`
  return fetch(url)
    .then((text) => {
      if (text.ok) {
        return text.json()
      }
      throw new Error('Response not ok.');
    })
    .catch(error => console.error('Error VillePosition:', error))
}

//Radian à degré
function rd(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

//Degré à radian
function dr(degrees) {
  var pi = Math.PI;
  return (radians * pi) / 180;
}

var GetSquare = (pos, distance) => {
  // acos(sin(radians(X1))*sin(radians(X2))+cos(radians(X1))*cos(radians(X2))*cos(radians(Y1-Y2)))*6371 = distance
  n = Math.round((pos[1] + 0.9)*1_000_000)/1_000_000
  s = Math.round((pos[1] - 0.9)*1_000_000)/1_000_000
  e = Math.round((pos[0] + 1.3)*1_000_000)/1_000_000
  o = Math.round((pos[0] - 1.3)*1_000_000)/1_000_000

  return [n, s, e, o]
}


async function GetPOI(ville) {
  pos = await VillePosition(ville)
  pos = pos.features[0].geometry.coordinates;
  console.log(`${ville} : Latitude = ${pos[1]} - Longitude = ${pos[0]}`);
  square = GetSquare(pos, 100)
  return square

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quelle ville souhaites tu connaitre la position ? \n', (answer) => {
  // TODO: Log the answer in a database
  ville = answer
  GetPOI(ville).then(
    (POS) => {
      console.log('\nOn va chercher les POIs dans le carré de Latitude et Longitude : ')
      console.log(`Nord : ${POS[0]} - Sud   : ${POS[1]}`)
      console.log(`Est  : ${POS[2]}   - Ouest : ${POS[3]}`)
    }
  ).catch(error => console.error('Error:', error))
  rl.close();
});


