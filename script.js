/* ========================================
   RAJDEEP JHA — PROFESSIONAL PORTFOLIO
   Theme: Premium Dark Navy & Purple
======================================== */

/* 1. Global Styles */
:root {
  --primary: #A78BFA;
  --primary-dark: #8B5CF6;
  --navy: #F3F4F6;
  --text: #E5E7EB;
  --muted: #B7C0D0;
  --background: #0B1120;
  --white: #151E30;
  --border: #2B3850;
  --light-blue: #25213D;
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
  --radius: 22px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 95px;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

body,
button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
}

::selection {
  background: var(--primary);
  color: #111827;
}

.section {
  padding: 100px max(7%, calc((100% - 1200px) / 2));
  scroll-margin-top: 75px;
}

.section-heading {
  margin-bottom: 45px;
}

.section-heading h2 {
  color: var(--navy);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -1.5px;
  margin-top: 10px;
}

.section-heading h2 span,
.hero h1 span {
  color: var(--primary);
}

.section-description {
  max-width: 650px;
  margin-top: 15px;
  color: var(--muted);
}

.eyebrow {
  color: var(--primary);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 2px;
}

/* 2. Navigation Bar */
.navbar {
  width: 100%;
  min-height: 82px;
  padding: 15px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: rgba(11, 17, 32, 0.96);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  color: var(--navy);
  font-size: 1.9rem;
  font-weight: 900;
  letter-spacing: -2px;
  flex-shrink: 0;
}

.logo span {
  color: var(--primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links > a {
  color: var(--text);
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 0.25s ease;
}

.nav-links > a:hover {
  color: var(--primary);
}

.nav-links .nav-contact {
  background: var(--primary);
  color: #111827;
  padding: 11px 17px;
  border-radius: 10px;
}

.nav-links .nav-contact:hover {
  background: var(--primary-dark);
  color: #FFFFFF;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 0;
  color: var(--navy);
  cursor: pointer;
  font-size: 1.8rem;
  line-height: 1;
}

/* 3. Hero Section */
.hero {
  min-height: 660px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 70px;
  background:
    radial-gradient(
      circle at 85% 25%,
      rgba(167, 139, 250, 0.12),
      transparent 35%
    ),
    linear-gradient(135deg, #0B1120, #10182B);
}

.hero-content {
  max-width: 680px;
}

.hero h1 {
  color: var(--navy);
  font-size: clamp(2.8rem, 5vw, 4.6rem);
  line-height: 1.08;
  letter-spacing: -3px;
  margin: 23px 0 18px;
}

.hero h2 {
  max-width: 570px;
  color: #D7DCE8;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  font-weight: 650;
  line-height: 1.5;
}

.hero-description {
  max-width: 540px;
  margin-top: 20px;
  color: var(--muted);
  font-size: 1.04rem;
}

.hero-buttons,
.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 23px;
  border-radius: 11px;
  font-size: 0.91rem;
  font-weight: 750;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-primary {
  background: var(--primary);
  color: #111827;
  box-shadow: 0 8px 22px rgba(167, 139, 250, 0.18);
}

.btn-primary:hover {
  background: var(--primary-dark);
  color: #FFFFFF;
  box-shadow: 0 12px 25px rgba(139, 92, 246, 0.25);
}

.btn-outline {
  border: 1px solid var(--border);
  background: var(--white);
  color: var(--navy);
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 35px;
}

.hero-tags span,
.skills-list span {
  padding: 8px 13px;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: var(--white);
  color: #D1D5E1;
  font-size: 0.8rem;
  font-weight: 600;
}

.hero-image {
  position: relative;
  width: 100%;
  max-width: 410px;
  height: 450px;
  justify-self: center;
  border-radius: 45% 45% 25px 25px;
  background: linear-gradient(145deg, #292448, #252F50);
  box-shadow: var(--shadow);
}

.hero-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: inherit;
  position: relative;
  z-index: 2;
}

.image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--navy);
  text-align: center;
  gap: 8px;
  border-radius: inherit;
}

.image-placeholder > span {
  display: grid;
  place-items: center;
  width: 110px;
  height: 110px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(167, 139, 250, 0.12);
  font-size: 2.7rem;
  font-weight: 850;
}

.image-placeholder p {
  font-weight: 750;
}

.image-placeholder small {
  color: #B7C0D0;
}

.floating-card {
  position: absolute;
  z-index: 3;
  bottom: 30px;
  left: -35px;
  padding: 14px 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: #1C2940;
  box-shadow: var(--shadow);
  color: var(--navy);
  font-size: 0.78rem;
  font-weight: 700;
}

.status-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-right: 7px;
  border-radius: 50%;
  background: #34D399;
}



