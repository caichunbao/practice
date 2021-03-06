/**
 * 
 * jquery的整体框架
 * 
 */

(function() {

  /* 
    1. (21 , 94) 定义了一些变量和函数 jQuery = function(){};
    2. (96 , 283) 给JQ对象，添加一些方法和属性
    3. (285 , 347) extend : JQ的继承方法
    4. (349 , 817) jQuery.extend() : 扩展一些工具方法
    5. (877 , 2856)  Sizzle : 复杂选择器的实现 
    6. (2880 , 3042) Callbacks : 回调对象 : 对函数的统一管理
    7. (3043 , 3183) Deferred : 延迟对象 : 对异步的统一管理
    8. (3184 , 3295) support : 功能检测
    9. (3308 , 3652) data() : 数据缓存
    10. (3653 , 3797) queue() : 队列方法 : 执行顺序的管理 
    11. (3803 , 4299) attr() prop() val() addClass()等 : 对元素属性的操作
    12. (4300 , 5128) on() trigger() : 事件操作的相关方法
    13. (5140 , 6057) DOM操作 : 添加 删除 获取 包装 DOM筛选
    14. (6058 , 6620) css() : 样式的操作
    15. (6621 , 7854) 提交的数据和ajax() : ajax() load() getJSON()
    16. (7855 , 8584) animate() : 运动的方法
    17. (8585 , 8792) offset() : 位置和尺寸的方法
    18. (8804 , 8821) JQ支持模块化的模式
    19. (8826)  window.jQuery = window.$ = jQuery;
  */

  // # 第二部分
  /**
    jQuery.fn = jQuery.prototype = {  添加实例属性和方法
      jQuery :      版本
      constructor : 修正指向问题
      init() :      初始化和参数管理
      selector :    存储选择字符串
      length :      this对象的长度
      toArray() :   转数组
      get() :       转原生集合
      pushStack :   jQ对象的入栈
      each() :      遍历集合    
      ready() :     DOM加载的接口    
      slice() :     集合的截取    
      first() :     集合的第一项    
      last() :      集合的最后一项     
      eq() :        集合的指定项    
      map() :       返回新集合    
      end() :       返回集合前一个状态    
      push() :      (内部使用)    
      sort() :      (内部使用)    
      splice() :    (内部使用)
    }
   */


})()