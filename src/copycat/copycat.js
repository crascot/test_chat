const copyCat = (id, messType, message) => {
    return new Promise(resolve => {
        let mess;
        messType === 'text' ?
            mess = {
                id: id,
                align: 'left',
                message: message
            }
            :
            mess = {
                id: id,
                align: 'left',
                img: true,
                message: message
            }
        resolve(mess)
    })
}

export default copyCat;