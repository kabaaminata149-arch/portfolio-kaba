# 🚀 Guide de Déploiement du Portfolio

Ce guide explique comment déployer votre portfolio en ligne.

## 📋 Prérequis

- Un compte GitHub
- Votre clé API Groq (gratuite sur https://console.groq.com)

## 🎯 Étape 1 : Héberger le Frontend (Netlify)

### Option A : Via l'interface Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Cliquer sur "Add new site" > "Deploy manually"
3. Glisser-déposer ces dossiers/fichiers :
   - `index.html`
   - `css/`
   - `js/`
   - `assets/`
4. Votre site sera en ligne en quelques secondes!
5. Noter l'URL fournie (ex: `https://kaba-portfolio.netlify.app`)

### Option B : Via GitHub

1. Pousser votre code sur GitHub
2. Sur Netlify : "Add new site" > "Import from Git"
3. Sélectionner votre repo
4. Deploy!

## 🔧 Étape 2 : Héberger le Backend (Render)

### 2.1 Préparer le déploiement

1. Assurez-vous que `backend/.env` est dans `.gitignore`
2. Ne commitez **JAMAIS** votre clé API!

### 2.2 Déployer sur Render

1. Créer un compte sur [render.com](https://render.com)

2. Cliquer sur "New" > "Web Service"

3. Connecter votre repo GitHub

4. Configuration :
   ```
   Name: portfolio-kaba-backend
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
   ```

5. **Ajouter la variable d'environnement** :
   - Cliquer sur "Environment"
   - Ajouter : `GROQ_API_KEY` = `votre_clé_ici`

6. Cliquer sur "Create Web Service"

7. Attendre le déploiement (2-3 minutes)

8. Copier l'URL fournie (ex: `https://portfolio-kaba-backend.onrender.com`)

## 🔗 Étape 3 : Connecter Frontend et Backend

1. Ouvrir `js/script.js`

2. Modifier la ligne 172 :
   ```javascript
   const BACKEND_URL = "https://portfolio-kaba-backend.onrender.com/chat";
   ```

3. Sauvegarder et redéployer sur Netlify (glisser-déposer à nouveau)

## 🎨 Étape 4 : Configuration Initiale

### 4.1 Configurer le CV (Google Drive)

1. Uploader votre CV sur [drive.google.com](https://drive.google.com)
2. Clic droit > "Obtenir le lien" > "Toute personne disposant du lien"
3. Copier l'ID du fichier (la partie entre `/d/` et `/view`)
4. Ouvrir `index.html` ligne 44 et remplacer `VOTRE_ID_FICHIER` par votre ID

Voir [CONFIGURATION-CV.md](CONFIGURATION-CV.md) pour le guide détaillé.

### 4.2 Ajouter vos Photos

### 4.2 Ajouter vos Photos

1. Remplacer dans `assets/photos/` :
   - `hero.jpg` - Photo principale
   - `about.jpg` - Photo section "Qui suis-je?"
   - `avatar.jpg` - Avatar dans la nav

2. Les images doivent être optimisées (< 500KB chacune)

3. Redéployer sur Netlify

### 4.4 Configurer le Lien CV (Google Drive)

Suivre le guide [CONFIGURATION-CV.md](CONFIGURATION-CV.md) :

1. Uploader votre CV sur [drive.google.com](https://drive.google.com)
2. Partager en "Toute personne disposant du lien" 
3. Copier l'ID du fichier (entre `/d/` et `/view`)
4. Dans `index.html` ligne 44, remplacer `VOTRE_ID_FICHIER` par votre ID

**Exemple** :
```
Lien Drive: https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
ID à copier: 1ABC123xyz
```

## 📱 Étape 5 : Personnaliser le Domaine (Optionnel)

### Sur Netlify :
1. Site settings > Domain management
2. Ajouter votre domaine personnalisé
3. Configurer les DNS selon les instructions

## ✅ Vérifications Finales

- [ ] Le frontend est accessible en ligne
- [ ] Le backend répond sur `/` (devrait afficher `{"status":"ok"}`)
- [ ] Le chatbot fonctionne (tester en cliquant sur 💬)
- [ ] La traduction FR/EN fonctionne
- [ ] Les photos s'affichent correctement
- [ ] Le CV est téléchargeable
- [ ] Les liens sociaux fonctionnent

## 🔐 Sécurité

✅ **À FAIRE** :
- Garder `.env` dans `.gitignore`
- Utiliser des variables d'environnement sur Render
- Ne jamais exposer les clés API dans le code

❌ **À NE PAS FAIRE** :
- Commiter le fichier `.env`
- Mettre la clé API dans le frontend
- Partager publiquement vos clés

## 🆘 Problèmes Courants

### Le chatbot ne répond pas
- Vérifier que le backend est bien déployé
- Vérifier la variable `GROQ_API_KEY` sur Render
- Vérifier l'URL dans `BACKEND_URL`
- Ouvrir la console du navigateur pour voir les erreurs

### Les images ne s'affichent pas
- Vérifier les chemins dans `index.html`
- Vérifier que les fichiers sont bien dans `assets/`
- Vérifier l'extension (`.jpg`, `.png`, etc.)

### Erreur CORS
- Mettre à jour `allow_origins` dans `backend/main.py`
- Redéployer le backend après modification

## 📞 Support

Pour toute question sur le déploiement :
- Render : https://render.com/docs
- Netlify : https://docs.netlify.com
- Groq : https://console.groq.com/docs
