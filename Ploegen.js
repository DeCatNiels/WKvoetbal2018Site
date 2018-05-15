let naamIngave = document.getElementById('naam');
let shortCode = document.getElementById('shortcode');
let beschrijving = document.getElementById('beschrijving');
let instelKnop = document.getElementById('toevoegButton');

instelKnop.addEventListener('click', function(){
    let naam = naamIngave.value;
    let code = shortCode.value;
    let description = beschrijving.value;

    let element = document.createElement('div');
    let para = element.creaElement('p');
    para.value = naam;


})