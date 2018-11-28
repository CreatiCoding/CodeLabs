# Node.js Passport

---

## 0. 개요

Node.js 에서 이제는 표준이 되어버린 인증(회원 인증 및 권한 부여) 라이브러리인 Passport를 실습해보자.

---

## 1. 실습 환경

- Node.js v11.2.0
- npm 6.4.1

---

## 2. 실습

#### Step 0. Workspace 준비

- gdownload workspace

  ```bash
  cd ~
  git clone https://github.com/CreatiCoding/CodeLabs
  mv CodeLabs/web/nodejs-passport ./nodejs-passport
  rm -rf CodeLabs
  cd nodejs-passport/workspace
  ```

  ​	or

  ```bash
  wget -O - https://raw.githubusercontent.com/CreatiCoding/CodeLabs/master/web/nodejs-passport/download-workspace.sh | bash
  ```

- npm install

  ```bash
  pwd
  # nodejs-passport/workspace 경로
  npm install
  ```

#### Step 1. Login Backend Side Node.js Request 작성

