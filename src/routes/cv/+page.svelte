<script lang="ts">
  import { education, experience, skills } from "@/data/cv";
  import { personalInfo } from "@/data/site";
  import { Separator } from "@/components/ui/separator";
  import { Badge } from "@/components/ui/badge";
</script>

<svelte:head>
  <title>CV — {personalInfo.name}</title>
</svelte:head>

<section class="pt-32 pb-16 px-6">
  <div class="max-w-3xl mx-auto">
    <h1 class="font-display text-4xl italic text-stone-800 mb-2">
      Curriculum Vitae
    </h1>
    <p class="text-stone-500 mb-4">
      {personalInfo.name} &middot; {personalInfo.title}
    </p>
    <!-- Optional: link to downloadable PDF -->
    <a
      href="https://drive.google.com/file/d/1SwHSCzlMQm7GgipsuN1gkllwKV7o_P2F/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8"
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      PDF version
    </a>

    <Separator class="my-8" />

    <!-- Education -->
    <div class="mb-12">
      <h2 class="font-display text-2xl italic text-stone-800 mb-6">
        Education
      </h2>
      <div class="space-y-6">
        {#each education as edu}
          <div class="relative pl-6 border-l-2 border-stone-200">
            <div
              class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-stone-300"
            ></div>
            <h3 class="font-semibold text-stone-900">{edu.institution}</h3>
            <p class="text-stone-600">{edu.degree} in {edu.field}</p>
            <p class="text-sm text-stone-400 mb-1">{edu.period}</p>
            {#if edu.description}
              <p class="text-sm text-stone-600">{edu.description}</p>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <Separator class="my-8" />

    <!-- Experience -->
    <div class="mb-12">
      <h2 class="font-display text-2xl italic text-stone-800 mb-6">
        Experience
      </h2>
      <div class="space-y-6">
        {#each experience as exp}
          <div class="relative pl-6 border-l-2 border-stone-200">
            <div
              class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-stone-300"
            ></div>
            <h3 class="font-semibold text-stone-900">{exp.role}</h3>
            <p class="text-stone-600">{exp.organization}</p>
            <p class="text-sm text-stone-400 mb-1">{exp.period}</p>
            <p class="text-sm text-stone-600">{exp.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <Separator class="my-8" />

    <!-- Skills -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-6">Skills</h2>
      <div class="space-y-6">
        {#each skills as group}
          <div>
            <h3 class="font-semibold text-stone-800 mb-2">{group.category}</h3>
            <div class="flex flex-wrap gap-2">
              {#each group.items as skill}
                <Badge variant="outline">{skill}</Badge>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
