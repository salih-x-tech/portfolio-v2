# Portfolio V2

## Project Overview

Portfolio V2 is a professional, interactive 3D portfolio website
for Salih Hayat, a Computer Science student and aspiring software
developer.

The portfolio will showcase projects, technical skills, experience,
and software engineering capabilities while providing recruiters
and potential freelance clients with an easy way to understand
Salih's work and contact him.

---

## Problem

A traditional developer portfolio often presents information
without clearly communicating:

- What problems the developer can solve
- What the developer has built
- How the developer thinks about software
- What technologies the developer can work with
- How a recruiter or client can contact the developer

Portfolio V2 will solve this by presenting projects as real
engineering work, including the problem, solution, technologies,
features, challenges, and results.

---

## Target Users

### 1. Recruiters

Recruiters should quickly understand:

- Who the developer is
- Technical skills
- Projects
- Experience
- How to contact the developer

### 2. Freelance Clients

Clients should understand:

- What problems the developer can solve
- Previous work
- Services
- Technical capabilities
- How to start a project

### 3. Technical Visitors

Developers should be able to explore:

- Technologies used
- Project architecture
- Engineering decisions
- Source code
- Development process

---

## Product Goals

1. Create a strong first impression.
2. Showcase real software projects.
3. Explain the problems solved by each project.
4. Demonstrate technical and software engineering skills.
5. Make contacting the developer easy.
6. Allow projects to be added and managed dynamically.
7. Provide a responsive experience across devices.
8. Maintain good performance despite the 3D experience.

---

## Core Features

### Portfolio

- Hero section
- About section
- Skills section
- Experience section
- Projects section
- Contact section
- Footer

### Projects

- Project listing
- Project details
- Project categories
- Technologies
- GitHub link
- Live demo
- Screenshots
- Problem and solution

### Admin

- Admin authentication
- Add project
- Edit project
- Delete project
- Upload project images
- Mark projects as featured

---

## 3D Experience

3D will be used to enhance the portfolio experience.

The 3D experience must not sacrifice:

- Usability
- Performance
- Accessibility
- Mobile responsiveness
- Readability

3D is a visual differentiator, not the primary purpose of the website.

---

## Planned Technology

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### 3D and Animation

- Three.js
- React Three Fiber
- Drei
- GSAP
- Framer Motion

### Backend

- Next.js server-side functionality
- API endpoints

### Database

- MongoDB
- Mongoose

### Media

- Cloudinary

### Deployment

- Vercel
- MongoDB Atlas

---

## Development Method

The project will be developed using a software engineering workflow:

1. Requirements
2. Research
3. System Design
4. UI/UX Design
5. Development
6. Testing
7. Deployment
8. Documentation

Development will be performed in small steps.

Each feature will be:

- Planned
- Implemented
- Tested
- Reviewed
- Committed to Git

---

## Development Rules

- Build from scratch.
- Understand before implementing.
- Work on one task at a time.
- Keep the architecture modular.
- Write clean and maintainable code.
- Test features before moving forward.
- Use meaningful Git commits.
- Prioritize accessibility and performance.
- Do not add unnecessary features.
- Do not sacrifice usability for visual effects.

---

## Project Status

Current Phase: Sprint 0 — Discovery

Current Task: Project Charter

Completed:

- Project folder created
- Initial product definition
- Target users identified
- Product goals identified
- Core features identified


---

## Functional Requirements

### FR-001 — Portfolio Presentation

The system shall allow visitors to view the developer's:

- Introduction
- About information
- Technical skills
- Experience
- Projects
- Contact information

### FR-002 — Project Listing

The system shall display a list of projects with:

- Project title
- Description
- Technologies
- Project image
- GitHub link
- Live demo link

### FR-003 — Project Details

The system shall allow visitors to open an individual project and
view detailed information about:

- Problem
- Solution
- Features
- Technologies
- Development challenges
- Screenshots
- GitHub repository
- Live demo

### FR-004 — Project Management

The system shall allow an authenticated administrator to:

- Add projects
- Edit projects
- Delete projects
- Mark projects as featured

### FR-005 — Project Media

The system shall allow the administrator to upload project images
for use in the portfolio.

