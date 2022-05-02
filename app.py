from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.a2woz.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/my_page')
def my_page():
    return render_template('my_page.html')


# @app.route("/insta", methods=["POST"])
# def insta_reply_post():
#     nickname_receive = request.form['nickname_give']
#     reply_receive = request.form['reply_give']

#     doc = {
#         'nickname': nickname_receive,
#         'reply': reply_receive,
#     }

#     db.instagram.insert_one(doc)
#     return jsonify({'msg': '댓글 작성 완료!'})


# @app.route("/insta", methods=["GET"])
# def insta_reply_get():
#     reply_list = list(db.instagram.find({}, {'_id': False}))
#     return jsonify({'replies': reply_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
