from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import random
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER  

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image part in the request"}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({"error": "No image selected"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # dummy prediction
    prediction = random.choice([0, 1])
    print(prediction)
    return jsonify({
        "filename": filename,
        "prediction": prediction,
        "message": "Dummy glaucoma detection complete"
    })

if __name__ == '__main__':
    app.run(debug=True)
