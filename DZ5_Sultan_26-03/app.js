function Numbers (...numbers) {
    let summa = numbers.reduce((a,b)=>a+=b)
    let result = summa/numbers.length
    console.log(result.toFixed(2))
}
Numbers(1,33,5,6,7,4,8,7)

///////////


function filterBooks(books){
    let booksWithY =[];
    let booksWithoutY = [];

    for (let i=0;i<books.length;i++){
        if (books[i].toLowerCase().includes('у')){
            booksWithY.push(books[i])
        }
        else {
            booksWithoutY.push(books[i])
        }
    }
    return [booksWithY,booksWithoutY]
}
let bookList =['Три товарища','Вторая жизнь Уве','убийство в восточном Экспрессе','Таинственный остов','Крестный Отец','Узорный покров']
let filteredBooks = filterBooks(bookList)

console.log('С буквой у:' ,filteredBooks[0])
console.log('Без буквы у:' ,filteredBooks[1])

