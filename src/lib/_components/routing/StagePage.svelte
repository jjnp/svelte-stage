<script lang="ts">
	import { page } from '$app/stores'

	const loadComponent = async () => {
		const stories = import.meta.glob('/src/**/*.stage.svelte')

		const storyKey = Object.keys(stories).find((story) => {
			const pathFromStory = story.replace('.stage.svelte', '').replace('/src', '/stage')

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
