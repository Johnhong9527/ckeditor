<template>
  <div>
    123
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.addTwoNumbers([2, 4, 3, 9], [5, 6, 4, 9]));
  },
  methods: {
    /*
      给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

      你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

      给定 nums = [2, 7, 11, 15], target = 9
      因为 nums[0] + nums[1] = 2 + 7 = 9
      所以返回 [0, 1]
    */
    run(nums, target) {
      let start = -1;
      let end = -1;
      for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        const newArray = nums.slice(i + 1);
        newArray.forEach((element, index) => {
          if (item + element === target) {
            start = i;
            end = i + index + 1;
          }
        });
      }
      return [start, end];
    },
    /*
      输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
      输出：7 -> 0 -> 8
      原因：342 + 465 = 807
    */
    addTwoNumbers(l1, l2) {
      const setArr = arr => {
        let newArr = [];
        for (let i = arr.length - 1; i > -1; i--) {
          newArr.push(arr[i]);
        }
        return Number.parseInt(JSON.stringify(newArr).replace(/,|\[|\]/g, ""));
      };
      const l1Num = setArr(l1);
      const l2Num = setArr(l2);
      const sun = l1Num + l2Num;
      const arrStr = sun.toString();

      let arrNum = [];
      for (let i = 0; i < arrStr.length; i++) {
        arrNum.push(Number.parseInt(arrStr[i]));
      }
      return arrNum;
    },
    test() {
      let node = new ListNode("head");
      let temp = node; //哑结点
      let add = 0; //是否进一
      let sum = 0; //新链表当前未取余的值 = 链表1值 + 链表2值 + add;

      //遍历，直到最长的都为空
      while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        temp.next = new ListNode(sum % 10); //取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
      }
      add && (temp.next = new ListNode(add));
      return node.next;

      // 作者：lvshanke
      // 链接：https://leetcode-cn.com/problems/add-two-numbers/solution/zhi-xing-yong-shi-chao-guo-8246nei-cun-xiao-hao-ch/
      // 来源：力扣（LeetCode）
      // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    },
    test2() {
      /**
       * Definition for singly-linked list.
       * function ListNode(val) {
       *     this.val = val;
       *     this.next = null;
       * }
       */
      function getListNodeVal(ln) {
        return ln ? ln.val : 0;
      }
      /**
       * @param {ListNode} l1
       * @param {ListNode} l2
       * @return {ListNode}
       */
      var addTwoNumbers = function(l1, l2) {
        // 返回值
        let res = new ListNode("begin"),
          // 临时变量做中间节点
          temp = res,
          // 记录上次的计算是否需要进位 初始值为0
          carry = 0,
          // 每次计算和
          sum = 0;
        while (l1 || l2) {
          // 求和
          sum = getListNodeVal(l1) + getListNodeVal(l2) + carry;
          // 这一步很关键
          // 把当前暂存链表 新建 ListNode val为 sum % 10 的结果
          // 这一步做完之后
          // 第一次 之后 res = {val: 'begin', next: {val: sum % 10, next:null } }
          // 以此类推
          temp.next = new ListNode(sum % 10);
          // 同时改变 temp 指向为新建 链表
          temp = temp.next;
          // 判断当前求和计算是否 >= 10
          // true就是需要进位，为下次计算保存起来
          // 没有就重置为 0
          carry = sum >= 10 ? 1 : 0;
          // 改变 l1 l2 指向
          l1 && (l1 = l1.next);
          l2 && (l2 = l2.next);
        }
        // 如果到最后 carry 还是存在
        // 那么证明最后一位计算结果 >= 10
        carry && (temp.next = new ListNode(carry));
        // 返回 res.next res.val = 'begin' 记录的是我们开始 next才是保存我们的结果
        return res.next;
      };
    }
  }
};
</script>
