export function removeAccent(word: string): string {
    const substitutions: { [key: string]: string } = {
      'àáâãäå': 'a',
      'ÀÁÂÃÄÅ': 'A',
      'èéêë': 'e',
      'ÈÉÊË': 'E',
      'ìíîï': 'i',
      'ÌÍÎÏ': 'I',
      'òóôõö': 'o',
      'ÒÓÔÕÖ': 'O',
      'ùúûü': 'u',
      'ÙÚÛÜ': 'U',
      'ýÿ': 'y',
      'ÝŸ': 'Y',
      'ß': 'ss'
    };
  
    function getLetterReplacement(letter: string, replacements: { [key: string]: string }): string {
      const findKey = Object.keys(replacements).reduce(
        (origin: string | false, item: string, index: number) => (item.includes(letter) ? item : origin),
        false
      );
      return findKey !== false ? replacements[findKey] : letter;
    }
  
    return word
      .split('')
      .map((letter: string) => getLetterReplacement(letter, substitutions))
      .join('');
  }
  