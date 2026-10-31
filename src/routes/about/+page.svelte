
<script lang="ts">
  import { personalInfo } from "@/data/site";
  import { Separator } from "@/components/ui/separator";
</script>

<svelte:head>
  <title>About — {personalInfo.name}</title>
</svelte:head>

<section class="pt-32 pb-16 px-6">
  <div class="max-w-3xl mx-auto">

    <!-- Header -->
    <div class="flex flex-col md:flex-row items-start gap-8 mb-12">
      <div class="shrink-0">
        <div class="w-40 h-40 rounded-2xl overflow-hidden bg-stone-200 shadow-sm">
 
<img
src="/images/photo-back.jpg"
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

    <!-- Personal Story -->
    <div class="space-y-5">

      <p class="text-stone-700 text-base md:text-lg leading-[1.8]">
        Hi, I'm Memphis, an HCI researcher from China with a background
        spanning
        <strong class="font-semibold text-stone-800">
          computer science, design, engineering, and the humanities
        </strong>.
      </p>

      <p class="text-stone-700 text-base md:text-lg leading-[1.8]">
        Growing up, I was fascinated by
        <strong class="font-semibold text-stone-800">Iron Man</strong>
        and
        <strong class="font-semibold text-stone-800">Star Trek</strong>.
        I dreamed of a world where we could interact with technology freely,
        without being tied to screens or conventional devices.
      </p>

      <p class="text-stone-700 text-base md:text-lg leading-[1.8]">
        I started out studying computer science, but something felt missing.
        It wasn't until I stumbled upon an introductory
        <strong class="font-semibold text-stone-800">
          Human-Computer Interaction
        </strong>
        course that I realized what I had been looking for all along.
      </p>

      <p class="text-stone-700 text-base md:text-lg leading-[1.8]">
        In Australia, I explored different corners of HCI and discovered
        my passion for
        <strong class="font-semibold text-stone-800">
          embodied and tangible interaction
        </strong>.
        Years later, in the US, I found myself working with
        <a
          href="https://www.ken-nakagaki.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-stone-800"
          style="text-decoration: underline; text-underline-offset: 4px;"
        >Ken Nakagaki</a>,
        whose
        <a
          href="https://doi.org/10.1145/2858036.2858104"
          target="_blank"
          rel="noopener noreferrer"
          class="italic text-stone-800"
          style="text-decoration: underline; text-underline-offset: 4px;"
        >Materiable</a>
        project I had first encountered in that same introductory HCI course.
        Funny how things come full circle!
      </p>

      <p class="text-stone-700 text-base md:text-lg leading-[1.8]">
        Along the way, living and studying across
        <strong class="font-semibold text-stone-800">
          China, Australia, Switzerland, and the US
        </strong>
        has made me appreciate different perspectives and unexpected
        connections. I believe the most exciting ideas happen when
        different worlds collide, and that's exactly where I want to be.
      </p>

    </div>

    <Separator class="my-10" />


<!-- Education -->
<div>
  <h2 class="font-display text-2xl italic text-stone-800 mb-8">
    Education
  </h2>

  <div class="space-y-10">

    <!-- University of Chicago -->
    <div>
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800 text-lg">
          University of Chicago
        </h3>
        <span class="text-sm text-stone-400 whitespace-nowrap">
          2025 – 2027 (Expected)
        </span>
      </div>

      <p class="text-stone-700 mt-1">
        <a
          href="https://digitalstudies.uchicago.edu/overview/masters-program/digital-media/"
          target="_blank"
          rel="noopener noreferrer"
          class="education-link"
        >M.A. in Digital Studies</a>
      </p>

      <p class="text-sm text-stone-500 mt-1">
        Digital Media & Extended Reality Track
      </p>

      <p class="text-sm text-stone-600 mt-2">
        Research Advisor:
        <a
          href="https://www.ken-nakagaki.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="education-link"
        >Prof. Ken Nakagaki</a>
      </p>

      <p class="text-sm text-stone-600 mt-3 leading-[1.8]">
        <span class="font-medium text-stone-700">Coursework:</span>
        Embodied AI Interfaces,
        Actuated User Interfaces and Technology,
        Human-Robot Interaction: Research and Practice,
        Data Management for the Humanities,
        Data Visualization for the Humanities.
      </p>
    </div>

    <!-- University of Queensland -->
    <div>
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800 text-lg">
          University of Queensland, Australia
        </h3>
        <span class="text-sm text-stone-400 whitespace-nowrap">
          2021 – 2024
        </span>
      </div>

      <p class="text-stone-700 mt-1">
        <a
          href="https://study.uq.edu.au/study-options/programs/bachelor-information-technology-2570"
          target="_blank"
          rel="noopener noreferrer"
          class="education-link"
        >Bachelor of Information Technology</a>
      </p>

      <p class="text-sm text-stone-500 mt-1">
        Major in
        <a
          href="https://eecs.uq.edu.au/human-centred-computing"
          target="_blank"
          rel="noopener noreferrer"
          class="education-link"
        >User Experience Design</a>
      </p>

      <p class="text-sm text-stone-600 mt-3 leading-[1.8]">
        <span class="font-medium text-stone-700">Coursework:</span>
        Design Thinking,
        Digital Prototyping and Extended Reality,
        Social and Mobile Computing,
        Physical Computing Studio,
        Information Visualisation,
        Design Computing Studio I, II, III
        (Interactive Technology, Interaction Design, Build),
        Discrete Mathematics,
        Information Systems.
      </p>
    </div>

