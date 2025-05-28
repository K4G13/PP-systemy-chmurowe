<script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon"; 
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { get_addictions,get_addiction,post_addiction,get_stats,put_addiction } from "$lib/api";
    import * as Accordion from "$lib/components/ui/accordion/index.js";

    const db_fields = [
        "id",
        "name",
        "age",
        "gender",
        "country",
        "city",
        "education_level",
        "employment_status",
        "annual_income_usd",
        "marital_status",
        "children_count",
        "smokes_per_day",
        "drinks_per_week",
        "age_started_smoking",
        "age_started_drinking",
        "attempts_to_quit_smoking",
        "attempts_to_quit_drinking",
        "has_health_issues",
        "mental_health_status",
        "exercise_frequency",
        "diet_quality",
        "sleep_hours",
        "bmi",
        "social_support",
        "therapy_history",
    ];

    let form_ref: HTMLFormElement;
    const get_form_data = () =>{
        const form_data = new FormData(form_ref);
        const data: Record<string, any> = {};
        for (const [key, value] of form_data.entries()) 
            if (value !== "") data[key] = value;
        form_ref.reset();
        return data;
    }

</script>

<Accordion.Root type="single" class="m-2">   
    <Accordion.Item value="item-1">

        <div class="flex gap-2">
            <Button onclick={toggleMode} variant="outline" size="icon">
                <SunIcon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <MoonIcon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
            </Button>
            <Button variant="outline" onclick={() => get_addictions()}>GET_ALL</Button>
            <Button variant="outline" onclick={() => get_addictions(50)}>GET_TOP50</Button>
            <Button variant="outline" onclick={() => get_stats()}>GET_STATS</Button>
            <Button variant="outline" onclick={() => get_addiction(get_form_data())}>GET_wPARAMS</Button>
            <Button variant="outline" onclick={() => post_addiction(get_form_data())}>POST_wPARAMS</Button>
            <Button variant="outline" onclick={() => put_addiction(get_form_data())}>PUT_wPARAMS</Button>      
            <Button variant="outline"><Accordion.Trigger class="cursor-pointer">PARAMS</Accordion.Trigger></Button>       
        </div>

        <Accordion.Content class="mt-2">
            <form class="grid grid-cols-5 gap-x-2 gap-y-2 w-full" bind:this={form_ref}>
                {#each db_fields as field}
                    <Input placeholder={field} name={field} class="w-full"></Input>
                {/each}
            </form>
        </Accordion.Content>

    </Accordion.Item>
</Accordion.Root>


