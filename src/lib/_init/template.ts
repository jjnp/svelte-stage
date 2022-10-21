export const layoutEndpointTemplate = `
import { loadDocsData } from 'svelte-stage'

export const load = loadDocsData
`

export const layoutTemplate = `
<script lang="ts">
    import { StageLayout } from 'svelte-stage'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<StageLayout {data}>
    <slot/>
</StageLayout>
`

export const pageTemplate = `
<script lang="ts">
	import { StagePage } from 'svelte-stage'
</script>

<StagePage/>
`