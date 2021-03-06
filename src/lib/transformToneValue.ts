// Combining accent   HexCode  Numeric entity  Example
// Grave accent        \u0300     &#768;       document.write('a&#768;') // à
// Acute accent        \u0301     &#769;       document.write('a&#769;') // á
// Circumflex accent   \u0302     &#770;       document.write('e&#770;') // ê
// Tilde               \u0303     &#771;       document.write('a&#771;') // ã
// Macron              \u0304     &#772;       document.write('a&#772;') // ā
// Breve               \u0306     &#774;       document.write('a&#774;') // ă
// Dot                 \u0307     &#775;       document.write('z&#775;') // ż
// Diaeresis (umlaut)  \u0308     &#776;       document.write('a&#776;') // ä
// Hook                \u0309     &#777;       document.write('a&#777;') // ả
// Ring                \u030A     &#778;       document.write('a&#778;') // å
// Double acute        \u030B     &#779;       document.write('o&#779;') // ő
// Caron (haček)       \u030C     &#780;       document.write('z&#780;') // ž

function returnDecoratedChar(letter: string, tone: number) {
	let tonedLetter = letter;
	switch (tone) {
		case 0:
			console.log('No Tone');
			break;
		case 1:
			console.log('First tone');
			tonedLetter = letter + `\u{0305}`;
			break;
		case 2:
			console.log('Second tone');
			tonedLetter = letter + `\u{0301}`;
			break;
		case 3:
			console.log('Third tone');
			tonedLetter = letter + `\u{030c}`;
			break;
		case 4:
			console.log('Fourth tone');
			tonedLetter = letter + `\u{0300}`;
			break;
		default:
			console.log('No tone detected');
			break;
	}
	return tonedLetter;
}

export function transformToneValue(stringArray: string[]): string {
	// Look for a digit representing a tone value
	const transformedArray = stringArray;
	const validTones = ['1', '2', '3', '4'];
	const isValidTone = (element) => validTones.includes(element);
	const toneIndex = transformedArray.findIndex(isValidTone);
	if (toneIndex !== -1) {
		// transform the character previous to the digit
		const letterToTransform = transformedArray[toneIndex - 1];
		const tone = parseInt(transformedArray[toneIndex]);
		const transformedLetter = returnDecoratedChar(letterToTransform, tone);
		console.log('Transformed Letter: ', transformedLetter);
		transformedArray.splice(toneIndex - 1, 2, transformedLetter);
		return transformedArray.join('');
	} else {
		// No valid tones found
		console.log('No valid Tones found');
		return '';
	}
}
