export function selectBook(book){
    //Select book is an actioncreator, it needs to return an action, 
    //an object with type property. 
    return{
        type: 'BOOK_SELECTED',
        payload: book
    }

}


