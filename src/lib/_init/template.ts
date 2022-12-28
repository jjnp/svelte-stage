const parserObfusactionString = '#$%'

// This is required to fix an issue with svelte/kit. The parser is simplistic and cannot differentiate between top-level script tags and script tags in strings
// The same goes for various other things in rollup/vite. For this reason the easiest fix is to "obfuscate" it from the parser on only assemble it at runtime
// A beautiful fix? No. But fast, effective, and not overcompliated.
const deobfuscateString = (input: string) => input.replaceAll(parserObfusactionString, '')

export const getLayoutEndpointTemplate = () => deobfuscateString(`
import { loadStageData } from 'svelte#$%-stage'

export const load = loadStageData
`)

export const getLayoutTemplate = () => deobfuscateString(`
<scri#$%pt lang="ts">
	import { StageLayout, type loadStageData } from 'svelte#$%-stage'

	export let data: ReturnType<typeof loadStageData>
</sc#$%ript>

<StageLayout {data}>
    <slot/>
</StageLayout>
`)

export const getPageTemplate = () => deobfuscateString(`
<scr#$%ipt lang="ts">
	import { StagePage } from 'svelte#$%-stage'
</scr#$%ipt>

<Stag#$%ePage/>
`)