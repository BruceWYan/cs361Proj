from website import create_app
#import the creation of app


app = create_app()
#Only if we run app and import we will run
#anytime we make changes it will update the code
if __name__ == '__main__':
    app.run(debug=True)

