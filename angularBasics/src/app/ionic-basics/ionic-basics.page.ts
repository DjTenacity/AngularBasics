import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ionic-basics',
    templateUrl: './ionic-basics.page.html',
    styleUrls: ['./ionic-basics.page.scss'],
})
export class IonicBasicsPage implements OnInit {

    constructor() {
    }

    public list: any = [];

    ngOnInit() {

        for (var i = 0; i < 10; i++) {

            this.list.push(`这是第${i}条数据`);
        }
    }
}
