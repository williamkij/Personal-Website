
<script lang="ts">
  import { Badge } from "@/components/ui/badge";
  import { Separator } from "@/components/ui/separator";

  let { data } = $props();

  const pageTitle = $derived(
    data.type === "featured" && data.project
      ? `${data.project.title} — Memphis`
      : data.type === "playground" && data.playgroundItem
        ? `${data.playgroundItem.title} — Memphis`
        : "Project — Memphis"
  );

  const isGroove = $derived(
    data.type === "featured" &&
      data.project?.slug === "groove-music-cube"
  );

  const ezPrototypeTop = [
    "/images/projects/ez-proto-1.jpg",
    "/images/projects/ez-proto-2.jpg",
    "/images/projects/ez-proto-3.jpg"
  ];

  const ezPrototypeBottom = [
    "/images/projects/ez-proto-4.jpg",
    "/images/projects/ez-proto-5.jpg",
    "/images/projects/ez-proto-6.jpg"
  ];

  const eldomeColumns = [
    [
      "/images/projects/eldome-1.jpg",
      "/images/projects/eldome-2.jpg",
      "/images/projects/eldome-3.jpg"
    ],
    [
      "/images/projects/eldome-4.jpg",
      "/images/projects/eldome-5.jpg",
      "/images/projects/eldome-6.jpg"
    ],
    [
      "/images/projects/eldome-7.jpg",
      "/images/projects/eldome-8.jpg",
      "/images/projects/eldome-9.jpg"
    ],
    [
      "/images/projects/eldome-10.jpg",
      "/images/projects/eldome-1.jpg",
      "/images/projects/eldome-2.jpg"
    ]
  ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

{#if data.type === "featured" && data.project}
  {@const project = data.project}

  <section
    class={isGroove
      ? "pt-24 pb-24 bg-white min-h-screen"
      : "pt-32 pb-16 px-6"}
  >

    <!-- GROOVE MUSIC CUBE HERO PHOTO -->
    {#if isGroove}
      <div
        class="relative w-full h-[58vh] min-h-[380px] max-h-[760px] overflow-hidden bg-stone-100"
      >
        <img
          src="/images/projects/groove/groove-hero.jpg"
          alt="Groove Music Cube interactive music installation"
          class="w-full h-full object-cover object-center"
        />
      </div>
    {/if}

    <!-- MAIN CONTENT -->
    <div
      class={isGroove
        ? "max-w-4xl mx-auto px-6 pt-16"
        : "max-w-4xl mx-auto"}
    >

      <!-- BACK TO HOME -->
      <a
        href="/"
        class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-10"
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

      <!-- PROJECT TITLE -->
      <div class="mb-10">
        <h1
          class="font-display text-4xl md:text-5xl italic text-stone-800 mb-3"
        >
          {project.title}
        </h1>

        <p class="text-lg text-stone-500 mb-5">
          {project.subtitle}
        </p>

        <div class="flex flex-wrap gap-2">
          {#each project.tags as tag}
            <Badge variant="secondary">{tag}</Badge>
          {/each}
        </div>
      </div>

      <!-- MAIN VIDEO OR PROJECT IMAGE -->
      <div
        class="rounded-2xl overflow-hidden bg-stone-100 mb-12 aspect-video"
      >
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

      <Separator class="my-10" />


<!-- OVERVIEW -->
<div class="max-w-none">
  <h2 class="font-display text-2xl italic text-stone-800 mb-6">
    Overview
  </h2>

  {#if project.slug === "groove-music-cube"}
    <div class="space-y-5 text-base md:text-lg text-stone-700 leading-[1.85]">
      <p>
        Groove Music Cube is a tangible music creation installation
        designed to help beginners explore music without requiring
        prior knowledge of music production. It transforms digital
        music controls into physical interactions, allowing users
        to experiment with musical arrangements and sound effects
        through hands-on exploration.
      </p>

      <p>
        Through four interactive cubes representing bass, drums,
        guitar, and piano, users can combine different musical
        loops simply by rotating the cubes. Additional physical
        controllers enable them to explore sound effects such as
        reverb, echo, and equalization, while sound-responsive
        LED lighting provides visual feedback.
      </p>
    </div>
  {:else}
    <div class="prose prose-stone max-w-none">
      <p class="text-stone-700 leading-relaxed text-lg">
        {project.description}
      </p>

      {#if project.slug === "ez-menu-qlight"}
        <p class="text-stone-400 italic mt-8">
          The project addresses inadequate patient care in Australian
          public hospitals by developing EzMenu and Qlight prototypes.
          EzMenu enables intuitive meal selection for patients, while
          Qlight enhances interaction and provides feedback. With low
          learning costs, these devices improve caregiving, patient
          well-being, and ethical considerations through user-centered
          research.
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
          self-reporting and community support, avoiding biometric
          tracking or superficial design changes.
        </p>

      {:else if project.slug === "irecycle"}
        <p class="text-stone-400 italic mt-8">
          Electronic waste is one of the fastest-growing waste streams
          worldwide, yet many individuals lack clear guidance on how
          to recycle or reuse their devices responsibly. This project
          explores how digital tools can support more accessible and
          sustainable e-waste disposal behaviors.
        </p>
      {/if}
    </div>
  {/if}
</div>


<!-- HOW IT WORKS -->
{#if project.slug === "groove-music-cube"}
  <Separator class="my-12" />

  <section class="space-y-14">

    <!-- Section Heading -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-6">
        How It Works
      </h2>

      <!-- Interaction Demonstration Video -->
      <div class="w-full aspect-video rounded-2xl overflow-hidden bg-stone-100">
        <iframe
          src="https://drive.google.com/file/d/1meA6ykoOMsRbqONeH0SNtiJxnOvZoTMt/preview"
          title="Groove Music Cube Interaction Demonstration"
          class="w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>

      <p class="text-sm text-stone-800 mt-3">
        Interaction demonstration of the Groove Music Cube system.
      </p>
    </div>


<!-- 01 Instrument Cubes -->
<div
  class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-8 md:gap-8 items-stretch"
>
  <!-- Left: Three Vertically Stacked Images -->
  <div class="flex flex-col gap-3">
    <a
      href="/images/projects/groove/groove-rotation.png"
      target="_blank"
      rel="noopener noreferrer"
      class="block w-full aspect-video rounded-xl overflow-hidden bg-black group"
    >
      <img
        src="/images/projects/groove/groove-rotation.png"
        alt="Rotating an instrument cube changes the musical loop"
        class="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </a>

    <a
      href="/images/projects/groove/groove-instruments.png"
      target="_blank"
      rel="noopener noreferrer"
      class="block w-full aspect-video rounded-xl overflow-hidden bg-black group"
    >
      <img
        src="/images/projects/groove/groove-instruments.png"
        alt="Four instrument cubes and their loop combinations"
        class="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </a>

    <a
      href="/images/projects/groove/groove-cube-faces.png"
      target="_blank"
      rel="noopener noreferrer"
      class="block w-full aspect-video rounded-xl overflow-hidden bg-black group"
    >
      <img
        src="/images/projects/groove/groove-cube-faces.png"
        alt="Cube net showing five loops and one mute face"
        class="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </a>
  </div>

  <!-- Middle: Vertical connector -->
  <div class="hidden md:flex relative items-center justify-center">
    <!-- vertical line -->
    <div class="absolute top-6 bottom-6 w-px bg-stone-300"></div>

    <!-- two dots -->
    <div class="absolute top-[34%] -translate-y-1/2">
      <div class="w-3 h-3 rounded-full bg-stone-500 border-2 border-white shadow-sm"></div>
    </div>

    <div class="absolute top-[68%] -translate-y-1/2">
      <div class="w-3 h-3 rounded-full bg-stone-500 border-2 border-white shadow-sm"></div>
    </div>
  </div>


<!-- Right: Description -->
<div class="flex flex-col h-full md:pl-2">

  <!-- Heading aligned to the top -->
  <div class="space-y-3">
    <p class="text-xs font-medium tracking-[0.18em] uppercase text-stone-800">
      01 / Instrument Interaction
    </p>

    <h3 class="font-display text-2xl italic text-stone-800">
      Instrument Cubes
    </h3>
  </div>

  <!-- Two paragraphs aligned with the timeline dots -->
  <div class="flex-1 flex flex-col justify-evenly">

    <p class="text-stone-700 text-base leading-[1.9]">
      Each of the four cubes represents a different instrument:
      drums, guitar, piano, or bass. Rotating a cube allows users
      to switch between five musical loops, while the sixth face
      mutes the instrument.
    </p>

    <p class="text-stone-700 text-base leading-[1.9]">
      By freely combining loops across the four cubes, users can
      explore different musical arrangements through simple
      physical interactions.
    </p>

  </div>
</div>

</div> <!-- Close 01 Instrument Cubes grid -->

    <!-- Section Divider -->
    <Separator class="my-4" />


<!-- 02 Physical Effects -->
<div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-6 md:gap-6 items-stretch">

  <!-- Left: Description -->
  <div class="min-w-0 flex flex-col justify-center space-y-5 md:pr-4">

    <p class="text-xs font-medium tracking-[0.18em] uppercase text-stone-800">
      02 / Sound Manipulation
    </p>

    <h3 class="font-display text-2xl italic text-stone-800">
      Physical Effects &amp; Visual Feedback
    </h3>

    <p class="text-stone-700 text-base leading-[1.85]">
      Four physical controllers translate audio effects
      into tangible actions, allowing users to explore
      EQ, echo, reverb, and tempo through physical
      manipulation.
    </p>

    <div class="space-y-2 text-base text-stone-700 leading-[1.85]">
      <p>
        <span class="font-semibold text-stone-900">EQ:</span>
        Changing the physical medium.
      </p>

      <p>
        <span class="font-semibold text-stone-900">Echo:</span>
        Adjusting the distance between two walls.
      </p>

      <p>
        <span class="font-semibold text-stone-900">Reverb:</span>
        Stretching the frame to change its size.
      </p>

      <p>
        <span class="font-semibold text-stone-900">BPM:</span>
        Turning a hand winch to adjust the tempo.
      </p>
    </div>

    <p class="text-stone-700 text-base leading-[1.85]">
      Sound-responsive LED lighting provides visual
      feedback that changes with the music's intensity,
      complementing the auditory experience.
    </p>

  </div>

  <!-- Middle: Vertical Line Without Dots -->
  <div class="hidden md:flex relative items-center justify-center">
    <div class="absolute top-6 bottom-6 w-px bg-stone-300"></div>
  </div>




<!-- Right: System Diagram -->
<div class="min-w-0 w-full h-full md:-ml-5 md:w-[calc(100%+20px)]">
  <a
    href="/images/projects/groove/groove-system.png"
    target="_blank"
    rel="noopener noreferrer"
    class="relative block w-full h-full min-h-[420px] rounded-xl overflow-hidden bg-black group"
    aria-label="View the full Groove Music Cube system diagram"
  >
    <img
      src="/images/projects/groove/groove-system.png"
      alt="Groove Music Cube system diagram showing audio effects and LED feedback"
      class="absolute inset-0 w-full h-full object-contain object-center"
      loading="lazy"
    />
  </a>
</div>




</div>

  </section>
{/if}


<!-- GROOVE MUSIC CUBE PROCESS -->
{#if project.slug === "groove-music-cube"}
  <Separator class="my-12" />

  <section class="space-y-8">

    <h2 class="font-display text-2xl italic text-stone-800">
      Process
    </h2>

    <!-- 01 Iterative Prototyping -->
    <div class="space-y-3">
      <div class="space-y-1.5">
        <p class="text-xs font-medium tracking-[0.18em] uppercase text-stone-800">
          01 / Iterative Prototyping
        </p>

        <p class="text-base text-stone-700 leading-[1.85]">
          Exploring different cube structures, materials, and enclosures through rapid prototyping.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {#each [
          { image: "groove-iteration-1.png", label: "Iteration 01" },
          { image: "groove-iteration-2.png", label: "Iteration 02" },
          { image: "groove-iteration-3.png", label: "Iteration 03" },
          { image: "groove-iteration-4.png", label: "Final Cube" }
        ] as item}
          <div class="space-y-1.5">
            <a
              href={`/images/projects/groove/${item.image}`}
              target="_blank"
              rel="noopener noreferrer"
              class="block aspect-square overflow-hidden rounded-lg bg-stone-100"
            >
              <img
                src={`/images/projects/groove/${item.image}`}
                alt={item.label}
                class="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <p class="text-[13px] text-stone-600 text-left">
              {item.label}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- 02 Interaction Prototyping -->
    <div class="space-y-3">
      <div class="space-y-1.5">
        <p class="text-xs font-medium tracking-[0.18em] uppercase text-stone-800">
          02 / Interaction Prototyping
        </p>

        <p class="text-base text-stone-700 leading-[1.85]">
          Testing tangible input mechanisms through cube manipulation, physical buttons, and sliders.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {#each [
          { image: "groove-cube-testing.gif", label: "Cube Interaction" },
          { image: "groove-button.gif", label: "Button Interaction" },
          { image: "groove-slider.gif", label: "Slider Interaction" }
        ] as item}
          <div class="space-y-1.5">
            <div class="aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
              <img
                src={`/images/projects/groove/${item.image}`}
                alt={item.label}
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p class="text-[13px] text-stone-600 text-left">
              {item.label}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- 03 System Integration -->
    <div class="space-y-3">
      <div class="space-y-1.5">
        <p class="text-xs font-medium tracking-[0.18em] uppercase text-stone-800">
          03 / System Integration
        </p>

        <p class="text-base text-stone-700 leading-[1.85]">
          Integrating physical structures, electronics, MIDI controls, and sound-responsive lighting.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {#each [
          { image: "groove-effects-prototype.jpg", label: "Effects Prototype" },
          { image: "groove-frame-prototype.jpg", label: "Frame Construction" },
          { image: "groove-electronics.jpg", label: "Electronics" },
          { image: "groove-led-prototype.png", label: "LED Feedback" }
        ] as item}
          <div class="space-y-1.5">
            <a
              href={`/images/projects/groove/${item.image}`}
              target="_blank"
              rel="noopener noreferrer"
              class="block aspect-[4/3] overflow-hidden rounded-lg bg-stone-100"
            >
              <img
                src={`/images/projects/groove/${item.image}`}
                alt={item.label}
                class="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <p class="text-[13px] text-stone-600 text-left">
              {item.label}
            </p>
          </div>
        {/each}
      </div>
    </div>

  </section>
{/if}


      <!-- EZ MENU + QLIGHT PROTOTYPES -->
      {#if project.slug === "ez-menu-qlight"}
        <Separator class="my-8" />

        <h2
          class="font-display text-2xl italic text-stone-800 mb-6"
        >
          Prototype
        </h2>

        <div class="space-y-2 overflow-hidden">

          <div class="flex gap-2 animate-scroll-right">
            {#each [...ezPrototypeTop, ...ezPrototypeTop] as img, i}
              <div
                class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
              >
                <img
                  src={img}
                  alt={`Prototype ${i % 3 + 1}`}
                  class="w-full h-full object-cover"
                />
              </div>
            {/each}
          </div>

          <div class="flex gap-2 animate-scroll-left">
            {#each [...ezPrototypeBottom, ...ezPrototypeBottom] as img, i}
              <div
                class="shrink-0 w-72 aspect-square rounded-lg overflow-hidden bg-stone-100"
              >
                <img
                  src={img}
                  alt={`Prototype ${i % 3 + 4}`}
                  class="w-full h-full object-cover"
                />
              </div>
            {/each}
          </div>

        </div>
      {/if}

      <!-- ELDOME PROTOTYPES -->
      {#if project.slug === "eldome"}
        <Separator class="my-8" />

        <h2
          class="font-display text-2xl italic text-stone-800 mb-6"
        >
          Prototype
        </h2>

        <div class="flex gap-2 overflow-hidden h-[500px]">

          {#each eldomeColumns as column, i}
            <div class="flex-1 overflow-hidden">
              <div
                class={i % 2 === 0
                  ? "flex flex-col gap-2 animate-scroll-up"
                  : "flex flex-col gap-2 animate-scroll-down"}
              >
                {#each [...column, ...column] as img}
                  <div
                    class="shrink-0 rounded-lg overflow-hidden bg-stone-100"
                  >
                    <img
                      src={img}
                      alt="Prototype"
                      class="w-full object-cover"
                    />
                  </div>
                {/each}
              </div>
            </div>
          {/each}

        </div>
      {/if}

      <!-- IRECYCLE PROTOTYPES -->
      {#if project.slug === "irecycle"}
        <Separator class="my-8" />

        <h2
          class="font-display text-2xl italic text-stone-800 mb-6"
        >
          Lo-Fi Prototype
        </h2>

        <div
          class="rounded-2xl overflow-hidden bg-stone-100"
        >
          <img
            src="/images/projects/irecycle-lofi.jpg"
            alt="Lo-Fi Prototype"
            class="w-full object-cover"
          />
        </div>

        <Separator class="my-8" />

        <h2
          class="font-display text-2xl italic text-stone-800 mb-6"
        >
          Hi-Fi Prototype
        </h2>

        <div
          class="rounded-2xl overflow-hidden bg-stone-100"
        >
          <img
            src="/images/projects/irecycle-hifi.jpg"
            alt="Hi-Fi Prototype"
            class="w-full object-cover"
          />
        </div>
      {/if}

      <!-- GALLERY -->
      {#if project.images && project.images.length > 0}
        <Separator class="my-10" />

        <h2
          class="font-display text-2xl italic text-stone-800 mb-6"
        >
          Gallery
        </h2>

        <div class="space-y-4 overflow-hidden">

          <!-- TOP ROW -->
          <div class="flex gap-4 animate-scroll-right">
            {#each [
              ...project.images.slice(0, 3),
              ...project.images.slice(0, 3)
            ] as img}
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

          <!-- BOTTOM ROW -->
          <div class="flex gap-4 animate-scroll-left">
            {#each [
              ...project.images.slice(3, 6),
              ...project.images.slice(3, 6)
            ] as img}
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

      <!-- PROJECT LINKS -->
      {#if project.links && project.links.length > 0}
        <Separator class="my-10" />

        <div class="flex flex-wrap gap-3">
          {#each project.links as link}
            <a
              href={link.href}
              target={link.href.startsWith("http")
                ? "_blank"
                : undefined}
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

      <!-- BACK TO HOME -->
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

      <h1
        class="font-display text-4xl md:text-5xl italic text-stone-800 mb-2"
      >
        {item.title}
      </h1>

      <Badge variant="secondary">
        {item.category}
      </Badge>

      <!-- PLAYGROUND IMAGE / VIDEO -->
      <div
        class="mt-8 rounded-2xl overflow-hidden bg-stone-100 aspect-video"
      >
        {#if item.slug === "side-project-five"}
          <iframe
            src="https://www.youtube.com/embed/5yItlx8fsB8"
            title={item.title}
            class="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

        {:else}
          <img
            src={item.thumbnail}
            alt={item.title}
            class="w-full h-full object-cover"
            onerror={(e: Event) => {
              (e.currentTarget as HTMLImageElement).style.display =
                "none";
            }}
          />
        {/if}
      </div>

      <Separator class="my-8" />

      <div class="prose prose-stone max-w-none">

        {#if item.slug === "side-project-one"}
          <p class="text-stone-600 italic">
            Met Inventory is an interactive web tool for
            exploring artworks from The Metropolitan Museum
            of Art's collection. It combines searchable data,
            structured metadata, and a clean interface to help
            users browse, organize, and examine artworks more
            effectively.
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
            Outside the Kingdom of Ugarit is an interactive
            web experience that explores a fictional world
            through narrative and visual storytelling. The
            project combines spatial exploration, atmospheric
            design, and interactive elements to immerse users
            in a fragmented digital landscape.
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
            This project explores spatial storytelling through
            a walking simulator that guides players from a
            foggy dock through interior spaces to an elevated
            final platform. Vertical movement, environmental
            contrast, and interactive moments are used to
            shape narrative pacing and atmosphere.
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
            This project is a three-level 2D platformer
            featuring a Ninja Frog character with mechanics
            such as double jump, dash, wall sliding, and
            box-pushing interactions. Through iterative
            level design, collectible rewards, and player
            playtesting, the game explores how movement
            mechanics and environmental hazards can shape
            challenge, exploration, and player progression.
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
            Children E-Reading is an interactive mobile
            application designed to support early childhood
            reading and remote parent–child engagement.
            By combining AR face tracking, interactive
            storytelling, and video communication, the
            system encourages collaborative reading and
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
            World Top 50 University 2023 is a data
            visualization project exploring global higher
            education rankings. By combining geographic
            mapping, ranking timelines, and network
            relationships, the infographic reveals patterns
            in university influence and academic achievements.
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
          <p class="text-stone-500 italic">
            Project details coming soon.
          </p>
        {/if}

      </div>
    </div>
  </section>
{/if}
