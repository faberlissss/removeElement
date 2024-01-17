const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    let itemIndex = (element) => element === item;
    let findItemIndex = array.findIndex(itemIndex);
    array.splice(findItemIndex, 1);
}
removeElement(array, 5);
console.log(array);
