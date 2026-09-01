# 🖼️ Galerie Photos des Projets

## ✨ Fonctionnalité Ajoutée

Chaque projet avec plusieurs photos dispose maintenant d'un bouton **"Voir plus"** pour ouvrir une galerie complète.

## 📸 Projets avec Galerie

### 1. **Finalyse** — 6 photos
- Interface principale
- Analyse de factures  
- Résultats OCR
- Configuration Ollama
- Dashboard
- Fonctionnalités avancées

### 2. **I dansɛ_bot** — 3 photos  
- Interface Telegram
- Configuration n8n
- Réponses du bot

### 3. **Analyse croisée** — 4 photos
- Dashboard Power BI
- Visualisations des données
- Cartes interactives
- Graphiques analytiques

### 4. **Chat&Go** — 1 photo
- Photo unique (pas de galerie)

## 🎯 Comment ça Fonctionne

### Interface Utilisateur

1. **Bouton Galerie** :
   - Position : Coin supérieur gauche de chaque projet
   - Style : Badge rose avec icône photo + nombre d'images
   - Exemple : "📷 6 photos"

2. **Modal Galerie** :
   - **Grande image centrale** avec navigation
   - **Compteur** : "2 / 6" 
   - **Boutons** : ❮ Précédent | Suivant ❯
   - **Miniatures** en bas pour navigation rapide
   - **Titre** du projet en en-tête

### Navigation

- **Clic** sur les boutons ❮ ❯
- **Clic** sur les miniatures
- **Clavier** : ← → (flèches) + Echap (fermer)
- **Clic** à l'extérieur du modal pour fermer

## 💻 Code Ajouté

### HTML (index.html)
```html
<!-- Bouton galerie sur chaque projet -->
<button class="project-gallery-btn" onclick="openGallery('finalyse', 6)">
  <svg>...</svg>
  <span>6 photos</span>
</button>

<!-- Modal galerie -->
<div id="photoModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 id="modal-title">Photos du Projet</h3>
      <button class="modal-close" onclick="closeGallery()">×</button>
    </div>
    <div class="modal-body">
      <div class="gallery-container">
        <button class="gallery-nav prev" onclick="previousPhoto()">❮</button>
        <div class="gallery-main">
          <img id="modal-image" src="" alt="">
          <div class="gallery-counter">
            <span id="current-photo">1</span> / <span id="total-photos">6</span>
          </div>
        </div>
        <button class="gallery-nav next" onclick="nextPhoto()">❯</button>
      </div>
      <div class="gallery-thumbnails" id="gallery-thumbnails"></div>
    </div>
  </div>
</div>
```

### CSS (style.css)
- `.project-gallery-btn` - Style du bouton galerie
- `.modal` - Overlay du modal
- `.modal-content` - Contenu principal
- `.gallery-container` - Layout de la galerie
- `.gallery-nav` - Boutons navigation
- `.gallery-thumbnails` - Grille des miniatures
- Styles responsive pour mobile

### JavaScript (script.js)
```javascript
// Données des projets
const projectGalleries = {
  'finalyse': {
    title: 'Finalyse — Finance Intelligente',
    photos: ['assets/projects/finalyse (1).png', ...]
  },
  // ...
};

// Fonctions principales
function openGallery(projectName, totalPhotos)
function closeGallery()
function updateMainImage()
function generateThumbnails()
function previousPhoto() / nextPhoto()
function goToPhoto(index)
```

## 🎨 Design

### Couleurs
- **Bouton galerie** : Rose (#E05780) avec transparence
- **Modal header** : Rose solide
- **Boutons navigation** : Rose avec hover plus foncé
- **Miniatures actives** : Bordure rose + ombre

### Animations
- **Hover** : Scale 1.05 sur bouton et miniatures
- **Transitions** : 0.3s ease sur tous les éléments
- **Transform** : translateY et scale pour les interactions

### Responsive
- **Mobile** : Modal plein écran (95% width)
- **Tablette** : Modal 90% width
- **Desktop** : Modal max 1200px width
- **Miniatures** : Grille adaptative (80px → 100px)

## 🔄 Pour Ajouter un Nouveau Projet avec Galerie

1. **Ajouter les photos** dans `assets/projects/`
2. **Ajouter l'entrée** dans `projectGalleries` (script.js)
3. **Ajouter le bouton** dans le HTML du projet :
```html
<button class="project-gallery-btn" onclick="openGallery('nom_projet', nombre_photos)">
  <svg>...</svg>
  <span>X photos</span>
</button>
```

## 📱 Test

### Vérifications
- [ ] Boutons galerie visibles sur Finalyse, I dansɛ_bot, Analyse croisée
- [ ] Chat&Go n'a pas de bouton (1 seule photo)
- [ ] Modal s'ouvre avec la bonne galerie
- [ ] Navigation précédent/suivant fonctionne
- [ ] Miniatures cliquables
- [ ] Fermeture par Echap ou clic extérieur
- [ ] Responsive sur mobile
- [ ] Compteur correct ("2 / 6")

### Navigateurs
- Chrome, Firefox, Safari, Edge
- Mobile iOS/Android

## 🎯 Avantages

✅ **Expérience utilisateur** : Navigation fluide et intuitive
✅ **Responsive** : Parfait sur tous les écrans  
✅ **Performance** : Lazy loading des images
✅ **Accessible** : Navigation clavier + ARIA labels
✅ **Professional** : Design cohérent avec le portfolio

---

La galerie permet maintenant de **présenter tous vos projets en détail** avec une expérience visuelle riche! 📸✨