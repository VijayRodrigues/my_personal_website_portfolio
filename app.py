from flask import Flask, render_template, redirect, request, session, url_for
from flask_mysqldb import MySQL
import MySQLdb
import MySQLdb.cursors

app = Flask(__name__)

app.secret_key = "1234353234"
app.config["MYSQL_HOST"] = "us-cdbr-east-05.cleardb.net"
app.config["MYSQL_USER"] ="bf0c324417909a"
app.config["MYSQL_PASSWORD"] = "6e162a99"
app.config["MYSQL_DB"] ="heroku_8d772f13676a339"

db = MySQL(app)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/work_projects')
def work_projects():
    return render_template("work_projects.html")





@app.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        if "fname" in request.form and "lname" in request.form and "phone" in request.form and "email" in request.form and "subject" in request.form and "comments" in request.form:
            fname = request.form["fname"]
            lname = request.form["lname"]
            phone = request.form["phone"]
            email = request.form["email"]
            subject = request.form["subject"]
            comments = request.form["comments"]
            
            cursor = db.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("INSERT INTO heroku_8d772f13676a339.contact_portfolio_tb(fname, lname, phone, email, subject, comments)VALUES(%s,%s,%s,%s,%s,%s)", (fname, lname, phone, email, subject, comments))
            db.connection.commit()
    return render_template("index.html")



if __name__=='__main__':
    app.run(debug=True)