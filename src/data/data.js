let people = []
let rootUrl = ''
let menuSelection = ''

export function setPeople(data){ 
    people = data
}
export function getPeople() {
    return people
}

export function useFetch(url) {
    fetch(url).then(res => {
        res.json().then(data => {
            setPeople(data.results)
            console.log(data, 'fetch works');
        })
    })
}