/**
 * 这个文件时gn根模块，告诉ng如何组装应用
 */

// 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// ng核心模块
import { NgModule } from '@angular/core';
// ng路由模块
import { AppRoutingModule } from './app-routing.module';
// ng根组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// ng 装饰器,接受一个元数据对象，告诉ng如何编译和启动应用
@NgModule({
  declarations: [ /* 配置当前项目运行的组件*/
    AppComponent, HomeComponent
  ],
  imports: [ /*配置当前模块运营依赖的其他模块*/
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],/*配置当前项目所需要的服务*/
  bootstrap: [AppComponent] /*指定应用的主视图（成为根组件），通过引导根APPModule来启动应用，一般放的是根组件*/
})
// 暴露出去根模块，因为根模块不需要到处任何东西，其他组件不需要导入根模块
export class AppModule { }
