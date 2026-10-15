/**
 * Aura Lens Photography - Interactive Scripts
 * Handles portfolio filtering, lightbox preview, navigation, and booking form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Navigation
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const toggleIcon = document.getElementById('toggleIcon');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      toggleIcon.className = isOpen ? 'ph ph-x' : 'ph ph-list';
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleIcon.className = 'ph ph-list';
      });
    });
  }

  // 3. Portfolio Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function applyFilter(category) {
    // Update button states
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Animate items
    galleryItems.forEach(item => {
      const itemCategory = item.dataset.category;
      if (category === 'all' || itemCategory === category) {
        item.style.opacity = '0';
        item.classList.remove('hidden');
        setTimeout(() => {
          item.style.opacity = '1';
        }, 30);
      } else {
        item.classList.add('hidden');
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      applyFilter(category);
    });
  });

  // 4. Quick Specialties Cards (Click to filter portfolio)
  const specialtyCards = document.querySelectorAll('.specialty-card');
  specialtyCards.forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      applyFilter(filter);
      const portfolioSec = document.getElementById('portfolio');
      if (portfolioSec) {
        portfolioSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. Interactive Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxBookBtn = document.getElementById('lightboxBookBtn');

  function openLightbox(item) {
    const fullImg = item.dataset.img;
    const title = item.dataset.title;
    const desc = item.dataset.desc;
    const category = item.dataset.category;

    lightboxImg.src = fullImg;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;

    // Readable category text
    let catLabel = 'Photography';
    if (category === 'weddings') catLabel = 'Wedding & Elopement';
    if (category === 'headshots') catLabel = 'Professional Headshot & Branding';
    if (category === 'real-estate') catLabel = 'Real Estate Showcase';
    if (category === 'graduation') catLabel = 'Graduation Portrait';
    if (category === 'baby') catLabel = 'Baby & Newborn Session';
    lightboxCategory.textContent = catLabel;

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxBookBtn) {
    lightboxBookBtn.addEventListener('click', () => {
      closeLightbox();
    });
  }

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 6. Pricing Buttons auto-populate Photography Type in Booking Form
  const pricingButtons = document.querySelectorAll('.pricing-card a[data-service]');
  const shootTypeSelect = document.getElementById('shootType');

  pricingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedService = btn.dataset.service;
      if (shootTypeSelect) {
        shootTypeSelect.value = selectedService;
      }
    });
  });

  // 7. Booking Form Submission Handling
  const bookingForm = document.getElementById('bookingForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const shootType = document.getElementById('shootType').value;
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !shootType || !message) {
        alert('Please fill out all required fields (*).');
        return;
      }

      // Simulate sending inquiry
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Submitting Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="ph ph-paper-plane-tilt"></i> Send Inquiry & Check Availability';
        bookingForm.style.display = 'none';
        formSuccessMessage.style.display = 'block';
      }, 700);
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.style.display = 'flex';
      formSuccessMessage.style.display = 'none';
    });
  }

  // 8. Legal Modal (Privacy Policy & Terms of Service)
  const legalModal = document.getElementById('legalModal');
  const legalBackdrop = document.getElementById('legalBackdrop');
  const legalCloseBtn = document.getElementById('legalCloseBtn');
  const legalDoneBtn = document.getElementById('legalDoneBtn');
  const openPrivacyBtn = document.getElementById('openPrivacyBtn');
  const openTermsBtn = document.getElementById('openTermsBtn');
  const tabPrivacyBtn = document.getElementById('tabPrivacyBtn');
  const tabTermsBtn = document.getElementById('tabTermsBtn');
  const privacyPanel = document.getElementById('privacyPanel');
  const termsPanel = document.getElementById('termsPanel');

  function switchLegalTab(tab) {
    if (tab === 'privacy') {
      if (tabPrivacyBtn) {
        tabPrivacyBtn.classList.add('active');
        tabPrivacyBtn.setAttribute('aria-selected', 'true');
      }
      if (tabTermsBtn) {
        tabTermsBtn.classList.remove('active');
        tabTermsBtn.setAttribute('aria-selected', 'false');
      }
      if (privacyPanel) privacyPanel.classList.add('active');
      if (termsPanel) termsPanel.classList.remove('active');
    } else {
      if (tabTermsBtn) {
        tabTermsBtn.classList.add('active');
        tabTermsBtn.setAttribute('aria-selected', 'true');
      }
      if (tabPrivacyBtn) {
        tabPrivacyBtn.classList.remove('active');
        tabPrivacyBtn.setAttribute('aria-selected', 'false');
      }
      if (termsPanel) termsPanel.classList.add('active');
      if (privacyPanel) privacyPanel.classList.remove('active');
    }
    const legalBody = document.querySelector('.legal-body');
    if (legalBody) legalBody.scrollTop = 0;
  }

  function openLegalModal(tab) {
    switchLegalTab(tab);
    if (legalModal) {
      legalModal.classList.add('active');
      legalModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLegalModal() {
    if (legalModal) {
      legalModal.classList.remove('active');
      legalModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openPrivacyBtn) {
    openPrivacyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('privacy');
    });
  }

  if (openTermsBtn) {
    openTermsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('terms');
    });
  }

  if (tabPrivacyBtn) {
    tabPrivacyBtn.addEventListener('click', () => switchLegalTab('privacy'));
  }

  if (tabTermsBtn) {
    tabTermsBtn.addEventListener('click', () => switchLegalTab('terms'));
  }

  if (legalCloseBtn) legalCloseBtn.addEventListener('click', closeLegalModal);
  if (legalBackdrop) legalBackdrop.addEventListener('click', closeLegalModal);
  if (legalDoneBtn) legalDoneBtn.addEventListener('click', closeLegalModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModal && legalModal.classList.contains('active')) {
      closeLegalModal();
    }
  });
});
