import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { // 配置路由模块懒加载
    path: 'user', loadChildren: './module/user/user.module#UserModule'
  },
  {
    path: 'product', loadChildren: './module/product/product.module#ProductModule'
  },
  {
    path: '**', redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
