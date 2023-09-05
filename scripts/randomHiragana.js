let hiragana = {
    "symbol": "あ", "sound": "A",
    "symbol": "い", "sound": "I",
    "symbol": "う", "sound": "U",
    "symbol": "え", "sound": "E",
    "symbol": "お", "sound": "O",
    "symbol": "か", "sound": "KA",
};

let arrSize = hiragana.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function returnCaractere(){
    
    document.write(hiragana[getRandomInt(arrSize).symbol]);

}

function letMeCallYou(){
    alert("Bazinga!!!  you called letMeCallYou");
}