/* About Section Layout */
.about-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.0fr;
  gap: 35px;
  align-items: stretch;
}

/* Left column */
.about-left {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.about-left .section-heading {
  margin-bottom: 45px;
}

/* Right column: starts at the same top as GET TO KNOW ME */
.about-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, auto);
  gap: 12px;
  align-content: space-between;
  margin-top: 0;
  min-width: 0;
  min-height: 0;
}

.about-cards .info-card {
  padding: 16px;
  min-width: 0;
  box-sizing: border-box;
}

.about-cards .info-card:nth-child(5) {
  grid-column: 1 / 3;
  justify-self: center;
  width: 70%;
}

/* Mobile */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .about-left .section-heading {
    margin-bottom: 25px;
  }

  .about-cards {
    align-content: start;
  }

  .about-cards .info-card:nth-child(5) {
    width: 70%;
  }
}

@media (max-width: 480px) {
  .about-cards .info-card {
    padding: 12px;
  }

  .about-cards .info-card:nth-child(5) {
    width: 85%;
  }
}


.info-card {
  min-height: 150px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.info-card:hover {
  transform: translateY(-6px);
  border-color: #8B78D5;
  box-shadow: var(--shadow);
}

.card-icon {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  border-radius: 12px;
  background: var(--light-blue);
  color: var(--primary);
  font-size: 1.35rem;
  font-weight: 800;
}

.info-card h3 {
  color: var(--navy);
  margin: 15px 0 5px;
  font-size: 1.05rem;
}

.info-card p {
  color: var(--muted);
  font-size: 0.87rem;
}

/* 5. Experience Section */
.experience-list {
  display: grid;
  gap: 15px;
}

.experience-card {
  display: grid;
  grid-template-columns: 65px 1fr 35px;
  align-items: center;
  gap: 25px;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--white);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.experience-card:hover {
  transform: translateX(5px);
  border-color: #8B78D5;
  box-shadow: var(--shadow);
}

.experience-number {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: var(--light-blue);
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 850;
}

.experience-type {
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 850;
  letter-spacing: 1.5px;
}

.experience-card h3 {
  margin: 4px 0 6px;
  color: var(--navy);
  font-size: 1.28rem;
}

.experience-card p:not(.experience-type) {
  color: var(--muted);
  font-size: 0.92rem;
}

.experience-arrow {
  color: var(--primary);
  font-size: 1.4rem;
  font-weight: 800;
}

.note {
  margin-top: 22px;
  color: var(--muted);
  font-size: 0.83rem;
  font-style: italic;
}

/* 6. Projects Section */
.projects-section {
  background: #10182B;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.project-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow);
}

.project-image {
  height: 220px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #292448, #252F50);
}

.project-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}

.project-placeholder {
  position: relative;
  color: #C4B5FD;
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 2px;
}

.project-info {
  padding: 25px;
}

.project-info h3 {
  color: var(--navy);
  font-size: 1.2rem;
  margin: 8px 0;
  line-height: 1.4;
}

.project-info > p:not(.eyebrow) {
  min-height: 80px;
  color: var(--muted);
  font-size: 0.9rem;
}

.project-info a {
  display: inline-block;
  margin-top: 17px;
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 750;
}

.project-info a:hover {
  color: #C4B5FD;
}

/* 7. Events Section */
.events-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.event-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.event-image {
  height: 230px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #292448, #252F50);
}

.event-image img {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-placeholder {
  color: #C4B5FD;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.event-info {
  padding: 23px;
}

.event-info h3 {
  color: var(--navy);
  font-size: 1.2rem;
}

.event-info p {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 6px 0 12px;
}

.event-info > span {
  display: inline-block;
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
}

/* 8. Skills Section */
.skills-section {
  background: #10182B;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.skills-list span {
  padding: 12px 18px;
  background: var(--white);
  font-size: 0.9rem;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
}

.skills-list span:hover {
  background: var(--primary);
  color: #111827;
  border-color: var(--primary);
}

/* 9. Education Section */
.education-list {
  max-width: 900px;
  display: grid;
  gap: 0;
}

.education-list article {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 25px;
  padding: 25px 0;
  border-bottom: 1px solid var(--border);
}

.education-year {
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 800;
}

.education-list h3 {
  color: var(--navy);
  font-size: 1.08rem;
  line-height: 1.5;
}

.education-list p {
  color: var(--muted);
  font-size: 0.92rem;
  margin-top: 5px;
}

/* 10. Certificates */
.certificates-section {
  background: #10182B;
}

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.certificate-card {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--white);
  transition: transform 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
}

