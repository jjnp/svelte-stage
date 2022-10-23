<script lang="ts" context="module">
    export type NavButtonType = 'component' | 'group'
</script>

<script lang="ts">
    export let label: string
    export let active: boolean
    export let type: NavButtonType = 'group'
</script>


<button class="nav-button" on:click class:active={active && type === 'component'} class:accent-red={type === 'component'} class:accent-blue={type === 'group'}>
    <div class="nav-button__indicator" class:active/>
    <p class="nav-button__label">{label}</p>
</button>



<style lang="scss">
.nav-button {

    &.accent-red {
        --accent: var(--c-accent-red);
    }

    &.accent-blue {
        --accent: var(--c-accent-blue);
    }

    padding: 4px 16px;
    background-color: var(--c-white);
    border-radius: 8px;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.35);
    -webkit-box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.35);
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    cursor: pointer;
    border: none;

    &__indicator {
        justify-self: center;
        align-self: center;
        width: 8px;
        height: 8px;
        margin: 6px;
        border-radius: 6px;
        background-color: var(--accent);
        border: 2px solid var(--accent);

        &.active {
            background-color: transparent;
        }
    }

    &__label {
        @include copy-l();
        margin: 0;
    }

    &:hover {
        background-color: var(--c-accent-blue-20);
    }

    &.active {
        background-color: var(--c-accent-blue-40);
    }
}

</style>