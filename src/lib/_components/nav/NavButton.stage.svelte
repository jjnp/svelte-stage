<script lang="ts">
import Stage from "../Stage.svelte";
	import NavButton, { type NavButtonType } from "./NavButton.svelte";

    const componentButtonProps = {
        label: 'SomeComponent',
        type: 'component' as NavButtonType,
        active: false
    }

    const componentButtonPropsActive = {
        ...componentButtonProps,
        active: true
    }

    const groupButtonProps = {
        label: 'component-group',
        type: 'group' as NavButtonType,
        active: false
    }
</script>



<Stage component="NavButton" props={componentButtonProps} events={{click: undefined}}>
    <NavButton {...componentButtonProps}/>
</Stage>
<Stage component="NavButton" props={componentButtonPropsActive} events={{click: undefined}}>
    <NavButton {...componentButtonPropsActive}/>
</Stage>
<Stage component="NavButton" props={groupButtonProps} events={{click: undefined}}>
    <NavButton {...groupButtonProps}/>
</Stage>