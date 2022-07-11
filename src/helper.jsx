// eslint-disable-next-line import/prefer-default-export
export const createID = () =>{
    // eslint-disable-next-line prefer-template
    const id =  'id' + (new Date()).getTime();
    return id
}