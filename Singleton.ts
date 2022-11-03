// Singleton = an object that can *only* be instantiated once
// good for implementing a global object that can be used anywhere
class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  //  prevent "new" with a private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}
// throws error
// const settings = new Settings()
const settings = Settings.getInstance();
console.log(settings);
