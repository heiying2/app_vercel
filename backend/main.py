# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 根據需要配置 CORS，但如果前後端都在同一個 Vercel 網域，通常不需要
# origins = ["https://your-frontend-domain.vercel.app"]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI!"}
