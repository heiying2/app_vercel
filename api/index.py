from fastapi import FastAPI

app = FastAPI()

@app.get("/app/hello")
def read_root():
    return {"Hello": "World"}


