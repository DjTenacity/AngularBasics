import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
// 组件化中 ,把一些公用的方法放到服务Service里面
export class StorageService {

    constructor() {
    }

    set(key: string, value: any) {

        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key: string) {

        // return 'this is a service';
        return JSON.parse(localStorage.getItem(key));

    }

    remove(key: string) {

        localStorage.removeItem(key);
    }
}

