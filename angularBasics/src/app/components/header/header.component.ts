import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    // 接受父组件传来的数据
    @Input() title: any;

    @Input() msg: any;

    // @ts-ignore
    @Input() run: any;

    @Input() home: any;

    @Output() private outer = new EventEmitter();

    // @ts-ignore
    public msg = '我是子组件header的一个msg';


    constructor() {
    }

    ngOnInit() {
    }

    static run() {
        console.log('我是header里面的run方法');
    }

    getParentMsg() {

        // 获取父组件的数据
        alert(this.msg);
    }

    getParentRun() {

        // 执行父组件的run 方法
        // this.run();
        alert(this.home.msg);
        this.home.run();
    }

    // 通过@Output给父组件广播数据
    sendParent() {
        this.outer.emit('我是子组件的数据');
    }


}
