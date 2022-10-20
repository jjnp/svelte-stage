<script lang="ts">
	import { showDetails } from './nav/NavPanel.svelte'

	export let component: string
	export let props: Record<string, unknown> | undefined = undefined
	export let events: Record<string, unknown> | undefined = undefined

	// export let background: SthemerScheme = 'light'

	const show = () => showDetails({ component, props, events })
</script>

<!-- <Sthemer strategy={background}> -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="story" on:click={show}>
		<span class="wrapper">
			<span class="click-stopper" on:click|stopPropagation>
				<slot />
			</span>
		</span>
	</div>
<!-- </Sthemer> -->

<style lang="scss">
	.story {
		position: relative;
		display: flex;

		// @include on-light {
		// 	@include bg-light;
		// }

		// @include on-dark {
		// 	@include bg-dark;
		// }

		+ :global(.story) {
			border-block-start: 1px solid var(--c-secondary-dark-blue-20);
		}
	}

	.wrapper {
		padding: 16px;
	}

	.click-stopper {
		display: inline;
	}
</style>
