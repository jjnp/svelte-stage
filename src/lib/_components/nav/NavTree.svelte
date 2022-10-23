<script lang="ts">
	import type { TreeNode } from '../../_service/types';
	import NavNode from './NavNode.svelte'

	export let data: TreeNode
</script>

<nav>
	<ul>
		<NavNode bind:node={data} root />
	</ul>
</nav>

<style lang="scss">
	nav {
		flex-basis: 20%;
		padding: 16px;
		background-color: var(--c-white);
		overflow-y: auto;

		box-shadow: 10px 1px 43px -12px rgba(0,0,0,0.75);
		-webkit-box-shadow: 10px 1px 43px -12px rgba(0,0,0,0.75);
		-moz-box-shadow: 10px 1px 43px -12px rgba(0,0,0,0.75);
		margin-right: 2em;
	}

	ul {
		list-style-type: none;
		padding-inline-start: 0;
	}
</style>