### FR-006 — Admin Authentication

The system shall require authentication before allowing access
to project management functionality.

### FR-007 — Contact

The system shall provide visitors with a way to contact the
developer.

### FR-008 — Responsive Interface

The system shall provide an interface that works across:

- Desktop
- Tablet
- Mobile

---

## Non-Functional Requirements

### NFR-001 — Performance

The portfolio should provide a fast and smooth user experience,
including on devices with limited hardware.

### NFR-002 — Responsive Design

The interface should adapt appropriately to different screen
sizes and input devices.

### NFR-003 — Accessibility

Important content and functionality should remain accessible
to users using keyboards, screen readers, or reduced-motion
preferences.

### NFR-004 — Security

Administrative functionality and sensitive data must be protected
using appropriate authentication, authorization, validation,
and secure environment variables.

### NFR-005 — Maintainability

The application should use a modular architecture that makes it
easy to add or modify features.

### NFR-006 — Scalability

The project architecture should allow additional projects,
content, and features to be added without major changes to the
existing system.

### NFR-007 — SEO

Important portfolio content should be available to search engines
and use appropriate metadata.

### NFR-008 — 3D Performance

3D effects should enhance the experience without significantly
reducing usability or performance.

### NFR-009 — Cross-Browser Compatibility

The portfolio should work correctly on modern browsers.

### NFR-010 — Reliability

The application should handle expected errors gracefully and
avoid exposing sensitive implementation details to visitors.


---

## MVP Scope

The first production release will focus on the essential features
required to present the developer professionally and allow projects
to be managed dynamically.

### MVP Features

- Responsive portfolio website
- Hero section
- About section
- Skills section
- Experience section
- Projects section
- Project filtering
- Project detail pages
- Interactive 3D hero experience
- Project management system
- Admin authentication
- Add project
- Edit project
- Delete project
- Featured projects
- Project image upload
- Contact functionality
- Basic SEO
- Mobile responsiveness
- Accessibility considerations
- Performance optimization

### Post-MVP Features

- Blog
- GitHub activity integration
- Certificates and achievements
- Testimonials
- Analytics

### Out of Scope for MVP

- AI chatbot
- Voice assistant
- Complex WebGL environments
- Music
- Gamification
- Multiplayer features


---

## User Stories

### Recruiter

#### US-001 — Discover Developer

As a recruiter, I want to quickly understand who the developer is,
so that I can decide whether his profile matches the role.

#### US-002 — View Skills

As a recruiter, I want to see the developer's technical skills,
so that I can evaluate his technical capabilities.

#### US-003 — Explore Projects

As a recruiter, I want to view completed projects,
so that I can evaluate the developer's practical experience.

#### US-004 — View Project Details

As a recruiter, I want to understand the problem, solution,
technologies, and challenges behind a project,
so that I can evaluate the developer's engineering ability.

#### US-005 — Contact Developer

As a recruiter, I want an easy way to contact the developer,
so that I can discuss a potential opportunity.

---

### Freelance Client

#### US-006 — Understand Services

As a potential client, I want to understand what problems the
developer can solve, so that I can determine whether he can help
with my project.

#### US-007 — Review Previous Work

As a potential client, I want to see previous projects,
so that I can evaluate the quality of the developer's work.

#### US-008 — View Live Project

As a potential client, I want to open a live project,
so that I can experience the result myself.

#### US-009 — Contact Developer

As a potential client, I want an easy way to contact the developer,
so that I can discuss my requirements.

---

### Technical Visitor

#### US-010 — Explore Technology

As a developer, I want to see the technologies used in projects,
so that I can understand the developer's technical experience.

#### US-011 — View Engineering Details

As a developer, I want to understand how a project was designed
and implemented, so that I can evaluate the developer's technical
thinking.

#### US-012 — View Source Code

As a developer, I want to access the project's source code,
so that I can inspect the implementation.

---

### Administrator

#### US-013 — Authenticate

As an administrator, I want to securely log in,
so that only I can manage portfolio content.

#### US-014 — Add Project

As an administrator, I want to add a new project,
so that I can keep my portfolio updated.

