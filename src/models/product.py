from src.models.user import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    priority_score = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f"<Product {self.name}>"
