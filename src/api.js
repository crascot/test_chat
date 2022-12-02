const avatars = [
    'https://cdn3.vectorstock.com/i/1000x1000/23/22/new-woman-avatar-icon-flat-vector-19152322.jpg',
    'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png',
    'https://cdn.icon-icons.com/icons2/2630/PNG/512/diversity_avatar_girl_woman_black_hair_people_icon_159085.png'
]
const status = [
    'online',
    'offline',
    'online',
    'offline',
    'online',
    'offline',
    'online',
    'offline',
    'online',
    'offline',
]

export const Users = () => {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                json.forEach(e => {
                    e.avatar = avatars[e.id - 1]
                    e.status = status[e.id - 1]
                })
                resolve(json);
            })
    })
}