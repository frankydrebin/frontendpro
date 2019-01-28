class Button {
    constructor (label, width, height) {
        this.label = label;
        this.widgth = width;
        this.height = height;
        this.events = []
    }
    registerEvent (type, callback) {
        this.events.push({
            id: Date.now(), //  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/now
            type: type,
            callback: callback
        });
    }
    getEvents () {
        return this.events
    }
    clearEvents () {
        this.events = [];
    }
    getEvenstByType (type) {
        return this.events.filter(function (event) {
            return event.type === type;
        })
    }
}
let btn1 = new Button('test', 50, 50)
btn1.registerEvent('click', ()=>{})
console.log(btn1.getEvenstByType('click'))