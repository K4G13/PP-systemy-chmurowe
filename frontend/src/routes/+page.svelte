<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { table_data, table_data_loading } from "$lib/stores/table_data.store";
	import Nav from "$lib/components/ui/Nav.svelte";

</script>

<Nav/>

{#if $table_data_loading}
    <span class="grid place-items-center h-[600px] border-1">Loading...</span>
{:else if $table_data.length == 0}
    <span class="grid place-items-center h-[600px]">🔥🔥🔥</span>
{:else}
    <Table.Root class="max-h-[600px] block m-2 mt-0">
        <Table.Header class="border-b-2">
            <Table.Row>
                {#each Object.keys($table_data[0]) as key}
                    <Table.Head class="border-1 min-w-[100px] hover:bg-blue-400/20">{key}</Table.Head>
                {/each}
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {#each $table_data as obj}
            <Table.Row>
                {#each Object.values(obj) as val}
                    <Table.Cell class="border-1 hover:bg-blue-400/20">{val}</Table.Cell>
                {/each}
            </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
{/if}
