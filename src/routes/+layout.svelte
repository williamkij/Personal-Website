<script lang="ts">
	import '../app.css';
	import Navbar from '@/components/Navbar.svelte';
	import Footer from '@/components/Footer.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Memphis — Portfolio</title>
	<meta name="description" content="Memphis's academic portfolio — HCI researcher and designer." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
