import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})

export class DemoComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',

    hobby: [{
      title: '吃饭',
      checked: false
    }, {

      title: '睡觉',
      checked: false
    }, {

      title: '敲代码',
      checked: true
    }],

    mark: ''

  }

  constructor() { }

  ngOnInit() {
  }

  doSubmit() {

    /*
      jquery  dom操作
      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value); 
    */


    console.log(this.peopleInfo);

  }

}

