<script lang="ts">
	import { showDetails } from './nav/NavPanel.svelte'

	export let component: string
	export let props: Record<string, unknown> | undefined = undefined
	export let events: Record<string, unknown> | undefined = undefined
	export let hideBackground = false

	// export let background: SthemerScheme = 'light'

	const show = () => showDetails({ component, props, events })
</script>

<div class="story" on:click={show} class:card-background={!hideBackground}>
	<span class="wrapper">
		<span class="click-stopper" on:click|stopPropagation>
			<slot />
		</span>
	</span>
</div>

<style lang="scss">
	.story {
		position: relative;
		display: flex;

		+ :global(.story) {
			border-block-start: 1px solid var(--c-secondary-dark-blue-20);
		}

		&.card-background {
			background-color: var(--c-white);
			padding: 12px;
			border-radius: 8px;

			box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.15);
			-webkit-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.15);
			-moz-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.15);
			margin-block-start: 12px;
			margin-block-end: 12px;
		}
	}

	.wrapper {
		padding: 16px;
	}

	.click-stopper {
		display: inline;
	}
</style>
