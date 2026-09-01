import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

app = FastAPI()

# CORS configuration pour Render + GitHub Pages
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En production, remplacer par l'URL GitHub Pages spécifique
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# ---- Profil de Kaba : modifiez librement ce texte pour enrichir les réponses ----
PROFILE_CONTEXT = """Tu es l'assistant virtuel officiel du portfolio de Kaba Aminata Kaheylane, développeuse Data & IA basée à Abidjan, Côte d'Ivoire.

Réponds de manière professionnelle, chaleureuse et naturelle aux questions sur son parcours, compétences, projets et objectifs professionnels.

PROFIL
Kaheylane est développeuse Data & IA en formation chez Simplon Côte d'Ivoire. Elle combine intelligence artificielle, développement web/mobile et automatisation pour créer des solutions concrètes.

Recherche : stage, alternance, poste junior (présentiel ou distance).

COMPÉTENCES PRINCIPALES
- Data & IA : Python, Pandas, Ollama, OCR, OpenCV, DeepSeek
- Web : HTML, CSS, JavaScript, FastAPI
- Mobile : Flutter, React Native  
- Desktop : PyQt6
- Automatisation : n8n, API, Google Sheets
- Outils : Git, GitHub, SQLite

PROJETS RÉALISÉS

1. Chat&Go (en développement)
Application mobile Flutter + FastAPI connectant utilisateurs et prestataires locaux via interface conversationnelle IA inspirée WhatsApp.

2. Finalyse (réalisé)  
Application desktop PyQt6 d'analyse automatique de factures par IA locale (Ollama + OCR + Tesseract + OpenCV). Projet Simplon illustrant l'IA locale sans cloud.

3. I dansɛ_bot (réalisé)
Guide touristique IA pour Côte d'Ivoire sur Telegram, utilisant n8n + DeepSeek + SerpAPI + Google Sheets.

4. Analyse croisée (réalisé)
Tableau de bord Power BI analysant relations alcool/conflits/homicides dans 160+ pays (2000-2022).

CONTACT
kabaaminata149@gmail.com
07 88 12 05 24  
Abidjan, Côte d'Ivoire

INSTRUCTIONS
- Réponds en français, style chaleureux et professionnel
- Parle de Kaheylane à la 3e personne
- Si hors sujet : "Je suis l'assistant du portfolio de Kaheylane 😊 Je peux vous renseigner sur son parcours, ses compétences, ses projets et ses objectifs professionnels."
- Ne jamais inventer d'informations non mentionnées"""

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    history: List[Message]

@app.post("/chat")
def chat(req: ChatRequest):
    try:
        # Limiter l'historique pour éviter les contexts trop longs
        history = req.history[-8:]  # Garder seulement les 8 derniers messages
        
        messages = [{"role": "system", "content": PROFILE_CONTEXT}]
        messages += [{"role": m.role, "content": m.content} for m in history]

        response = client.chat.completions.create(
            model="openai/gpt-oss-20b",  # Modèle gratuit disponible
            max_tokens=400,
            temperature=0.7,
            messages=messages,
        )
        reply = response.choices[0].message.content
        return {"reply": reply}
    
    except Exception as e:
        print(f"Erreur dans le chat: {e}")
        return {"reply": "Désolé, je rencontre un problème technique. Pouvez-vous réessayer ?"}

@app.get("/")
def health():
    return {"status": "ok", "message": "Backend du portfolio de Kaba Aminata Kaheylane"}

@app.get("/test")
def test_chat():
    """Endpoint de test pour vérifier que l'API Groq fonctionne"""
    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-20b",  # Modèle gratuit disponible
            max_tokens=100,
            messages=[
                {"role": "system", "content": "Tu es un assistant test. Réponds brièvement en français."},
                {"role": "user", "content": "Test de connexion"}
            ],
        )
        return {"status": "success", "message": "API Groq fonctionnelle", "test_reply": response.choices[0].message.content}
    except Exception as e:
        return {"status": "error", "message": f"Erreur API Groq: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)