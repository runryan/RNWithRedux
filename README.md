# React Native中使用Flow和Redux

接触React Native有一个多月了，也独立完成了一个简单的项目。整体来讲对RN的感觉还是很好的。尤其是开发效率吊打Android、iOS原生开发。特别感谢公司
给予这次学习的机会。

项目是完成了，运行的效果，老板是满意的。但是对于自己而言，项目在架构以及代码的规范方面还是比较欠缺。为了弥补这块儿的缺陷，为接下来更重要的项目打基础，
学习了Flow和Redux。

#### Flow是JS静态类型检查库。

Javascript本身是弱类型语言，对于一个从Java和OC过来的程序员，习惯了类型检查来说，如果没有JS基础，一开始肯定很懵逼。随着越来越多的学习积累，反而觉着JS
这货，挺灵活的。但是灵活的另一面就是不规范：数据类型，方法参数……都不受限制，在VSCode的自动完成和提示也受限。更严重的是做不到代码静态编译检查，很多运行
时的BUG很可能会隐藏的很深、不容易发现。

React Native开发，大部分的时间是与React打交道的，React又是JavaScript搭建UI的库。所以能够引入静态类型检查，在代码规范上就能提升一个档次。


因为要为JS添加类型检查特性，所以使用Flow比写纯JS代码就要多一些工作，但是好处也是显而易见的，自动提示。Flow具体的使用，查看官方文档即可。在VSCode中
方便使用，需要安装`Flow Language Support`插件，具体的配置，插件的主页也写的很明白，照做就可以。

#### Redux，状态容器

React Native是在`State`对象数据变化后，通过调用`setState`方法更新界面。但是在一个页面比较复杂，各种状态足够多的情况下，会比较难以管理，业务逻辑很容易写的杂乱无章。就像做原生开发需要MVC、MVVM等设计模式一样，我们也需要一种机制能够科学的管理`state`。Redux把整个应用的state融合为一个对象，可以在任意组件更新UI，想想都觉得好屌（抽象）。

翻阅超多Redux的教程，总的看下来总是云雾缭绕的感觉。但是在动手实际后发现，这货还是容易上手的。官方文档中提及的核心概念必然得多理解才行。集成Redux的步骤可以总结为一下步骤：

1. 创建Action；
2. 创建reducer;
3. 创建store;
4. Provider包裹项目的根容器；
5. 在组件中通过`mapStateToProps`将state转换成该组件的属性;`mapDispatchToProps`将`dispatch`方法转换成属性。
6. 在组件中调用通过第5步中`dispatch`转换过来的属性方法，然后调用`setState`方法更新UI即可。

### 其它工具

[React Native Debugger](https://github.com/jhen0409/react-native-debugger); 

[Redux DevTools](https://github.com/jhen0409/react-native-debugger)

加上上面两个工具，让Redux调试飞上天。看文档即即可。

### 闲言碎语

JavaScript是我之前嗤之以鼻的存在，都是我无知。这货有太多奇巧淫技，让人叹为观止，绝对是现在，是未来！

以上纯属Selfhigh,技术方面没有仔细的写。看以后吧，如果有时间能静下心来，还是期望自己能够写的清清楚楚，明明白白。献丑了。
