<script lang="ts">
  import { projects } from "@/data/projects";
  import ProjectCard from "./ProjectCard.svelte";
  import { onMount } from "svelte";

  let displayText = $state("");
  const fullText = "Featured Projects";
  let charIndex = $state(0);
  let deleting = $state(false);

  onMount(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        if (charIndex < fullText.length) {
          displayText = fullText.slice(0, charIndex + 1);
          charIndex++;
        } else {
          setTimeout(() => {
            deleting = true;
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          displayText = fullText.slice(0, charIndex);
        } else {
          deleting = false;
        }
      }
    }, 120);

    return () => clearInterval(interval);
  });
</script>

<section id="featured-works" class="py-16 px-6">
  <div class="max-w-content mx-auto">
    <h2
      class="font-display text-4xl md:text-5xl italic text-stone-800 mb-10 text-center"
    >
      {displayText}<span
        class="inline-block w-[2px] h-[1em] bg-stone-800 ml-1 animate-pulse align-middle"
      ></span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each projects as project (project.slug)}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>
