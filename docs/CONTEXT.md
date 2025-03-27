### **Software Developer Portfolio Website - Project Scope & Workflow**

#### 🔗 **Pages Overview**
A multi-page portfolio React-based website with smooth animations and modern UX. The pages:

1. **Landing Page**  
2. **Projects Page**  
3. **Contact Page**

---

### 🧭 **Page Breakdown & Developer Workflow**

---

#### 1. **Landing Page (Inspired by Pinterest-style UI)**

**Goal**: First impression page. Showcase your profile, intro, skills, and sections in horizontally-scrollable "card-style" layout.

**Key Features:**

- **Horizontal Scrolling Layout**: Scroll-wheel or trackpad scrolls horizontally across full-screen sections.
- **Card-Based Sections**: Each section is a "card" that snaps into place on scroll.
- **Scroll-Jacking Behavior**: Controlled scrolling experience with JavaScript/Framer Motion/GSAP.
- **Smooth Animations**: Animated transitions between sections using **Framer Motion** or **GSAP**.
- **Content Sections**:
  - Hero/Intro (Photo, Name, Tagline)
  - About Me
  - Tech Stack
  - Skills Highlights
  - Link to Projects Page

**Implementation Tips:**
- Use a parent container with `overflow-x: scroll` and `flex-nowrap` layout.
- Add `scroll-snap-type: x mandatory;` for snapping.
- Animate each card using `Framer Motion`.
- Handle scroll-jacking with `wheel` event listeners or libraries like `Lenis`.

---

#### 2. **Projects Page**

**Goal**: Display the projects you've worked on with interactivity.

**Key Features:**

- **Project Grid/List**: Showcase project cards with title, stack used, short description, and links (Live + GitHub).
- **Filterable by Tech Stack** *(optional)*.
- **Image Previews or Demos**.
- **Smooth Page Transitions** from Landing Page (using React Router + Framer Motion).
- Each project card could animate on hover or scroll into view.

**Implementation Tips:**
- Use Tailwind CSS grid or flexbox layout.
- Use animation libraries for entrance effects.
- Consider breaking each project into a reusable `ProjectCard` component.

---

#### 3. **Contact Page**

**Goal**: Allow visitors to reach out to you.

**Key Features:**

- **Contact Form** (Name, Email, Message).
- **Email sending functionality** (via **EmailJS**, **Formspree**, or a custom backend).
- **Social Media Links**.
- **Thank You Message / Modal on Send**.
- Optional: Add subtle animations on input focus and submission.

**Implementation Tips:**
- Keep the form UX clean and simple.
- Validate input fields (required, email format).
- Use Framer Motion for submit animations or toast messages.

---

### 🧩 **Tech Stack**

- **Framework**: React
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (for smooth scrolling)
- **Routing**: React Router
- **Email Sending**: EmailJS
- **Optional Enhancements**:
  - Lenis for smooth scrolling
  - Locomotive Scroll (alternative scroll library)
  - Context API (for global UI state like dark mode)



---

### 🚀 **Bonus Ideas**

- Add dark mode toggle.
- Add page loading transition.
- Animate route transitions with Framer Motion.
- Lazy load sections for performance.
