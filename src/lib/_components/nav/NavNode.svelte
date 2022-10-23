<!-- heavily inspired by https://svelte.dev/repl/407903af00114bd181f2bb314b46358d?version=3.44.1 -->
<script lang="ts">
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import type { TreeNode } from '../../_service/types'
	import NavButton from './NavButton.svelte';
	import { goto } from '$app/navigation';

	export let root = false
	export let childVisible = true
	export let node: TreeNode
	export let visible = true
	export let level = 0

	let state: 'open' | 'closed' = 'closed'
	function toggle() {
		state = state === 'open' ? 'closed' : 'open'
	}
</script>

{#if visible || childVisible || root}
	<li class="navigation-item" transition:slide>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="navigation-item__inner" on:click={toggle}>
			{#if node.children.length === 0}
				<NavButton on:click={() => goto(node.href)} active={$page.url.pathname === node.href} label={node.name} type='component'/>
			{:else}
				<NavButton label={node.name} active={state === 'open'}/>
			{/if}
		</div>

		<ul class="navigation-sublist">
			{#if state === 'open' && node.children}
				{#each node.children as child}
					<svelte:self node={child} level={level + 1} bind:visible={childVisible} />
				{/each}
			{/if}
		</ul>
	</li>
{/if}

<style lang="scss">
	.navigation-item {
		list-style: none;

		&__inner {
			display: flex;
			align-items: center;
			color: var(--c-text-light);
			cursor: pointer;
			gap: 4px;
			padding-block: 4px;
			text-decoration: none;
			user-select: none;
		}
	}

		.navigation-sublist {
		padding-inline-start: 12px;
	}
</style>
