
<script lang="ts">
    import DocsLayout from 'svelte-stage'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<DocsLayout {data}>
    <slot/>
</DocsLayout>
