let naamIngave = document.getElementById('naam');
let shortCode = document.getElementById('shortcode');
let beschrijving = document.getElementById('beschrijving');

let instelKnop = document.getElementById('toevoegButton');
let landen = document.getElementById("landen");

let laad = JSON.parse(localStorage.getItem("savedLanden"));
let divs;

if (laad === null){
    divs = [];
} else {
    divs = laad;
    laadLanden();
}

instelKnop.addEventListener('click', function(){
    let land = {naam: naamIngave.value, code: shortCode.value, beschr: beschrijving.value};
    divs.id = "opgeslagenLanden";
    divs.push(land);
    laadLanden();
    localStorage.setItem("savedLanden", JSON.stringify(divs));
});

function laadLanden(){
    landen.innerHTML = "";

    for(let i = 0; i < divs.length; i++){
        landen.style.display = "block";

        let vlagLand = document.createElement('img');
        vlagLand.src = "afbeeldingen/landen/" + divs[i].code + ".png";

        let element = document.createElement('div');
        element.id = "land";

        let para = document.createElement('p');
        para.innerHTML = divs[i].naam;

        let desc = document.createElement('p');
        desc.id = "beschrijvingOutput";
        desc.innerHTML = divs[i].beschr;
        landen.appendChild(element);
        element.appendChild(vlagLand);
        element.appendChild(para);
        element.appendChild(desc);
    }
}


