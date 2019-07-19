/* Angular模块类描述应用的部件是如何组合到一起的.每个应用度至少有一个 Angular模块,也就是根模块
*用来引导并运行应用.你可以为它取任何名字.常规名字是APPModule ,也就是app.modele.ts文件
**/
/** angularJs 核心模块 */
import {NgModule} from '@angular/core';
/** 浏览器解析的模块 */
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

// //引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
/** 根组件 */
import {AppComponent} from './app.component';
// 基本语法
import {UserComponent} from './components/user/user.component';
import {DemoComponent} from './components/demo/demo.component';

// Angular中的服务以及实现toDoList数据持久化
import {SearchComponent} from './components/search/search.component';
import {TodolistComponent} from './components/todolist/todolist.component';

// Angular 中的 原生 js Dom 操作
import { HomeComponent } from './components/home/home.component';
// Angular 中的 Dom 操作以及 @ViewChild 、 父子组件以及组件之间通讯
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
// 侧边栏
import { TransitionComponent } from './components/transition/transition.component';
// 生命周期
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import {RxdemoComponent} from './components/rxdemo/rxdemo.component';



import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';


// ng g component components/product_father
@NgModule({
    /** 引入当前项目运行的组件 */
    declarations: [AppComponent,
        // 基本语法
        UserComponent,
        DemoComponent,
        // Angular中的服务以及实现toDoList数据持久化
        SearchComponent,
        TodolistComponent,
        // Angular 中的 原生 js Dom 操作
        HomeComponent,
        // Angular 中的 Dom 操作以及 @ViewChild 、 父子组件以及组件之间通讯
        NewsComponent,
        HeaderComponent,
        // 侧边栏
        TransitionComponent,

        RxdemoComponent,
    ],
    entryComponents: [],
    /** 引入当前模块运行以来的其他模块 */
    imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],

    /** 定义的服务,回头放在这个里面 */
    providers: [
        StorageService,
        RequestService,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    /**指定应用的主视图(称为根组件) 通过引导根APPModule来启动应用
     * 这里一般写的是根组件
     */
    bootstrap: [AppComponent]
})
/** 根模块不需要导出任何东西,因为其它组件不需要导入根模块,但是一定要写 */
export class AppModule {
}
