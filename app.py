import os
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from werkzeug.utils import secure_filename
from utils.improve_photo import improve_photo
app = Flask(__name__,
            static_folder='frontend/static',
            template_folder='templates')

try:
    os.mkdir(os.path.join('frontend', 'static'))
    os.mkdir(os.path.join('frontend', 'static', 'media'))
except:
    pass


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/compare/')
def compare_photos():
    return render_template('index.html')


@app.route('/upload/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        file_path = os.path.join('frontend', 'static', 'media', secure_filename(f.filename))
        f.save(file_path)
        improve_photo(file_path)

    return jsonify({
        'initial_photo': f'/static/media/{secure_filename(f.filename)}',
        'improved_photo': f'/static/media/{secure_filename(f.filename)}'[:-4] + '_improved.jpg',
    })
