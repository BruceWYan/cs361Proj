# from flask import Blueprint, render_template, request, redirect, url_for
# #bunch of root files in it for pages

# views = Blueprint('views', __name__)

# @views.route('/')
# def home():
#     return render_template("base.html")

# @views.route('/add-expense', methods=['POST'])
# def addExpense():
#     return render_template("split.html")

# @views.route('/add-expense', methods=['GET', 'POST'])
# def submit():
#     if 'submit-button' in request.form:
#         data = request.form
#         print(data)
#         return render_template("base.html")
#     elif 'back-button' in request.form:
#         return render_template("base.html")
    
