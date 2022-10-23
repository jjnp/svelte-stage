<script>
	import Stage from "$lib/_components/Stage.svelte";
	import Button from "./Button.svelte";
	import Input from "./Input.svelte";

	const props = {
		placeholder: 'placeholder from stage'
	}
</script>
<Stage component="Input" props={props}>
    <Input {...props}/>
</Stage>