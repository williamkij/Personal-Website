<script lang="ts">
  import { playgroundItems } from "@/data/projects";
  import type { PlaygroundCategory } from "@/types";

  // Get unique categories from data
  const allCategories: PlaygroundCategory[] = [
    ...new Set(playgroundItems.map((item) => item.category)),
  ];

  let activeCategory = $state<PlaygroundCategory | "All">("All");

  const filteredItems = $derived(
    activeCategory === "All"
      ? playgroundItems
      : playgroundItems.filter((item) => item.category === activeCategory),
  );
</script>

<section id="playground" class="py-16 px-6 bg-stone-50/50">
  <div class="max-w-content mx-auto">
    <h2 class="font-display text-3xl md:text-4xl italic text-stone-800 mb-2">
      Playground
    </h2>
    <p class="text-stone-500 mb-8">Side projects I've worked on</p>

    <!-- Category filter tabs (like Leon's site) -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button
        class="px-4 py-1.5 rounded-full text-sm transition-colors {activeCategory ===
        'All'
          ? 'bg-stone-900 text-white'
          : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}"
        onclick={() => (activeCategory = "All")}
      >
        All
      </button>
      {#each allCategories as cat}
        <button
          class="px-4 py-1.5 rounded-full text-sm transition-colors {activeCategory ===
          cat
            ? 'bg-stone-900 text-white'
            : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}"
          onclick={() => (activeCategory = cat)}
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each filteredItems as item (item.slug)}
        <a
          href="/projects/{item.slug}"
          class="playground-item group aspect-square rounded-xl overflow-hidden bg-stone-200 relative"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onerror={(e: Event) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <!-- Overlay text -->
          <div
            class="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent z-10"
          >
            <h3 class="text-white font-medium text-sm">{item.title}</h3>
            <span class="text-white/70 text-xs mt-0.5">View &rarr;</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
