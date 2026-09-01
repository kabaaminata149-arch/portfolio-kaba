# 📄 Configuration du Lien CV Google Drive

## 🎯 Étapes pour Configurer le CV

### 1. Uploader votre CV sur Google Drive

1. Aller sur [drive.google.com](https://drive.google.com)
2. Cliquer sur "Nouveau" > "Importer un fichier"
3. Sélectionner votre CV (PDF recommandé)
4. Attendre la fin de l'upload

### 2. Partager le Fichier

1. Clic droit sur le fichier CV > "Obtenir le lien"
2. Changer "Accès limité" en **"Toute personne disposant du lien"**
3. S'assurer que le rôle est **"Lecteur"** (pas Éditeur)
4. Copier le lien

### 3. Extraire l'ID du Fichier

Le lien Google Drive ressemble à :
```
https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing
```

L'ID est la partie entre `/d/` et `/view` :
```
1ABC123xyz456
```

### 4. Mettre à Jour le Portfolio

Ouvrir `index.html` et remplacer à la ligne 44 :

```html
<a class="btn ghost" href="https://drive.google.com/file/d/VOTRE_ID_FICHIER/view" target="_blank" rel="noopener" data-i18n="hero.cv">Télécharger mon CV</a>
```

Par :

```html
<a class="btn ghost" href="https://drive.google.com/file/d/1ABC123xyz456/view" target="_blank" rel="noopener" data-i18n="hero.cv">Télécharger mon CV</a>
```

### 5. Vérifier

1. Ouvrir `index.html` dans un navigateur
2. Cliquer sur "Télécharger mon CV"
3. Vérifier que le CV s'ouvre dans un nouvel onglet

## 📌 Exemple Complet

**Lien Google Drive original** :
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

**Code HTML à mettre** :
```html
<a class="btn ghost" href="https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view" target="_blank" rel="noopener" data-i18n="hero.cv">Télécharger mon CV</a>
```

## ✅ Avantages du Lien Drive

- ✅ Pas besoin de redéployer le site pour mettre à jour le CV
- ✅ Visualisation directe dans le navigateur
- ✅ Possibilité de télécharger depuis la visionneuse
- ✅ Pas de limite de taille
- ✅ Toujours la dernière version

## 🔄 Pour Mettre à Jour le CV

1. Supprimer l'ancien fichier sur Drive (ou le renommer)
2. Uploader le nouveau CV
3. Utiliser le **même nom de fichier** et le **même ID** restera identique
4. Aucune modification du code nécessaire!

**OU**

1. Uploader le nouveau CV
2. Obtenir le nouveau lien
3. Mettre à jour l'ID dans `index.html`
4. Redéployer sur Netlify

## 🎨 Options Alternatives

### Option 1 : Téléchargement Direct

Si vous préférez forcer le téléchargement au lieu de l'aperçu :
```html
<a class="btn ghost" href="https://drive.google.com/uc?export=download&id=VOTRE_ID_FICHIER" target="_blank" rel="noopener" data-i18n="hero.cv">Télécharger mon CV</a>
```

### Option 2 : OneDrive

Si vous utilisez OneDrive au lieu de Google Drive :
1. Clic droit > Incorporer
2. Copier le lien d'intégration
3. Utiliser ce lien dans le href

### Option 3 : Dropbox

Si vous utilisez Dropbox :
1. Partager le fichier
2. Copier le lien
3. Remplacer `www.dropbox.com` par `dl.dropboxusercontent.com`
4. Supprimer `?dl=0` à la fin

## 🔐 Sécurité

✅ **Recommandé** :
- Partage en lecture seule
- Lien public (toute personne disposant du lien)
- Format PDF (non modifiable)

❌ **À éviter** :
- Accès en modification
- Fichier Word/Excel (modifiable)
- Lien limité (les recruteurs ne pourront pas voir)

## 💡 Conseil Pro

Nommez votre CV de façon professionnelle sur Drive :
```
CV-Kaba-Aminata-Kaheylane-2026.pdf
```

Pas :
```
mon_cv_final_v2_vraiment_final.pdf
```

---

Une fois configuré, votre CV sera accessible en un clic depuis votre portfolio! 📄✨
