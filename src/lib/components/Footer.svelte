<script lang="ts">
	import { personalInfo } from '@/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-stone-200 mt-24">
	<div class="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
		<p>Last Update: March, 2026</p>
		<p>&copy; {personalInfo.name} {year}</p>
	</div>
</footer>
