<script lang="ts">
  import { personalInfo } from "@/data/site";
  import HoverPreviewLink from './HoverPreviewLink.svelte';
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

<!-- Bio text -->





<p class="font-sans text-base md:text-lg leading-[1.8] text-stone-600 text-left max-w-3xl mx-auto">
  I'm Memphis Yue Jin, a second-year M.A. student in Digital Studies at the

  <HoverPreviewLink
  label="University of Chicago"
  href="https://digitalstudies.uchicago.edu/"
  previewTitle="Digital Studies at UChicago"
  previewText="An interdisciplinary graduate program exploring digital media, computation, and technology in the humanities."
  previewImage="website"
/>
,
  conducting research in the

  <HoverPreviewLink
  label="Actuated Experience Lab (AxLab)"
  href="https://www.axlab.cs.uchicago.edu/"
  previewTitle="Actuated Experience Lab"
  previewText="Exploring new forms of physical interaction through actuation, tangible interfaces, and interactive systems."
  previewImage="/images/previews/axlab-preview.webp"
/>

  advised by



  <HoverPreviewLink
  label="Prof. Ken Nakagaki"
  href="https://www.ken-nakagaki.com/"
  previewTitle="Ken Nakagaki"
  previewText="Assistant Professor of Computer Science at the University of Chicago and Director of AxLab."
  previewType="image"
  previewImage="/images/previews/ken.png"
/>


,
  with additional guidance from my thesis counsellor,

  <HoverPreviewLink
  label="Prof. Jeffrey R. Tharsen"
  href="https://voices.uchicago.edu/corpus/people/jeffrey-tharsen/"
  previewTitle="Jeffrey R. Tharsen"
  previewText="University of Chicago scholar working across digital humanities, computational methods, and interdisciplinary research."
/>
.

  I received my B.IT. in User Experience Design from the
  <strong class="font-semibold text-stone-800">University of Queensland, Australia</strong>
  in 2024. My research focuses on
  <strong class="font-semibold text-stone-800">Human-Computer Interaction,
  Tangible Interaction, and Haptics</strong>,
  particularly exploring how
  <strong class="font-semibold text-stone-800">actuated and tangible interfaces</strong>
  can enable expressive physical interactions.

  More broadly, I'm interested in exploring how
  <strong class="font-semibold text-stone-800">intelligent physical interfaces</strong>
  and ubiquitous computing can enable more natural and intuitive interactions
  beyond traditional screens.
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
