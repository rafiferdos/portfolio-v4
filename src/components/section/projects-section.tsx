import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import ProjectsGallery from "../projects-gallery";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                My Projects
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsGallery projects={DATA.projects} />
        </BlurFade>
      </div>
    </section>
  );
}