# Arron McCrory Photography Website

[![Live Website](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-success?style=flat-square&logo=github)](https://arron21.github.io/arron-mccrory-photography/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/arron21/arron-mccrory-photography)

**Live URL**: [https://arron21.github.io/arron-mccrory-photography/](https://arron21.github.io/arron-mccrory-photography/)

A modern, responsive, high-converting portfolio website crafted for professional photographer **Arron McCrory**, specializing in:
- **Weddings & Elopements** (Candid emotions, garden celebrations, romantic storytelling)
- **Professional Headshots & Branding** (Executive portraits, creative editorial styling)
- **Real Estate Photography** (MLS ready, architecture, HDR twilight & interiors)
*(Note: Graduation and Newborn packages & galleries are staged and ready to be toggled on when photos are available)*

---

## 📸 Key Features

1. **Editorial Hero Section**: Catchy headline, trust metrics (100+ weddings/shoots, 450+ properties, 5.0 rating), and direct booking call-to-actions.
2. **Interactive Filterable Portfolio**:
   - Filter by **All Works**, **Weddings**, **Headshots**, and **Real Estate**.
   - Built-in **Full-Screen Lightbox Modal** with title, description, and direct shoot inquiry button.
3. **Specialty Quick-Jump Cards**: Immediate overview in the hero area that filters the gallery with one click.
4. **Transparent Packages & Pricing**:
   - Pre-configured package tiers for **Wedding Story**, **Real Estate Showcase**, and **Professional Headshots** (Graduation and Newborn tiers safely staged).
   - Clicking a package auto-populates the booking form with that specific shoot type.
5. **Photographer Bio & Trust Factors**: Insurance info, rapid turnaround guarantee, and warm introductory story.
6. **Client Testimonials**: Verified client reviews from realtors, graduates, and new parents.
7. **Lead Capture Booking Form**:
   - Fields for shoot type, date, location, contact info, and special requests.
   - Built-in validation and success confirmation state.
8. **Mobile-First Responsive Design**: Works seamlessly on phones, tablets, and 4K displays with sticky blurred navigation.

---

## 🚀 How to Run Locally

You can open the website immediately in any web browser:

1. **Direct browser open**:
   Double click [`index.html`](file:///c:/Users/arron/Documents/antigravity/gallant-franklin/index.html) or right-click and choose **Open with > Chrome / Edge / Firefox**.

2. **Using a local development server** (Optional):
   ```bash
   # Using Python:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

---

## 🎨 How to Personalize Your Website

### 1. Change Your Name & Branding
- Open [`index.html`](file:///c:/Users/arron/Documents/antigravity/gallant-franklin/index.html) and search for `AURA LENS` or `Alex Rivera` to replace with your photography studio name and personal bio.
- Update your contact info (phone `(555) 234-5678`, email `hello@auralensphotography.com`, and social links).

### 2. Replace with Your Own Photos
- In [`index.html`](file:///c:/Users/arron/Documents/antigravity/gallant-franklin/index.html), look for the `<div class="gallery-grid">` section.
- You can add your own image files to an `images/` folder and replace the `src="..."` and `data-img="..."` attributes with `./images/your-photo.jpg`.

### 3. Update Prices & Packages
- Look for `<section class="services-section">` in [`index.html`](file:///c:/Users/arron/Documents/antigravity/gallant-franklin/index.html) to adjust your package rates ($275, $350, $425) and inclusions.

### 4. Receive Real Client Emails
To receive inquiries straight to your inbox without running a server, you can use **[Formspree](https://formspree.io/)** (free):
1. Sign up for free at Formspree.io and get your form endpoint (e.g., `https://formspree.io/f/xyz...`).
2. In [`index.html`](file:///c:/Users/arron/Documents/antigravity/gallant-franklin/index.html), update the `<form>` tag:
   ```html
   <form id="bookingForm" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
   ```

---

## 🌐 Free Hosting Options to Go Live Today

- **Netlify Drop**: Drag and drop this folder directly into [app.netlify.com/drop](https://app.netlify.com/drop) to get a free live URL in 10 seconds.
- **Vercel**: Run `vercel` or link your GitHub repo.
- **GitHub Pages**: Push this repo to GitHub, go to **Settings > Pages**, and choose the `main` branch.
