# 🔐 Guide de Sécurité

## ✅ Mesures de Sécurité Implémentées

### 1. Protection de la Clé API

✅ **Clé API cachée côté serveur**
- La clé Groq est dans `backend/.env` (ignoré par Git)
- Jamais exposée dans le code frontend
- Seul le backend peut accéder à l'API Groq

✅ **Fichiers ignorés par Git**
- `backend/.env` - Contient la vraie clé API
- `backend/__pycache__/` - Cache Python
- `backend/venv/` - Environnement virtuel

✅ **Template de configuration**
- `backend/.env.example` contient uniquement un placeholder
- Permet aux autres développeurs de configurer sans exposer vos clés

### 2. Architecture Sécurisée

```
Frontend (Netlify)
    ↓ HTTPS
Backend (Render) 
    ↓ API Key (caché)
Groq API
```

Le navigateur ne voit **JAMAIS** la clé API!

### 3. Variables d'Environnement

Sur Render/Railway, les clés sont stockées comme variables d'environnement :
- Chiffrées au repos
- Injectées au runtime
- Jamais visibles dans le code

## ⚠️ À NE JAMAIS FAIRE

❌ **Ne jamais commiter** :
- Le fichier `.env`
- Des clés API dans le code
- Des mots de passe
- Des tokens d'authentification

❌ **Ne jamais partager** :
- Vos clés API sur Discord/Slack
- Vos captures d'écran contenant des clés
- Vos fichiers `.env`

❌ **Ne jamais mettre de clés** :
- Dans le frontend JavaScript
- Dans les commentaires du code
- Dans les noms de variables visibles

## ✅ Bonnes Pratiques

### Avant de Commiter

Vérifiez toujours :
```bash
git status
```

Si vous voyez `backend/.env` → **STOP!** Ne commitez pas!

### Rotation des Clés

Si vous pensez qu'une clé a été exposée :
1. Révoquez-la immédiatement sur console.groq.com
2. Générez une nouvelle clé
3. Mettez-la à jour dans `.env` et sur Render
4. Redéployez

### Configuration CORS

En production, restreignez les origines dans `backend/main.py` :

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://votre-portfolio.netlify.app",
        "https://votre-domaine.com"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🔍 Vérification

### Checklist de Sécurité

- [ ] `.env` est dans `.gitignore`
- [ ] `.env` n'est pas committé sur GitHub
- [ ] La clé API est configurée sur Render
- [ ] Le frontend utilise HTTPS
- [ ] Le backend utilise HTTPS
- [ ] CORS est configuré correctement
- [ ] Pas de clés dans le code JavaScript
- [ ] Pas de clés dans `index.html`

### Tester la Sécurité

1. Ouvrir la console du navigateur (F12)
2. Aller dans Network > Chat request
3. Vérifier que la clé API n'apparaît **NULLE PART**

## 📚 Ressources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Guide Groq Security](https://console.groq.com/docs/security)
- [Render Environment Variables](https://render.com/docs/environment-variables)

## 🆘 En Cas de Fuite

Si une clé a été exposée publiquement :

1. **Révoquez immédiatement** sur console.groq.com
2. **Générez une nouvelle clé**
3. **Mettez à jour** :
   - `backend/.env` localement
   - Variable sur Render
4. **Redéployez** le backend
5. **Vérifiez** que l'ancienne clé ne fonctionne plus

## 💡 Rappel

> La sécurité n'est pas une fonctionnalité, c'est une pratique!

Gardez toujours vos clés privées et ne les partagez jamais publiquement.
