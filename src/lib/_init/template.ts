export const layoutEndpointTemplate = `
import { loadStageData } from 'svelte-stage'

export const load = loadStageData
`

export const layoutTemplate = `
<script lang="ts">
	import { StageLayout, type loadStageData } from 'svelte-stage'

	export let data: ReturnType<typeof loadStageData>
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