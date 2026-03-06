<script lang="ts">
  import { page } from "$app/stores";
  import { navLinks } from "@/data/site";
  import { personalInfo } from "@/data/site";
  import { Button } from "@/components/ui/button";

  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
  <nav
    class="flex items-center justify-between gap-8 px-8 py-3 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5"
  >
    <!-- Logo / Name -->
    <a href="/" class="flex items-center gap-2 group" onclick={closeMenu}>
      <!-- Replace with your own logo SVG or image -->
      <span
        class="font-display text-xl italic text-stone-900 group-hover:text-accent transition-colors"
      >
        {personalInfo.name}
      </span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        {#if link.external}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            {link.label}
          </a>
        {:else}
          <a
            href={link.href}
            class="text-sm transition-colors {$page.url.pathname === link.href
              ? 'text-stone-900 font-medium'
              : 'text-stone-600 hover:text-stone-900'}"
          >
            {link.label}
          </a>
        {/if}
      {/each}
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden p-2 text-stone-700 hover:text-stone-900"
      onclick={toggleMenu}
      aria-label="Toggle navigation"
    >
      {#if mobileMenuOpen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      {/if}
    </button>
  </nav>

  <!-- Mobile menu overlay -->
  {#if mobileMenuOpen}
    <div
      class="md:hidden bg-surface border-t border-stone-200 px-6 py-6 space-y-4"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          class="block text-lg text-stone-700 hover:text-stone-900 transition-colors"
          onclick={closeMenu}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</header>
