export const Users = () => {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => resolve(json))
    })
}