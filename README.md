# 🌸 Portfolio de Kaba Aminata Kaheylane

Portfolio personnel d'une développeuse Data & IA en formation chez Simplon Côte d'Ivoire.

## 🚀 Démo

- **Site Web** : [À déployer sur GitHub Pages]
- **Design** : Rose Royale avec dégradés élégants
- **Chatbot** : Assistant IA intégré

## 🎯 Fonctionnalités

- ✅ **Responsive** (5 breakpoints)
- ✅ **Galeries photos** pour chaque projet
- ✅ **15 technologies** avec icônes
- ✅ **Chatbot intelligent** (Groq API)
- ✅ **4 projets** détaillés
- ✅ **Contact** et liens sociaux

## 🛠️ Technologies

**Frontend** :
- HTML5, CSS3, JavaScript
- Responsive Design (Mobile-First)
- API Fetch

**Backend** :
- FastAPI (Python)
- Groq API (IA)
- CORS activé

## 📂 Structure

```
portfolio-kaba/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles complets + responsive
├── js/
│   └── script.js       # Galeries + chatbot
├── assets/             # Images et ressources
├── backend/            # API FastAPI
│   ├── main.py         # Serveur + chatbot IA
│   ├── requirements.txt
│   └── .env.example
└── README.md
```

## 🚀 Installation Locale

### Frontend
```bash
# Ouvrir index.html dans le navigateur
```

### Backend
```bash
cd backend

# 1. Installer les dépendances
pip install -r requirements.txt

# 2. Configurer l'API Groq
cp .env.example .env
# Éditer .env avec votre clé GROQ_API_KEY

# 3. Lancer le serveur
uvicorn main:app --reload --port 8000
```

## 📦 Déploiement

### Option 1 : GitHub Pages + Railway
1. **Frontend** sur GitHub Pages (gratuit)
2. **Backend** sur Railway/Render
3. Mettre à jour l'URL API dans `script.js`

### Option 2 : Vercel Full-Stack
1. Connecter le repo GitHub à Vercel
2. Configuration automatique
3. Variables d'environnement dans Vercel

## 🤖 Chatbot IA

Le portfolio inclut un assistant virtuel intelligent qui peut :
- Présenter Kaheylane et son parcours
- Détailler ses compétences et projets
- Informer sur sa disponibilité professionnelle
- Fournir ses coordonnées de contact

## 👩🏽‍💻 À Propos

**Kaba Aminata Kaheylane**
- 🎓 Formation Data & IA - Simplon Côte d'Ivoire
- 💼 Recherche : Stage, Alternance, Poste Junior
- 📍 Abidjan, Côte d'Ivoire
- 📧 kabaaminata149@gmail.com
- 📱 07 88 12 05 24

## 🔗 Projets Présentés

1. **Chat&Go** - Commerce conversationnel (Flutter + FastAPI)
2. **Finalyse** - Finance intelligente (PyQt6 + IA locale)
3. **I dansɛ_bot** - Guide touristique IA (Telegram + n8n)
4. **Analyse croisée** - Dashboard Power BI

---

*Portfolio développé avec 💖 et beaucoup de ☕*