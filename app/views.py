from . import app#, db
from flask import render_template, request, redirect, url_for, flash, jsonify
# from .models import Product, Retailer, User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/clothing')
def clothing():
    return render_template('clothing.html')

@app.route('/retailers')
def retailers():
    return render_template('retailers.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/virtual_closet')
def virtual_closet():
    return render_template('virtual_closet.html')

@app.route('/account')
def account():
    return render_template('account.html')

@app.route('/item')
def item():
    return render_template('item.html')