# Jeon Gi Beom 2024 fullstack First Step

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit My Profile
/users/delete -> Delete My Profile

/videos/:id(동영상의) -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

- 20240321 3.11 middleware 공부 완료
- 20240322 4.5 Routers 공부 완료
  //nfn 단축키

Routing
https://expressjs.com/ko/guide/routing.html

정규표현식 테스트 사이트
https://www.regexpal.com

\w+: 모든 문자, 숫자 선택
\d+: 모든 숫자 선택

-block content는 창문 같은 것이다.

a(href="/video/edit")--->localhost:4000/video/edit
a(href="video/edit")--->localhost:4000/videos/video/edit
a(href=`${video.id}/edit`)--->localhost:4000/videos/1/edit

CRUD

Create
Read
Update
Delete

1. 몽고 사용하기

   > mongo

2. 내가 가진 db 보기

   > show dbs

3. 현재 사용 중인 db 확인

   > db

4. 사용할 db 선택하기

   > use dbName
   > (현재 수업에서는 `use wetube`)

5. db 컬렉션 보기

   > show collections

6. db 컬렉션 안에 documents 보기

   > db.collectionName.find()
   > (현재 수업에서는 `db.videos.find()`)

7. db 컬렉션 안에 documents 내용 모두 제거하기
   > db.collectionName.remove({})
   > (현재 수업에서는 `db.videos.remove({})`)
