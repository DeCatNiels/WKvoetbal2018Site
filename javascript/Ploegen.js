let naamIngave = document.getElementById('naam');
let shortCode = document.getElementById('shortcode');
let beschrijving = document.getElementById('beschrijving');
let instelKnop = document.getElementById('toevoegButton');
let landen = document.getElementById("landen");
let divs = [];

console.log(JSON.parse(localStorage.getItem("saveLanden")));

instelKnop.addEventListener('click', function(){
    let naam = naamIngave.value;
    let code = shortCode.value;
    let description = beschrijving.value;
    landen.style.display = "block";

    let vlagLand = document.createElement('img');
    vlagLand.src = "afbeeldingen/landen/" + code + ".png";

    let element = document.createElement('div');
    element.id = "land";

    let para = document.createElement('p');
    para.innerHTML = naam;

    let desc = document.createElement('p');
    desc.id = "beschrijvingOutput";
    desc.innerHTML = description;
    landen.appendChild(element);
    element.appendChild(vlagLand);
    element.appendChild(para);
    element.appendChild(desc);

    let land = {nm: naam, cd: code, besc: description};
    divs.id = "opgeslagenLanden";
    divs.push(land);
});

localStorage.setItem("saveLanden",JSON.stringify(document.getElementById("opgeslagenLanden")));