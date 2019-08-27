console.log('aaa fire')
const myJson = fetch('./db/index.json').then(r=>r.json()).then(d=>console.log(JSON.stringify(d)))