#### US-015 — Edit Project

As an administrator, I want to edit an existing project,
so that I can correct or update its information.

#### US-016 — Delete Project

As an administrator, I want to delete a project,
so that outdated or unwanted projects can be removed.

#### US-017 — Feature Project

As an administrator, I want to mark projects as featured,
so that I can highlight my best work on the homepage.


---

## User Flows

### Recruiter Flow

1. Open portfolio.
2. View hero and introduction.
3. Understand developer's role and capabilities.
4. Explore featured projects.
5. Open an interesting project.
6. Read the project case study.
7. View GitHub repository or live demo.
8. Review skills and experience.
9. Contact the developer.

### Freelance Client Flow

1. Open portfolio.
2. Understand what problems the developer can solve.
3. Explore capabilities and services.
4. Review previous projects.
5. Open a relevant project.
6. Understand the problem and solution.
7. View the live demo.
8. Contact the developer.

### Technical Visitor Flow

1. Open portfolio.
2. Explore projects.
3. Open a project.
4. Review technologies and architecture.
5. Read engineering details.
6. Visit the GitHub repository.

### Administrator Flow

1. Open admin login.
2. Enter credentials.
3. Authenticate.
4. Access admin dashboard.
5. View projects.
6. Create, update, or delete projects.
7. Mark projects as featured.
8. Upload project media.
9. Save changes to the database.
10. Updated content becomes available on the portfolio.

---

## CRUD Operations. 

The project management system will support:

- Create — Add a project
- Read — View projects
- Update — Edit a project
- Delete — Remove a project


---

## Sitemap

### Public Routes

- `/` — Home
- `/projects` — All Projects
- `/projects/[slug]` — Project Details
- `/about` — About
- `/contact` — Contact

### Admin Routes

- `/admin/login` — Admin Login
- `/admin/dashboard` — Admin Dashboard
- `/admin/projects` — Project Management
- `/admin/projects/new` — Create Project
- `/admin/projects/[id]/edit` — Edit Project

---

## Home Page Structure

The homepage will initially contain:

1. Navbar
2. Hero
3. About
4. Skills
5. Experience
6. Featured Projects
7. Services / Capabilities
8. Contact
9. Footer

The Hero section will contain the primary interactive 3D
experience.

---

## Architecture Principles

### Public and Admin Separation

Public portfolio functionality and administrative functionality
will be logically separated.

### Dynamic Projects

Project detail pages will use dynamic routes based on project
slugs rather than creating a separate page for every project.

### Reusable Components

Common UI elements will be implemented as reusable components.

### Data-Driven Content

Projects and other dynamic content should be stored as data rather
than hard-coded into individual pages.

### Progressive Enhancement

3D and advanced animations should enhance the core experience
without preventing visitors from accessing important information.


---

## Data & Content Planning

### Project

Each project will contain the following information:

- `title` — Project name
- `slug` — URL-friendly identifier
- `shortDescription` — Short project summary
- `description` — Detailed project overview
- `problem` — Problem the project solves
- `solution` — How the project solves the problem
- `category` — Project category
- `technologies` — Technologies used
- `features` — Main project features
- `challenges` — Technical challenges encountered
- `learning` — Lessons learned
- `images` — Project screenshots and media
- `githubUrl` — Source code URL
- `liveUrl` — Live project URL
- `featured` — Whether the project appears in featured projects
- `createdAt` — Project creation date

### Other Planned Data

#### Skills

- `name`
- `category`
- `icon`
- `level`

#### Experience

- `company`
- `role`
- `description`
- `startDate`
- `endDate`
- `technologies`

#### Certificates

- `title`
- `issuer`
- `date`
- `image`
- `credentialUrl`

#### Contact Messages

- `name`
- `email`
- `subject`
- `message`
- `createdAt`

### Initial Dynamic Content

The first dynamic content system will focus on projects.

Other content will initially remain static unless there is a
clear reason to make it dynamic.


---

## Technology Decisions

### Next.js

Next.js will be used as the primary application framework.

Reasons:

- React-based
- File-based routing
- Server-side capabilities
- SEO support
- Production-ready tooling
- Can support both frontend and backend functionality

