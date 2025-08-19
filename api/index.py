from fastapi import FastAPI

app = FastAPI()

@app.get("/app/hello")
def hello():
    return {"Hello": "World"}


