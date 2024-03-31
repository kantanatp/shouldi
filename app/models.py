from app import db

tryonlist = db.Table('tryonlist',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True)
)

class Retailer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    retailer_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    image_path = db.Column(db.String(255))
    
    # Establish a relationship with Product
    products = db.relationship('Product', backref='retailer', lazy=True)

    def __repr__(self):
        return f'<Retailer {self.retailer_name}>'
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), nullable=False)
    image_path = db.Column(db.String(255))  # Path to the image
    image_id = db.Column(db.String(255), nullable=False, unique=True)
    sustainable = db.Column(db.Boolean, default=False, nullable=False)
    description = db.Column(db.String(255))
    brand = db.Column(db.String(50))
    category = db.Column(db.String(50))
    price = db.Column(db.Float, nullable=False)
    color = db.Column(db.String(50))
    gender = db.Column(db.String(10))
    material = db.Column(db.String(50))
    size = db.Column(db.String(50))  # Consider creating a separate table if multiple sizes per product are needed
    retailer_id = db.Column(db.Integer, db.ForeignKey('retailer.id'), nullable=False)
    
    def __repr__(self):
        return f'<Product {self.product_name}>'
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    picture = db.Column(db.String(255))  # Path to the image
    email = db.Column(db.String(120), unique=True, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    password = db.Column(db.String(128))
    age = db.Column(db.Integer, nullable=True)
    height = db.Column(db.Float, nullable=True)
    picture_id = db.Column(db.String(255), nullable=False, unique=True)
    tryon_products = db.relationship('Product', secondary=tryonlist, lazy='subquery', backref=db.backref('tryon_users', lazy=True))
    
    def __repr__(self):
        return f'<User {self.first_name}>'