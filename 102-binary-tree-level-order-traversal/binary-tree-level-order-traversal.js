/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const levelQueue = [root];
    const treeInArr = []
    while (levelQueue.length) {
        let length = levelQueue.length;
        let count = 0;
        const arr = []
        while (count < length) {
            let currentNode = levelQueue.shift();
            arr.push(currentNode.val);
            if (currentNode.left) {
                levelQueue.push(currentNode.left);
            }
            if (currentNode.right) { levelQueue.push(currentNode.right); }
            count++;
        }
        if (arr.length) {
            treeInArr.push(arr)
        }
    }
    return treeInArr;
};