"use client";

import BlurFade from "@/components/magicui/blur-fade";
import ProjectDetailsModal from "@/components/project-details-modal";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

type Project = (typeof DATA.projects)[number];

type ProjectsGalleryProps = {
  projects: readonly Project[];
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              project={project}
              onOpen={setSelectedProject}
              className="h-full"
            />
          </BlurFade>
        ))}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}