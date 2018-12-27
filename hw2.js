function isPositive(value) {
    return value > 0
}

function isNegative(value) {
    return value < 0
}


function displayTypeOfNumber (value) {
    if (value > 0) {
        console.log(value, 'positive')
    } else if (value === 0) {
        console.log(value, 'zero')
    } else {
        console.log(value, 'negative')
    }
}


function getLongestWord(str) {
    words = str.split(' ');
    let word = '';
    let maxLength = 0;
    for(let i = 0; i < words.length; i++ ) {
        console.log(words[i])
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
            word = words[i];
        }
    }
    return word; 
}

const defaultInstrations = {
    back: "Back",
    forward: "Forward",
    left: "Left",
    right: "Right"
}

const instructions = ["Back", "Forward", "Forward", "Forward", "Forward", "Left", "Forward", "Right"]
function walk (instructions){
    let location = {
        x: 0,
        y: 0
    };
    let i = 0;
    while (instructions[i] !== undefined) {
        switch (instructions[i]) {
            case defaultInstrations.back: 
                if (location.y === -3) {
                    break;
                } else {
                    location.y--
                }
               
            break
            case defaultInstrations.forward: 
                if (location.y === 3) {
                    break
                } else {
                    location.y++
                } 
            break
            case defaultInstrations.left: 
                if (location.x === -3) {
                    break;
                } else {
                    location.x--
                }
                
            break
            case defaultInstrations.right:
                if (location.x === 3) {
                    break;
                } else {
                    location.x++
                }
            break
        }
        i++;
    }
    
    return location
}
console.log(walk(instructions))