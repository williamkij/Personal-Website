<script lang="ts">
	import { cn } from '@/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'default' | 'outline' | 'ghost' | 'link';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		children: Snippet;
		class?: string;
	}

	let {
		variant = 'default',
		size = 'default',
		children,
		class: className,
		...restProps
	}: Props = $props();

	const variants: Record<string, string> = {
		default: 'bg-stone-900 text-white hover:bg-stone-800',
		outline: 'border border-stone-300 bg-transparent hover:bg-stone-100',
		ghost: 'hover:bg-stone-100',
		link: 'underline-offset-4 hover:underline text-accent'
	};

	const sizes: Record<string, string> = {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 rounded-md px-3 text-sm',
		lg: 'h-11 rounded-md px-8 text-lg',
		icon: 'h-10 w-10'
	};
</script>

<button
	class={cn(
		'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
		variants[variant],
		sizes[size],
		className
	)}
	{...restProps}
>
	{@render children()}
</button>