### React

React will be used to build the user interface using reusable
components.

### TypeScript

TypeScript will provide static typing and improve code
maintainability and developer experience.

### Tailwind CSS

Tailwind CSS will be used for responsive and maintainable UI
styling.

### Three.js

Three.js will provide the underlying 3D rendering capabilities.

### React Three Fiber

React Three Fiber will allow Three.js scenes to be integrated
with the React application.

### Framer Motion

Framer Motion will be used for UI-level animations where
appropriate.

### GSAP

GSAP may be used for advanced animation timelines where it
provides a clear benefit over simpler animation approaches.

### MongoDB

MongoDB will store dynamic portfolio data such as projects.

### Mongoose

Mongoose will provide schemas, models, validation, and structured
interaction with MongoDB.

### Cloudinary

Cloudinary will store project images and other media assets.

### Vercel

Vercel will be used for application deployment.

---

## Architecture Decision Records

### ADR-001 — Use Next.js as the Application Framework

#### Status

Accepted

#### Decision

Use Next.js as the primary framework for Portfolio V2.

#### Reason

The portfolio requires a modern React frontend, routing, SEO,
server-side functionality, and a small backend. Using Next.js
allows these capabilities to exist within a single application
while reducing unnecessary project complexity.

---

### ADR-002 — Use TypeScript

#### Status

Accepted

#### Decision

Use TypeScript instead of plain JavaScript.

#### Reason

TypeScript provides static type checking, improves maintainability,
and helps identify many errors during development.

---

### ADR-003 — Use MongoDB for Dynamic Portfolio Data

#### Status

Accepted

#### Decision

Use MongoDB to store dynamic portfolio data.

#### Reason

Project data contains nested and flexible structures such as
technologies, features, challenges, and images. MongoDB provides
a suitable document-oriented structure for this type of data.

---

### ADR-004 — Use Cloudinary for Media

#### Status

Accepted

#### Decision

Use Cloudinary for project images and media.

#### Reason

Media files should not be stored directly inside the application
repository or database. Cloudinary provides dedicated media
storage and delivery capabilities.

---

### ADR-005 — 3D as Progressive Enhancement

#### Status

Accepted

#### Decision

3D will enhance the portfolio rather than become a requirement
for accessing its content.

#### Reason

The portfolio must remain usable, responsive, accessible, and
performant even when advanced 3D effects are unavailable or
disabled.



---

## Risk Register

| ID | Risk | Impact | Probability | Mitigation |
|----|------|--------|-------------|------------|
| R-001 | 3D performance problems | High | Medium | Optimize 3D assets, limit complexity, test on mobile |
| R-002 | Project becomes too complex | High | Medium | Build MVP first and use incremental development |
| R-003 | Scope creep | High | High | Maintain MVP, Post-MVP, and Future Ideas lists |
| R-004 | Admin security vulnerabilities | High | Medium | Authentication, authorization, validation, secure sessions |
| R-005 | Large media files | Medium | Medium | Use Cloudinary and optimize images |
| R-006 | Database/API failures | High | Medium | Validation, error handling, loading and error states |
| R-007 | Poor mobile experience | High | Medium | Test mobile throughout development |
| R-008 | Accessibility problems | Medium | Medium | Semantic HTML, keyboard support, contrast, reduced motion |
| R-009 | Production deployment failures | High | Medium | Test deployment early and manage environment variables carefully |



---

## Folder & Component Architecture

### Application Routes

The `app/` directory will contain route-level pages and
application layouts.

### Components

The `components/` directory will contain reusable UI components.

#### UI Components

`components/ui/`

Small reusable interface components such as:

- Button
- Card
- Modal
- Input
- Badge

#### Layout Components

`components/layout/`

Application-wide components such as:

- Navbar
- Footer
- Mobile navigation

#### Project Components

`components/projects/`

Components related to displaying and managing projects.

#### Page Sections

`components/sections/`

Major homepage sections such as:

- Hero
- About
- Skills
- Experience
- Featured Projects
- Contact

#### 3D Components

`components/three/`

Components responsible for the interactive 3D experience.

#### Admin Components

`components/admin/`

Components used by the administration interface.

