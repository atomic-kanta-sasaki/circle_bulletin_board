# circle-_bulletin_board
サークル掲示板サイト
### DBの起動方法
```
.
├── docker
│   └── mysql
│       ├── Dockerfile
│       ├── conf.d
│       │   └── my.cnf
│       └── initdb.d
│           ├── schema.sql
│           └── testdata.sql
├── docker-compose.yml
└── log
    └── mysql
```
  - docker-compose.ymlと同様のディレクトリで```docker-compose up -d --build ```でビルドを行う
  - 2回目以降は```docker-compose up```で立ち上がる
  - MySQLの設定は.ymlファイルを参照する
  - npm 6.13.4
 
### API起動方法
```
.
├── circle_bulletin_board_api
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py
```
このディレクトリで```python manage.py runserver```で起動する
Python 3.6.0
Django 1.11.29
### Frontの起動方法
frontednディレクトリで```npm run start```で起動可能

### git運用方法
 - feature_名前_branch名

