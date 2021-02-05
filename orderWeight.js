function orderWeight(strng) {
    let arr = strng.split(' ');
    arr.sort(function(a,b){
      let itemDigArr1 = a.split('');
      let itemDigArr2 = b.split('')
      let sumOfDig1 = itemDigArr1.reduce((preValue,item2)=> preValue+= +item2,0);
      let sumOfDig2 = itemDigArr2.reduce((preValue,item2)=> preValue+= +item2,0);
      if(sumOfDig1 < sumOfDig2) return -1;
      if(sumOfDig1 > sumOfDig2) return 1;
      if(sumOfDig1 == sumOfDig2){
        if(a>b)return 1;
        return -1
      };
    })
  return arr.join(' ');
}
