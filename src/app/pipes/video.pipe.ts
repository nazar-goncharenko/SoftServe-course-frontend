import {Pipe, PipeTransform} from '@angular/core';
import {Video} from '../shared/interfaces/video';

@Pipe({
    name: 'VideoPipe'
})
export class VideoPipe implements PipeTransform {

    transform(value: Video[], input: any, view: any): any {
        let res = [];
        if (input) {
            res = this.filterInput(value, input);
            return this.filterView(res, view);
        } else {
            return this.filterView(value, view);
        }
    }

    filterInput(value: any, input: any): any {
        input = input.toLowerCase();
        const res = [];
        for (const val of value) {
            if (val.title !== '') {
                const lowerVal = val.title.toLowerCase();
                if (lowerVal.indexOf(input) >= 0) {
                    res.push(val);
                }
            }
            else{
                if (input === 'none') {
                    res.push(val);
                }
            }
        }
        return res;
    }


    filterView(value: any, view: any): any {
        if (view !== null) {
            const res = [];
            for (const val of value) {
                if (val.publish === view) {
                    res.push(val);
                }
            }
            return res;
        } else {
            return value;
        }
    }
}
