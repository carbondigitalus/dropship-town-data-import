export class NumberTypes {
    Decimal: RegExp;
    Whole: RegExp;

    constructor() {
        this.Decimal = new RegExp('^[0-9]d{0,9}(.d{1,2})?%?$');
        this.Whole = new RegExp('^d+$');
    }
}
