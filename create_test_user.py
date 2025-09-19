from src.main import app
from src.models.user import db, User

with app.app_context():
    db.create_all()
    
    # Check if user already exists
    if not User.query.filter_by(email='huuandrade@gmail.com').first():
        user = User(
            full_name='Hugo Andrade',
            email='huuandrade@gmail.com',
            role='super_admin'
        )
        user.set_password('157842Hsa171@00')
        db.session.add(user)
        db.session.commit()
        print("Test user created successfully!")
    else:
        print("Test user already exists.")
