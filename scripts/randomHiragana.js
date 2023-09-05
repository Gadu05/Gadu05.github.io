let hiragana;

hiragana[0] = {symbol: 'あ', sound: 'A'};
hiragana[1] = {symbol: 'い', sound: 'I'};
hiragana[2] = {symbol: 'う', sound: 'U'};
hiragana[3] = {symbol: 'え', sound: 'E'};
hiragana[4] = {symbol: 'お', sound: 'O'};
hiragana[5] = {symbol: 'か', sound: 'KA'};

let arrSize = hiragana.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function returnCaractere(){
    
    document.write(hiragana[getRandomInt(arrSize).symbol]);

}