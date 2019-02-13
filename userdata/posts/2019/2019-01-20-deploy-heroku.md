title: heroku app을 이용한 static web 배포
category: devops
date: 2019-01-20

---
  
## Intro
heroku는 웹 배포 서비스를 제공하는 클라우드 플랫폼입니다.
서버사이드의 많은 역할이 필요하지 않고 프론트영역에서 대부분의 작업이 진행되는 static web app을 배포하고 싶다면
heroku를 통해 손쉽게 배포가 가능합니다. 무료 호스팅도 제공을 해주는 멋진 녀석입니다.

## heroku의 배포 방식
heroku는 heroku app의 repository를 생성하고 해당 repo로 푸시된 데이터를 바탕으로 배포를 진행합니다.
진행에 앞서, [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)를 설치해야합니다.

  ```bash
    $brew install heroku/brew/heroku
  ```
window 계열은 installer를 통해 cmd에서 heroku를 사용할 수 있도록 할 수 있습니다.

 > Getting started
 ```bash
  $heroku login -i
 ```
 로그인 시에는 브라우저를 통해서 자동으로 로그인이 진행됩니다.
 
## Build Your App
자신이 사용하는 manager를 통해서, 배포하고 싶은 자신의 app을 생성합니다.
  
 > `$npm run build` or `$yarn run build`

기본적으로 Vue는 dist 폴더에 static web app을 빌드 해 놓습니다.

## 배포를 위한 필수 조건들
제가 패포할 항목은 static web app 파트뿐 이므로, 이를 실행 시켜줄 web server가 필요합니다.
heroku는 스크립트를 통해서 `postinstall`를 제공하고 있습니다.
  
##### 1. #file: dist/package.json

> `$npm init`

dist folder 내부에 package.json을 생성해 줍니다.
 
  ```json
    {
     "name": "blog",
     "version": "1.0.0",
     ...
     "scripts": {
       "postinstall": "npm install express"
     }
    }
  ```    
script 영역에 postinstall을 추가해 줍니다. 해당 프로세스는 배포 후, 커스텀 프로세스로 진행됩니다.

##### 2. #file: dist/server.js

> Heroku서버 배포시 web process의 기본 설정으로 npm start 스크립트 안에 node server.js 명령어가 실행되도록 되어 있습니다. ([참고](https://devcenter.heroku.com/articles/nodejs-support#default-web-process-type))
 
  ```javascript
    var express = require('express');
    var path = require('path');
    var serveStatic = require('serve-static');
    app = express();
    app.use(serveStatic(__dirname));
    var port = process.env.PORT || 5000;
    app.listen(port);
    console.log('server started '+ port);
  ```

 해당 파일을 통해 로컬에서 정상 작동을 하는지 테스트 해볼 수 있습니다. 
 
##### 3. Set up local repo

이제 자신의 heroku app에 repo를 연결해보는 작업을 진행합니다
local repo 의 폴더명이 `vue-portfolio` 라고 하고, heroku app은 `vue-dash-wnsrl56`을 사용하겠습니다.

  ```bash
    $cd vue-portfolio
    $heroku git:remote -a vue-dash-wnsrl56
  ```
한가지 추가로 해줘야 할 일은 dist 폴더는 보통 .gitignore에서 감시하고 있으므로 .gitignore 대상에서 제외 시켜주어야합니다.

 ```bash
  $git add dist/
  $git commit -m 'Adding dist folder'
 ```
  
##### 4. push only 'dist' folder to heroku

```bash
  $heroku buildpacks:set heroku/nodejs
```

heroku의 빌드팩을 nodejs로 변경합니다.

```bash
  $git subtree push --prefix dist heroku master
```
이제 해당 폴더를 푸시 해서 작업을 마무리 합니다. 

> `주의 사항`
git subtree는 repo 내부의 repo를 하나의 repo에서 관리하기 위한 명령어입니다.
리모트 브랜치를 2개로 나누어 사용하지만, 내부에 해당 리모트 브랜치에 대한 폴더를 여러개로
받아서 쓸 때 유용합니다. 단점은 두 브랜치가 머지가 되게 되므로 커밋 컨벤션이 다를 경우 또는 히스토리 정책에 따라
해당 커밋을 푸시할 때는 히스토리 단장을 한 후 진행해 주세요.


##### 5. 마무리

해당 과정의 거의 끝자락에 왔습니다.
위 스크립트는 배포 과정마다 항상 진행될 예정이기 때문에 스크립트 영역에 넣어두는 것을 추천합니다.

##### #file: vue-portfolio/package.json

```json
 {
    ...
    "script": {
      ...
      "deploy": "git subtree push — prefix dist heroku master"
    }
 }
```

이젠 빌드 후에, 바로 배포가 가능합니다.

```bash
  $npm run build
  $npm deploy
```
or
```bash
  $yarn run build
  $yarn deploy
```

## End

오늘은 heroku를 통해 vue app을 배포해보는 작업을 진행해보았습니다.
간단한 프로토타입의 배포는 heroku를 통해서 진행하는것도 나쁘지 않을 것 같네요.

배포 site: https://vue-dash-wnsrl56.herokuapp.com/

##### reference
- [quick n clean way to deploy vue webpack apps on heroku](https://codeburst.io/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8)
- [demo](https://github.com/sagarjauhari/vue-deploy-demo)
- [번역](https://medium.com/@ave10987/%EB%B2%88%EC%97%AD-vue-webpack%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-heroku%EC%97%90-%EB%B0%B0%ED%8F%AC-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-5dcf8b05ea84)
