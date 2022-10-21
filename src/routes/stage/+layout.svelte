
<script lang="ts">
    import { StageLayout } from 'svelte-stage'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<StageLayout {data}>
    <slot/>
</StageLayout>