.certificate-placeholder {
  min-height: 180px;
  display: grid;
  place-items: center;
  border: 1px dashed #7667B2;
  border-radius: 12px;
  background: #211F38;
  color: #C4B5FD;
  font-weight: 850;
  letter-spacing: 1px;
}

.certificate-card h3 {
  margin-top: 18px;
  color: var(--navy);
  font-size: 1.05rem;
}

.certificate-card p {
  margin-top: 5px;
  color: var(--muted);
  font-size: 0.87rem;
}

/* 11. Contact Section */
.contact-section {
  margin: 40px auto;
  width: 86%;
  max-width: 1200px;
  padding: 75px 35px;
  border-radius: 30px;
  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(196, 181, 253, 0.14),
      transparent 30%
    ),
    linear-gradient(135deg, #17152C, #30245B);
  color: #FFFFFF;
  text-align: center;
}

.contact-section .eyebrow {
  color: #D8CCFF;
}

.contact-section h2 {
  margin: 15px auto;
  max-width: 700px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.2;
  letter-spacing: -1px;
}

.contact-section > p:not(.eyebrow) {
  max-width: 600px;
  margin: 15px auto 0;
  color: #E0DDF2;
}

.contact-buttons {
  justify-content: center;
}

.btn-light {
  background: #F3F4F6;
  color: #111827;
}

.btn-light:hover {
  background: #DDD6FE;
}

.btn-outline-light {
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #FFFFFF;
}

.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* 12. Footer */
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 28px 7%;
  border-top: 1px solid var(--border);
  background: #070C17;
}

.footer .logo {
  font-size: 1.6rem;
}

.footer p {
  color: var(--muted);
  font-size: 0.82rem;
}

/* 13. Scroll Reveal Animation */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.65s ease,
    transform 0.65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 14. Tablet */
@media (max-width: 1050px) {
  .navbar {
    padding: 15px 5%;
  }

  .nav-links {
    gap: 15px;
  }

  .nav-links > a {
    font-size: 0.81rem;
  }

  .section {
    padding: 80px 5%;
  }

  .hero {
    gap: 40px;
  }

  .hero-image {
    height: 400px;
  }

  .about-grid {
    gap: 35px;
  }

  .project-grid,
  .events-grid {
    gap: 17px;
  }

  .project-info {
    padding: 19px;
  }
}

