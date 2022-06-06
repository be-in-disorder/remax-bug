/*
 * @Author: 六冰
 * @Date: 2022-05-25 10:53:02
 * @LastEditors: 六冰
 * @LastEditTime: 2022-05-25 17:14:16
 * @FilePath: /peakvalleyelectric/src/components/tag/index.js
 */
Component({
  properties: {
    title: String,
    energyData:Object,
  },
  methods: {
    onClose: function () {
      this.$emit('close');
    },
  },
});
