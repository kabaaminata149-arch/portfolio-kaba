/* ---------- pétales de cerisier (avec profondeur / parallaxe) ---------- */
const c = document.getElementById('petals');
const ctx = c.getContext('2d');
let w, h, petals;
function size(){ w = c.width = window.innerWidth; h = c.height = document.body.scrollHeight; c.style.height = h + 'px'; }
function makePetal(){
  const depth = Math.random(); // 0 = loin (petit, lent, flou) ... 1 = proche (gros, rapide, net)
  return {
    x: Math.random()*w, y: Math.random()*-h,
    size: 4 + depth*11,
    speed: 0.25 + depth*1.1,
    drift: Math.random()*1.2-0.6,
    sway: Math.random()*Math.PI*2,
    swaySpeed: 0.008 + Math.random()*0.018,
    rot: Math.random()*Math.PI*2,
    rotSpeed: (Math.random()-0.5)*0.02,
    depth,
    hue: Math.random()>0.5 ? '#E05780' : '#FFCAD4'
  };
}
function initPetals(){ size(); const count = Math.min(80, Math.floor(w/18)); petals = Array.from({length:count}, makePetal); }
function drawPetal(p){
  ctx.save();
  ctx.translate(p.x,p.y);
  ctx.rotate(p.rot);
  ctx.shadowColor = p.hue;
  ctx.shadowBlur = 4 + p.depth*6;
  ctx.fillStyle = p.hue;
  ctx.globalAlpha = 0.35 + p.depth*0.5;
  ctx.beginPath();
  ctx.ellipse(0,0,p.size*0.5,p.size,Math.PI/4,0,Math.PI*2);
  ctx.fill();
  ctx.restore();
}
function tickPetals(){
  ctx.clearRect(0,0,w,h);
  for(const p of petals){
    p.sway += p.swaySpeed; p.y += p.speed; p.x += p.drift + Math.sin(p.sway)*0.6; p.rot += p.rotSpeed;
    if(p.y>h+20){ p.y=-20; p.x=Math.random()*w; }
    if(p.x>w+20) p.x=-20; if(p.x<-20) p.x=w+20;
    drawPetal(p);
  }
  requestAnimationFrame(tickPetals);
}
window.addEventListener('resize', initPetals);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { initPetals(); tickPetals(); } else { size(); }

/* ---------- EFFET TYPING ANIME ---------- */
const typedTextElement = document.querySelector('.typed-text');
const words = ['données', 'idées', 'algorithmes'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause à la fin
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Démarrer l'effet typing
if (typedTextElement) {
  setTimeout(typeEffect, 500);
}

/* ---------- ANIMATIONS AU SCROLL ---------- */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

/* ---------- FILTRES DE PROJETS ---------- */
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.proj');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    
    // Activer le bouton cliqué
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filtrer les projets
    projects.forEach(project => {
      const categories = project.getAttribute('data-category');
      
      if (filter === 'all') {
        project.classList.remove('hidden');
      } else {
        if (categories && categories.includes(filter)) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      }
    });
  });
});

/* ---------- formulaire de contact ---------- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  const actionUrl = this.getAttribute('action');
  if(!actionUrl){
    e.preventDefault();
    const name = this.name.value, email = this.email.value, message = this.message.value;
    const subject = encodeURIComponent('Contact portfolio - ' + name);
    const body = encodeURIComponent(message + '\n\n' + email);
    window.location.href = `mailto:kabaaminata149@gmail.com?subject=${subject}&body=${body}`;
    document.getElementById('formStatus').textContent = 'Ouverture de votre messagerie...';
  }
});

/* ---------- CHATBOT ----------
   Ce widget appelle VOTRE backend (dossier /backend), pas une API IA directement
   depuis le navigateur — la clé API doit toujours rester côté serveur.
   Changez BACKEND_URL une fois votre backend démarré ou déployé. */
const BACKEND_URL = "http://localhost:8000/chat"; // <-- à remplacer par l'URL de votre backend déployé

const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
let chatHistory = [];
let greeted = false;

chatToggle.addEventListener('click', () => {
  chatPanel.classList.toggle('open');
  if(!greeted){
    addBubble('Bonjour ! Je peux répondre à vos questions sur le parcours, les compétences et les projets de Kaba. Que voulez-vous savoir ?', 'bot');
    greeted = true;
  }
});

function addBubble(text, who){
  const el = document.createElement('div');
  el.className = 'chat-msg ' + who;
  el.textContent = text;
  chatBody.appendChild(el);
  chatBody.scrollTop = chatBody.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if(!msg) return;
  addBubble(msg, 'user');
  chatHistory.push({role:'user', content: msg});
  chatInput.value = '';
  const loadingEl = document.createElement('div');
  loadingEl.className = 'chat-msg bot loading';
  loadingEl.textContent = '...';
  chatBody.appendChild(loadingEl);
  chatBody.scrollTop = chatBody.scrollHeight;

  try{
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ history: chatHistory })
    });
    if(!res.ok) throw new Error('Backend error');
    const data = await res.json();
    loadingEl.remove();
    addBubble(data.reply, 'bot');
    chatHistory.push({role:'assistant', content: data.reply});
  }catch(err){
    loadingEl.remove();
    addBubble("Le backend n'est pas joignable pour le moment. Vérifiez qu'il tourne bien (voir /backend/README.md).", 'bot');
  }
});

