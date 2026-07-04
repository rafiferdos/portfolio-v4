<div align="center">
  <img alt="Portfolio preview" src="/public/portfolio-view.png" width="100%" />
</div>

# Rafi Ferdos Portfolio

A personal portfolio and blog built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Magic UI, and Content Collections.

Live site: https://rafi-v4.vercel.app

## Overview

This site showcases:

- A hero section with profile summary and avatar
- About, work experience, education, skills, projects, and contact sections
- A blog powered by MDX content in the `content/` directory
- Dark/light theme support
- Responsive layouts and smooth entrance animations

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Magic UI
- Content Collections
- MDX
- react-markdown
- next-themes

## Project Structure

- `src/app` - App Router pages and layouts
- `src/components` - UI, section, and Magic UI components
- `src/data/resume.tsx` - Portfolio content and personal data
- `content/` - MDX blog posts
- `public/` - Static assets such as images and fonts

## Features

- Portfolio sections driven from a single data file
- Blog with pagination
- SEO metadata and Open Graph images
- Responsive design for desktop and mobile
- Theme toggle support
- Reusable UI components and motion effects

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm

### Install dependencies

```bash
pnpm install