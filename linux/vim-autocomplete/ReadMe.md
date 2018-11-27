# vim autocomplete

### 개요

vim에서도 visual studio 처럼 자동완성 기능을 수행하기 위해 설정해야하는 환경입니다.

### Step 1:supertab 설치

자동완성 오픈소스 중 https://github.com/ervandew/supertab 를 이용하여 환경설정을 하기로 했습니다. 무엇보다 Vundle과 같은 추가적인 Vim 패키지 관리를 하지 않아도 설치 가능하다는 점이 특징입니다.

```bash
cd ~
git clone https://github.com/ervandew/supertab.git
cd supertab
make
vim supertab.vmb -c "so %" -c "verbose imap <tab>" -c wq!
```

### Step 2:auto complete 실습

`custom.h`를 작성 후 `main.c`에서 `include`후 `tab`을 이용하여 자동 완성을 실습해봅니다.

> custom.h

```c
int externalInteger;
double externalDouble;

struct Person {
    char name[20];
    int age;
    char address[100];
};
```

> main.c

```c
#include <stdio.h>
int main(){
	external // 	
	return 0;
}
```

### Step 3: etc configuration

그외 줄넘버 설정 및 마우스 이동 설정을 해줍니다.

> ~/.vimrc

```bash
set mouse=a
set nu
```