<!-- University of Zurich -->
<div>
  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
    <h3 class="font-semibold text-stone-800 text-lg">
      University of Zurich, Switzerland
    </h3>
    <span class="text-sm text-stone-400 whitespace-nowrap">
      Jun – Aug 2022
    </span>
  </div>

  <p class="text-stone-700 mt-1">
    <a
      href="https://www.blockchain.uzh.ch/"
      target="_blank"
      rel="noopener noreferrer"
      class="education-link"
    >UZH Blockchain Center</a>
  </p>

  <p class="text-sm text-stone-500 mt-1">
    Summer Session in Blockchain Technology
  </p>

  <p class="text-sm text-stone-600 mt-3 leading-[1.8]">
    <span class="font-medium text-stone-700">Coursework:</span>
    Blockchain Technology,
    Blockchain Law,
    Human-Centered Blockchain.
  </p>
</div>


  </div>
</div>

<Separator class="my-10" />
    <!-- Research & Teaching -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-8">
        Research & Teaching Experience
      </h2>

      <div class="space-y-10">

        <!-- AXLab -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <h3 class="font-semibold text-stone-800 text-lg">
              Graduate Researcher
            </h3>
            <span class="text-sm text-stone-400 whitespace-nowrap">
              2026 – Present
            </span>
          </div>

          <p class="text-stone-700 mt-1">
            <a
              href="https://www.axlab.cs.uchicago.edu/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-stone-800"
              style="text-decoration: underline; text-underline-offset: 4px;"
            >Actuated Experience Lab (AxLab)</a>,
            University of Chicago
          </p>

          <p class="text-sm text-stone-500 mt-2 leading-relaxed">
            Exploring tangible and actuated interfaces through haptic interaction,
            shape-changing Interfaces, and interactive systems. Developing authoring
            tools and conducting user studies to investigate expressive physical
            interactions.
          </p>
        </div>

        <!-- Teaching -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <h3 class="font-semibold text-stone-800 text-lg">
              Teaching Assistant
            </h3>
            <span class="text-sm text-stone-400 whitespace-nowrap">
              2024
            </span>
          </div>

          <p class="text-stone-700 mt-1">
            University of Queensland
          </p>

          <p class="text-sm text-stone-500 mt-1">
            DECO3801/7381 Design Computing Studio 3: Build
          </p>

          <p class="text-sm text-stone-500 mt-2 leading-relaxed">
            Mentored 24 students across four project groups,
            supporting interaction design, user research,
            and usability evaluation.
          </p>
        </div>

      </div>
    </div>

    <Separator class="my-10" />

   
<!-- Selected Highlights -->
<div>
  <h2 class="font-display text-2xl italic text-stone-800 mb-8">
    Selected Highlights
  </h2>

  <div class="space-y-7">

    <!-- 2026 Scholarship -->
    <div>
      <div class="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800">
          Merit Tuition Scholarship
        </h3>
        <span class="text-sm text-stone-400">2026</span>
      </div>

      <p class="text-sm text-stone-500 mt-1">
        University of Chicago (50%, $34,272)
      </p>
    </div>

    <!-- 2025 Scholarship -->
    <div>
      <div class="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800">
          Merit Scholarship
        </h3>
        <span class="text-sm text-stone-400">2025</span>
      </div>

      <p class="text-sm text-stone-500 mt-1">
        University of Chicago ($12,000)
      </p>
    </div>

    <!-- South Side Science Festival -->
    <div>
      <div class="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800">
          South Side Science Festival
        </h3>
        <span class="text-sm text-stone-400">2026</span>
      </div>

      <p class="text-sm text-stone-500 mt-1">
        Research Demonstrator, Interactive Haptic Interfaces,
        University of Chicago
      </p>
    </div>

    <!-- Groove Music Cube -->
    <div>
      <div class="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
        <h3 class="font-semibold text-stone-800">
          <a
            href="https://www.eait.uq.edu.au/files/54989/2025%20EngDesCompArchPlan%20Study%20Guide.pdf#page=24"
            target="_blank"
            rel="noopener noreferrer"
            class="highlight-link"
          >Groove Music Cube</a>
        </h3>

        <span class="text-sm text-stone-400">2025</span>
      </div>

      <p class="text-sm text-stone-500 mt-1 leading-relaxed">
        Featured in the University of Queensland's
        2025 Engineering, Design, Computing, Architecture and Planning
        Undergraduate Programs Guide, p. 22.
      </p>
    </div>

  </div>
</div>


    <Separator class="my-10" />

    <!-- Get in Touch -->
    <div>
      <h2 class="font-display text-2xl italic text-stone-800 mb-4">
        Get in Touch
      </h2>

      <p class="text-stone-600 mb-4">
        Feel free to reach out at
        <a
          href={`mailto:${personalInfo.email}`}
          class="text-accent hover:underline"
        >
          {personalInfo.email}
        </a>
      </p>

      <div class="flex items-center gap-3 mb-6">

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


<!-- Academic CV -->
<div class="flex flex-wrap items-center gap-2">
  <a
    href="https://drive.google.com/file/d/1-xAEY74UI1zekbqVOInSVmvQfT7zRmLe/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    class="font-medium text-stone-800"
    style="text-decoration: underline; text-underline-offset: 4px;"
  >
    Academic CV (PDF)
  </a>

  <span class="text-sm text-stone-400">
    (Password available upon request)
  </span>
</div>


    </div>

  </div>
</section>

<style>
  .education-link {
    color: inherit;
    text-decoration-line: underline;
    text-decoration-color: #a8a29e;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    transition:
      color 0.2s ease,
      text-decoration-color 0.2s ease;
  }

  .education-link:hover {
    color: #292524;
    text-decoration-color: #292524;
  }


.highlight-link {
  color: inherit;
  text-decoration-line: underline;
  text-decoration-color: #a8a29e;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  transition:
    color 0.2s ease,
    text-decoration-color 0.2s ease;
}

.highlight-link:hover {
  color: #292524;
  text-decoration-color: #292524;
}

</style>
