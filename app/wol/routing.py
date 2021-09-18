from django.urls import path
from . consumers import WSConsumer


ws_urlpatterns = [
    path("wol/", WSConsumer.as_asgi())
]