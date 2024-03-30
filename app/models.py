from app import db

class Retailer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), db.String(100), nullable=False)
    description = db.Column(db.String(255))
    
    products = db.relationship('Product', backref='retailer', lazy=True)

    def __repr__(self):
        return f'<Retailer (self.name)>'
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(255))
    price = db.Column(db.Float, nullable=False)
    is_sustainable = db.Column(db.Boolean, default=False, nullable=False)
    retailer_id = db.Column(db.Integer, db.ForeignKey('retailer.id'), nullable=False)
    
    def __repr__(self):
        return f'<Product (self.name)>'
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    profile_picture = db.Column(db.String(255)) # path to the image
    
    virtual_closet_items = db.relationship('VirtualCloset', backref='user', lazy=True)
    
    def __repr__(self):
        return f'<User (self.name)>'
    
class VirtualCloset(db.model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    
    def __repr__(self):
        return f'<VirtualCloset Item: User (self.user_id) - Product (self.product_id)>'