const arr = [1, 3, 6];
arr.splice(2, 0, 1, 2, 3, 4, 5, 5, 6)
console.log(arr);
function counter() {
    coun = 0;
    return function () {
        coun++;
        return coun;

    }
}
  const res=counter();
  console.log(res());
  console.log(res());
  
  