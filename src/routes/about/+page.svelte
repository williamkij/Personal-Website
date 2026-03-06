<script lang="ts">
  import { personalInfo } from "@/data/site";
  import { Separator } from "@/components/ui/separator";
  import { Button } from "@/components/ui/button";
</script>

<svelte:head>
  <title>About — {personalInfo.name}</title>
</svelte:head>

<section class="pt-32 pb-16 px-6">
  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-start gap-8 mb-12">
      <div class="shrink-0">
        <div
          class="w-40 h-40 rounded-2xl overflow-hidden bg-stone-200 shadow-sm"
        >
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            class="w-full h-full object-cover"
            onerror={(e: Event) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
      <div>
        <h1 class="font-display text-4xl italic text-stone-800 mb-2">
          About Me
        </h1>
        <p class="text-stone-500 text-lg">{personalInfo.title}</p>
        <p class="text-stone-500">{personalInfo.location}</p>
      </div>
    </div>

    <Separator class="my-8" />

    <!-- Bio -->
    <div class="prose prose-stone max-w-none">
      <h2 class="font-display text-2xl italic text-stone-800 mb-4">Bio</h2>
      <p class="text-stone-700 leading-relaxed text-lg">
        I am an HCI researcher and designer–engineer. My interests lie in
        exploring the space between the physical and digital worlds, with a
        focus on embodied interaction and how physical experiences can enhance
        people's everyday lives. I am currently pursuing an interdisciplinary
        master's degree in the Digital Studies program at the University of
        Chicago. Previously, I studied product design and technology interaction
        in Australia and Switzerland.
      </p>
      <p
        class="text-stone-900 leading-relaxed text-lg italic font-semibold mt-6"
      >
        "I believe that the machines and technological artifacts around us
        should be understood as extensions of human thinking and action, rather
        than systems that diminish human agency or well-being."
      </p>
    </div>

    <Separator class="my-8" />

    <!-- Interests / What I Do -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-4">
        Key Words
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="p-5 rounded-xl bg-white border border-stone-200 flex items-start justify-between"
        >
          <div>
            <h3 class="font-semibold text-stone-800 mb-1">Physical</h3>
            <p class="text-sm text-stone-600">
              Tangible Music, Yo-Yo Machine, CSCW
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-stone-400 shrink-0 ml-4"
          >
            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v0"></path>
            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6"></path>
            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
            <path
              d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
            ></path>
          </svg>
        </div>
        <div
          class="p-5 rounded-xl bg-white border border-stone-200 flex items-start justify-between"
        >
          <div>
            <h3 class="font-semibold text-stone-800 mb-1">Design</h3>
            <p class="text-sm text-stone-600">
              Ethical Design, Experience-Centered Design
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-stone-400 shrink-0 ml-4"
          >
            <path
              d="M12 20a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 11 5 13a7 7 0 0 0 7 7z"
            ></path>
          </svg>
        </div>
        <div
          class="p-5 rounded-xl bg-white border border-stone-200 flex items-start justify-between"
        >
          <div>
            <h3 class="font-semibold text-stone-800 mb-1">Software</h3>
            <p class="text-sm text-stone-600">
              Computational Interaction, Social-Mobile Computing
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-stone-400 shrink-0 ml-4"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div
          class="p-5 rounded-xl bg-white border border-stone-200 flex items-start justify-between"
        >
          <div>
            <h3 class="font-semibold text-stone-800 mb-1">Theoretical</h3>
            <p class="text-sm text-stone-600">Philosophy, Security, Empathy</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-stone-400 shrink-0 ml-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
      </div>
    </div>

    <Separator class="my-8" />

    <!-- Contact & Social -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-4">
        Get in Touch
      </h2>
      <p class="text-stone-600 mb-4">
        Feel free to reach out at
        <a
          href="mailto:{personalInfo.email}"
          class="text-accent hover:underline"
        >
          {personalInfo.email}
        </a>
      </p>
      <div class="flex gap-3">
        <a
          href="https://github.com/williamkij"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
          aria-label="GitHub"
        >
          <img
            src="/images/github-icon.svg"
            alt="GitHub"
            width="20"
            height="20"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yue-jin-106623250/"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
          aria-label="LinkedIn"
        >
          <img
            src="/images/linkedin-icon.svg"
            alt="LinkedIn"
            width="20"
            height="20"
          />
        </a>
      </div>
    </div>
  </div>
</section>
