<script lang="ts">
    import { Toaster } from "$lib/components/ui/sonner/index.js";
    import { ModeWatcher } from "mode-watcher";
	import '../app.css';

	let { children } = $props();
</script>

<Toaster position="top-right" richColors/>
<ModeWatcher />
{@render children()}
