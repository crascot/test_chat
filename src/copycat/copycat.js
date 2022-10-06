const copyCat = (id, messType, message) => {
    return new Promise(resolve => {
        let mess;
        messType === 'text' ?
            mess = {
                id: id,
                align: 'left',
                message: message,
                date: `${new Date().getHours()}:${new Date().getMinutes()}`
            }
            :
            mess = {
                id: id,
                align: 'left',
                img: true,
                message: message,
                date: `${new Date().getHours()}:${new Date().getMinutes()}`
            }
        resolve(mess)
    })
}

export default copyCat;