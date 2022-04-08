<script lang="ts">
	import { inputValue } from '../stores/stores';

	function updatePinyinValue(event) {
		// Takes the value input and places it in the store
		const eventValue = event.target.value;
		inputValue.set(eventValue);
	}
</script>

<div>
	<label for="pinyin-input">Enter Pinyin with Tone: "ha3o"</label>
	<input name="pinyin-input" type="text" on:input={updatePinyinValue} />
</div>
