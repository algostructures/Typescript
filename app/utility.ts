class Utility {
  static getInputValue(elementID: string): string {
    var inputElement: HTMLInputElement = <HTMLInputElement>(
      document.getElementById(elementID)
    );
    return inputElement.value;
  }
}
