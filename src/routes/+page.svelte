<script lang="ts">
  import Hero from "@/components/Hero.svelte";
  import FeaturedProjects from "@/components/FeaturedProjects.svelte";
  import Playground from "@/components/Playground.svelte";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext("2d")!;
    let ripples: { x: number; y: number; radius: number; opacity: number }[] =
      [];
    let trail: { x: number; y: number; opacity: number }[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      // Add ripple
      ripples.push({ x: e.pageX, y: e.pageY, radius: 0, opacity: 0.3 });
      // Add trail dot
      trail.push({ x: e.pageX, y: e.pageY, opacity: 0.5 });
      if (trail.length > 30) trail.shift();
    }
    window.addEventListener("mousemove", onMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trail
      for (let i = 0; i < trail.length; i++) {
        const t = trail[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, 3 * (i / trail.length), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 120, 120, ${t.opacity * (i / trail.length)})`;
        ctx.fill();
        t.opacity -= 0.008;
      }
      trail = trail.filter((t) => t.opacity > 0);

      // Draw ripples
      for (const r of ripples) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150, 150, 150, ${r.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        r.radius += 1.5;
        r.opacity -= 0.005;
      }
      ripples = ripples.filter((r) => r.opacity > 0);

      requestAnimationFrame(animate);
    }
    animate();

    // Update canvas height on scroll
    const observer = new ResizeObserver(resize);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="absolute top-0 left-0 pointer-events-none z-[1]"
></canvas>

<Hero />
<FeaturedProjects />
<Playground />
