export class UtilsService {
  static blendingColors(oldColor: string, newColor: string): string {
    function rgbColorToArray(color: string | null): number[] {
      const result = [];

      if (color === null) {
        color = newColor;
      }

      color.replace(/\D+/g, ' ')
        .split(' ')
        .map((number) => {
          if (number) {
            result.push(Math.round(parseInt(number, 10)));
          }
        });

      return result;
    }

    const blendedColorNumber = rgbColorToArray(oldColor)
      .map((num, idx) => Math.round((num + rgbColorToArray(newColor)[idx]) / 2));

    return 'rgb(' + blendedColorNumber + ')';
  }
}
