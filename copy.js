const copyButton = document.getElementById('copyButton')

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const ten = document.getElementById('10')
const eleven = document.getElementById('11')
const twelve = document.getElementById('12')
const thirteen = document.getElementById('13')
const fourteen = document.getElementById('14')
const fifteen = document.getElementById('15')
const sixteen = document.getElementById('16')
const seventeen = document.getElementById('17')
const eighteen = document.getElementById('18')
const nineteen = document.getElementById('19')
const twenty = document.getElementById('20')
const twoone = document.getElementById('21')
const twotwo = document.getElementById('22')
const twothree = document.getElementById('23')
const twofour = document.getElementById('24')
const twofive = document.getElementById('25')
const twosix = document.getElementById('26')
const twoseven = document.getElementById('27')
const twoeight = document.getElementById('28')
const twonine = document.getElementById('29')
const thirty = document.getElementById('30')

copyButton.addEventListener('click', () => {
    let clipboard_text = 'Craftdle (by trplnr)\n'
    if (one.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (one.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (one.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (two.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (two.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (two.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (three.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (three.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (three.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (four.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (four.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (four.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (five.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (five.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (five.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    
    clipboard_text += '\n'

    if (six.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (six.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (six.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (seven.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (seven.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (seven.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (eight.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (eight.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (eight.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (nine.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (nine.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (nine.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (ten.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (ten.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (ten.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }

    clipboard_text += '\n'

    if (eleven.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (eleven.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (eleven.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twelve.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twelve.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twelve.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (thirteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (thirteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (thirteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (fourteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (fourteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (fourteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (fifteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (fifteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (fifteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }

    clipboard_text += '\n'

    if (sixteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (sixteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (sixteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (seventeen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (seventeen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (seventeen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (eighteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (eighteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (eighteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (nineteen.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (nineteen.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (nineteen.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twenty.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twenty.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twenty.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }

    clipboard_text += '\n'

    if (twoone.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twoone.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twoone.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twotwo.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twotwo.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twotwo.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twothree.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twothree.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twothree.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twofour.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twofour.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twofour.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twofive.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twofive.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twofive.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }

    clipboard_text += '\n'

    if (twosix.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twosix.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twosix.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twoseven.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twoseven.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twoseven.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twoeight.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twoeight.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twoeight.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (twonine.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (twonine.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (twonine.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    

    if (thirty.dataset.state === 'correct') {
        clipboard_text += '🟩'
    } else if (thirty.dataset.state === 'wrong-location') {
        clipboard_text += '🟨'
    } else if (thirty.dataset.state === 'wrong') {
        clipboard_text += '⬛'
    }
    
    navigator.clipboard.writeText(clipboard_text)
    
})


