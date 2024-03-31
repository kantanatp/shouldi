from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from config import Config  

app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Importing views and models at the bottom to avoid circular dependencies
from . import views, models
