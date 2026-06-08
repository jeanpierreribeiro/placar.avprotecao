<template>
<!-- Atmospheric background -->
<div class="stadium-bg">
  <div class="field-circle"></div>
  <div class="field-midline"></div>
</div>

<!-- Confetti -->
<div class="confetti-container" id="confettiContainer"></div>

<div class="page-wrapper">

  <!-- Header -->
  <header>
    <div class="logo-wrap">
      <!-- AVEP Logo Branca e Amarela -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.72 90.23" aria-label="AVEP Minas Proteção">
        <rect class="lw" x="16.66" y="67.52" width="213.22" height="1.35"/>
        <rect class="lw" x="184.24" y="5.99" width="1.21" height="57.73"/>
        <path class="lw" d="M22.81,81.67l-.08-4.22-1.42,2.27c-.13.21-.78.28-.92.05l-1.45-2.35-.08,4.18c-.55.29-1.22.27-1.89.05l-.02-8.76c.55-.21,1.1-.18,1.69-.07l2.17,3.91,2.19-3.78c.32-.39,1.29-.26,1.72,0v8.68c-.6.24-1.17.21-1.91.04Z"/>
        <path class="lw" d="M55.78,81.6c-.62.29-1.22.23-1.82.09l-2.91-4.79-.05,4.75c-.62.21-1.2.21-1.85,0v-8.69c.47-.27,1.34-.39,1.71-.04l2.9,4.63.07-4.59c.6-.33,1.31-.3,1.95.03v8.62Z"/>
        <path class="lw" d="M149.85,79.56c0,1.79-2.06,2.65-4.24,2.22-1.19-.23-2.06-1.17-2.06-2.39v-4.54c.46-1.96,2.49-2.46,4.35-2.01.97.23,1.93,1.04,1.93,2.08v4.64ZM146.74,80.02c.74,0,1.22-.41,1.22-1.06l.02-3.17c0-.79-.54-1.23-1.3-1.21-.58.02-1.16.25-1.15.93v3.76c0,.56.67.76,1.22.76Z"/>
        <path class="lw" d="M228.77,80.96c-.79.82-1.75.91-2.83.91-1.22,0-2.81-.67-2.81-2.07v-4.99c0-1.58,1.76-2.11,3.12-2.12,1.46,0,2.93.58,3.09,2.17l.06,4.11c.01.71-.12,1.46-.63,1.99ZM226.32,80c.72.01,1.11-.4,1.11-1.03v-3.34c.01-.66-.38-1.04-1.04-1.04-.42,0-.81-.03-1.1.29-.19.2-.34.5-.33.89v3.18c.01.36.2.7.39.84.26.2.58.19.97.2Z"/>
        <path class="lw" d="M131.17,81.7l-.57-1.89c-.15-.51-1.27-.67-1.49-.19-.25.55.19,1.41-.18,1.92-.34.46-1.34.3-1.82.04v-8.38c0-.24.21-.45.44-.44l2.71.02c1.83.01,2.83,1.58,2.7,3.3-.07,1.02-.1,1.99-.91,2.66.71.84.81,1.82.93,2.9-.59.22-1.17.18-1.8.06ZM130.87,76.99c.28-.55.23-1.47-.1-1.95-.38-.56-1.18-.53-1.71-.44v2.99c.63.13,1.45.1,1.81-.6Z"/>
        <path class="lw" d="M195.64,78.7c.37-.41,1.17-.29,1.7-.22.45,1.37-.35,2.75-1.72,3.18-.27.92-.64,1.73-1.1,2.52-.56.06-1.05.12-1.52-.07l.88-2.2c-1.34-.28-2.57-1.06-2.58-2.5l-.02-3.92c0-1.12.6-2.08,1.64-2.48s2.22-.4,3.22.14,1.55,1.88,1.22,2.98c-.57.02-1.08.07-1.55-.04-.33-.08-.27-.61-.32-.82-.17-.61-.69-.66-1.19-.68-.38-.01-1.02.26-1.02.81v3.84c-.01.51.66.78,1.07.76.46-.01.71-.09.98-.32l.32-.99Z"/>
        <path class="lw" d="M89.45,79.49c-.11,1.65-1.58,2.44-3.07,2.38-.87-.03-1.59-.29-2.13-.87s-.76-1.41-.55-2.26c.54-.09,1.22-.18,1.72.06.15.22.15.73.3.91.22.26.57.31.95.3.46-.02.76-.3.84-.7.2-1.06-1.84-.99-3.04-1.93-.92-.72-1.04-2.16-.58-3.21.76-1.73,3.73-1.92,4.89-.54.45.53.86,1.47.5,2.19-.35.27-1.37.25-1.68-.05-.16-.26-.15-.69-.28-.85-.23-.28-.54-.35-.95-.32s-.68.24-.78.61c-.07.24.06.7.39.85l2.33,1c.89.38,1.2,1.4,1.13,2.45Z"/>
        <path class="lw" d="M211.6,80.29l-2.58-.04-.53,1.42c-.57.17-1.17.14-1.77.05-.06-.23-.08-.47,0-.7l2.71-8.13c.57-.19,1.1-.19,1.72-.05l2.82,8.8c-.69.23-1.27.17-1.89.1-.23-.43-.32-.81-.47-1.43ZM210.93,78.35l-.7-2.16-.68,2.22c.48.09.87.12,1.37-.06Z"/>
        <path class="lw" d="M178.29,78.2l-.03,1.81,3.16.02c.21.54.15,1.1,0,1.72h-5.09s-.06-8.29-.06-8.29c0-.2.04-.4.12-.52.1-.14.34-.21.58-.2l4.44.04c.22.58.22,1.22,0,1.79l-3.14.04v1.76s2.62.02,2.62.02c.22.55.16,1.17.05,1.77l-2.65.04Z"/>
        <path class="lw" d="M112.66,79.55l-.08,2.1c-.63.21-1.29.25-1.86-.06v-8.27c-.01-.35.25-.58.61-.57l2.54.05c1.91.04,2.77,1.69,2.74,3.42-.03,1.56-.61,2.98-2.31,3.3l-1.65.03ZM114.22,77.43c.6-.64.56-1.92.02-2.51-.4-.44-1.07-.33-1.6-.27v3c.46,0,1.19.21,1.58-.22Z"/>
        <path class="lw" d="M71.19,80.25h-2.61s-.49,1.45-.49,1.45c-.55.11-1.26.21-1.75-.09-.21-.26.05-.78.15-1.07l2.53-7.63c.48-.23,1.24-.28,1.68,0l2.77,8.25c.08.24,0,.55-.3.58-.42.05-1.12.14-1.46-.11-.31-.32-.33-.84-.52-1.38ZM70.6,78.39l-.75-2.14-.69,2.19c.54.05.96.09,1.44-.05Z"/>
        <path class="lw" d="M163.93,81.55c-.54.37-1.22.29-1.89.12l-.03-7.03-1.75-.12c-.39-.38-.3-1.25-.03-1.72l5.45-.04c.28.54.29,1.22.08,1.81l-1.84.06v6.93Z"/>
        <rect class="lw" x="35.92" y="72.74" width="1.95" height="9.04"/>
        <path class="lw" d="M210.95,71.88l-1.39-.34c-.26-.06-.85.53-1.15.17-.23-.27.03-.82.23-1.02.29-.29.76-.5,1.18-.37l1.36.41c.14-.35.62-.6.9-.34s.17.79-.04,1.08c-.2.26-.6.53-1.09.41Z"/>
        <!-- Yellow parts (car/wheel icons) -->
        <path class="ly" d="M53.99,56.4c0,5.5-4.46,9.95-9.95,9.95s-9.95-4.46-9.95-9.95,4.46-9.95,9.95-9.95,9.95,4.46,9.95,9.95ZM39.89,57.02c.47,2.1,2.3,3.5,4.39,3.38,1.89-.11,3.67-1.59,3.9-3.68s-1.69-4.06-3.75-4.25c-2.21-.2-4.14,1.25-4.58,3.42-.04.19-.04.35-.04.52s.02.37.07.62Z"/>
        <path class="ly" d="M228.51,56.73l-7.01-.04c.08-5.43-3.84-9.98-9.14-10.76-6.51-.96-12.38,4.11-12.36,10.77l-6.79.02c-1.49,0-2.47-1.14-2.62-2.62l.08-25.69c.02-5.58,2.69-10.79,6.77-14.47,6.27-5.64,15.44-6.61,22.8-2.61,6.6,3.67,10.64,10.61,10.41,18.25h-6.89c.2-6.83-4.84-12.6-11.56-13.37-4-.4-7.87.89-10.66,3.63s-4.34,6.65-3.93,10.82h33.05s.01,23.36.01,23.36c-.05,1.33-.82,2.4-2.16,2.71Z"/>
        <path class="ly" d="M220.88,56.4c0,5.5-4.46,9.95-9.95,9.95s-9.95-4.46-9.95-9.95,4.46-9.95,9.95-9.95,9.95,4.46,9.95,9.95ZM214.98,56.42c0-2.24-1.82-4.06-4.06-4.06s-4.06,1.82-4.06,4.06,1.82,4.06,4.06,4.06,4.06-1.82,4.06-4.06Z"/>
        <path class="ly" d="M234.07,45.97c0,1.04-1.14,1.16-2.45.97v-8.88c1.17-.33,2.44-.04,2.44.94v6.97Z"/>
        <!-- White letter forms -->
        <path class="lw" d="M53.7,43.38l-9.08-15.59-15.17,25.8c-1.44,2.44-4.07,3.74-6.82,3.16-1.88-.4-3.52-1.71-4.31-3.44-.89-1.94-.78-4.09.29-5.9l7.58-12.86,13.27-22.05c1.12-1.86,3.07-2.94,5.16-2.9,2.51.05,4.26,1.59,5.48,3.64l9.64,16.28,10.66,18.03c1.13,1.91,1.11,4.14.02,6.15-.89,1.65-2.79,3.02-4.88,3.14-2.95.17-4.86-1.34-6.28-3.82l-5.22-9.11c-.33-.54-.21-.34-.33-.54Z"/>
        <path class="lw" d="M174.77,14.05c-3.09-3.22-7.18-5.37-11.71-5.55l-9.44-.05c-3.53-.02-6.45,2.75-6.46,6.36v26.61s.03,9.65.03,9.65c0,1.67.81,3.16,2.08,4.36.82.77,2.15,1.26,3.35,1.35,3.37.25,6.27-2.42,6.28-5.77l.02-6.05,4.27-.03c1.94-.01,3.71-.45,5.5-1.17,4.65-1.92,8.2-5.63,9.98-10.33,2.53-6.72,1.05-14.19-3.91-19.37ZM168.98,27.21c-.15,2.18-1.34,4.08-3.08,5.19-.96.67-2.06,1.05-3.28,1.06h-.21s-.08,0-.13,0h-3.3l-.03-9.37v-4.08s2.76.01,2.76.01h.57s.03,0,.05,0h.45c.6,0,1.39.19,2.02.49,2.28.92,3.94,3.06,4.18,5.61,0,.02,0,.03,0,.05.02.19.03.38.03.57,0,.11-.01.21-.02.32,0,.05,0,.1,0,.15Z"/>
        <path class="lw" d="M141.88,45.32c2.49,1.91,3.28,5.33,1.93,8.15-.86,1.79-2.58,3.22-4.68,3.22l-28.37.04c-3.11-.38-5.28-2.8-5.36-5.9l.03-7.01v-5.09s-.04-5.99-.04-5.99c-.01-2.8,1.79-5.28,4.53-6.05l1.41-.23,15.63-.04c2.69,0,4.99,1.24,6.04,3.8,1.39,3.38-.33,7.83-4.17,8.6h-11.28s0,5.93,0,5.93h22.16c.76.02,1.5.06,2.17.58Z"/>
        <path class="lw" d="M79.44,53.33l-13.67-23.47-6.47-10.93c-1.18-1.99-1.62-4.22-.54-6.42.88-1.79,2.74-3.24,4.98-3.47,2.65-.28,5.1,1.08,6.44,3.38l4.66,7.95,10.21,17.78,8.98-15.43,6.47-11.22c1.15-1.68,2.91-3,5.01-3.01l12.64-.07h12.62s6.67-.02,6.67-.02c1.93,0,3.77.38,5.1,1.72s2,3.09,1.89,5.11c-.17,3-2.52,5.9-5.74,5.91l-29.96.06-1.9,3.31-16.27,28.75c-1.19,2.11-3.17,3.56-5.63,3.55s-4.28-1.39-5.5-3.48Z"/>
      </svg>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-tag">⚽ Campanha Junho 2026</div>
    <h1 class="hero-title">
      Qual vai ser
      <span class="highlight">o placar?</span>
    </h1>
    <p class="hero-sub">Comente seu palpite para Brasil x Marrocos e participe da campanha da AVEP.</p>
    <p class="hero-promo">🏆 Acerte o placar e ganhe na hora <strong>75% de desconto</strong> na adesão!</p>

    <!-- Imagem da campanha: salve o arquivo como "imagem-jogadores.jpg" na mesma pasta do HTML -->
    <div class="hero-img-wrap">
      <img src="/imagem-jogadores.png" alt="Jogadores disputando a bola – Brasil x Marrocos" onerror="this.style.display='none'">
    </div>
    <!-- FALLBACK SVG (removido quando imagem estiver presente) -->
    <div class="players-scene" aria-hidden="true" id="svgFallback">
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">

        <!-- Stadium glow backdrop -->
        <ellipse cx="240" cy="210" rx="220" ry="30" fill="rgba(34,197,94,0.08)"/>

        <!-- Field ground -->
        <rect x="0" y="185" width="480" height="35" rx="0" fill="rgba(15,60,25,0.6)"/>
        <!-- Field line -->
        <line x1="240" y1="185" x2="240" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <ellipse cx="240" cy="185" rx="55" ry="12" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none"/>

        <!-- BALL in center -->
        <g transform="translate(230, 165)">
          <circle cx="10" cy="10" r="11" fill="white"/>
          <circle cx="10" cy="10" r="11" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="0.5"/>
          <!-- Pentagons -->
          <path d="M10 3 L13.5 7 L12 11.5 L8 11.5 L6.5 7 Z" fill="#111"/>
          <path d="M16 6 L19 9 L17.5 13 L14 13 L13.5 9.5 Z" fill="#111" opacity="0.5"/>
        </g>

        <!-- === BRAZIL PLAYER (left) === -->
        <g transform="translate(100, 20)">
          <!-- Shadow -->
          <ellipse cx="55" cy="168" rx="30" ry="7" fill="rgba(0,0,0,0.3)"/>

          <!-- Leg left (behind) -->
          <path d="M42 120 L36 155 L30 168" stroke="#1a3a8c" stroke-width="9" stroke-linecap="round"/>
          <!-- Shin guard hint -->
          <path d="M34 145 L31 158" stroke="#ddd" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
          <!-- Boot left -->
          <ellipse cx="27" cy="169" rx="10" ry="5" fill="#111" transform="rotate(-10 27 169)"/>

          <!-- Leg right (forward, kicking) -->
          <path d="M52 120 L62 148 L72 158" stroke="#1a3a8c" stroke-width="9" stroke-linecap="round"/>
          <!-- Shin guard right -->
          <path d="M60 140 L68 153" stroke="#ddd" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
          <!-- Boot right (kicking) -->
          <ellipse cx="75" cy="159" rx="12" ry="5" fill="#111" transform="rotate(-30 75 159)"/>

          <!-- Shorts Brazil - blue -->
          <path d="M36 110 Q47 125 58 110 L55 130 Q47 135 39 130 Z" fill="#1e40af"/>

          <!-- Torso / Jersey Brazil yellow -->
          <path d="M35 70 Q30 90 32 110 Q47 118 62 108 Q64 88 58 70 Z" fill="#fbbf24"/>
          <!-- Jersey green details -->
          <path d="M38 72 L40 108" stroke="#22c55e" stroke-width="2.5" opacity="0.7"/>
          <path d="M56 72 L54 108" stroke="#22c55e" stroke-width="2.5" opacity="0.7"/>
          <!-- Collar -->
          <path d="M43 70 Q47 76 52 70" fill="none" stroke="#22c55e" stroke-width="2.5"/>

          <!-- Arm left (back) -->
          <path d="M35 76 Q18 90 14 105" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <path d="M14 105 Q12 112 16 116" stroke="#f5a623" stroke-width="6" stroke-linecap="round"/>

          <!-- Arm right (forward, extended) -->
          <path d="M58 76 Q74 88 80 100" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <path d="M80 100 Q84 106 81 112" stroke="#f5a623" stroke-width="6" stroke-linecap="round"/>

          <!-- Neck -->
          <rect x="43" y="56" width="9" height="16" rx="4" fill="#c8a882"/>

          <!-- Head -->
          <circle cx="47" cy="48" r="22" fill="#c8a882"/>
          <!-- Hair - short dark -->
          <path d="M28 40 Q30 22 47 22 Q64 22 66 40 Q60 28 47 28 Q34 28 28 40" fill="#1a0a00"/>
          <!-- Face features -->
          <circle cx="40" cy="46" r="3" fill="#8b6040" opacity="0.6"/>
          <circle cx="54" cy="46" r="3" fill="#8b6040" opacity="0.6"/>
          <!-- Smile / determined expression -->
          <path d="M41 55 Q47 59 53 55" fill="none" stroke="#8b6040" stroke-width="1.5" stroke-linecap="round"/>

          <!-- Number on jersey -->
          <text x="43" y="95" font-family="Arial" font-weight="bold" font-size="11" fill="rgba(255,255,255,0.8)">10</text>
        </g>

        <!-- === MOROCCO PLAYER (right) === -->
        <g transform="translate(270, 30)">
          <!-- Shadow -->
          <ellipse cx="55" cy="158" rx="28" ry="7" fill="rgba(0,0,0,0.3)"/>

          <!-- Leg left (running) -->
          <path d="M44 112 L38 145 L32 158" stroke="#006233" stroke-width="9" stroke-linecap="round"/>
          <!-- Shin guard left -->
          <path d="M36 137 L33 150" stroke="#ddd" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
          <!-- Boot left -->
          <ellipse cx="29" cy="159" rx="10" ry="5" fill="#111" transform="rotate(-10 29 159)"/>

          <!-- Leg right (back, trailing) -->
          <path d="M54 112 L58 140 L54 155" stroke="#006233" stroke-width="9" stroke-linecap="round"/>
          <!-- Boot right -->
          <ellipse cx="52" cy="157" rx="10" ry="5" fill="#111" transform="rotate(5 52 157)"/>

          <!-- Shorts Morocco - green -->
          <path d="M38 102 Q48 116 58 102 L56 122 Q48 128 40 122 Z" fill="#005c2e"/>

          <!-- Torso / Jersey Morocco red -->
          <path d="M36 62 Q31 82 33 102 Q48 110 63 100 Q65 80 59 62 Z" fill="#c1272d"/>
          <!-- Jersey detail green star area -->
          <path d="M48 75 L50 85 L48 95" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
          <!-- Green collar detail -->
          <path d="M42 63 Q48 68 54 63" fill="none" stroke="#006233" stroke-width="2.5"/>
          <!-- Small star on chest -->
          <text x="43" y="86" font-family="Arial" font-size="10" fill="rgba(255,255,255,0.5)">★</text>

          <!-- Arm left (reaching) -->
          <path d="M36 68 Q20 80 16 94" stroke="#c1272d" stroke-width="8" stroke-linecap="round"/>
          <path d="M16 94 Q13 100 17 106" stroke="#a02020" stroke-width="6" stroke-linecap="round"/>

          <!-- Arm right -->
          <path d="M59 68 Q73 78 76 90" stroke="#c1272d" stroke-width="8" stroke-linecap="round"/>
          <path d="M76 90 Q79 96 76 102" stroke="#a02020" stroke-width="6" stroke-linecap="round"/>

          <!-- Neck -->
          <rect x="43" y="48" width="9" height="16" rx="4" fill="#b07850"/>

          <!-- Head -->
          <circle cx="47" cy="40" r="22" fill="#b07850"/>
          <!-- Hair - dark, short natural -->
          <path d="M28 32 Q30 14 47 14 Q64 14 66 32 Q60 20 47 20 Q34 20 28 32" fill="#0a0500"/>
          <!-- Face features -->
          <circle cx="41" cy="38" r="3" fill="#7a4e28" opacity="0.6"/>
          <circle cx="53" cy="38" r="3" fill="#7a4e28" opacity="0.6"/>
          <!-- Eyebrow serious -->
          <path d="M38 32 Q41 30 44 32" fill="none" stroke="#3d1a00" stroke-width="1.5"/>
          <path d="M50 32 Q53 30 56 32" fill="none" stroke="#3d1a00" stroke-width="1.5"/>
          <!-- Determined mouth -->
          <path d="M42 46 L52 46" fill="none" stroke="#7a4e28" stroke-width="1.5" stroke-linecap="round"/>

          <!-- Number on jersey -->
          <text x="44" y="88" font-family="Arial" font-weight="bold" font-size="11" fill="rgba(255,255,255,0.8)">7</text>
        </g>

        <!-- VS text in center -->
        <text x="240" y="110" text-anchor="middle" font-family="'Barlow Condensed', sans-serif" font-weight="900" font-size="28" fill="rgba(250,204,7,0.7)" letter-spacing="2">VS</text>

        <!-- Sparkles / energy lines -->
        <line x1="200" y1="110" x2="215" y2="115" stroke="rgba(250,204,7,0.4)" stroke-width="2" stroke-linecap="round"/>
        <line x1="197" y1="118" x2="213" y2="120" stroke="rgba(250,204,7,0.25)" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="280" y1="110" x2="265" y2="115" stroke="rgba(250,204,7,0.4)" stroke-width="2" stroke-linecap="round"/>
        <line x1="283" y1="118" x2="267" y2="120" stroke="rgba(250,204,7,0.25)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
  </section>

  <!-- Main content -->
  <main class="main-content">

    <!-- Form card -->
    <div class="form-card" id="formCard">
      <h2 class="form-card-title">Cadastrar meu <span>palpite</span></h2>

      <form id="registrationForm" novalidate>

        <div class="field-group">
          <label for="name">Nome completo</label>
          <input type="text" id="name" name="name" placeholder="Seu nome completo" autocomplete="name">
          <p class="error-msg" id="nameErr">Informe seu nome completo.</p>
        </div>

        <div class="field-group">
          <label for="whatsapp">WhatsApp</label>
          <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" autocomplete="tel" inputmode="numeric">
          <p class="error-msg" id="waErr">Informe um número de WhatsApp válido.</p>
        </div>

        <!-- Scoreboard inputs -->
        <div class="field-group">
          <p class="scoreboard-label">Seu palpite</p>
          <div class="scoreboard">
            <div class="score-team">
              <div class="score-flag flag-brazil"></div>
              <span class="score-name">Brasil</span>
              <input
                type="text"
                inputmode="numeric"
                class="score-input"
                id="scoreBrazil"
                name="scoreBrazil"
                maxlength="2"
                placeholder="0"
                aria-label="Placar do Brasil"
              >
            </div>
            <div class="score-separator">×</div>
            <div class="score-team">
              <div class="score-flag flag-morocco"></div>
              <span class="score-name">Marrocos</span>
              <input
                type="text"
                inputmode="numeric"
                class="score-input"
                id="scoreMorocco"
                name="scoreMorocco"
                maxlength="2"
                placeholder="0"
                aria-label="Placar de Marrocos"
              >
            </div>
          </div>
          <p class="error-msg" id="scoreErr" style="text-align:center">Informe o placar para ambos os times.</p>
        </div>

        <button type="submit" class="btn-submit" id="submitBtn">
          <span class="btn-text">⚽ Confirmar participação</span>
          <span class="btn-loading">
            <span class="spinner"></span>
            Registrando...
          </span>
        </button>
        <p class="submit-status error" id="submitStatus" role="alert"></p>

      </form>
    </div>

    <!-- Success card -->
    <div class="success-card" id="successCard">
      <div class="success-icon">🎉</div>
      <h2 class="success-title">Palpite registrado!</h2>
      <p class="success-text">
        A AVEP entrará em contato pelo WhatsApp para confirmar sua participação e apresentar sua condição especial.
      </p>
    </div>

    <!-- How to participate -->
    <div class="section">
      <h2 class="section-title">Como <span>participar</span></h2>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">1</div>
          <p class="step-text">Preencha seu nome e WhatsApp</p>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <p class="step-text">Informe seu palpite Brasil x Marrocos</p>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <p class="step-text">Envie o cadastro</p>
        </div>
        <div class="step-card">
          <div class="step-num">4</div>
          <p class="step-text">Aguarde o contato da AVEP</p>
        </div>
      </div>
    </div>

    <!-- Offer block -->
    <!-- Imagem da campanha: salve o arquivo como "imagem-bola.jpg" na mesma pasta do HTML -->
    <div class="offer-block">
      <div class="offer-img-wrap">
        <img src="/imagem-bola.png" alt="Brasil x Marrocos – Campo de futebol" onerror="this.parentElement.style.display='none'">
      </div>
      <div class="offer-badge">75%</div>
      <h2 class="offer-title">Condição especial do Mês da Torcida</h2>
      <p class="offer-text">Durante junho, novas associações podem receber <strong>75% de desconto na adesão.</strong></p>
      <p class="offer-obs">Condição válida conforme regulamento da campanha.</p>
    </div>

  </main>

  <!-- Footer -->
  <footer>
    <p class="footer-text">
      Condição válida para novas associações em junho. Benefícios sujeitos ao regulamento.<br>
      Proteção veicular associativa não é seguro. Consulte as condições com a AVEP.
    </p>
  </footer>

