let book = {
    title: 'The Fellowship of the Ring',
    publisher: 'Allen & Unwin'
};

function print({title, publisher}){
    return title + ' was published by ' + publisher + '.';
}

console.log(print(book));
