// factory = a method of creating objects or sets of objects without exposing the logic to the client
class IOSButton { }
class AndroidButton { }
let os: string = 'android'
// Without Factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()
os = 'ios';
// Factory
class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);

console.log(button1);
console.log(button2);
console.log(btn1)
console.log(btn2)