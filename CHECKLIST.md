# ✅ Checklist de Configuration du Portfolio

## 📋 Avant le Déploiement

### 1. Configuration du CV
- [ ] CV uploadé sur Google Drive
- [ ] Lien de partage configuré en "Toute personne disposant du lien"
- [ ] ID du fichier copié
- [ ] Lien mis à jour dans `index.html` ligne 44
- [ ] Bouton CV testé localement

Voir : [CONFIGURATION-CV.md](CONFIGURATION-CV.md)

### 2. Photos
- [ ] Photo hero.jpg ajoutée dans `assets/photos/`
- [ ] Photo about.jpg ajoutée dans `assets/photos/`
- [ ] Avatar.jpg ajouté dans `assets/photos/`
- [ ] Images optimisées (< 500KB chacune)
- [ ] Images testées localement

### 3. Liens Sociaux
- [ ] Lien GitHub mis à jour (ligne ~326)
- [ ] Lien LinkedIn vérifié ✅ (déjà configuré)
- [ ] Lien Twitter mis à jour (ligne ~335)
- [ ] Lien YouTube mis à jour (ligne ~342)
- [ ] Tous les liens testés

### 4. Backend (Chatbot)
- [ ] Clé API Groq obtenue sur console.groq.com
- [ ] Fichier `.env` créé dans `backend/`
- [ ] Clé API ajoutée dans `.env`
- [ ] Backend testé localement (`uvicorn main:app --reload`)
- [ ] Chatbot répond correctement

### 5. Sécurité
- [ ] Fichier `.env` dans `.gitignore`
- [ ] Pas de clé API dans le code
- [ ] `.env.example` ne contient que le placeholder
- [ ] Vérification : `git status` ne montre pas `.env`

## 🚀 Déploiement

### Backend (Render)
- [ ] Compte Render créé
- [ ] Nouveau Web Service créé
- [ ] Repo GitHub connecté
- [ ] Root Directory : `backend`
- [ ] Build Command : `pip install -r requirements.txt`
- [ ] Start Command : `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Variable `GROQ_API_KEY` ajoutée
- [ ] Backend déployé avec succès
- [ ] URL du backend copiée

### Frontend (Netlify)
- [ ] `BACKEND_URL` mis à jour dans `js/script.js`
- [ ] Compte Netlify créé
- [ ] Site déployé (glisser-déposer)
- [ ] URL du site copiée
- [ ] Site accessible en ligne

## ✅ Tests en Production

### Navigation
- [ ] Page se charge correctement
- [ ] Navigation smooth vers les sections
- [ ] Bouton langue FR/EN fonctionne
- [ ] Animations au scroll fonctionnent
- [ ] Effet typing animé fonctionne

### Sections
- [ ] Section Hero : photo + texte visibles
- [ ] Section À propos : photo + badges visibles
- [ ] Technologies : 15 icônes affichées correctement
- [ ] Projets : 4 projets visibles avec images
- [ ] Contact : formulaire fonctionnel
- [ ] Footer : liens sociaux fonctionnels

### Traduction FR/EN
- [ ] Navigation traduite
- [ ] Section Hero traduite
- [ ] Section À propos traduite
- [ ] Technologies traduites
- [ ] Projets traduits
- [ ] Contact traduit
- [ ] Footer traduit
- [ ] Mots typing changent selon la langue

### Fonctionnalités
- [ ] Bouton CV ouvre Google Drive (ID configuré)
- [ ] Galeries photos des projets fonctionnent
  - [ ] Finalyse : bouton "6 photos" + modal galerie
  - [ ] I dansɛ_bot : bouton "3 photos" + modal galerie  
  - [ ] Analyse croisée : bouton "4 photos" + modal galerie
  - [ ] Chat&Go : pas de bouton (1 seule photo)
- [ ] Navigation dans les galeries (← →, miniatures, compteur)
- [ ] Fermeture des galeries (Echap, clic extérieur, ×)
- [ ] Formulaire de contact fonctionne
- [ ] Liens sociaux mènent aux bons profils
- [ ] Chatbot (💬) s'ouvre/se ferme
- [ ] Chatbot répond aux questions
- [ ] Chatbot en FR et EN

### Responsive
- [ ] Site responsive sur mobile
- [ ] Site responsive sur tablette
- [ ] Site responsive sur desktop
- [ ] Images adaptées à toutes les tailles
- [ ] Navigation mobile fonctionnelle

### Performance
- [ ] Temps de chargement < 3 secondes
- [ ] Images optimisées
- [ ] Pas d'erreurs dans la console (F12)
- [ ] Pas de warnings dans la console

## 🔧 Optionnel

### SEO
- [ ] Meta description ajoutée
- [ ] Meta keywords ajoutés
- [ ] Open Graph tags ajoutés
- [ ] Favicon ajouté

### Analytics
- [ ] Google Analytics configuré
- [ ] Suivi des clics sur le CV
- [ ] Suivi des messages du chatbot

### Domaine Personnalisé
- [ ] Domaine acheté
- [ ] DNS configuré sur Netlify
- [ ] HTTPS activé
- [ ] Redirection www → non-www configurée

## 📊 Après le Déploiement

### Monitoring
- [ ] Surveiller l'utilisation de l'API Groq
- [ ] Vérifier les logs sur Render
- [ ] Vérifier les analytics Netlify
- [ ] Tester régulièrement le chatbot

### Mises à Jour
- [ ] Mettre à jour le CV sur Drive quand nécessaire
- [ ] Ajouter de nouveaux projets
- [ ] Mettre à jour le profil du chatbot
- [ ] Corriger les bugs signalés

### Promotion
- [ ] Partager sur LinkedIn
- [ ] Ajouter dans le CV
- [ ] Envoyer aux recruteurs
- [ ] Ajouter dans la signature email

---

## 🎉 Une Fois Tout Coché

Félicitations! Votre portfolio est **100% opérationnel** et **sécurisé**! 🌸

Vous pouvez maintenant :
- ✅ Postuler à des offres en envoyant le lien
- ✅ Partager sur les réseaux sociaux
- ✅ L'ajouter sur votre CV papier
- ✅ Le présenter en entretien

**Lien du portfolio** : _____________________________

**Lien du backend** : _____________________________

---

Made with 🌸 by Kaba Aminata Kaheylane
