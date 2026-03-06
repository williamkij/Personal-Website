<script lang="ts">
	import { cn } from '@/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'secondary' | 'outline';
		children: Snippet;
		class?: string;
	}

	let { variant = 'default', children, class: className }: Props = $props();

	const variants: Record<string, string> = {
		default: 'bg-stone-900 text-white',
		secondary: 'bg-stone-100 text-stone-700',
		outline: 'border border-stone-300 text-stone-700'
	};
</script>

<span
	class={cn(
		'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
		variants[variant],
		className
	)}
>
	{@render children()}
</span>
