from flask import Flask, render_template, request, redirect, url_for
import csv
from datetime import datetime
import os

app = Flask(__name__)

# File to store contact data
CONTACT_FILE = 'contact_data.csv'

# Create contact file if not exists
if not os.path.exists(CONTACT_FILE):
    with open(CONTACT_FILE, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Timestamp', 'Name', 'Email', 'Message'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Save to CSV
    with open(CONTACT_FILE, 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, name, email, message])
    
    return redirect(url_for('index') + '?success=true#contact')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)