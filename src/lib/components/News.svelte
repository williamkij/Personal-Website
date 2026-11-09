
<script lang="ts">
    import { onMount } from "svelte";
  
    let newsSection: HTMLElement;
  
    const news = [
      {
        date: "2026.09",
        content: "Submitted two full papers to ACM CHI 2027, including one as co-first author.",
        link: "",
        linkText: "",
        suffix: ""
      },
      {
        date: "2025.09",
        content: "Started my M.A. in Digital Studies at the ",
        link: "https://digitalstudies.uchicago.edu/overview/masters-program/digital-media/",
        linkText: "University of Chicago",
        suffix: "."
      }
    ];
  
    onMount(() => {
      if (
        !newsSection ||
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
  
      const items = newsSection.querySelectorAll<HTMLElement>(".news-entry");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.remove("news-hidden");
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -20px 0px"
        }
      );
  
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight && rect.bottom > 0;
  
        if (!isVisible) {
          item.classList.add("news-hidden");
          observer.observe(item);
        }
      });
  
      return () => observer.disconnect();
    });
  </script>
  
  <section
    bind:this={newsSection}
    class="w-full max-w-3xl mx-auto px-6 pt-6 pb-10 md:pb-12"
    aria-labelledby="news-heading"
  >
    <h2
      id="news-heading"
      class="font-display text-4xl md:text-5xl italic text-stone-800 mb-9"
    >
      News
    </h2>
  
    <div class="relative">
  
      <!-- Vertical Timeline -->
      <div
        class="absolute left-[5px] top-[8px] bottom-[20px] w-px bg-stone-200"
        aria-hidden="true"
      ></div>
  
      <div class="space-y-9">
        {#each news as item, index}
          <div class="news-entry relative pl-8">
  
            <!-- Timeline Dot -->
            <span
              class="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-white shadow-sm"
              class:bg-stone-700={index === 0}
              class:bg-stone-400={index !== 0}
              aria-hidden="true"
            ></span>
  
            <!-- Date and Description -->
            <div
              class="grid grid-cols-1 sm:grid-cols-[88px_minmax(0,1fr)] gap-1 sm:gap-5 items-start"
            >
              <span
                class="text-sm font-medium text-stone-500 tabular-nums pt-[2px]"
              >
                {item.date}
              </span>
  
              <p class="text-base leading-[1.8] text-stone-700">
                {item.content}{#if item.link}<a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-medium text-stone-800 underline underline-offset-4 decoration-stone-400 hover:decoration-stone-800 transition-colors duration-300"
                >{item.linkText}</a>{item.suffix}{/if}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .news-entry {
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 550ms cubic-bezier(0.22, 1, 0.36, 1),
        transform 550ms cubic-bezier(0.22, 1, 0.36, 1);
    }
  
    .news-entry.news-hidden {
      opacity: 0;
      transform: translateY(12px);
    }
  
    @media (prefers-reduced-motion: reduce) {
      .news-entry {
        transition: none;
      }
    }
  </style>
  