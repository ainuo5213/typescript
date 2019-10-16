interface UIElement {
  addClickListener(eventType: string, eventListener: (this: void, e: Event) => any): void;
}

class Handler {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  // 使用箭头函数解决添加handler时this指向的问题
  public onClickBad = (e: Event) => {
    this.type = e.type;
    console.log(this.type)
  }
}

let clickHandler: Handler = new Handler('click');
let uiElement: UIElement = {
  addClickListener(eventType: string, eventListener: (this: void, e: Event) => any): void {
  }
};

uiElement.addClickListener(clickHandler.type, clickHandler.onClickBad);
