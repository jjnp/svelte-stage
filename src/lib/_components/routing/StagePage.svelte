<script lang="ts">
	import { page } from '$app/stores'

	const loadComponent = async () => {
		const stories = import.meta.glob('/src/**/*.story.svelte')

		const storyKey = Object.keys(stories).find((story) => {
			const pathFromStory = story.replace('.story.svelte', '').replace('/src', '/docs')

			return pathFromStory === $page.url.pathname
		})

		if (storyKey) {
			const story = stories[storyKey]
			if (story) {
				return story().then((result) => result.default)
			}
		}
	}
</script>

{#key $page.url.pathname}
	{#await loadComponent() then Component}
		<svelte:component this={Component} />
	{/await}
{/key}