</div><!-- end page-wrapper -->
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'pt-BR' },
  title: 'Placar da Torcida AVEP - Brasil x Marrocos',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Barlow:wght@400;500;600&display=swap' }
  ]
})

onMounted(() => {
  // Depois de publicar o Google Apps Script como Web App, cole a URL /exec aqui.
  const SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzEKxV2siXxyX7XQC2_s0WQZaHeSRJcDseD0L2rHAlxjwSDEMBEKiu1ydREzUZ4nnmf/exec';
  
  // ─── HERO IMAGE: hide SVG fallback when real image loads ───
  (function() {
    var heroImg = document.querySelector('.hero-img-wrap img');
    var svgFallback = document.getElementById('svgFallback');
    if (heroImg && svgFallback) {
      if (heroImg.complete && heroImg.naturalWidth > 0) {
        svgFallback.style.display = 'none';
      } else {
        heroImg.addEventListener('load', function() {
          svgFallback.style.display = 'none';
        });
        heroImg.addEventListener('error', function() {
          // image not found — fallback SVG stays visible
        });
      }
    }
  })();
  
  // ─── CONFETTI ───
  (function() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#facc07','#22c55e','#ffffff','#fbbf24','#86efac','#fde047'];
    for (let i = 0; i < 28; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + '%';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = (6 + Math.random() * 6) + 'px';
      el.style.height = (10 + Math.random() * 10) + 'px';
      el.style.animationDuration = (4 + Math.random() * 8) + 's';
      el.style.animationDelay = (Math.random() * 10) + 's';
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.opacity = '0';
      container.appendChild(el);
    }
  })();
  
  // ─── WhatsApp MASK ───
  const waInput = document.getElementById('whatsapp');
  waInput.addEventListener('input', function(e) {
    let v = this.value.replace(/\D/g, '').substring(0, 11);
    if (v.length === 0) { this.value = ''; return; }
    if (v.length <= 2)        this.value = '(' + v;
    else if (v.length <= 7)   this.value = '(' + v.substring(0,2) + ') ' + v.substring(2);
    else if (v.length <= 10)  this.value = '(' + v.substring(0,2) + ') ' + v.substring(2,6) + '-' + v.substring(6);
    else                      this.value = '(' + v.substring(0,2) + ') ' + v.substring(2,7) + '-' + v.substring(7);
  });
  
  // ─── Score inputs: digits only, 0-99 ───
  ['scoreBrazil','scoreMorocco'].forEach((id, idx, arr) => {
    const input = document.getElementById(id);
    input.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '').substring(0, 2);
      if (this.value.length >= 2 && idx < arr.length - 1) {
        document.getElementById(arr[idx + 1]).focus();
      }
    });
  });
  
  // ─── VALIDATION ───
  function showError(inputId, msgId) {
    document.getElementById(inputId).classList.add('error');
    document.getElementById(msgId).classList.add('visible');
  }
  function clearError(inputId, msgId) {
    document.getElementById(inputId).classList.remove('error');
    document.getElementById(msgId).classList.remove('visible');
  }
  
  ['name','whatsapp'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      clearError(id, id === 'name' ? 'nameErr' : 'waErr');
    });
  });
  ['scoreBrazil','scoreMorocco'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      document.getElementById('scoreBrazil').classList.remove('error');
      document.getElementById('scoreMorocco').classList.remove('error');
      document.getElementById('scoreErr').classList.remove('visible');
    });
  });
  
  function showSubmitError(message) {
    const status = document.getElementById('submitStatus');
    status.textContent = message;
    status.classList.add('visible');
  }
  
  function clearSubmitError() {
    const status = document.getElementById('submitStatus');
    status.textContent = '';
    status.classList.remove('visible');
  }
  
  // ─── FORM SUBMIT ───
  document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    let valid = true;
    clearSubmitError();
  
    const name = document.getElementById('name').value.trim();
    const wa   = document.getElementById('whatsapp').value.replace(/\D/g,'');
    const sb   = document.getElementById('scoreBrazil').value.trim();
    const sm   = document.getElementById('scoreMorocco').value.trim();
  
    if (!name || name.split(' ').length < 2) {
      showError('name', 'nameErr');
      valid = false;
    } else {
      clearError('name', 'nameErr');
    }
  
    if (wa.length < 10) {
      showError('whatsapp', 'waErr');
      valid = false;
    } else {
      clearError('whatsapp', 'waErr');
    }
  
    if (sb === '' || sm === '') {
      document.getElementById('scoreBrazil').classList.add('error');
      document.getElementById('scoreMorocco').classList.add('error');
      document.getElementById('scoreErr').classList.add('visible');
      valid = false;
    } else {
      document.getElementById('scoreBrazil').classList.remove('error');
      document.getElementById('scoreMorocco').classList.remove('error');
      document.getElementById('scoreErr').classList.remove('visible');
    }
  
    if (!valid) return;
  
    // Envia para o Google Apps Script configurado acima.
    const btn = document.getElementById('submitBtn');
    btn.classList.add('loading');
    btn.disabled = true;
  
    if (!SHEETS_WEB_APP_URL) {
      btn.classList.remove('loading');
      btn.disabled = false;
      showSubmitError('Cadastro ainda nao configurado. Informe a URL do Google Apps Script no arquivo HTML.');
      return;
    }
  
    const payload = new URLSearchParams({
      nome: name,
      whatsapp: wa,
      placarBrasil: sb,
      placarMarrocos: sm,
      palpite: sb + ' x ' + sm,
      origem: window.location.href,
      dataEnvio: new Date().toISOString()
    });
  
    try {
      await fetch(SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });
      showSuccess();
    } catch (error) {
      btn.classList.remove('loading');
      btn.disabled = false;
      showSubmitError('Nao foi possivel registrar agora. Tente novamente em instantes.');
    }
  });
  
  function showSuccess() {
    document.getElementById('formCard').style.display = 'none';
    const sc = document.getElementById('successCard');
    sc.classList.add('visible');
    sc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Burst confetti on success
    burstConfetti();
  }
  
  function burstConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#facc07','#22c55e','#ffffff','#fbbf24','#86efac'];
    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = (20 + Math.random() * 60) + '%';
      el.style.top = '0';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = (8 + Math.random() * 8) + 'px';
      el.style.height = (12 + Math.random() * 12) + 'px';
      el.style.animationDuration = (2 + Math.random() * 3) + 's';
      el.style.animationDelay = (Math.random() * 0.5) + 's';
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      el.style.opacity = '0';
      container.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }
  }
})
</script>