### Library

The `lib/` directory will contain reusable application logic such
as database connections, authentication utilities, Cloudinary
utilities, and general helper functions.

### Database Models

The `models/` directory will contain MongoDB/Mongoose models.

### Types

The `types/` directory will contain shared TypeScript types and
interfaces.

---

## Separation of Concerns

The project will follow separation of concerns.

UI components should primarily be responsible for presentation
and user interaction.

Database operations, authentication, media handling, and other
server-side logic should remain separated from presentation code.

Each file should have a clear and focused responsibility.



---

## Component Architecture

### Homepage Component Tree

The homepage will be composed of focused reusable components:

- Navbar
- Hero
  - HeroContent
  - Hero3DScene
- About
- Skills
- Experience
- FeaturedProjects
  - ProjectGrid
  - ProjectCard
- Services
- Contact
- Footer

### Component Responsibility

Each component should have a focused responsibility.

The homepage route should primarily compose components rather
than contain large amounts of implementation code.

### Server and Client Components

The application will use Next.js Server Components by default.

Client Components will only be introduced when browser-side
interactivity is required.

Examples of potential Client Components:

- Mobile navigation
- Interactive animations
- 3D scenes
- Interactive forms

Static and data-driven sections should remain Server Components
where possible.

### Principle

Use the smallest appropriate Client Component boundary rather
than converting entire pages to Client Components unnecessarily.



---

## Data Architecture

### Project Entity

Projects will contain structured information including:

- Title
- Slug
- Short description
- Full description
- Thumbnail
- Project images
- Technologies
- Features
- Problem
- Solution
- Challenges
- GitHub URL
- Live URL
- Category
- Featured status
- Project status
- Created date
- Updated date

### Project Data Flow

The project creation flow will be:

Admin
→ Project Form
→ Validation
→ Next.js API
→ Cloudinary / MongoDB
→ Project Created

The public portfolio will retrieve project data from the
application backend and display it through reusable components.

### Media Storage

Project images will be uploaded to Cloudinary.

MongoDB will store the resulting media URLs and project metadata.

### CRUD Operations

The admin system will support:

- Create projects
- Read projects
- Update projects
- Delete projects

Public users will have read-only access to project information.

### Project Slugs

Projects will use human-readable slugs for public URLs.

Example:

`/projects/socialsphere`

instead of exposing database IDs in the public URL.

### Featured Projects

Projects can be marked as featured.

Featured projects will be eligible for display on the homepage.

### Project Status

Projects may have statuses such as:

- Completed
- In Progress
- Archived

### Project Storytelling

Each project should communicate:

1. Problem
2. Solution
3. Technologies
4. Features
5. Challenges
6. Result

This allows the portfolio to demonstrate problem-solving ability
rather than simply listing completed projects.


---

## API Architecture

The application will use Next.js API route handlers to provide
controlled access between the UI and backend services.

### Project Endpoints

| Method | Endpoint | Purpose | Access |
|--------|----------|---------|--------|
| GET | `/api/projects` | Retrieve projects | Public |
| GET | `/api/projects/[slug]` | Retrieve a single project | Public |
| POST | `/api/projects` | Create a project | Admin |
| PUT | `/api/projects/[id]` | Update a project | Admin |
| DELETE | `/api/projects/[id]` | Delete a project | Admin |

### Public Operations

Visitors can retrieve project information through GET endpoints.

### Protected Operations

Creating, updating, and deleting projects requires authenticated
administrator access.

### API Request Flow

Request
→ Authentication
→ Validation
→ Business Logic
→ Database / External Service
→ Response

### Validation

API input will be validated on the server before database
operations are performed.

Invalid requests will return appropriate error responses.

### Error Handling

API routes will return structured responses with meaningful
success and error messages.

### Security Principle

The client must never have direct access to the MongoDB database.

All database operations will occur through controlled
server-side application logic.



---

## Authentication Architecture

The portfolio will have a protected administrator area for
managing projects.

### Public Users

Visitors can:

- View the homepage
- View projects
- View individual project details
- View about information
- Submit contact information

Public users cannot create, update, or delete projects.

### Administrator

The administrator can:

