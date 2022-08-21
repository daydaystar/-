/**
 * 归并排序
 * 使用分而治之的算法思想
 * 1.将大数组分成小数组
 * 2.重复1步骤直到获得长度为1的数组
 * 3.把得到的两个长度为1的数组合成成有序数组
 * 4.把得到的两个有序数组合成新的有序数组
 * 5.重复4直到只剩一个数组
 */
const mergeSort = (() => {
  return function sort(arr) {
    if (arr.length <= 1) return arr;
    const [arr1, arr2] = separate(arr);
    return merge(sort(arr1), sort(arr2));
  };
  //将数组分成两个数组
  function separate(arr) {
    const index = Math.floor(arr.length / 2);
    return [arr.slice(0, index), arr.slice(index)];
  }
  //将两个有序数组合成一个有序数组
  function merge(arr1, arr2) {
    let index1 = 0,
      index2 = 0,
      newArr = [];
    while (!(index1 >= arr1.length && index2 >= arr2.length)) {
      const hasIndex1 = Object.prototype.hasOwnProperty.call(arr1, index1);
      const hasIndex2 = Object.prototype.hasOwnProperty.call(arr2, index2);
      if (hasIndex1 && hasIndex2) {
        if (arr1[index1] < arr2[index2]) {
          newArr.push(arr1[index1]);
          index1++;
        } else {
          newArr.push(arr2[index2]);
          index2++;
        }
      } else if (!hasIndex1) {
        newArr.push(arr2[index2]);
        index2++;
      } else {
        newArr.push(arr1[index1]);
        index1++;
      }
    }
    return newArr;
  }
})();
