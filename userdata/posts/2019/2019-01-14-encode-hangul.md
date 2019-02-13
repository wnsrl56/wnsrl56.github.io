title: 한글 인코딩에 대한 생각
category: dev
date: 2019-01-14

---
## Intro
최근에 자주 개발 관련 이야기를 하는 단톡방에서, 다운로드한 파일을 불러올 때 텍스트끼리의 길이가 맞지 않는다는 이야기가 올라왔습니다.
그 친구는 text 줄임 표현을 하고 싶은게 목적이었는데, 두 텍스트가 같은지 비교하는 과정에서 문제를 겪었습니다.
번뜩 들은 생각은 유니코드 문제가 아닌가 였는데, escape로 두 문자열을 비교해보니 유니코드 시작값이 달랐습니다.
여기에서 여러 친구들끼리 각자 문자열을 어떻게 처리해야될까로 고군분투 했습니다. 전 직장 동료분인 [moonforneli](https://github.com/moonformeli)가 정말 잘 정리해주셨지만,
저도 내용을 잊지 않기위해서 간략하게나마 정리해보려고 합니다.

#### 한글 unicode의 특수성
unicode를 이야기하기에 앞서 ascii 코드를 이야기 안할 수 없습니다. ascii code는 컴퓨터에서 문자를 진수에 할당하여 다루기 쉽게 하기 위함에 있는데, ascii(American Standard Code for Information Interchange)의 약자를 보면 알 수 있듯이
미국에서 컴퓨팅 장치의 정보교환을 위해 표준으로 제작한 부호입니다. 이 부호는 문자를 인코딩 할 때 빼놓지 않고 쓰이고 있습니다. 그렇게 인코딩계에 ascii code가 영양력을 행사하고 있는 와중 문제가 발생했습니다.
ascii code는 알파벳 기반 부호라서 더많은 표현이 필요한 2byte언어들을 표기하기 힘들었습니다. 현대의 많은 컴퓨터 기술들을 개발했던 당시 제록스(프린터 회사입니다. 지금은 후지 제록스로 알려져 있죠)의 조 베커가 unicode의 초안이되는 문서를 발표합니다.
그렇게 unicode 재단에서 전 세계의 모든 언어의 문자 부호화 통합을 위한 작업을 진행합니다.

서문이 길었는데, 한국에서 문자열을 조합하는 방법은 크게 조합형, 완성형 두 가지로 나뉘어 집니다.[(참조)](https://d2.naver.com/helloworld/19187) 둘 다 현재 사용하고 있으며, 한국 표준으로는 완성형을 사용합니다.
고로 유니코드 내부에는 완성형을 맵핑해놓은 구간과 조합형을 맵핑해놓은 구간이 존재합니다. 위에서 발생한 문제는 두개가 다르게 쓰이는 것 때문이었습니다.


#### Why? 완성형과 조합형은 어디에서 갈리는 걸까?
최초에는 html string parse 부분을 보고 있었는데, dom filename의 작동 방식이 궁금해졌습니다. 둘을 구분하는 문제는 여기에서 찾을 수 있었습니다.

원문 입니다. [발췌](https://w3c.github.io/FileAPI/#file-constructor)
> OS filesystems use differing conventions for file name;

> os 파일 시스템은 파일 이름에 서로 다른 규칙을 씁니다.

위 부분을 읽고나서 이해가 됬습니다. os 별로 다른 방식의 파일이름을 쓰고 있었습니다. 실제 unix (linux) 기반 계열과 windows 계열은 다른 형식의 한글 유니코드를 넘겨주는 걸 확인했습니다.

#### 둘은 어떻게 매칭 시키지?
결국 이기종 파일 시스템을 쓰더래도 프론트에서 받은 데이터는 일괄 통일이 필요해집니다.

##### 1. use library
이런 문제는 분명 저희만 직면한것은 아니었을 겁니다. 이미 어느분께서 잘 작성을 해주셨습니다.

> [링크](https://github.com/e-/Hangul.js)

이분들은 자바스크립트로 된 오토마타 구현체를 구현했습니다. 내부 코드를 보아하니 상당한 분류작업이 들어있는걸 확인했습니다.
물론 단편적인 해결은 할 수 있었지만, 결국 두 방식을 통일하는 방법에 대한건 아니었습니다.

#### 2. normalize(정규화)
제가 [예전에 읽었던 글](https://d2.naver.com/helloworld/76650)를 전 동료 [moonforneli](https://github.com/moonformeli)에게 알려줬는데
실마리를 찾았다고 해서 다시 들어가 보았습니다. 2년전쯤 읽었기에 기억이 가물가물했는데, 해당 글에서 저희가 고민하던 해답들이 전부 존재했습니다.

해당 문제에 대한 실험은 [moonforneli-한글 인코딩과 자바스크립트](https://github.com/moonformeli/TIL/blob/master/hangul_unicode.md) 이 글에 잘 나와있기 때문에
한번 들어가서 읽는 것을 추천합니다.  

## End
채팅에서 잘 안된다고 올린 톡 하나가 생각할 거리를 많이 줄거라고는 생각 못했는데, 간단하게나마 정리해보았습니다.
한글 인코딩에 대한 생각을 리마인드 할 수 있었던 좋은 기회 였고, 해당 내용을 열심히 독파한 [moonforneli](https://github.com/moonformeli),
공부 떡밥을 던져준 [꿀배씨](https://github.com/WonbaeLee) 도 감사를 드립니다.

##### reference
- [wiki-ascii](https://ko.wikipedia.org/wiki/ASCII)
- [wiki-unicode](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)
- [한글 인코딩의 역사](https://d2.naver.com/helloworld/76650)
- [한글 오토마타 구현체](https://github.com/e-/Hangul.js)
- [w3c 명세 - file-constructor](https://w3c.github.io/FileAPI/#file-constructor)
- [moonforneli-한글 인코딩과 자바스크립트](https://github.com/moonformeli/TIL/blob/master/hangul_unicode.md)
