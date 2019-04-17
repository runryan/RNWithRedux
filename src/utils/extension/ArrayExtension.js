// @flow

/**
 * 从数组中删除某个元素
 *
 * @export remove方法
 * @template Flow泛型类型
 * @param {Array<T>} array 数组
 * @param {T} item 将要删除的元素
 * @returns {Array<T>} 删除元素后的数组
 */
export function removeItemFromArray<T>(array: Array<T>, item: T): Array<T> {
  const removeIndex = array.indexOf(item);
  if (removeIndex > -1) {
    array.splice(removeIndex, 1);
  }
  return array;
}
