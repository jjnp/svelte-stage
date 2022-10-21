<script lang="ts">
    type $$Props = Partial<HTMLInputElement> & {
        placeholder?: string
    }

    export let placeholder = ''
</script>

<input {placeholder} {...$$restProps}/>