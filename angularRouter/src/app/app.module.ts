import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsComponent} from './components/news/news.component';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {NewscontentComponent} from './components/newscontent/newscontent.component';
import {ProductcontentComponent} from './components/productcontent/productcontent.component';

import {WelcomeComponent} from './components/home/welcome/welcome.component';
import {SettingComponent} from './components/home/setting/setting.component';

// 父子路由  (嵌套路由)
import {ProductFatherComponent} from './components/product_father2/product_father.component';
import {PcateComponent} from './components/product_father2/pcate/pcate.component';
import {PlistComponent} from './components/product_father2/plist/plist.component';

@NgModule({
  declarations: [
    AppComponent,

    NewsComponent,
    HomeComponent,
    ProductComponent,
    NewscontentComponent,
    ProductcontentComponent,

    WelcomeComponent,
    SettingComponent,
    ProductFatherComponent,
    PcateComponent,
    PlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
