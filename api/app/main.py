from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings

settings = get_settings()

app = FastAPI(
    title="Orders Dashboard API",
    description="An orders and clients dashboard API for small-business operations.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["meta"])
async def health() -> dict[str, str]:
    return {"status": "ok"}


# Routers are registered here as each one lands:
#   app.include_router(auth.router)
#   app.include_router(clients.router)
#   app.include_router(orders.router)
#   app.include_router(dashboard.router)
