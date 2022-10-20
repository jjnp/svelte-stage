<script lang="ts" context="module">
	import { type Writable, writable } from 'svelte/store'

	const component: Writable<string> = writable('')
	const props: Writable<Record<string, unknown>> = writable({})
	const events: Writable<Record<string, unknown>> = writable({})

	export const showDetails = (
		details: {
			component?: string
			props?: Record<string, unknown> | undefined
			events?: Record<string, unknown> | undefined
		} = {}
	) => {
		component.set(details.component || '')
		props.set(details.props || {})
		events.set(details.events || {})
	}
</script>

<script>
	import { page } from '$app/stores'

	$: $page.url.pathname && showDetails()
</script>

<div class="props-panel">
	{#if $component}
		<h2><code>{'<' + $component + ' />'}</code></h2>

		<div class="details">
			<div class="props">
				<h3>Props:</h3>
				<pre>{JSON.stringify($props, undefined, 3)}
			</pre>
			</div>
			<div class="events">
				<h3>Events:</h3>
				<pre>{JSON.stringify($events, undefined, 3)}
			</pre>
			</div>
		</div>
	{:else}
		<div class="no-content">click next to a component so see more details</div>
	{/if}
</div>

<style lang="scss">
	.props-panel {
		height: 20vh;
		padding: 16px;
		background-color: var(--c-secondary-dark-blue-80);
		color: white;
		overflow-y: auto;
	}

	.no-content {
		margin-block-start: 40px;
		text-align: center;
	}

	.details {
		display: flex;
		margin-block-start: 12px;
	}

	.props,
	.events {
		flex-basis: 50%;
	}

	h2 {
		// @include font-copy-l;
	}

	h3 {
		// @include font-copy-m;
	}

	pre {
		margin-block-start: 16px;
	}
</style>
