/*
ViewChild获取dom节点
    1、模板中给dom起一个名字
      <div #myBox>
        我是一个dom节点
      </div>
    2、在业务逻辑里面引入ViewChild
    import { Component, OnInit,ViewChild} from '@angular/core';
    3、 写在类里面    @ViewChild('myBox') myBox:any;
    4、ngAfterViewInit生命周期函数里面获取dom
    this.myBox.nativeElement

ngOnInit() 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件；

ngAfterViewInit() 初始化完组件视图及其子视图之后调用。
ngOnInit() 钩子应该是我们用得最频繁的一个了，在使用命令 ng g component <component-name> 生成一个组件后，就有 ngOnInit() 方法。
ngOnInit() 钩子可以作为初始化时调用一些方法。如：
*/


import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
    // 获取dom节点
    @ViewChild('myBox') myBox: any;
    // 获取一个组件  #header
    @ViewChild('header') header: any;

    public title = '首页组件的标题';

    public msg = '我是父组件的msg';

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(this.myBox.nativeElement);

        this.myBox.nativeElement.style.width = '100px';

        this.myBox.nativeElement.style.height = '100px';

        this.myBox.nativeElement.style.background = 'red';

        console.log(this.myBox.nativeElement.innerHTML);
    }

    getChildRun() {
        // 调用子组件里面的方法
        this.header.run();
    }

    run() {
        alert('我是父组件的run方法');
    }

    run2(e) {
        console.log(e);   // 子组件给父组件广播的数据
        alert('我是父组件的run方法');
    }
}
