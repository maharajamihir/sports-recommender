from recommender import recommend
import numpy as np
from flask import Flask, request, render_template
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        dict = request.form.to_dict()
        data = list(dict.items())
        array = np.array(data)
        arr = [0 for x in range(10)]
        for i in range(len(array)):
            arr[i] = array[i][1]
        x = np.array(arr)
        y = x.astype(np.float)
        outputarr = recommend(y)
        return jsonify(outputarr)
    return render_template('index.html')


if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.run()
