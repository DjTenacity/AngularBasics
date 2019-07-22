import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';

// 引入ionic的模块
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    // 暴露出去, 外部可用
    exports: [ListComponent]
})
export class ListModule {
}
