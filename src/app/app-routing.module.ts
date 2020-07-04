// ng模块
import { NgModule } from '@angular/core';
// 路由
import { Routes, RouterModule } from '@angular/router';

// 使用路由
const routes: Routes = [];
// 装饰器
@NgModule({
  imports: [RouterModule.forRoot(routes)],// 导入路由
  exports: [RouterModule] // 导出路由模块
})
export class AppRoutingModule { } 
