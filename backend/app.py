from flask import Flask,request
import os
from werkzeug.utils import secure_filename
import random
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/upload-image',methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error":"Image not provided"}),400
    file = request.files['image']    
    if file.filename == '':
        return jsonify({"error":"Image Not Selected"}),400
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filename)

    # Dummy model prediction: randomly return 0 or 1
    prediction = random.choice([0, 1])  # 0 = false, 1 = true

    return jsonify({
        "filename": filename,
        "prediction": prediction,
        "message": "Dummy glaucoma detection complete"
    })

if __name__ == '__main__':
    app.run(debug=True)
