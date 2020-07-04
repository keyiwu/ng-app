// 根组件
// 引用核心模块的组件模块
import { Component } from '@angular/core';
// 装饰器
@Component({
  selector: 'app-root',// 使用这个组件的名称
  templateUrl: './app.component.html',// html
  styleUrls: ['./app.component.scss'] // css

})
export class AppComponent {
  title = 'ng-app';// 定义属性
  constructor(){} // 构造函数
}
