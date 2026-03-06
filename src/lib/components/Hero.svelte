<script lang="ts">
  import { personalInfo } from "@/data/site";
</script>

<section class="pt-44 pb-20 px-6">
  <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
    <!-- Avatar -->
    <!-- Avatar with flip effect -->
    <div class="w-48 h-48 shrink-0 flip-container">
      <div class="flip-inner relative w-full h-full">
        <!-- Front: avatar -->
        <div
          class="absolute inset-0 rounded-full overflow-hidden bg-stone-200 border-2 border-stone-100 shadow-sm"
          style="backface-visibility: hidden;"
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
        <!-- Back: real photo -->
        <div
          class="absolute inset-0 rounded-full overflow-hidden bg-stone-200 border-2 border-stone-100 shadow-sm"
          style="backface-visibility: hidden; transform: rotateY(180deg);"
        >
          <img
            src="/images/photo-back.jpg"
            alt="{personalInfo.name} photo"
            class="w-full h-full object-cover"
            onerror={(e: Event) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </div>

    <!-- Bio text -->
    <p class="font-display text-lg md:text-xl leading-relaxed text-stone-500">
      I'm Yue(Memphis)Jin, an
      <strong class="font-semibold text-stone-800">HCI researcher</strong> and
      <strong class="font-semibold text-stone-800">designer-engineer</strong>
      with a passion for
      <strong class="font-semibold text-stone-800">Tangible Devices</strong>.
      I'm currently pursuing a MA-Digital Studies(Extended Reality Track) at
      UChicago. My research interests include human-computer integration,
      haptics, tangible interaction, and fabrication. Previously, I focused on
      product Development and interaction design.
    </p>
    <div class="mt-20">
      <svg width="18" height="30" viewBox="0 0 24 40" class="scroll-mouse">
        <rect
          x="1"
          y="1"
          width="22"
          height="38"
          rx="11"
          ry="11"
          fill="none"
          stroke-width="2"
          class="scroll-mouse-outline"
        />
        <circle cx="12" cy="12" r="2" class="scroll-mouse-dot" />
      </svg>
    </div>
  </div>
</section>
