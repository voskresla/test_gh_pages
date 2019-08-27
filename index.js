console.log('aaa fire')
const myJson = fetch('index.json').then(r=>r.json()).then(d=>console.log(JSON.stringify(d)))
