from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/name")
def get_name():
    return JSONResponse({"name": "mike"})
