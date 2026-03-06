
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/cv" | "/projects" | "/projects/[slug]";
		RouteParams(): {
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/about": Record<string, never>;
			"/cv": Record<string, never>;
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/cv" | `/projects/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/favicon.png" | "/images/.DS_Store" | "/images/avatar.jpg" | "/images/github-icon.svg" | "/images/linkedin-icon.svg" | "/images/photo-back.jpg" | "/images/playground/.DS_Store" | "/images/playground/Met.jpg" | "/images/playground/child.png" | "/images/playground/frog.jpg" | "/images/playground/map.jpg" | "/images/playground/walk.jpg" | "/images/playground/world.jpg" | "/images/projects/.DS_Store" | "/images/projects/Qlight+EZmenu Interactive environment.mp4" | "/images/projects/Qlight.jpg" | "/images/projects/cube-1.jpg" | "/images/projects/cube-2.jpg" | "/images/projects/cube-3.jpg" | "/images/projects/cube-4.jpg" | "/images/projects/cube-5.jpg" | "/images/projects/cube-6.png" | "/images/projects/cube.jpg" | "/images/projects/eldome-1.jpg" | "/images/projects/eldome-10.jpg" | "/images/projects/eldome-2.jpg" | "/images/projects/eldome-3.jpg" | "/images/projects/eldome-4.jpg" | "/images/projects/eldome-5.jpg" | "/images/projects/eldome-6.jpg" | "/images/projects/eldome-7.jpg" | "/images/projects/eldome-8.jpg" | "/images/projects/eldome-9.jpg" | "/images/projects/eldome.jpg" | "/images/projects/ez-proto-1.jpg" | "/images/projects/ez-proto-2.jpg" | "/images/projects/ez-proto-3.jpg" | "/images/projects/ez-proto-4.jpg" | "/images/projects/ez-proto-5.jpg" | "/images/projects/ez-proto-6.jpg" | "/images/projects/groove-music-cube.mp4" | "/images/projects/irecycle-detail.jpg" | "/images/projects/irecycle-hifi.jpg" | "/images/projects/irecycle-lofi.jpg" | "/images/projects/irecycle.jpg" | string & {};
	}
}