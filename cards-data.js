const cardsData = [
  // card01
  {
    id: "urban-living-01",
    previewImg: "https://maquetacion77.github.io/images/images/card_01.webp",
    altText: "Preview of Urban Living",
    htmlContent: `
      <article class="card01">
         <img class="card-image" src="https://maquetacion77.github.io/images/cards-280x360/Urban Living.jpg" alt="Exterior facade of a modern residential building at sunset" loading="lazy" decoding="async" />
        <div class="card-overlay flex---">
          <h2 class="card-title">Urban Living</h2>
          <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, alias, voluptatem, laboriosam optio adipisci corporis.</p>
          <a href="javascript:void(0)" class="card-btn">View Details</a>
          <h3 class="card-subtitle" data-text="Downtown Area">Downtown Area</h3>
        </div>
      </article>
    `
  },
  // card02
  {
    id: "exclusive-property",
    previewImg: "https://maquetacion77.github.io/images/images/card_02.webp",
    altText: "Preview of Exclusive Property",
    htmlContent: `
     <article class="card02">
       <img class="card-image" src="https://maquetacion77.github.io/images/cards-280x360/Exclusive Property.jpg" alt="Exterior view of a luxury villa with an infinity pool" loading="lazy" decoding="async" />
      <div class="card-overlay flex---">
        <h2 class="card-title">Exclusive Property</h2>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, alias, voluptatem, laboriosam optio adipisci corporis.</p>
      </div>
      <a href="javascript:void(0)" class="card-btn"><span>View Details</span></a>
      <h3 class="card-subtitle">Prime Location</h3>
    </article>
    `
  },
  // card03
  {
   id: "card-news-tech",
  previewImg: "https://maquetacion77.github.io/images/images/card_03.webp",
  altText: "Card News Preview",
  htmlContent: `
    <article class="card-news">
     <div class="card-news-image">
    <img 
      src="https://maquetacion77.github.io/images/images/imageAI.webp" 
      alt="Artificial Intelligence concept visualization" 
      loading="lazy" 
      decoding="async" 
    />
    <span class="badge__news">Technology</span>
  </div>
      <div class="card-news-body">
        <div class="card-news-meta">AUGUST 13, 2026 • 5 MIN READ</div>
        <h2 class="card-news-title">The Impact of Artificial Intelligence on Modern Frontend Development</h2>
        <p class="card-news-excerpt">Modern tools are transforming the way developers craft complex interfaces, optimizing CSS and HTML workflows.</p>
        <div class="card-news-footer">
          By <span class="author">Maquetacion77</span>
        </div>
      </div>
    </article>
    `
  },
  // card04
  {
   id: "cyber-card-rtx",
  previewImg: "https://maquetacion77.github.io/images/images/card_04.webp",
  altText: "Cyber Card Preview",
  htmlContent: `
    <div class="cyber-card">
      <div class="cyber-card-inner">
        <div class="card-content">
          
          <div class="card-top">
            <span class="badge-cyber">GEFORCE RTX</span>
            <span class="serial-number">// 4090-NEON</span>
          </div>

          <div class="product-display">
            <div class="gpu-graphic">
              <div class="gpu-fan fan-left"></div>
              <div class="gpu-core"></div>
              <div class="gpu-fan fan-right"></div>
            </div>
            <div class="tech-specs-overlay">
              24GB GDDR6X | DLSS 3.5
            </div>
          </div>

          <div>
            <div class="product-title">RTX 4090 CYBER</div>
            <div class="product-subtitle">TITAN ARCHITECTURE / OC</div>
          </div>

          <div class="price-row">
            <span class="price-tag">$1,899.99</span>
            <span class="price-old">$2,199.00</span>
          </div>

          <div class="btn-cyber">
            ACQUIRE CORE
          </div>

        </div>
      </div>
    </div>

    `
  },
  // card05
   {
   id: "gamming-card-01 ",
  previewImg: "https://maquetacion77.github.io/images/images/card_05.webp",
  altText: "Pase Cyberpunk Preview",
  htmlContent: `
  
    <article class="card_gaming_01">
    <div class="card_gaming_content">
  <span class="card_tag">RANK #01</span>

  <h2 class="card_title">CYBER PASS</h2>
  <p class="card_subtitle">Access Level: Omega</p>

  <ul class="card_stats">
    <li>
      <span>STATUS</span>
      <strong>ACTIVE</strong>
    </li>
    <li>
      <span>XP BONUS</span>
      <strong>+150%</strong>
    </li>
    <li>
      <span>EXPIRATION</span>
      <strong>30 DAYS</strong>
    </li>
  </ul>

 <p class="card_description">
  Unlock exclusive rewards, priority servers, and encrypted network routing.
</p>
<button  type="button" class="btn_cta">
CLAIM ACCESS
</button>
</div>
  </article>

    `
  },
   // card06
   {
   id: "pricing-card-01 ",
  previewImg: "https://maquetacion77.github.io/images/images/card_06.webp",
  altText: "Saas Preview",
  htmlContent: `
  <div class="saas-card-container">
   <article class="saas-card">
    <div class="saas-card-header">
      <div class="badge-container">
        <span class="badge-plan">Pro Dev</span>
        <span class="badge-popular">★ Most Popular</span>
      </div>

      <h2 class="plan-title">Pro Plan</h2>
      <p class="plan-description">
        Ideal for independent developers and growing teams.
      </p>

      <div class="price-container">
        <span class="price-amount">$29</span>
        <span class="price-period">/ month</span>
      </div>

      <ul class="features-list">
        <li class="feature-item"><span>✓</span>Up to 15 Active Projects</li>
        <li class="feature-item"><span>✓</span>Continuous Deployment (CI/CD)</li>
        <li class="feature-item"><span>✓</span>24/7 Priority Support</li>
        <li class="feature-item"><span>✓</span>Unlimited Custom Domains</li>
        <li class="feature-item"><span>✓</span>Advanced Traffic Analytics</li>
      </ul>
    </div>


    <a href="#" class="btn-plan">Start Free Trial</a>
  </article>
  </div>
    `
  }
];
