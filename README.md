# bonappetitUsingReact
프로젝트를 react로 구성한 버전 (아래는 기존 버전에 대한 설명)

## 프로젝트 명
맛있게 드세요 (bon A'ppetit)


## 개요
#### 개인 맛집 리스트를 공유하는 웹 프레임 워크 작성
1. 로그인 기능 ( Passport 를 이용한 Google 인증 로그인 )
2. 개인 맛집 카테고리 및 리스트 공유 기능
3. 맛집 카테고리 및 리스트 생성 기능
4. "좋아요", "싫어요" 버튼을 통해 우선순위를 정하고 인기도가 높은 순서대로 정렬 하여 보여주는 기능
5. ++(Extra)++ 맛집 위치를 Google Maps API를 이용하여 Crawling을 통해 맛집 리스트 작성 시 제공
6. ++(Extra)++ 작성자 ID 클릭 시 작성자의 맛집 카테고리 리스트 필터링

## Mock-up
1. 기본 틀에서 여러가지 생각들이 나왔지만 제공된 기간안에 완전한 기능을 갖춘 프로젝트를 완성하는걸 목적으로 정리함
2. 기능 구현
    - 로그인 (인증)
    - 리스트화면에서는 사용자들의 음식점 리스트 제공
    - 사용자가 디렉토리 및 리스트를 직접 작성 및 수정 가능 
    - 리스트 작성시 자동으로 음식점 위치 가져와서 화면에 뿌려주고 각종 평가정보 및 한줄평 제공
    - 리스트별 디렉토리별 로그인시에 볼수 있는 링크 공유 기능 제공
    - 개인별 카테고리 기능 제공
    - 기본 구조는 Controller - Model - View 구조로 한다. 
3. Todo List 는 Trello 를 통해 공유 한다. [trello_apostrophe](https://trello.com/b/dLOjiFRx/apostrophe)
4. 해당 프로젝트는 Git organization을 만들고 프로젝트 협업을 진행 한다. [github_apostrophe](https://github.com/apostrophe-bonappetit)

## Stack
#### Front-End
1. HTML, CSS, BootStrap, React, React-Router, ...


#### Back-End
1. Passport(google Oauth), MySQL, NodeJS, Express, ejs, ...


## v1.0
1. 로그인 기능 구현
    - 구글 인증시 `session.passport.user` token을 return 받아 redirect 되어 정상적으로 인증 성공 
    - 다만 react에서 `ComponentDidMount()` 함수에 `fetch` 명령을 사용하여 `get` 요청을 할 경우에 해당 `passport token`을 갖고 요청 하지 않아 세션 인증에 문제가 있음
    - 현재 버전에서는 react에서 fetch 명령을 사용할 경우에 user의 session 정보는 보지 않고 place 정보를 출력하도록 구현함
2. React Router 기능 구현
	- `/`, `/myplace`, `/create` 의 페이지 변경을 버튼 상단 메뉴 바에 `toggle` 형태로 제공 하고, react router로 구현 함
3. `/myplace` 리스트 제공
	- 해당 Page 접근 시 사용자들이 기록한 맛집 리스트를 화면에 출력 한다. (음식점 이름, 가격, 등록 날짜 등을 표시)
4. `/create` 페이지 제공
	- 개인이 음식점을 등록 할 수 있도록 제공 ( 음식점 이름, 음식이름, 가격, 한줄 평 등을 작성 할 수 있도록 제공 )
5. MySQL 서버를 Cloud Server ( Digital Ocean ) 을 통해 구현
	- 현재는 DB만 클라우드 기반 으로 사용하고 있고, 추후에는 Digital Ocean에 Deploy 할 예정


## v2.0 
1. 로그인 추가 기능 개발 
    - `fetch` 명령어 사용시 브라우저의 세션값을 갖고 요청하지 않는 문제가 있어 `axios`를 사용하여 문제를 해결하였음
	- 세션없이 요청할 경우 redirect 
2. UI 대폭 변경
	- `allplace`, `myplaces`, `create` 페이지 UI 변경
	- 카드 형태로 place를 제공 하고 클릭시 `Modal`을 이용하여 popup 형태로 보여줌
3. 모든 사용자들의 정보를 공유하기 위한 `Allplace` Component를 생성하였음 (v1.0에서는 자신의 정보만 볼수 있었음)
	- 모든 사용자가 등록 한 리스트가 출력 됨





* * *

# 구현 기능 설명
| 기능 | tech stack | 기타 |
|--|-|-|
|로그인/로그아웃| Passport | 세션 유지, 세션 삭제, 세션을 통한 사용자 인증 기능 구현하였습니다.|
|전체 리스트 제공 | React+React-router / axios / MySQL / NodeJS+Express / Modal| 해당 페이지 접근시 DB(place_info)에 기록된 모든 정보를 사용자에게 보여주며, 제목 클릭시 상세 정보를 보여줍니다. (로그인없이 사용자가 등록한 리스트를 최신순으로 보여줍니다.)
|내 리스트 제공| React+React-router / axios / MySQL / NodeJS+Express / Modal | 해당 페이지 접근시 DB(place_info)에 기록된 모든 정보를 사용자에게 보여주며, 제목 클릭시 상세 정보를 보여줍니다. (Session Passport를 이용하여 사용자가 등록한 리스트를 최신순으로 보여줍니다.)
|리스트 추가 기능 제공| React+React-router / axios / MySQL / NodeJS+Express / Modal | Form 형식을 사용자에게 제공하여 직접 리스트를 작성 할 수 있도록 제공하였습니다. (해당 기능도 Modal을 사용하여 popup형태로 제공하였습니다.) |

# 진행중 어려웠던 내용
| 기능 | 설명 | 소요시간 |
|-|-|-| 
|로그인 /로그아웃| Passport를 이용하여 로그인 하는 방법을 이해하는데 오랜 시간이 걸렸으며, fetch method를 사용하여 Client-Server로 요청할 경우 세션 passport id를 갖고 요청을 하지 않아 해당 부분을 axios로 해결 하였습니다. |4일|
|전체 & 내 리스트 제공| 해당 기능을 제공하기 위해 서버쪽 구조를 MVC 구조로 설계하였습니다. 화면에 출력하기 위해 Client에서는 React Component를 이용하였습니다. |2일|
|Bootstrap에 대한 이해 | 자체적으로 제공하는 class를 하나하나 확인하며 접근하기가 어려웠으며, react로 구성할 경우에도 잦은 충돌이 발생하였습니다. (ex> img 삽입시 에러......) | ...|
|UI|CSS가 실력이 미비하여 오랜 시간이 걸렸습니다. 추가로 popup기능(modal)을 제공하기 위해 시간 소모하였습니다. | 4일 |
|React Router와 Server Router의 차이 | React router로 지정된 경로를 url로 직접 접근(서버접근)할 경우에 다른 결과를 보여줍니다(예상못한 결과) 서버 랜더링을 추가하여 수정하려고 했으나, 현재는 진행하지 못하였습니다. 추후에는 React dev server와 node js express router 간 proxy로 연결 하여 현재 문제를 해결해 보도록 진행하겠습니다. | 진행중...|
|좋아요 버튼| 클릭시 like를 countup하는 기능을 하려 했으나, React에서 Component countup하여 화면에 출력하는것은 보이나, DB에 업데이트 하는 과정시 매번 요청하는 프로세스가 좋지 않다고 생각하여 기능 개발을 멈추고 추후 개발할 예정입니다. |진행중...|



* * *
추가 기능 개발 내용 
