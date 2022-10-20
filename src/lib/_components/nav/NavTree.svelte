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
		background-color: grey;
		overflow-y: auto;
	}

	ul {
		list-style-type: none;
		padding-inline-start: 0;
	}
</style>
