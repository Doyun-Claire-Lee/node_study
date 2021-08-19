/*
Dwitter Project

1. 기능
    - 로그인/로그아웃
    - 트윗 생성/수정/삭제
    - 유저별 트윗 조회

2. API 정의
    - 로그인/로그아웃
        - /login, /logout
        - POST
        - request: user(id, pw) -> session에 저장?
        - response: null
    - 트윗 생성/수정/삭제
        - /create, /update, /delete
        - GET
        - request: id, contents, time
        - response: tweets?
    - 유저별 트윗 조회
        - /list
        - GET
        - request: id
        - response: tweets

 */
