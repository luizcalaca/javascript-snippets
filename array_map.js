const paints = ['black', 'green','red']
const name = 'color'

function pluck(array, property) {
    let newer = []
    array.map((item) => {
    	newer.push(property,item)
    })
    
    return newer
}

const result = pluck(paints, name)
console.log(Array.from(result))
