import { Component, OnInit } from '@angular/core';
/*自定义组件 ng g component components/user*/
@Component({
  /*使用这个组件的名称*/
  selector: 'app-user',
  /*html 模板*/
  templateUrl: './user.component.html',
  /*css 样式*/
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {/*实现接口*/
  /*
  声明属性的几种方式：
      public      共有  *（默认）  可以在这个类里面使用、也可以在类外面使用

      protected   保护类型        他只有在当前类和它的子类里面可以访问

      private     私有                  只有在当前类才可以访问这个属性
  */
  msg = '我的';
  public title = '个人中心';
  // tslint:disable-next-line: ban-types
  userName: String = 'PSR';

  public userinfo: object = {
    username: '张三',
    age: '20'
  };
  public ifMousePic = false;
  public message: any;
  public picUrl: any = 'http://www.ruanyifeng.com/blogimg/asset/2017/bg2017072302.jpg';
  // 绑定 html
  public content = '<h2>我是一个html标签</h2>';
  public flag = true;
  public toDay = '2019';

  // 定义数组

  public arr = ['1111', '2222', '33333'];

  // 推荐
  public list: any[] = ['我是第一个新闻', 222222222222, '我是第三个新闻'];

  public items: Array<string> = ['我是第一个新闻', '我是第二个新闻'];

  public userlist: any[] = [{
    username: '张三',
    age: 20
  }, {
    username: '李四',
    age: 21
  },
  {
    username: '王五',
    age: 40
  }];


  public cars: any[] = [
    {
      cate: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '30万'
        },
        {
          title: '宝马x2',
          price: '30万'
        },
        {
          title: '宝马x3',
          price: '40万'
        }
      ]
    },
    {
      cate: '奥迪',
      list: [
        {
          title: '奥迪q1',
          price: '40万'
        },
        {
          title: '奥迪q2',
          price: '40万'
        }
      ]
    }
  ];


  // 推荐
  public student: any = 'PSR';
    OrderStatus: any = 2;
  /*构造函数*/
  constructor() {
    this.message = '这是给属性赋值--（改变属性的值）';

    // 获取属性的值
    console.log(this.msg);

    // 改变属性的值
    this.msg = '我是改变后的msg的值';
  }
  /*初始化加载的生命周期函数*/
  ngOnInit() { }

  // ********************************
  setData() {
    alert(this.toDay);
  }

  getData() {
    this.toDay = '骰子猎人';
  }

  keyUpFn(e) {
    console.log(e);
    // ionic要指定类型
    const dom : any = e.target;
    dom.style.color = 'red';
    if (e.keyCode === 13) {
      console.log('按了一下回车');
    }
  }
}

// ViewChild获取dom节点
//     1、模板中给dom起一个名字
//       <div #myBox>
//         我是一个dom节点
//       </div>
//     2、在业务逻辑里面引入ViewChild
//     import { Component, OnInit,ViewChild} from '@angular/core';
//
//     3、 写在类里面    @ViewChild('myBox') myBox:any;
//     4、ngAfterViewInit生命周期函数里面获取dom
//     	this.myBox.nativeElement
