<script lang="ts">
  import type { Project } from "@/types";
  import { Badge } from "@/components/ui/badge";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<a
  href="/projects/{project.slug}"
  class="project-card group block rounded-2xl overflow-hidden bg-white border border-stone-200"
>
  <!-- Thumbnail -->
  <!-- Thumbnail -->
  <div class="relative aspect-[4/3] overflow-hidden bg-stone-100">
    {#if project.thumbnail.endsWith(".mp4") || project.thumbnail.endsWith(".webm") || project.thumbnail.endsWith(".MP4")}
      <video
        src={project.thumbnail}
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover"
      ></video>
    {:else}
      <img
        src={project.thumbnail}
        alt={project.title}
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onerror={(e: Event) => {
          const img = e.currentTarget as HTMLImageElement;
          img.style.display = "none";
          if (img.parentElement) {
            img.parentElement.classList.add(
              "flex",
              "items-center",
              "justify-center",
            );
            const span = document.createElement("span");
            span.className = "text-stone-400 text-sm";
            span.textContent = "Image placeholder";
            img.parentElement.appendChild(span);
          }
        }}
      />
    {/if}
  </div>

  <!-- Info -->
  <div class="p-5">
    <!-- Tags -->
    <div class="flex flex-wrap gap-1.5 mb-3">
      {#each project.tags as tag}
        <Badge variant="secondary">{tag}</Badge>
      {/each}
    </div>

    <h3 class="font-sans font-semibold text-lg text-stone-900 mb-1">
      {project.title}
    </h3>

    <p class="text-sm text-stone-600 leading-relaxed">
      {project.description}
    </p>

    <!-- Links -->
    {#if project.links && project.links.length > 0}
      <div class="mt-4 flex gap-3">
        {#each project.links as link}
          {#if link.href.startsWith("http")}
            <button
              class="text-sm font-medium text-accent hover:text-accent-light transition-colors relative z-10"
              onclick={(e: Event) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(link.href, "_blank");
              }}
            >
              {link.label}
            </button>
          {:else}
            <span
              class="text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              {link.label}
            </span>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</a>
