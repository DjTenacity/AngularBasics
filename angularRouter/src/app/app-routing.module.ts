// 配置路由的模块

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NewsComponent} from './components/news/news.component';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {NewscontentComponent} from './components/newscontent/newscontent.component';

import {ProductcontentComponent} from './components/productcontent/productcontent.component';
import {WelcomeComponent} from './components/home/welcome/welcome.component';
import {SettingComponent} from './components/home/setting/setting.component';
import {PlistComponent} from './components/product_father2/plist/plist.component';
import {PcateComponent} from './components/product_father2/pcate/pcate.component';
import {ProductFatherComponent} from './components/product_father2/product_father.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},

      {path: 'setting', component: SettingComponent},

      {path: '**', redirectTo: 'welcome'}
    ]

  },

  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'newscontent/:aid', component: NewscontentComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'productcontent/:pid', component: ProductcontentComponent
  },
  {
    path: 'product2', component: ProductFatherComponent,
    children: [

      {path: 'plist', component: PlistComponent},

      {path: 'pcate', component: PcateComponent},

      {path: '**', redirectTo: 'plist'}
    ]
  },

  // 匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path: '**', redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
