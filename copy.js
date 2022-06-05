const copyButton = document.getElementById('copyButton')

const numbers = new Array.fill(undefined).map(x => x+1)
const elementArray  = numbers.map(num => document.getElementById(num.toString()))

copyButton.addEventListener('click', () => {
    let clipboard_text = 'Craftdle (by trplnr)\n'

    elementArray.forEach(el => {
        if (el .dataset.state === 'correct') {
                clipboard_text += '🟩'
            } else if (el .dataset.state === 'wrong-location') {
                clipboard_text += '🟨'
            } else if (el .dataset.state === 'wrong') {
                clipboard_text += '⬛'
            }
        })
    
    navigator.clipboard.writeText(clipboard_text)
    
})
