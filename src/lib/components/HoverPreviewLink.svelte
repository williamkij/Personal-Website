
<script lang="ts">
    let {
      label,
      href,
      previewTitle,
      previewText,
      previewImage = '',
      previewType = 'website'
    }: {
      label: string;
      href: string;
      previewTitle: string;
      previewText: string;
      previewImage?: string;
      previewType?: 'website' | 'image';
    } = $props();
  
    let isOpen = $state(false);
  </script>
  
  <span
    class="preview-wrapper"
    onmouseenter={() => (isOpen = true)}
    onmouseleave={() => (isOpen = false)}
  >
    <a
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class="preview-link"
      onfocus={() => (isOpen = true)}
      onblur={() => (isOpen = false)}
      aria-label={label}
    >
      {label}
    </a>
  
    {#if isOpen}
      <span class="preview-card" role="tooltip">
  
        <!-- Glass reflection -->
        <span class="glass-shine"></span>
  
        <!-- Visual preview -->
        <span
          class="preview-visual"
          class:portrait={previewType === 'image'}
        >
          {#if previewType === 'image' && previewImage}
            <img
              src={previewImage}
              alt={previewTitle}
              class="portrait-image"
            />
          {:else if previewType === 'website'}
            <iframe
              src={href}
              title={`${previewTitle} website preview`}
              class="website-frame"
              loading="lazy"
              tabindex="-1"
            ></iframe>
          {:else}
            <span class="visual-placeholder">
              <span class="placeholder-orb"></span>
              <span class="placeholder-text">
                {previewTitle}
              </span>
            </span>
          {/if}
        </span>
  
        <!-- Text content -->
        <span class="preview-content">
          <span class="preview-title">
            {previewTitle}
          </span>
  
          <span class="preview-description">
            {previewText}
          </span>
        </span>
  
      </span>
    {/if}
  </span>
  
  <style>
    /* Link */
    .preview-wrapper {
      position: relative;
      display: inline;
    }
  
    .preview-link {
      color: #292524;
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: #78716c;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
  
      transition:
        color 0.3s ease,
        text-shadow 0.3s ease;
    }
  
    .preview-link:hover,
    .preview-link:focus-visible {
      color: #111827;
      text-shadow: 0 0 8px rgba(120, 113, 108, 0.22);
    }
  
    /* Liquid Glass card */
    .preview-card {
      position: absolute;
      z-index: 100;
      bottom: calc(100% + 20px);
      left: 50%;
  
      display: flex;
      flex-direction: column;
  
      width: 290px;
      padding: 8px;
  
      border-radius: 23px;
      border: 1px solid rgba(255, 255, 255, 0.85);
  
      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.82),
        rgba(245, 245, 250, 0.58)
      );
  
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
  
      box-shadow:
        0 20px 50px rgba(40, 40, 60, 0.13),
        0 4px 12px rgba(0, 0, 0, 0.04),
        inset 0 1px 1px rgba(255, 255, 255, 0.95),
        inset 0 -1px 1px rgba(255, 255, 255, 0.35);
  
      overflow: hidden;
      pointer-events: none;
      text-align: left;
      white-space: normal;
  
      animation: glass-appear 0.35s
        cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }
  
    /* Glass highlight */
    .glass-shine {
      position: absolute;
      inset: 0;
      border-radius: inherit;
  
      background: linear-gradient(
        125deg,
        rgba(255, 255, 255, 0.65),
        transparent 42%,
        rgba(255, 255, 255, 0.12)
      );
  
      pointer-events: none;
      z-index: 2;
    }
  
    /* Visual container */
    .preview-visual {
      position: relative;
      display: block;
      width: 100%;
      height: 135px;
  
      overflow: hidden;
      border-radius: 16px;
  
      background: linear-gradient(
        135deg,
        #e9e7f2,
        #dbeafe,
        #f5f3ff
      );
    }
  
    /* Portrait layout */
    .preview-visual.portrait {
      height: 180px;
    }
  
    .portrait-image {
      display: block;
      width: 100%;
      height: 100%;
  
      object-fit: cover;
      object-position: center 30%;
    }
  
    /* Website iframe */
    .website-frame {
      display: block;
      width: 1000px;
      height: 650px;
      border: none;
  
      transform: scale(0.274);
      transform-origin: top left;
  
      pointer-events: none;
    }
  
    /* Placeholder */
    .visual-placeholder {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
  
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  
    .placeholder-orb {
      position: absolute;
      width: 150px;
      height: 150px;
  
      border-radius: 50%;
  
      background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.95),
        rgba(170, 170, 220, 0.5),
        rgba(120, 140, 190, 0.18)
      );
  
      filter: blur(3px);
      animation: orb-float 5s ease-in-out infinite;
    }
  
    .placeholder-text {
      position: relative;
      z-index: 1;
      max-width: 220px;
      padding: 15px;
  
      font-size: 17px;
      font-weight: 600;
      line-height: 1.35;
  
      color: #464354;
      text-align: center;
    }
  
    /* Content */
    .preview-content {
      display: flex;
      flex-direction: column;
      gap: 7px;
  
      padding: 12px 12px 14px;
  
      position: relative;
      z-index: 3;
    }
  
    .preview-title {
      font-size: 16px;
      font-weight: 650;
      line-height: 1.35;
      color: #292524;
    }
  
    .preview-description {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.55;
      color: #57534e;
    }
  
    /* Animations */
    @keyframes glass-appear {
      from {
        opacity: 0;
        transform:
          translateX(-50%)
          translateY(12px)
          scale(0.94);
        filter: blur(5px);
      }
  
      to {
        opacity: 1;
        transform:
          translateX(-50%)
          translateY(0)
          scale(1);
        filter: blur(0);
      }
    }
  
    @keyframes orb-float {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
  
      50% {
        transform: translateY(-10px) scale(1.08);
      }
    }
  
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .preview-card,
      .placeholder-orb {
        animation: none;
      }
  
      .preview-card {
        transform: translateX(-50%);
      }
  
      .preview-link {
        transition: none;
      }
    }
  
    @media (hover: none) {
      .preview-card {
        display: none;
      }
    }
  </style>
  