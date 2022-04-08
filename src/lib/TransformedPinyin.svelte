<script lang="ts">
	import { inputValue, generatedPinyin } from '../stores/stores';
	import { transformToneValue } from '$lib/transformToneValue';

	let pinyin;

	generatedPinyin.subscribe((value = '') => {
		pinyin = value;
	});

	inputValue.subscribe((value) => {
		const stringArray = value.split('');
		const transformedPinyin = transformToneValue(stringArray);
		generatedPinyin.set(transformedPinyin);
	});
</script>

<div>
	<h1>Transformed Pinyin: {pinyin}</h1>
</div>
