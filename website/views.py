from flask import Blueprint, render_template, request, redirect, url_for
#bunch of root files in it for pages

views = Blueprint('views', __name__)

@views.route('/') ##url to get to this piont of the page
#function will run whenever we go to the root page
def home():
    return render_template("home.html")

@views.route('/add-expense')
def addExpense():
    return render_template("split.html")