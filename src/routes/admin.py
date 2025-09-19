from flask import Blueprint, jsonify

admin_bp = Blueprint("admin", __name__)

@admin_bp.route("/users", methods=["GET"])
def get_users():
    # Mock data for now
    users = [
        {"id": 1, "full_name": "Hugo Andrade", "email": "huuandrade@gmail.com", "role": "super_admin"},
        {"id": 2, "full_name": "Usuário Admin", "email": "admin@bamba.com", "role": "admin"},
        {"id": 3, "full_name": "Usuário Comum", "email": "user@bamba.com", "role": "user"},
    ]
    return jsonify(users)

