<!-- heavily inspired by https://svelte.dev/repl/407903af00114bd181f2bb314b46358d?version=3.44.1 -->
<script lang="ts">
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import type { TreeNode } from '../../_service/types'

	export let root = false
	export let childVisible = true
	export let node: TreeNode
	export let visible = true
	export let level = 0

	let state: 'open' | 'closed' = 'open'
	function toggle() {
		state = state === 'open' ? 'closed' : 'open'
	}
</script>

{#if visible || childVisible || root}
	<li class="navigation-item" transition:slide>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="navigation-item__inner" on:click={toggle}>
			<span
				class="state__icon state__icon--indicator-{state}"
				class:invisible={node.children.length === 0}
			/>
			{#if node.children.length === 0}
				<a href={node.href} class:active={$page.url.pathname === node.href}>
					{node.name}
				</a>
			{:else}
				<span class="navigation-item__node-name">{node.name}</span>
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

		&__node-name {
            color: white;
			&:hover {
				color: var(--c-accent-blue-80);
			}
		}
	}

	.state__icon {
		--c-gradient-start: var(--c-white);
		--c-gradient-end: var(--c-white-10);
		--gradient: linear-gradient(var(--c-gradient-start) 0%, var(--c-gradient-end) 100%);
		display: inline-block;
		width: 10px;
		height: 10px;
		background: var(--gradient);
		border-radius: 8px;
		opacity: 0.2;
		padding-inline-end: 10px;

		&--indicator-closed {
			transform: rotate(-180deg);
		}
	}

	.invisible {
		opacity: 0;
	}

	a {
		text-decoration: none;
        color: white;

		&.active,
		&:hover {
			color: red;
		}
	}

	.navigation-sublist {
		padding-inline-start: 12px;
	}
</style>
