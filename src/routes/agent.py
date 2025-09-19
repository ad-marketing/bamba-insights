from flask import Blueprint, jsonify
from src.models.product import Product

agent_bp = Blueprint("agent", __name__)

@agent_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify({"service": "BAMBA Insights - Agent API", "status": "healthy"})

@agent_bp.route("/products/priority", methods=["GET"])
def get_priority_products():
    # Mock data for now
    products = [
        {"id": 1, "name": "Óleo de Coco Orgânico", "priority_score": 95},
        {"id": 2, "name": "Açaí em Pó Premium", "priority_score": 92},
        {"id": 3, "name": "Quinoa Branca", "priority_score": 88},
        {"id": 4, "name": "Chia Seeds Orgânica", "priority_score": 85},
        {"id": 5, "name": "Spirulina em Pó", "priority_score": 82},
    ]
    return jsonify(products)

