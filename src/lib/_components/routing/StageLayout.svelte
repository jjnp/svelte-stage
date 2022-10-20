<script lang="ts">
	import NavPanel from '../nav/NavPanel.svelte'
	import NavTree from '../nav/NavTree.svelte'
    import type { loadDocsData } from '../../_service/load'

	export let data: ReturnType<typeof loadDocsData>
</script>

<svelte:head>
	<title>Component Documetation</title>
</svelte:head>

<div class="docs">
	{#if data}
		<NavTree {data} />
	{/if}

	<main>
		<div class="story-wrapper">
			<div class="content">
				<slot />
			</div>
			<NavPanel />
		</div>
	</main>
</div>

<style lang="scss">
	.docs {
		display: flex;
		height: 100vh;
		background-color: white;
	}

	main {
		overflow: hidden;
		height: 100vh;
		flex-basis: 80%;
	}

	.story-wrapper {
		display: grid;
		height: 100vh;
		flex-direction: column;
		align-content: space-between;
		grid-template-rows: 100fr 1fr;
	}

	.content {
		display: grid;
		overflow-y: auto;
	}
</style>
