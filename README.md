# svelte-stage
A minimalist storybook like library for prototyping, developing and viewing your svelte components.

## Getting started
Getting started couldn't be more simple. There are only two steps:
Install the dependency:
```bash
npm i -D svelte-stage
```
and then run the init script to create the route where your stages (~= stories) will be accessible:
```bash
npm exec svelte-stage-init
```
And that's it! From there on you can create your components and they will show up.
## Usage
In svelte-stage, a *Stage* is any svelte component with the filename matching `*.stage.svelte`.
While that means you can create anything as a stage component, depending on your needs, its recommended to use the built-in stage component as a wrapper as it adds implicit documentation.

To create your first stage create a component named `<your component name>.stage.svelte` *anywhere* you like.
In that component add the wrapper and the component you want to document like so:

```svelte
<script lang="ts>
    import { Stage } from 'svelte-stage'
    import MyCustomComponent from 'src/components/MyCustomComponent.svelte'
</script>

<Stage component="MyCustomComponent">
    <MyCustomComponent/>
</Stage>
```

If you then navigate to `<devserver-url>/stage` you will see the overview where you can click on that stage and see it displayed.