<script lang="ts">
  import { Badge } from "@/components/ui/badge";
  import { Separator } from "@/components/ui/separator";
  import { Button } from "@/components/ui/button";

  let { data } = $props();

  const pageTitle = $derived(
    data.type === "featured" && data.project
      ? `${data.project.title} — Memphis`
      : data.type === "playground" && data.playgroundItem
        ? `${data.playgroundItem.title} — Memphis`
        : "Project — Memphis",
  );
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

{#if data.type === "featured" && data.project}
  {@const project = data.project}

  <section class="pt-32 pb-16 px-6">
    <div class="max-w-4xl mx-auto">
      <a
        href="/"
        class="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
      </a>

      <h1 class="font-display text-4xl md:text-5xl italic text-stone-800 mb-2">
        {project.title}
      </h1>
      <p class="text-lg text-stone-500 mb-4">{project.subtitle}</p>

      <div class="flex flex-wrap gap-2 mb-8">
        {#each project.tags as tag}
          <Badge variant="secondary">{tag}</Badge>
        {/each}
      </div>

      <div class="rounded-2xl overflow-hidden bg-stone-100 mb-10 aspect-video">
        {#if project.detailImage}
          <img
            src={project.detailImage}
            alt={project.title}
            class="w-full h-full object-cover"
          />
        {:else if project.video && project.video.includes("youtube")}
          <iframe
            src={project.video}
            title={project.title}
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        {:else if project.video}
          <video
            src={project.video}
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
            class="w-full h-full object-cover"
            onerror={(e: Event) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        {/if}
      </div>
      <Separator class="my-8" />

      <div class="prose prose-stone max-w-none">
        <h2 class="font-display text-2xl italic text-stone-800 mb-4">
          Overview
        </h2>
        <p class="text-stone-700 leading-relaxed text-lg">
          {project.description}
        </p>
        {#if project.slug === "groove-music-cube"}
          <p class="text-stone-400 italic mt-8">
            It is primarily designed to help newcomers who want to create music
            but lack the relevant production knowledge (mainly acoustic effects)
            to explore the world of music, understand the function of different
            instruments in music, and understand the use and operation of
            acoustic effects.
          </p>
        {:else if project.slug === "ez-menu-qlight"}
          <p class="text-stone-400 italic mt-8">
            The project addresses inadequate patient care in Australian public
            hospitals by developing EzMenu and Qlight prototypes. EzMenu enables
            intuitive meal selection for patients, while Qlight enhances
            interaction and provides feedback. With low learning costs, these
            devices improve caregiving, patient well-being, and ethical
            considerations through user-centered research.
          </p>
        {:else if project.slug === "eldome"}
          <h3 class="font-display text-xl italic text-stone-800 mt-8 mb-2">
            Background
          </h3>
          <p class="text-stone-400 italic mt-8">
            The New Zealand Government prioritizes well-being in analytics,
            requiring new methods to collect and present data on elderly
            well-being. Project should to explore non-intrusive, socially
            engaging solutions for elderly well-being, encouraging
            self-reporting and community support, avoiding biometric tracking or
            superficial design changes.
          </p>
        {:else if project.slug === "irecycle"}
          <p class="text-stone-400 italic mt-8">
            Electronic waste is one of the fastest-growing waste streams
            worldwide, yet many individuals lack clear guidance on how to
            recycle or reuse their devices responsibly. This project explores
            how digital tools can support more accessible and sustainable
            e-waste disposal behaviors.
          </p>
        {/if}
      </div>
      {#if project.slug === "ez-menu-qlight"}
        <Separator class="my-8" />
        <h2 class="font-display text-2xl italic text-stone-800 mb-6">
          Prototype
        </h2>
        <div class="space-y-2 overflow-hidden">
          <!-- Top row: scroll right -->
          <div class="flex gap-2 animate-scroll-right">
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-1.jpg"
                alt="Prototype 1"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-2.jpg"
                alt="Prototype 2"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-3.jpg"
                alt="Prototype 3"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-1.jpg"
                alt="Prototype 1"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-2.jpg"
                alt="Prototype 2"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-3.jpg"
                alt="Prototype 3"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Bottom row: scroll left -->
          <div class="flex gap-2 animate-scroll-left">
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-4.jpg"
                alt="Prototype 4"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-5.jpg"
                alt="Prototype 5"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-6.jpg"
                alt="Prototype 6"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-4.jpg"
                alt="Prototype 4"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-5.jpg"
                alt="Prototype 5"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
            >
              <img
                src="/images/projects/ez-proto-6.jpg"
                alt="Prototype 6"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      {/if}
      {#if project.slug === "eldome"}
        <Separator class="my-8" />
        <h2 class="font-display text-2xl italic text-stone-800 mb-6">
          Prototype
        </h2>
        <div class="flex gap-2 overflow-hidden h-[500px]">
          <div class="flex-1 overflow-hidden">
            <div class="flex flex-col gap-2 animate-scroll-up">
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-1.jpg"
                  alt="Prototype 1"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-2.jpg"
                  alt="Prototype 2"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-3.jpg"
                  alt="Prototype 3"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-1.jpg"
                  alt="Prototype 1"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-2.jpg"
                  alt="Prototype 2"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-3.jpg"
                  alt="Prototype 3"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="flex flex-col gap-2 animate-scroll-down">
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-4.jpg"
                  alt="Prototype 4"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-5.jpg"
                  alt="Prototype 5"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-6.jpg"
                  alt="Prototype 6"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-4.jpg"
                  alt="Prototype 4"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-5.jpg"
                  alt="Prototype 5"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-6.jpg"
                  alt="Prototype 6"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="flex flex-col gap-2 animate-scroll-up">
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-7.jpg"
                  alt="Prototype 7"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-8.jpg"
                  alt="Prototype 8"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-9.jpg"
                  alt="Prototype 9"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-7.jpg"
                  alt="Prototype 7"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-8.jpg"
                  alt="Prototype 8"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-9.jpg"
                  alt="Prototype 9"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="flex flex-col gap-2 animate-scroll-down">
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-10.jpg"
                  alt="Prototype 10"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-1.jpg"
                  alt="Prototype 1"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-2.jpg"
                  alt="Prototype 2"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-10.jpg"
                  alt="Prototype 10"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-1.jpg"
                  alt="Prototype 1"
                  class="w-full object-cover"
                />
              </div>
              <div class="shrink-0 rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/projects/eldome-2.jpg"
                  alt="Prototype 2"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      {/if}
      {#if project.slug === "irecycle"}
        <Separator class="my-8" />
        <h2 class="font-display text-2xl italic text-stone-800 mb-6">
          Lo-Fi Prototype
        </h2>
        <div class="rounded-2xl overflow-hidden bg-stone-100">
          <img
            src="/images/projects/irecycle-lofi.jpg"
            alt="Lo-Fi Prototype"
            class="w-full object-cover"
          />
        </div>

        <Separator class="my-8" />
        <h2 class="font-display text-2xl italic text-stone-800 mb-6">
          Hi-Fi Prototype
        </h2>
        <div class="rounded-2xl overflow-hidden bg-stone-100">
          <img
            src="/images/projects/irecycle-hifi.jpg"
            alt="Hi-Fi Prototype"
            class="w-full object-cover"
          />
        </div>
      {/if}
      {#if project.images && project.images.length > 0}
        <Separator class="my-8" />
        <h2 class="font-display text-2xl italic text-stone-800 mb-6">
          Gallery
        </h2>
        <div class="space-y-4 overflow-hidden">
          <!-- Top row: scroll right -->
          <div class="flex gap-4 animate-scroll-right">
            {#each [...project.images.slice(0, 3), ...project.images.slice(0, 3)] as img}
              <div
                class="shrink-0 w-80 rounded-xl overflow-hidden bg-stone-100 aspect-video"
              >
                <img
                  src={img}
                  alt="Project screenshot"
                  class="w-full h-full object-cover"
                  onerror={(e: Event) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>
            {/each}
          </div>
          <!-- Bottom row: scroll left -->
          <div class="flex gap-4 animate-scroll-left">
            {#each [...project.images.slice(3, 6), ...project.images.slice(3, 6)] as img}
              <div
                class="shrink-0 w-80 rounded-xl overflow-hidden bg-stone-100 aspect-video"
              >
                <img
                  src={img}
                  alt="Project screenshot"
                  class="w-full h-full object-cover"
                  onerror={(e: Event) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>
            {/each}
          </div>
        </div>
      {/if}

      {#if project.links && project.links.length > 0}
        <Separator class="my-8" />
        <div class="flex gap-3">
          {#each project.links as link}
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined}
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              {link.label}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </section>
{:else if data.type === "playground" && data.playgroundItem}
  {@const item = data.playgroundItem}

  <section class="pt-32 pb-16 px-6">
    <div class="max-w-4xl mx-auto">
      <a
        href="/"
        class="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
      </a>

      <h1 class="font-display text-4xl md:text-5xl italic text-stone-800 mb-2">
        {item.title}
      </h1>
      <Badge variant="secondary">{item.category}</Badge>

      <div class="mt-8 rounded-2xl overflow-hidden bg-stone-100 aspect-video">
        {#if item.slug === "side-project-five"}
          <iframe
            src="https://www.youtube.com/embed/5yItlx8fsB8"
            title={item.title}
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        {:else}
          <img
            src={item.thumbnail}
            alt={item.title}
            class="w-full h-full object-cover"
            onerror={(e: Event) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        {/if}
      </div>

      <Separator class="my-8" />

      <div class="prose prose-stone max-w-none">
        {#if item.slug === "side-project-one"}
          <p class="text-stone-600 italic">
            Met Inventory is an interactive web tool for exploring artworks from
            The Metropolitan Museum of Art's collection. It combines searchable
            data, structured metadata, and a clean interface to help users
            browse, organize, and examine artworks more effectively.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://met-inventory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              View Website
            </a>
            <a
              href="https://github.com/williamkij/met-inventory"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              View GitHub
            </a>
          </div>
        {:else if item.slug === "side-project-two"}
          <p class="text-stone-600 italic">
            Outside the Kingdom of Ugarit is an interactive web experience that
            explores a fictional world through narrative and visual
            storytelling. The project combines spatial exploration, atmospheric
            design, and interactive elements to immerse users in a fragmented
            digital landscape.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://project-of-outside-the-kingdom-of-u.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              View Website
            </a>
            <a
              href="https://github.com/williamkij/Project-of-outside-the-kingdom-of-Ugarit"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              View GitHub
            </a>
          </div>
        {:else if item.slug === "side-project-three"}
          <p class="text-stone-600 italic">
            This project explores spatial storytelling through a walking
            simulator that guides players from a foggy dock through interior
            spaces to an elevated final platform. Vertical movement,
            environmental contrast, and interactive moments are used to shape
            narrative pacing and atmosphere.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://yue-jin.itch.io/the-lighthouse-in-memory"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Play Game
            </a>
            <a
              href="https://github.com/williamkij/Walking-Simulator"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              View GitHub
            </a>
          </div>
        {:else if item.slug === "side-project-four"}
          <p class="text-stone-600 italic">
            This project is a three-level 2D platformer featuring a Ninja Frog
            character with mechanics such as double jump, dash, wall sliding,
            and box-pushing interactions. Through iterative level design,
            collectible rewards, and player playtesting, the game explores how
            movement mechanics and environmental hazards can shape challenge,
            exploration, and player progression.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://yue-jin.itch.io/yues-game"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Play Game
            </a>
          </div>
        {:else if item.slug === "side-project-five"}
          <p class="text-stone-600 italic">
            Children E-Reading is an interactive mobile application designed to
            support early childhood reading and remote parent–child engagement.
            By combining AR face tracking, interactive storytelling, and video
            communication, the system encourages collaborative reading and
            strengthens family connection.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://github.com/williamkij/DEC03500Pepsi"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              View GitHub
            </a>
          </div>
        {:else if item.slug === "side-project-six"}
          <p class="text-stone-600 italic">
            World Top 50 University 2023 is a data visualization project
            exploring global higher education rankings. By combining geographic
            mapping, ranking timelines, and network relationships, the
            infographic reveals patterns in university influence and academic
            achievements.
          </p>
          <div class="flex gap-3 mt-6 not-prose">
            <a
              href="https://drive.google.com/file/d/1hWu_foOQVWFNczE1-bmrod60I__Dglqx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              View Details
            </a>
          </div>
        {:else}
          <p class="text-stone-500 italic">Project details coming soon.</p>
        {/if}
      </div>
    </div>
  </section>
{/if}
