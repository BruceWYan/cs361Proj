from flask import Flask
#now create the app 
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'Idkwhatisgoingon'

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app