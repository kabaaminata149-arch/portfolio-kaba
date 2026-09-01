# Backend du Portfolio - Chatbot IA

Backend FastAPI + Groq pour le widget de chat du portfolio.

## 🔐 Sécurité

⚠️ **IMPORTANT** : Ne **JAMAIS** commiter le fichier `.env` contenant votre clé API!

Le fichier `.env.example` contient uniquement un placeholder. Votre vraie clé doit être dans `.env` (ignoré par Git).

## 🚀 Installation locale

1. Créer un environnement virtuel Python :
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Installer les dépendances :
```bash
pip install -r requirements.txt
```

3. Créer le fichier `.env` à partir de `.env.example` :
```bash
cp .env.example .env
```

4. Ajouter votre clé API Groq dans `.env` :
```
GROQ_API_KEY=votre_vraie_cle_ici
```

Obtenir une clé sur : https://console.groq.com (gratuit)

5. Lancer le serveur :
```bash
uvicorn main:app --reload --port 8000
```

Le backend sera accessible sur `http://localhost:8000`

## 🌐 Déploiement sur Render

1. Créer un compte sur [render.com](https://render.com)

2. Créer un nouveau "Web Service"

3. Connecter votre repo GitHub

4. Configuration :
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Environment Variables**: Ajouter `GROQ_API_KEY` avec votre clé

5. Une fois déployé, copier l'URL (exemple: `https://portfolio-kaba-backend.onrender.com`)

6. Mettre à jour `BACKEND_URL` dans `/js/script.js` :
```javascript
const BACKEND_URL = "https://portfolio-kaba-backend.onrender.com/chat";
```

## 🌐 Déploiement sur Railway

1. Créer un compte sur [railway.app](https://railway.app)

2. Créer un nouveau projet depuis GitHub

3. Ajouter la variable d'environnement `GROQ_API_KEY`

4. Railway détectera automatiquement FastAPI et le lancera

5. Copier l'URL générée et la mettre dans `/js/script.js`

## 📝 Configuration CORS

En production, remplacez `allow_origins=["*"]` par votre domaine dans `main.py` :

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://votre-portfolio.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🛠️ Personnalisation

Pour modifier les réponses du chatbot, éditez la variable `PROFILE_CONTEXT` dans `main.py`.

Pour changer de modèle Groq, modifiez `model="llama-3.3-70b-versatile"` dans `main.py`.
Voir les modèles disponibles : https://console.groq.com/docs/models