/* ---------- GALERIE PHOTOS PROJETS ---------- */
let currentGallery = {
  project: '',
  photos: [],
  currentIndex: 0
};

// Données des projets avec leurs photos
const projectGalleries = {
  'chatgo': {
    title: 'Chat&Go — Commerce Conversationnel',
    photos: [
      'assets/projects/chatgo (1).jpeg',
      'assets/projects/chatgo (2).jpeg',
      'assets/projects/chatgo (3).jpeg',
      'assets/projects/chatgo (4).jpeg',
      'assets/projects/chatgo (5).jpeg',
      'assets/projects/chatgo (6).jpeg'
    ]
  },
  'finalyse': {
    title: 'Finalyse — Finance Intelligente',
    photos: [
      'assets/projects/finalyse (1).png',
      'assets/projects/finalyse (2).png',
      'assets/projects/finalyse (3).png',
      'assets/projects/finalyse (4).png',
      'assets/projects/finalyse (5).png',
      'assets/projects/finalyse (6).png'
    ]
  },
  'idense_bot': {
    title: 'I dansɛ_bot — Guide Touristique IA',
    photos: [
      'assets/projects/idense_bot (1).jpeg',
      'assets/projects/idense_bot (2).jpeg',
      'assets/projects/idense_bot (3).jpeg'
    ]
  },
  'analyse_croisée': {
    title: 'Analyse croisée — Power BI',
    photos: [
      'assets/projects/analyse_croisée (1).png',
      'assets/projects/analyse_croisée (2).png',
      'assets/projects/analyse_croisée (3).png',
      'assets/projects/analyse_croisée (4).png'
    ]
  }
};

function openGallery(projectName, totalPhotos) {
  const gallery = projectGalleries[projectName];
  if (!gallery) return;
  
  currentGallery.project = projectName;
  currentGallery.photos = gallery.photos;
  currentGallery.currentIndex = 0;
  
  // Mettre à jour le titre
  document.getElementById('modal-title').textContent = gallery.title;
  
  // Mettre à jour l'image principale
  updateMainImage();
  
  // Générer les miniatures
  generateThumbnails();
  
  // Afficher le modal
  document.getElementById('photoModal').style.display = 'block';
  
  // Désactiver le scroll du body
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  document.getElementById('photoModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function updateMainImage() {
  const img = document.getElementById('modal-image');
  const counter = document.getElementById('current-photo');
  const total = document.getElementById('total-photos');
  
  img.src = currentGallery.photos[currentGallery.currentIndex];
  img.alt = `Photo ${currentGallery.currentIndex + 1} du projet ${currentGallery.project}`;
  
  counter.textContent = currentGallery.currentIndex + 1;
  total.textContent = currentGallery.photos.length;
  
  // Mettre à jour les miniatures actives
  document.querySelectorAll('.gallery-thumbnail').forEach((thumb, index) => {
    thumb.classList.toggle('active', index === currentGallery.currentIndex);
  });
  
  // Gérer les boutons précédent/suivant
  const prevBtn = document.querySelector('.gallery-nav.prev');
  const nextBtn = document.querySelector('.gallery-nav.next');
  
  prevBtn.disabled = currentGallery.currentIndex === 0;
  nextBtn.disabled = currentGallery.currentIndex === currentGallery.photos.length - 1;
}

function generateThumbnails() {
  const container = document.getElementById('gallery-thumbnails');
  container.innerHTML = '';
  
  currentGallery.photos.forEach((photo, index) => {
    const img = document.createElement('img');
    img.src = photo;
    img.className = 'gallery-thumbnail';
    img.alt = `Miniature ${index + 1}`;
    img.onclick = () => goToPhoto(index);
    
    if (index === currentGallery.currentIndex) {
      img.classList.add('active');
    }
    
    container.appendChild(img);
  });
}

function previousPhoto() {
  if (currentGallery.currentIndex > 0) {
    currentGallery.currentIndex--;
    updateMainImage();
  }
}

function nextPhoto() {
  if (currentGallery.currentIndex < currentGallery.photos.length - 1) {
    currentGallery.currentIndex++;
    updateMainImage();
  }
}

function goToPhoto(index) {
  currentGallery.currentIndex = index;
  updateMainImage();
}

// Fermer le modal en cliquant à l'extérieur
document.getElementById('photoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeGallery();
  }
});

// Navigation clavier
document.addEventListener('keydown', function(e) {
  if (document.getElementById('photoModal').style.display === 'block') {
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowLeft') {
      previousPhoto();
    } else if (e.key === 'ArrowRight') {
      nextPhoto();
    }
  }
});