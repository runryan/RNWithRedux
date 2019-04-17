class LogUtils {
  static log(...data: Array<any>) {
    if (__DEV__) {
      console.log(...data);
    }
  }

  static warn(...data: Array<any>) {
    if (__DEV__) {
      console.warn(...data);
    }
  }

  static error(...data: Array<any>) {
    if (__DEV__) {
      console.error(...data);
    }
  }
}
export default LogUtils;
