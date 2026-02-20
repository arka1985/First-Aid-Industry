
const firstAidData = {
  en: [
    { id: 1, icon: '📋', title: 'General Guidelines of Any First Aid', do: ["Don't Panic", "Calm and Quiet", "Call the Ambulance / Emergency Services", "Look your surroundings", "Ask for Help", "If sure, do the needful"], dont: ["Don't put yourself in danger", "Don't ignore the emergency", "Don't move the person unless necessary", "Don't give up until help arrives"] },
    { id: 2, icon: '🚑', title: 'Abdominal Injury', do: ['Ask for Help', 'Keep person lying down', 'Cover wound with clean cloth', 'Call emergency services', 'Monitor breathing', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give food or water", "Don't push organs back", "Don't remove embedded objects", "Don't apply pressure directly on wound"] },
    { id: 3, icon: '✂️', title: 'Traumatic Amputation', do: ['Ask for Help', 'Control bleeding with direct pressure', 'Preserve amputated part in clean bag', 'Keep part cool (not frozen)', 'Get immediate medical help', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't place part directly on ice", "Don't wash the amputated part", "Don't try to reattach yourself", "Don't delay emergency call"] },
    { id: 4, icon: '🏔️', title: 'Altitude Related Sickness', do: ['Ask for Help', 'Descend to lower altitude immediately', 'Rest and hydrate', 'Give oxygen if available', 'Seek medical attention', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't continue ascending", "Don't ignore symptoms", "Don't give alcohol", "Don't leave person alone"] },
    { id: 5, icon: '🐝', title: 'Anaphylaxis', do: ['Ask for Help', 'Use EpiPen if available', 'Call 112 immediately', 'Lay person flat', 'Monitor breathing continuously', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give oral medication", "Don't make person sit up", "Don't delay emergency call", "Don't leave person unattended"] },
    { id: 6, icon: '🦴', title: 'Backbone/Spinal Injury', do: ['Ask for Help', 'Keep person still', 'Support head and neck', 'Call emergency services', 'Cover with blanket', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't move the person", "Don't twist or bend spine", "Don't remove helmet if present", "Don't give food or drink"] },
    { id: 7, icon: '👂', title: 'Bleeding from Ear', do: ['Ask for Help', 'Tilt head to bleeding side', 'Cover with sterile pad loosely', 'Seek immediate medical help', 'Keep person calm', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't block the ear canal", "Don't put anything inside ear", "Don't tilt head backward", "Don't ignore head injury signs"] },
    { id: 8, icon: '👃', title: 'Bleeding from Nose', do: ['Ask for Help', 'Sit upright, lean forward', 'Pinch soft part of nose', 'Apply cold compress', 'Breathe through mouth', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't tilt head backward", "Don't lie down flat", "Don't pack nose with cotton", "Don't blow nose forcefully"] },
    { id: 9, icon: '🩸', title: 'Bleeding from Wound', do: ['Ask for Help', 'Apply direct pressure', 'Elevate injured part', 'Use clean cloth/bandage', 'Call for help if severe', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't remove embedded objects", "Don't use tourniquet unnecessarily", "Don't peek at wound repeatedly", "Don't apply ice directly"] },
    { id: 10, icon: '🔥', title: 'Burn related injury', do: ['Ask for Help', 'Cool with running water 10-20 min', 'Cover with clean cloth', 'Remove jewelry before swelling', 'Seek medical help', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't apply ice directly", "Don't break blisters", "Don't use oil/butter/toothpaste", "Don't peel off stuck clothing"] },
    { id: 11, icon: '🧪', title: 'Chemical Burn', do: ['Ask for Help', 'Flush with water 20+ minutes', 'Remove contaminated clothing', 'Cover loosely', 'Call poison control', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't try to neutralize chemical", "Don't apply ointments", "Don't use hot water", "Don't rub the area"] },
    { id: 12, icon: '🫁', title: 'Breathing Difficulties', do: ['Ask for Help', 'Help person sit upright', 'Loosen tight clothing', 'Encourage slow breathing', 'Call emergency 112 and ask for Help', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't make person lie flat", "Don't give food or drink", "Don't leave person alone", "Don't ignore worsening symptoms"] },
    { id: 13, icon: '💔', title: 'Chest Pain', do: ['Ask for Help', 'Help person rest', 'Loosen tight clothing', 'Call 112 immediately', 'Give aspirin if no allergy', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't ignore the pain", "Don't give food or water", "Don't allow physical activity", "Don't delay emergency call"] },
    { id: 14, icon: '🤢', title: 'Airway obstruction (Chocking)', do: ['Ask for Help', 'Encourage coughing', 'Give 5 back blows', 'Perform abdominal thrusts', 'Call 112 if unconscious', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't slap on back while upright", "Don't put fingers in mouth blindly", "Don't give water", "Don't stop if person can speak"] },
    { id: 15, icon: '⚡', title: 'Convulsion', do: ['Ask for Help', 'Protect from injury', 'Time the seizure', 'Turn on side after seizure', 'Stay with person', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't restrain movements", "Don't put anything in mouth", "Don't give water during seizure", "Don't leave person alone"] },
    { id: 16, icon: '🔪', title: 'Cut Related Injury', do: ['Ask for Help', 'Wash hands first', 'Apply direct pressure', 'Clean with water', 'Cover with sterile dressing', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't touch wound with dirty hands", "Don't remove embedded objects", "Don't use cotton directly", "Don't ignore infection signs"] },
    { id: 17, icon: '💓', title: 'CPR', do: ['Ask for Help', 'Call 112 first', 'Push hard and fast (100 to 120/min)', 'Allow full chest recoil', 'Continue until help arrives'], dont: ["Don't stop compressions unnecessarily", "Don't compress too slowly", "Don't interrupt for more than 10 sec", "Don't give up too early"] },
    { id: 18, icon: '🔋', title: 'CPR with AED', do: ['Ask for Help', 'Turn on AED', 'Follow voice prompts', 'Ensure no one touches patient', 'Resume CPR after shock'], dont: ["Don't touch patient during analysis", "Don't use on wet surface", "Don't delay CPR for AED", "Don't remove pads between shocks"] },
    { id: 19, icon: '💧', title: 'Dehydration', do: ['Ask for Help', 'Give water/ORS slowly', 'Move to cool place', 'Rest in shade', 'Monitor condition', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give large amounts quickly", "Don't give alcohol/caffeine", "Don't continue physical activity", "Don't ignore severe symptoms"] },
    { id: 20, icon: '🐕', title: 'Dog/Animal Bite', do: ['Ask for Help', 'Wash wound thoroughly', 'Control bleeding', 'Seek medical attention', 'Report to authorities', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't ignore minor bites", "Don't apply tight bandage", "Don't delay rabies consultation", "Don't provoke the animal further"] },
    { id: 21, icon: '🌊', title: 'Drowning', do: ['Ask for Help', 'Remove from water safely', 'Start CPR if needed', 'Call 112 immediately', 'Keep warm', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't attempt rescue without training", "Don't try to drain water from lungs", "Don't delay CPR", "Don't leave person alone"] },
    { id: 22, icon: '👁️', title: 'Eye Injury', do: ['Ask for Help', 'Flush with clean water 15+ min', 'Keep eyelids open while flushing', 'Cover with clean pad', 'Seek medical care immediately', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't rub the eye", "Don't use chemicals", "Don't remove embedded objects", "Don't delay medical help"] },
    { id: 23, icon: '🔌', title: 'Electric Shock', do: ['Ask for Help', 'Turn off power source', 'Use non-conductive material', 'Check breathing and pulse', 'Call 112 immediately', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't touch victim while energized", "Don't use wet materials", "Don't move unless necessary", "Don't delay calling help"] },
    { id: 24, icon: '😵', title: 'Fainting', do: ['Ask for Help', 'Lay person flat', 'Elevate legs', 'Loosen tight clothing', 'Check breathing', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give food/water immediately", "Don't slap or shake person", "Don't make person sit up quickly", "Don't ignore if happens repeatedly"] },
    { id: 25, icon: '🌡️', title: 'Fever', do: ['Ask for Help', 'Give fluids', 'Use cool compress', 'Rest in cool room', 'Monitor temperature', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't bundle up in blankets", "Don't give aspirin to children", "Don't ignore high fever", "Don't use alcohol rubs"] },
    { id: 26, icon: '❄️', title: 'Frostbite', do: ['Ask for Help', 'Move to warm area', 'Warm gradually with body heat', 'Protect affected area', 'Seek medical help', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't rub the area", "Don't use direct heat", "Don't break blisters", "Don't walk on frostbitten feet"] },
    { id: 27, icon: '🤕', title: 'Head Injury', do: ['Ask for Help', 'Keep person still', 'Apply ice pack', 'Monitor consciousness', 'Call 112 if severe', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't move person unnecessarily", "Don't give medications", "Don't allow to sleep immediately", "Don't ignore worsening symptoms"] },
    { id: 28, icon: '☀️', title: 'Heat Stroke', do: ['Ask for Help', 'Move to cool place', 'Remove excess clothing', 'Cool body rapidly', 'Call 112', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give alcohol", "Don't give medications", "Don't leave person alone"] },
    { id: 29, icon: '🍬', title: 'Hypoglycemia', do: ['Ask for Help', 'Give sugar/juice if conscious', 'Recheck after 15 minutes', 'Give complex carbs after', 'Monitor closely', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give insulin", "Don't give food if unconscious", "Don't ignore symptoms", "Don't leave person alone"] },
    { id: 30, icon: '☠️', title: 'Poisoning', do: ['Ask for Help', 'Call poison control', 'Keep container/substance', 'Follow expert instructions', 'Monitor breathing', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't induce vomiting", "Don't give neutralizing agents", "Don't wait to see symptoms", "Don't give activated charcoal without advice"] },
    { id: 31, icon: '🐍', title: 'Snake Bite', do: ['Ask for Help', 'Keep calm and still', 'Remove jewelry/tight items', 'Mark swelling progression', 'Get to hospital immediately', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't apply tourniquet", "Don't cut the wound", "Don't suck out venom", "Don't apply ice"] },
    { id: 32, icon: '🧠', title: 'Stroke', do: ['Ask for Help', 'Follow FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 112', 'Note time of symptoms', 'Call 112 immediately', 'Keep person comfortable', 'Monitor breathing', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't give food or drink", "Don't give medications", "Don't delay emergency call", "Don't leave person alone"] },
    { id: 33, icon: '☣️', title: 'Toxic Chemical Contact', do: ['Ask for Help', 'Remove from exposure', 'Remove contaminated clothing', 'Flush skin with water 20+ min', 'Call poison control', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't use neutralizing agents", "Don't rub the area", "Don't apply ointments", "Don't delay decontamination"] },
    { id: 34, icon: '🌫️', title: 'Toxic Gas Inhalation', do: ['Ask for Help', 'Move to fresh air', 'Loosen tight clothing', 'Monitor breathing', 'Call 112', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't enter contaminated area without protection", "Don't give anything by mouth", "Don't delay evacuation", "Don't ignore mild symptoms"] },
    { id: 35, icon: '🦵', title: 'Trauma to Joints/Bone', do: ['Ask for Help', 'Immobilize the area', 'Apply ice pack', 'Elevate if possible', 'Seek medical attention', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't try to realign bones", "Don't apply heat initially", "Don't move injured part", "Don't ignore severe pain"] },
    { id: 36, icon: '🐜', title: 'Insect Bite/Sting', do: ['Ask for Help', 'Remove stinger if present', 'Wash with soap and water', 'Apply cold compress', 'Watch for allergic reaction', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't squeeze stinger", "Don't apply heat", "Don't scratch the area", "Don't ignore swelling"] },
    { id: 37, icon: '💫', title: 'Dizziness/Vertigo', do: ['Ask for Help', 'Sit or lie down immediately', 'Focus on a stationary point', 'Stay hydrated', 'Seek medical help if persistent', 'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'], dont: ["Don't stand up quickly", "Don't drive or operate machinery", "Don't ignore recurring episodes", "Don't close eyes while moving"] },
    { id: 38, icon: '⚖️', title: 'Statutory Provisions Related to First Aid Services in Establishment under the OSHWC Code 2020', do: ['Ensure first aid boxes or cupboards are readily accessible during all working hours', 'Keep one first aid box for every 150 workers ordinarily employed', 'Ensure the first-aid box is in the charge of a trained first aider', 'Maintain the contents of the first aid box as prescribed', 'Provide an ambulance room if employing 500 or more workers', 'Final Guidelines, Forms and Formats will be published whenever Central Rules, State Rules, Regulations, Standards will be finally Notified.'], dont: ["Don't keep the first aid box locked during working hours", "Don't delay access to first aid facilities in an emergency", "Don't appoint untrained personnel in charge of the first-aid box", "Don't let the first aid box supplies expire or deplete without restocking"] },
  ]
};

// Sort alphabetically, keeping Statutory Provisions at the end
const statutoryProvision = firstAidData.en.find(item => item.id === 38);
const otherProvisions = firstAidData.en.filter(item => item.id !== 38);
otherProvisions.sort((a, b) => a.title.localeCompare(b.title));
firstAidData.en = [...otherProvisions, statutoryProvision];

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function dialEmergency() {
  if (confirm('Dial emergency number 112?')) {
    window.location.href = 'tel:112';
  }
}

function renderTiles() {
  const container = document.getElementById('tilesContainer');
  container.innerHTML = '';
  const data = firstAidData.en;

  data.forEach((item, index) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.animationDelay = `${(index % 12) * 0.05}s`;
    tile.setAttribute('data-target-id', item.id);
    tile.onclick = () => showDetails(item.id);

    tile.innerHTML = `
      <i>${item.icon || '🩹'}</i>
      <h3>${item.title}</h3>
    `;
    container.appendChild(tile);
  });
}

function showDetails(id) {
  // Hide tiles, header, search, footer and show details container
  document.getElementById('tilesContainer').classList.add('hidden');
  document.getElementById('mainHeader').classList.add('hidden');
  document.getElementById('mainSearch').classList.add('hidden');
  document.getElementById('footerSection').classList.add('hidden');
  document.getElementById('cardsContainer').classList.remove('hidden');
  document.getElementById('detailsHeader').classList.remove('hidden');

  // Render only the specific card
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';
  const item = firstAidData.en.find(d => d.id === id);

  if (item) {
    const card = document.createElement('div');
    card.className = 'card';

    let titleHTML = `${item.title} <span class="card-icon">${item.icon || '🩹'}</span>`;

    let contentHTML = '';

    if (id === 38) {
      contentHTML = `
            <div class="statutory-mandatory" style="text-align:center; padding: 2rem 0; color:var(--text-dark);">
                <h3 style="font-size: 1.2rem;">Follow the Statutory Provisions mandatorily.</h3>
            </div>
        `;
    } else {
      contentHTML = `
          <div class="do-section">
            <h3>Do</h3>
            <ul>${item.do.map(point => `<li>${point}</li>`).join('')}</ul>
          </div>
          <div class="dont-section">
            <h3 class="dont">Don't</h3>
            <ul class="dont">${item.dont.map(point => `<li>${point}</li>`).join('')}</ul>
          </div>
        `;
    }

    card.innerHTML = `
      <h2>${titleHTML}</h2>
      ${contentHTML}
    `;

    // Append sub-tiles specifically for Statutory Provisions
    if (id === 38) {
      const subProvisions = [
        { name: 'OSHWC (Central) Rules, 2025', icon: '⚖️', folder: 'OSHWC_Central_Rules_2025.pdf' },
        { name: 'Factory', icon: '🏭', folder: 'Factory/index.html' },
        { name: 'Mines', icon: '⛏️', folder: 'Mines/index.html' },
        { name: 'Dock Works', icon: '⚓', folder: 'Dock Works/index.html' },
        { name: 'Plantation Works', icon: '🌱', folder: 'Plantation Works/index.html' },
        { name: 'Building & Constructions', icon: '🏗️', folder: 'Building and Other Constructions/index.html' },
        { name: 'Beedi & Cigar Works', icon: '🚭', folder: 'Beedi and Cigar Works/index.html' },
        { name: 'Motor Transport', icon: '🚚', folder: 'Motor Transport/index.html' },
        { name: 'Others', icon: '📂', folder: 'Others/index.html' }
      ];

      const subTilesHTML = subProvisions.map(prov =>
        `<a href="${prov.folder}" target="_blank" class="sub-tile" style="text-decoration:none;"><i>${prov.icon}</i><br/>${prov.name}</a>`
      ).join('');

      card.innerHTML += `
            <div class="statutory-sub-tiles">
                <a href="OSHWC_CODE_2020.pdf" target="_blank" class="sub-tile" style="text-decoration:none;"><i>📜</i><br/>OSHWC CODE 2020</a>
                ${subTilesHTML}
            </div>
        `;
    }

    // Append Bottom Back Button
    card.innerHTML += `
        <button class="back-button back-button-bottom" onclick="goBack()">
            ← Back to Previous Page
        </button>
    `;

    container.appendChild(card);
  }
}

function goBack() {
  document.getElementById('cardsContainer').classList.add('hidden');
  document.getElementById('detailsHeader').classList.add('hidden');
  document.getElementById('tilesContainer').classList.remove('hidden');
  document.getElementById('mainHeader').classList.remove('hidden');
  document.getElementById('mainSearch').classList.remove('hidden');
  document.getElementById('footerSection').classList.remove('hidden');
}

function renderFooter() {
  const footer = document.getElementById('footerSection');
  footer.innerHTML = `
    <div class="important-info">
      <h3>Important Information</h3>
      <p>• The information provided in this guide is for general use and knowledge and does not contain all information that may be relevant to every situation.</p>
      <p>• This information cannot be relied upon as a substitute for seeking guidance from appropriate professionals, such as physicians.</p>
      <p>• While great care has been taken to reflect the most current and accurate information, it does not represent or warrant that the information will be accurate or appropriate at the time of use due to evolving medical research, protocols, regulations and laws.</p>
      <p>• Users are cautioned not to prescribe or administer any medication, including over-the-counter medication, except in instances where permitted by law.</p>
      <p><strong>• The translation from English to other languages has been generated using Bhashini, an indigenously developed Large Language Model by the Government of India. As the translation is AI-generated, there may be certain translation-related errors. Users are requested to report any such discrepancies to the Bhashini team and the developer, and to verify the content with the original English text for confirmation.</strong></p>
      <p>• This guide is developed for educational purposes with good intention. If any error is identified or any comment/suggestion, please contact the developer immediately at arka.doctor@gmail.com.</p>
      <p>• <strong>If not sure, don't do anything - just call for help and get to the hospital at the earliest.</strong></p>
    </div>
    <div class="install-section">
      <h3>How To Install App</h3>
      <p><strong>Desktop:</strong> Click the install icon (⊕) in the address bar.</p>
      <p><strong>Android:</strong> Tap options (⋮) in browser -> Select "Add to Home Screen".</p>
      <p><strong>iOS:</strong> Tap Share button -> Select "Add to Home Screen".</p>
    </div>
    <div class="references">
      <h3>References</h3>
      <ol>
        <li>Ministry of Health and Family Welfare, Government of India. <a href="https://www.nhsrcindia.org/sites/default/files/2022-02/Emergency%20Care%20Training%20Manual%20for%20CHO%20at%20AB-HWC.pdf" target="_blank" style="color: inherit; text-decoration: underline;"><em>Training Manual on Management of Common Emergencies, Burns and Trauma for Community Health Officer</em></a>.</li>
        <li>St. John Ambulance. (n.d.). <em>First Aid Manual</em>. London, United Kingdom.</li>
        <li>Indian Red Cross Society. (n.d.). <em>First Aid Manual</em>. New Delhi.</li>
        <li>American Red Cross. (n.d.). <em>First Aid, CPR, and AED Provider Manual</em>. Washington, D.C.</li>
        <li>University of Michigan Health. (n.d.). <em>Medical Emergencies</em>. Michigan Medicine, Ann Arbor.</li>
        <li>Bhashini. (n.d.). <em>National Language Translation Mission</em>. Ministry of Electronics and Information Technology, Government of India.</li>
      </ol>
    </div>
    <div class="developer">
      <p>Developed by: <strong>Dr. Arkaprabha Sau, MBBS, MD (Gold Medalist), PhD (Computer Science & Engineering), DPH, Dip. Geriatric Medicine, Certificate in Diabetes Management</strong></p>
    </div>
  `;
}

// Bhashini Initialization (Optional but kept as per dynamic translation context)
function initBhashini() {
  if (window.BhashiniTranslation) {
    window.BhashiniTranslation.init({
      apiKey: "YOUR_API_KEY", // Replace if necessary
      projectId: "YOUR_PROJECT_ID",
      containerId: "bhashiniContainer"
    });
  }
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderTiles();
  renderFooter();
  initBhashini();
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();

  // Always ensure we're searching in the tiles view
  if (document.getElementById('tilesContainer').classList.contains('hidden')) {
    goBack();
  }

  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    const text = tile.innerText.toLowerCase();
    tile.style.display = text.includes(term) ? 'flex' : 'none';
  });
});
