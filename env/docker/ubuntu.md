# 우분투를 위한 얕은 도커 지식

### 1. 우분투 이미지 다운 후 생성 및 접속

```
docker pull ubuntu
docker run -p 2202:22 -p 8888:8080 -it ubuntu
```

### 2. 스프링 부트 배포를 위한 기본 세팅

> hsitory

```bash
sudo apt-get install python
python --version
sudo apt-get install curl
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py --user
apt-get install vim
vim ~/.bashrc
source ~/.bashrc
pip install awsebcli --upgrade --user
eb --version
eb init
apt-get install git
git clone https://github.com/springstudygroup/SpringStudy
cd SpringStudy/
cd Week3/
cd hello0317-3/
sudo apt-get install gradle
vim build.gradle
apt-get install add-apt-repository
sudo add-apt-repository ppa:some/ppa
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:cwchien/gradle
sudo apt-get update
sudo apt upgrade gradle
vim build.gradle 
gradle bootjar
gradle bootRun
cd build
cd libs/
java -jar hello0317-3-0.0.1-SNAPSHOT.jar 
```

### 4. ssh 접속을 위한 내부 세팅

```bash
apt-get update
apt-get install ssh
apt-get install openssh-server
apt-get install vim
vim /etc/ssh/sshd_config
service ssh restart
passwd
```

