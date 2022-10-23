<script>
	import Stage from "$lib/_components/Stage.svelte";
	import Button from "./Button.svelte";

</script>
<Stage component="Button" props={{text: 'button text from stage'}}>
    <Button text='button text from stage'/>
</Stage>