- Log in
- Access the admin dashboard
- Create projects
- Update projects
- Delete projects
- Manage project content

### Authentication Flow

Admin
→ Login
→ Server-side credential verification
→ Authenticated session
→ Admin Dashboard

### Authorization

Authentication determines who the user is.

Authorization determines whether the authenticated user is
allowed to perform a particular operation.

Project creation, updating, and deletion require administrator
authorization.

### Route Protection

Admin pages will require authentication.

Unauthenticated users attempting to access protected admin
pages will be redirected to the login page.

### API Protection

Protected API endpoints will independently verify authentication
and authorization.

Client-side UI restrictions will not be treated as security.

### Security Principles

- Never store plain-text passwords.
- Never expose secrets to the client.
- Never commit environment files containing secrets.
- Validate data on the server.
- Protect database operations on the server.
- Enforce authorization at the API/server level.


---

## 3D Experience Architecture

The portfolio will use a purposeful 3D experience to create a
premium visual identity while maintaining usability,
performance, accessibility, and professionalism.

### Planned Technology

- Three.js
- React Three Fiber
- @react-three/drei

Additional animation libraries may be introduced only when
they provide a clear benefit.

### 3D Component Boundary

3D functionality will be isolated inside:

`components/three/`

The 3D scene will not control the entire application UI.

The interface will remain standard React/HTML UI alongside the
3D experience.

### Hero 3D

The primary 3D experience will initially be placed in the Hero
section.

Possible interactions include:

- Subtle mouse interaction
- Scroll-based movement
- Object animation
- Camera movement

The final visual design will be determined during prototyping.

### Responsive Strategy

3D complexity will adapt to device capabilities.

Desktop may use the full experience.

Mobile and lower-powered devices may use a simplified scene
or reduced effects.

### Performance

The implementation will consider:

- Optimized 3D models
- Reduced polygon complexity
- Lazy loading
- Avoiding unnecessary renders
- Reduced effects on mobile
- Efficient asset loading

### Accessibility

The application will respect reduced-motion preferences and
will not rely on 3D interaction as the only way to access
important content.

### Design Principle

3D should enhance the developer portfolio rather than distract
from its content.

Content, usability, accessibility, and performance take
priority over visual effects.


---

## Technology Stack

### Core

- Next.js 16
- React
- TypeScript

### Styling

- Tailwind CSS
- Custom CSS where required

### 3D

- Three.js
- React Three Fiber
- @react-three/drei

### Database

- MongoDB
- Mongoose

### Validation

- Zod

### Media

- Cloudinary

### Authentication

A maintained authentication solution compatible with the selected
Next.js version will be used.

### Version Control

- Git
- GitHub

### Deployment

- Vercel

---

## Dependency Strategy

The project will avoid unnecessary dependencies.

A library should only be introduced when it solves a real
project requirement or provides a significant architectural
benefit.

Potential technologies such as Redux, Zustand, GraphQL, Redis,
Docker, testing frameworks, and additional animation libraries
will not be added unless a specific requirement justifies them.

### Development Workflow

The development process will follow:

1. Understand
2. Design
3. Implement
4. Run
5. Test
6. Debug
7. Commit
8. Document

The goal is to understand the architecture and implementation
rather than blindly copying generated code.


---

## Environment & Secrets Architecture

The application will use environment variables for configuration
and sensitive credentials.

### Local Environment

Local development secrets will be stored in:

`.env.local`

Examples include:

- `MONGODB_URI`
- `AUTH_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Production Environment

Production environment variables will be configured through the
deployment platform rather than committed to the repository.

### Secret Management Rules

- Never hard-code secrets in source code.
- Never commit `.env.local`.
- Never expose private secrets to client-side code.
- Never use `NEXT_PUBLIC_` for private credentials.
- Use separate configuration for local and production environments.
- Rotate/revoke credentials if they are accidentally exposed.

### Public Environment Variables

Variables prefixed with `NEXT_PUBLIC_` may be exposed to browser
code and must therefore never contain private credentials.

### Environment Flow

Local:

`.env.local → Next.js server → External services`

Production:

`Deployment environment variables → Next.js server → External services`