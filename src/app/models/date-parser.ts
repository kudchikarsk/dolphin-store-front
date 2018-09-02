import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export class DateParser {
    static Parse(date:NgbDate):Date {
        if(!date) return null;
        return new Date(date.year,date.month-1,date.day);
    }

    static ToNgbDate(date:Date):NgbDate {
        if(!date) return null;
        return new NgbDate(date.getFullYear(),date.getMonth()+1,date.getDay());
    }
}