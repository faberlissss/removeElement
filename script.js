const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    array.splice(4, 1);     
}
removeElement(array, 5 );
console.log(array);