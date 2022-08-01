const keepLetters = (str) => {
    let strNew = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() != str[i].toUpperCase()) {
            strNew += str[i];
        }
    }
    console.log(strNew);
}
keepLetters('Give me $20'); // 'Giveme'
keepLetters('Ta5&ke m12e $20 #mk)');
