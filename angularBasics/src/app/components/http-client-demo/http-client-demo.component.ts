import {Component, OnInit} from '@angular/core';


// 当做一个服务
import {HttpClient, HttpHeaders} from '@angular/common/http';


// 使用服务里面的axios获取数据
import {HttpserviceService} from '../../services/httpservice.service';


@Component({
    selector: 'app-http-client-demo',
    templateUrl: './http-client-demo.component.html',
    styleUrls: ['./http-client-demo.component.scss'],
})
export class HttpClientDemoComponent implements OnInit {

    public list: any[] = [];

    constructor(public http: HttpClient, public httpService: HttpserviceService) {
    }

    ngOnInit() {


    }

    getData() {

        // 服务器必须允许跨域

        const api = 'http://a.itying.com/api/productlist';

        this.http.get(api).subscribe((response: any) => {

            console.log(response);

            this.list = response.result;
        });


    }


    doLogin() {



        // 手动设置请求的类型
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

        // 存在跨域
        const api = 'http://127.0.0.1:3000/dologin';

        this.http.post(api, {username: '张三', age: 20}, httpOptions).subscribe((response) => {

            console.log(response);

        });

    }


    getJsonpData() {

        // jsonp请求 服务器必须得支持jsonp

        /*
         http://a.itying.com/api/productlist?callback=xxx
         http://a.itying.com/api/productlist?cb=xxx
        */

        const api = 'http://a.itying.com/api/productlist';

        this.http.jsonp(api, 'callback').subscribe((response) => {
            console.log(response);
        });
    }

    getAxiosData() {

        console.log('axios获取数据');
        const api = 'http://a.itying.com/api/productlist';

        this.httpService.axiosGet(api).then((data) => {

            console.log(data);
        });
    }

}
