# AI Ready School — Homepage Redesign

**Live Demo**: https://ai-ready-school-navy.vercel.app/  
**Stack**: React + Vite (Vanilla CSS design system)  
**Time spent**: ~4 hours

---

## 🔍 UX Audit — Top 5 Problems Identified

### 1. Hero Section Information Overload
**Problem**: The hero subtext is a dense 4-line paragraph that tries to explain all five products at once. A busy school principal scanning the page has ~3 seconds to understand the value proposition — this paragraph demands 15+ seconds of reading.  

### 2. Buried Trust Signals
**Problem**: School logos, testimonials, and social proof are pushed to the bottom of a very long page. 

### 3. Repetitive Product Section Layout Causes Scroll Fatigue  
**Problem**: Each of the five products (Cypher → Matrix) uses nearly identical layout — left text, right image, bullet points, "Know more" button. After the second product, the user's brain starts pattern-matching and skimming. By products 4 and 5, engagement drops significantly.  

### 4. Redundant CTAs Without Clear Hierarchy
**Problem**: "Schedule a Call" appears in the navigation *and* as the hero CTA. The nav also has "Sign in" as a bordered button, but "Schedule a Call" uses the same visual weight (bordered). There's no clear primary vs. secondary action hierarchy in the nav.  

### 5. Weak Visual Hierarchy & Lack of Visual Differentiation
**Problem**: The page uses a single-color accent (magenta/pink) for everything — CTA buttons, product labels, checkmarks, "Know more" links. Combined with the monochrome checkerboard background, the whole page feels visually flat despite having strong content.  

---

## 🎯 What I Chose to Prioritize

Given the 4-5 hour constraint, I focused on **maximum-impact sections**:

1. **Navigation** — Simplified to 4 clear items + one primary CTA. Added a rich product dropdown with icons and descriptions. The dropdown eliminates the need for users to click through to understand what each product does.

2. **Hero Section** — Complete rewrite. Shortened the value proposition to 2 clear sentences. Added a product card grid as the visual (instead of a generic illustration) so users can *see* the ecosystem at a glance. Pulled trust signals ("Trusted by leading K-12 institutions") into the hero fold.


## 🚀 What I'd Do With More Time

- **Animated product demos** — Replace emoji placeholders with actual product screenshots or short looped animations showing each tool in action
- **Interactive product tabs** — Let users switch between products without scrolling, with animated transitions
- **Case study cards** — Real school stories with metrics ("NH Goel saved 12 hrs/week for teachers")
- **FAQ accordion** — Address common objections (security, cost, training) with expandable answers

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed glassmorphism nav with product dropdown + mobile menu
│   ├── Hero/            # Hero section with product card grid visual
│   ├── Products/        # Five-product alternating layout with scroll reveal
│   ├── Testimonials/    # Stats + quote cards + school logo strip
│   ├── CTA/             # Dark gradient CTA card
│   └── Footer/          # 4-column footer with links
├── hooks/
│   └── useScrollReveal.js  # Intersection Observer hook for scroll animations
├── index.css            # Global design system (tokens, reset, utilities)
├── App.jsx              # Page composition
└── main.jsx             # React entry point
```

---

## 🏃 Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/ in your browser.

---

## 📝 Summary

**Problems identified**: Hero information overload, buried trust signals, scroll fatigue from repetitive product layouts, redundant CTAs, weak visual hierarchy.

**What I prioritized**: Navigation simplification with rich dropdown, hero section redesign with product card visual, moved trust signals above the fold, color-coded product sections with scroll animations.

**What I'd do next**: Animated product demos, interactive product tabs, real case study cards, FAQ section, dark mode, and full accessibility audit.
