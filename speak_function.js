// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Adaptive highlighting: line-by-line on desktop, card glow on mobile
function speakCard(cardId) {
  const data = firstAidData[currentLang];
  const item = data.find(d => d.id === cardId);
  if (!item) return;

  const card = document.querySelector([data-card-id="${cardId}"]);
  const button = card ? card.querySelector('.listen-btn') : null;

  // Toggle off if already speaking
  if (currentSpeech && button && button.classList.contains('speaking')) {
    window.speechSynthesis.cancel();
    clearHighlights(card);
    currentSpeech = null;
    if (button) {
      button.classList.remove('speaking');
      button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    }
    return;
  }

  if (!('speechSynthesis' in window)) {
    alert(currentLang === 'en' ? 'Text-to-speech not supported' : 'टेक्स्ट-टू-स्पीच समर्थित नहीं है');
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();
  document.querySelectorAll('.card').forEach(c => clearHighlights(c));

  // Reset all buttons
  document.querySelectorAll('.listen-btn').forEach(btn => {
    btn.classList.remove('speaking');
    btn.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
  });

  // Mobile: just glow the card border
  if (isMobile) {
    const doLabel = currentLang === 'en' ? 'What to do' : 'क्या करें';
    const dontLabel = currentLang === 'en' ? 'What not to do' : 'क्या न करें';
    const textToSpeak = ${item.title}. : . : .;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
    utterance.rate = 0.9;

    utterance.onstart = () => {
      if (button) {
        button.classList.add('speaking');
        button.textContent = currentLang === 'en' ? '⏸️ Stop' : '⏸️ रोकें';
      }
      card.classList.add('card-speaking');
    };

    utterance.onend = () => {
      clearHighlights(card);
      currentSpeech = null;
      if (button) {
        button.classList.remove('speaking');
        button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
      }
    };

    utterance.onerror = () => {
      clearHighlights(card);
      currentSpeech = null;
      if (button) {
        button.classList.remove('speaking');
        button.textContent = currentLang === 'en' ? '�� Listen' : '🔊 सुनें';
      }
    };

    currentSpeech = utterance;
    window.speechSynthesis.speak(utterance);
    return;
  }

  // Desktop: line-by-line with boundary events
  const segments = [];
  
  // Map text to elements
  segments.push({ text: item.title, element: card.querySelector('h2'), type: 'title' });
  
  const doLabel = currentLang === 'en' ? 'Do' : 'करें';
  segments.push({ text: doLabel, element: card.querySelector('h3:not(.dont)'), type: 'title' });
  
  const doList = card.querySelector('ul:not(.dont)');
  item.do.forEach((text, i) => {
    segments.push({ text, element: doList.querySelectorAll('li')[i], type: 'do' });
  });
  
  const dontLabel = currentLang === 'en' ? "Don't" : 'न करें';
  segments.push({ text: dontLabel, element: card.querySelector('h3.dont'), type: 'title' });
  
  const dontList = card.querySelector('ul.dont');
  item.dont.forEach((text, i) => {
    segments.push({ text, element: dontList.querySelectorAll('li')[i], type: 'dont' });
  });

  // Build character map
  const charMap = [];
  let charPos = 0;
  segments.forEach(seg => {
    const start = charPos;
    const end = charPos + seg.text.length;
    charMap.push({ start, end, element: seg.element, type: seg.type });
    charPos = end + 2; // +2 for ". " separator
  });

  const doLabelFull = currentLang === 'en' ? 'What to do' : 'क्या करें';
  const dontLabelFull = currentLang === 'en' ? 'What not to do' : 'क्या न करें';
  const textToSpeak = ${item.title}. : . : .;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
  utterance.rate = 0.9;

  let currentHighlight = null;

  utterance.onboundary = (event) => {
    if (event.name === 'word') {
      const charIndex = event.charIndex || 0;
      
      // Find which segment this character belongs to
      for (let i = 0; i < charMap.length; i++) {
        if (charIndex >= charMap[i].start && charIndex < charMap[i].end) {
          if (currentHighlight !== charMap[i].element) {
            // Clear previous highlight
            if (currentHighlight) {
              currentHighlight.classList.remove('line-highlight-do', 'line-highlight-dont', 'line-highlight-title');
            }
            
            // Add new highlight
            currentHighlight = charMap[i].element;
            if (currentHighlight) {
              if (charMap[i].type === 'do') {
                currentHighlight.classList.add('line-highlight-do');
              } else if (charMap[i].type === 'dont') {
                currentHighlight.classList.add('line-highlight-dont');
              } else {
                currentHighlight.classList.add('line-highlight-title');
              }
            }
          }
          break;
        }
      }
    }
  };

  utterance.onstart = () => {
    if (button) {
      button.classList.add('speaking');
      button.textContent = currentLang === 'en' ? '⏸️ Stop' : '⏸️ रोकें';
    }
  };

  utterance.onend = () => {
    clearHighlights(card);
    currentSpeech = null;
    if (button) {
      button.classList.remove('speaking');
      button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    }
  };

  utterance.onerror = () => {
    clearHighlights(card);
    currentSpeech = null;
    if (button) {
      button.classList.remove('speaking');
      button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    }
  };

  currentSpeech = utterance;
  window.speechSynthesis.speak(utterance);
}

function clearHighlights(card) {
  if (!card) return;
  card.classList.remove('card-speaking');
  card.querySelectorAll('.line-highlight-do, .line-highlight-dont, .line-highlight-title').forEach(el => {
    el.classList.remove('line-highlight-do', 'line-highlight-dont', 'line-highlight-title');
  });
}