/* 15. Mobile Navigation */
@media (max-width: 760px) {
  .navbar {
    min-height: 72px;
    padding: 12px 5%;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 5% 22px;
    border-bottom: 1px solid var(--border);
    background: #10182B;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links > a {
    padding: 12px 4px;
    font-size: 0.95rem;
  }

  .nav-links .nav-contact {
    margin-top: 8px;
    text-align: center;
  }

  .section {
    padding: 65px 6%;
  }

  .hero {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 55px;
    padding-top: 65px;
    padding-bottom: 70px;
  }

  .hero h1 {
    font-size: clamp(2.6rem, 10vw, 4rem);
    letter-spacing: -2px;
  }

  .hero-image {
    width: min(100%, 360px);
    height: 390px;
  }

  .floating-card {
    left: -10px;
    bottom: 20px;
    max-width: calc(100% + 10px);
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .about-cards {
    gap: 12px;
  }

  .info-card {
    min-height: 170px;
    padding: 18px;
  }

  .experience-card {
    grid-template-columns: 48px 1fr;
    gap: 15px;
    padding: 20px 16px;
  }

  .experience-number {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .experience-arrow {
    display: none;
  }

  .project-grid,
  .events-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-image,
  .event-image {
    height: 180px;
  }

  .project-info {
    padding: 17px;
  }

  .project-info h3 {
    font-size: 1.05rem;
  }

  .project-info > p:not(.eyebrow) {
    min-height: 0;
  }

  .certificate-grid {
    grid-template-columns: 1fr;
  }

  .contact-section {
    width: 90%;
    padding: 55px 22px;
  }

  .footer {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
}

/* 16. Small Mobile */
@media (max-width: 480px) {
  .section {
    padding: 55px 5%;
  }

  .section-heading {
    margin-bottom: 30px;
  }

  .section-heading h2 {
    font-size: 2.15rem;
  }

  .hero {
    padding-top: 50px;
  }

  .hero h1 {
    font-size: 2.65rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .hero-image {
    height: 340px;
  }

  .about-cards {
    grid-template-columns: 1fr 1fr;
  }

  .info-card {
    min-height: 165px;
    padding: 14px;
  }

  .info-card h3 {
    font-size: 0.95rem;
  }

  .info-card p {
    font-size: 0.8rem;
  }

  .project-grid,
  .events-grid {
    grid-template-columns: 1fr;
  }

  .project-image,
  .event-image {
    height: 225px;
  }

  .education-list article {
    grid-template-columns: 1fr;
    gap: 5px;
    padding: 20px 0;
  }

  .skills-list {
    gap: 9px;
  }

  .skills-list span {
    font-size: 0.79rem;
    padding: 9px 12px;
  }

  .contact-section {
    padding: 45px 20px;
    border-radius: 22px;
  }

  .contact-buttons .btn {
    width: 100%;
  }
}


/* Small screen: Hero image as a watermark */
@media (max-width: 900px) {
  .hero {
    position: relative;
    display: block;
    min-height: auto;
    isolation: isolate;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 100%;
  }

  .hero-image {
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
    width: 55%;
    max-width: 320px;
    height: 360px;
    opacity: 0.13;
    z-index: 0;
    pointer-events: none;
    border-radius: 45% 45% 25px 25px;
  }

  .hero-image > img {
    opacity: 0.65;
  }

  .hero-image .image-placeholder,
  .hero-image .floating-card {
    display: none !important;
  }
}

/* Very small mobile screens */
@media (max-width: 480px) {
  .hero-image {
    right: 0;
    width: 75%;
    height: 300px;
    opacity: 0.11;
  }

  .hero h1 {
    letter-spacing: -1.5px;
  }
}


/* Animated Professional Skill Tags */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.hero-tags span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 30px;
  background: rgba(139, 92, 246, 0.10);
  color: #E5E7EB;
  font-size: 0.88rem;
  font-weight: 500;
  white-space: normal;
  text-align: center;

  opacity: 0;
  animation: skillFadeIn 0.6s ease forwards;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

/* Staggered entrance animation */
.hero-tags span:nth-child(1) {
  animation-delay: 0.2s;
}

.hero-tags span:nth-child(2) {
  animation-delay: 0.35s;
}

.hero-tags span:nth-child(3) {
  animation-delay: 0.5s;
}

.hero-tags span:nth-child(4) {
  animation-delay: 0.65s;
}

.hero-tags span:nth-child(5) {
  animation-delay: 0.8s;
}

/* Hover effect */
.hero-tags span:hover {
  transform: translateY(-5px);
  background: rgba(139, 92, 246, 0.25);
  border-color: #A78BFA;
  box-shadow: 0 8px 22px rgba(139, 92, 246, 0.2);
}

/* Smooth appearance */
@keyframes skillFadeIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile responsive */
@media (max-width: 480px) {
  .hero-tags {
    gap: 8px;
  }

  .hero-tags span {
    padding: 8px 12px;
    font-size: 0.78rem;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  .hero-tags span {
    animation: none;
    opacity: 1;
    transition: none;
  }
}


/* Fix: Show the complete watermark image */
@media (max-width: 900px) {
  .hero {
    position: relative;
    isolation: isolate;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform: none;
    opacity: 0.14;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: 0;
    background: transparent;
  }

  .hero-image > img {
    display: block !important;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right top;
    opacity: 1;
  }

  .hero-image .image-placeholder,
  .hero-image .floating-card {
    display: none !important;
  }
}

@media (max-width: 480px) {
  .hero-image > img {
    object-position: right top;
  }
}


/* Hover animation for the hero heading */
.hero h1 {
  transition: transform 0.35s ease;
}

.hero h1:hover {
  transform: translateY(-4px);
}

/* Rajdeep Jha text animation */
.hero h1 span {
  display: inline-block;
  cursor: pointer;
  transition:
    color 0.35s ease,
    text-shadow 0.35s ease,
    transform 0.35s ease;
}

.hero h1 span:hover {
  color: #C4B5FD;
  text-shadow:
    0 0 8px rgba(167, 139, 250, 0.7),
    0 0 22px rgba(139, 92, 246, 0.45);
  transform: translateY(-3px) scale(1.03);
}



/* Professional Skill Tags Animation */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-tags span {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 30px;
  background: rgba(139, 92, 246, 0.10);
  color: #E5E7EB;
  cursor: pointer;

  transition:
    transform 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    color 0.35s ease;

  animation: tagAppear 0.6s ease both;
}

/* Each tag appears one after another */
.hero-tags span:nth-child(1) { animation-delay: 0.1s; }
.hero-tags span:nth-child(2) { animation-delay: 0.2s; }
.hero-tags span:nth-child(3) { animation-delay: 0.3s; }
.hero-tags span:nth-child(4) { animation-delay: 0.4s; }
.hero-tags span:nth-child(5) { animation-delay: 0.5s; }

/* Hover glow and lift */
.hero-tags span:hover {
  transform: translateY(-6px) scale(1.04);
  background: rgba(139, 92, 246, 0.25);
  border-color: #A78BFA;
  color: #FFFFFF;
  box-shadow:
    0 8px 22px rgba(139, 92, 246, 0.22),
    0 0 12px rgba(167, 139, 250, 0.15);
}

/* Entrance animation */
@keyframes tagAppear {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile adjustments */
@media (max-width: 480px) {
  .hero-tags {
    gap: 8px;
  }

  .hero-tags span {
    padding: 8px 12px;
    font-size: 0.78rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero-tags span {
    animation: none;
    transition: none;
  }
}



/* ==============================
   EXPERIENCE SECTION ANIMATIONS
================================ */

/* Experience cards layout and smooth effects */
.experience-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.15);
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
  animation: experienceAppear 0.7s ease both;
}

/* Cards appear one after another */
.experience-card:nth-child(1) {
  animation-delay: 0.1s;
}

.experience-card:nth-child(2) {
  animation-delay: 0.2s;
}

.experience-card:nth-child(3) {
  animation-delay: 0.3s;
}

.experience-card:nth-child(4) {
  animation-delay: 0.4s;
}

/* Subtle purple shine inside each card */
.experience-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -110%;
  width: 65%;
  height: 100%;
  background: linear-gradient(
    110deg,
    transparent,
    rgba(167, 139, 250, 0.08),
    transparent
  );
  transform: skewX(-18deg);
  transition: left 0.65s ease;
  pointer-events: none;
}

.experience-card:hover::before {
  left: 150%;
}

/* Lift and glow on hover */
.experience-card:hover {
  transform: translateY(-6px);
  border-color: rgba(167, 139, 250, 0.7);
  box-shadow: 0 14px 32px rgba(139, 92, 246, 0.15);
  background: rgba(139, 92, 246, 0.06);
}

/* Number animation */
.experience-number {
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.experience-card:hover .experience-number {
  color: #A78BFA;
  transform: scale(1.12);
}

/* Job title animation */
.experience-card h3 {
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.experience-card:hover h3 {
  color: #C4B5FD;
  transform: translateX(4px);
}

/* Arrow animation */
.experience-arrow {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.experience-card:hover .experience-arrow {
  transform: translate(4px, -4px);
  color: #A78BFA;
}

/* Entrance animation */
@keyframes experienceAppear {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile-friendly hover behavior */
@media (max-width: 600px) {
  .experience-card:hover {
    transform: translateY(-3px);
  }
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
  .experience-card,
  .experience-number,
  .experience-card h3,
  .experience-arrow {
    animation: none;
    transition: none;
  }

  .experience-card::before {
    display: none;
  }
}


/* ==============================
   PROJECTS SECTION ANIMATION
================================ */

.project-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.16);
  border-radius: 20px;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
  animation: projectAppear 0.7s ease both;
}

.project-card:nth-child(1) {
  animation-delay: 0.1s;
}

.project-card:nth-child(2) {
  animation-delay: 0.25s;
}

.project-card:nth-child(3) {
  animation-delay: 0.4s;
}

/* Image container */
.project-image {
  position: relative;
  overflow: hidden;
}

/* Smooth image zoom */
.project-image img {
  display: block;
  width: 100%;
  transition: transform 0.65s ease, filter 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.07);
  filter: brightness(0.85);
}

/* Project number overlay */
.project-placeholder {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.project-card:hover .project-placeholder {
  transform: translateY(-5px);
}

/* Card lift and glow */
.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 139, 250, 0.7);
  box-shadow: 0 18px 38px rgba(91, 58, 160, 0.2);
}

/* Project text */
.project-info h3 {
  transition: color 0.3s ease, transform 0.3s ease;
}

.project-card:hover .project-info h3 {
  color: #C4B5FD;
  transform: translateX(3px);
}

/* Project link */
.project-info a {
  display: inline-block;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.project-info a:hover {
  color: #C4B5FD;
  transform: translateX(5px);
}

/* Entrance animation */
@keyframes projectAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}



/* ==============================
   EVENTS SECTION ANIMATION
================================ */

.event-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.16);
  border-radius: 20px;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
  animation: eventAppear 0.7s ease both;
}

.event-card:nth-child(1) {
  animation-delay: 0.1s;
}

.event-card:nth-child(2) {
  animation-delay: 0.25s;
}

.event-card:nth-child(3) {
  animation-delay: 0.4s;
}

/* Event image */
.event-image {
  position: relative;
  overflow: hidden;
}

.event-image img {
  display: block;
  width: 100%;
  transition: transform 0.65s ease, filter 0.4s ease;
}

/* Image zoom on hover */
.event-card:hover .event-image img {
  transform: scale(1.07);
  filter: brightness(0.88);
}

/* Event card glow */
.event-card:hover {
  transform: translateY(-7px);
  border-color: rgba(167, 139, 250, 0.7);
  box-shadow: 0 16px 35px rgba(91, 58, 160, 0.2);
}

/* Event heading */
.event-info h3 {
  transition: color 0.3s ease, transform 0.3s ease;
}

.event-card:hover .event-info h3 {
  color: #C4B5FD;
  transform: translateX(3px);
}

/* Event details */
.event-info span {
  display: inline-block;
  transition: color 0.3s ease;
}

.event-card:hover .event-info span {
  color: #A78BFA;
}

/* Entrance animation */
@keyframes eventAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile touch-friendly behavior */
@media (max-width: 600px) {
  .project-card:hover,
  .event-card:hover {
    transform: translateY(-3px);
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .project-card,
  .event-card,
  .project-image img,
  .event-image img,
  .project-info h3,
  .event-info h3,
  .project-info a,
  .event-info span {
    animation: none;
    transition: none;
  }
}



/* ==============================
   SKILLS SECTION ANIMATION
================================ */

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* Individual skill tags */
.skills-list span {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 14px;
  background: rgba(139, 92, 246, 0.08);
  color: #E5E7EB;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: default;

  opacity: 0;
  animation: skillReveal 0.6s ease forwards;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  will-change: transform;
}

/* Staggered entrance animation */
.skills-list span:nth-child(1)  { animation-delay: 0.05s; }
.skills-list span:nth-child(2)  { animation-delay: 0.10s; }
.skills-list span:nth-child(3)  { animation-delay: 0.15s; }
.skills-list span:nth-child(4)  { animation-delay: 0.20s; }
.skills-list span:nth-child(5)  { animation-delay: 0.25s; }
.skills-list span:nth-child(6)  { animation-delay: 0.30s; }
.skills-list span:nth-child(7)  { animation-delay: 0.35s; }
.skills-list span:nth-child(8)  { animation-delay: 0.40s; }
.skills-list span:nth-child(9)  { animation-delay: 0.45s; }
.skills-list span:nth-child(10) { animation-delay: 0.50s; }
.skills-list span:nth-child(11) { animation-delay: 0.55s; }
.skills-list span:nth-child(12) { animation-delay: 0.60s; }

/* Hover effect */
.skills-list span:hover {
  transform: translateY(-5px) scale(1.03);
  background: rgba(139, 92, 246, 0.20);
  border-color: #A78BFA;
  color: #C4B5FD;
  box-shadow: 0 8px 22px rgba(139, 92, 246, 0.18);
}

/* Entrance animation */
@keyframes skillReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile responsive */
@media (max-width: 480px) {
  .skills-list {
    gap: 9px;
  }

  .skills-list span {
    padding: 9px 12px;
    font-size: 0.82rem;
    border-radius: 12px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .skills-list span {
    opacity: 1;
    animation: none;
    transition: none;
    will-change: auto;
  }
}



/* ==================================
   EXPERIENCE SECTION
================================== */

.experience-section .experience-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

/* Experience card */
.experience-section .experience-card {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 18px;
  min-width: 0;
  padding: 22px;
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.09),
    rgba(21, 30, 48, 0.8)
  );
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
  animation: experienceCardIn 0.65s ease both;
}

/* Staggered animation */
.experience-section .experience-card:nth-child(1) {
  animation-delay: 0.1s;
}

.experience-section .experience-card:nth-child(2) {
  animation-delay: 0.2s;
}

.experience-section .experience-card:nth-child(3) {
  animation-delay: 0.3s;
}

.experience-section .experience-card:nth-child(4) {
  animation-delay: 0.4s;
}

.experience-section .experience-card:nth-child(5) {
  animation-delay: 0.5s;
}

.experience-section .experience-card:nth-child(6) {
  animation-delay: 0.6s;
}

/* Company logo */
.company-logo {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 16px;
  background: rgba(5, 12, 30, 0.65);
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;
}

.company-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

/* Experience details */
.experience-details {
  min-width: 0;
}

.experience-details .experience-type {
  margin: 0 0 9px;
  color: #C4B5FD;
  font-size: 0.72rem;
  line-height: 1.6;
  letter-spacing: 1px;
  overflow-wrap: anywhere;
}

.experience-details h3 {
  margin: 0 0 9px;
  color: #F3F4F6;
  font-size: 1.2rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
  transition: color 0.3s ease;
}

.experience-details > p:last-child {
  margin: 0;
  color: #B7C0D0;
  font-size: 0.9rem;
  line-height: 1.65;
}

/* Arrow */
.experience-section .experience-arrow {
  align-self: start;
  color: #A78BFA;
  font-size: 1.5rem;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

/* Hover animation */
.experience-section .experience-card:hover {
  transform: translateY(-6px);
  border-color: #A78BFA;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.15),
    rgba(21, 30, 48, 0.95)
  );
  box-shadow: 0 14px 32px rgba(139, 92, 246, 0.16);
}

.experience-section .experience-card:hover .company-logo {
  border-color: #A78BFA;
  box-shadow: 0 0 18px rgba(139, 92, 246, 0.18);
  transform: scale(1.03);
}

.experience-section .experience-card:hover h3 {
  color: #C4B5FD;
}

.experience-section .experience-card:hover .experience-arrow {
  transform: translate(4px, -4px);
  color: #C4B5FD;
}

/* Entrance animation */
@keyframes experienceCardIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tablet */
@media (max-width: 1000px) {
  .experience-section .experience-list {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 560px) {
  .experience-section .experience-card {
    grid-template-columns: 66px minmax(0, 1fr) 16px;
    gap: 12px;
    padding: 14px;
    border-radius: 16px;
  }

  .company-logo {
    width: 66px;
    height: 66px;
    padding: 6px;
    border-radius: 12px;
  }

  .experience-details .experience-type {
    font-size: 0.63rem;
    letter-spacing: 0.4px;
  }

  .experience-details h3 {
    font-size: 1rem;
  }

  .experience-details > p:last-child {
    font-size: 0.82rem;
    line-height: 1.55;
  }

  .experience-section .experience-arrow {
    font-size: 1.15rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .experience-section .experience-card {
    animation: none;
    transition: none;
  }

  .company-logo,
  .experience-details h3,
  .experience-section .experience-arrow {
    transition: none;
  }
}


/* Download Resume Button */
.btn-resume {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  border: 1px solid #A78BFA;
  border-radius: 12px;
  background: linear-gradient(135deg, #8B5CF6, #6D28D9);
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 600;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.btn-resume:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  background: linear-gradient(135deg, #A78BFA, #7C3AED);
}

.btn-resume:focus-visible {
  outline: 2px solid #C4B5FD;
  outline-offset: 4px;
}

/* Contact buttons responsive layout */
.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 14px;
}

@media (max-width: 480px) {
  .contact-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-buttons .btn {
    width: 100%;
    box-sizing: border-box;
  }
}



/* 17. Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
