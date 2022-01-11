import ListES from "./data_structures/linkedLists/linkedLists_es6.js";

const list = new ListES();

list.insert('A')
list.insert('B')
list.insert('C')
list.insert('D')
list.insert('E')
list.insert('F')
// // console.log(list)
// list.addToTail('W')
// console.log(list.print())
// list.removeHead()
console.log(list.print())
// console.log(list.contains('F'))
// console.log(list.readNode(2))
// console.log(list.delete(2))
list.reverse()
console.log(list.print())