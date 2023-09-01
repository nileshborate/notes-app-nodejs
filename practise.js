

const book = {
    title : 'Title1',
    body : 'This is body'
}

console.log(book);

newObj1 = JSON.stringify(book)
console.log(newObj1);
newObj2 = JSON.parse(newObj1)
console.log(newObj2);

console.log(newObj2.title);