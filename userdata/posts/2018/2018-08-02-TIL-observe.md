title: how-to-use-scp
category: docs
date: 2018-08-15

---

#### Resize 에 대한 고민

#### Intro

> resize는 window.event 로, document가 변경되는 상황에서만 발생한다. dom 변경이 일어났을 때 resize를 강제로 발생시키고 싶으면 어떻게 대처하는지 알아보자.

#### Content

1.  resize를 발생 시키는 tag의 도움을 받기
    - object(document, iframe) 등등에서는 resize가 발생한다.

      ```javascript
        const objectEl = document.createElement('object');
        const parent = document.getElementById('parent');

        parent.appendChild(objectEl);
        objectEl.default.addEventListener('resize', () => { /* 원하는 event */ };
      ```
2.  브라우저의 도움을 받기
    - chrome over 64 version 에서는 자체적으로 ResizeObserver를 제공한다.
    - [참조](https://github.com/WICG/ResizeObserver/blob/master/explainer.md)

      ```javascript
      let ro = new ResizeObserver(entries => {
        console.log(entries);
      });
      ro.observe(document.querySelector('dom_target'));
      ```
3.  mutation observer 또는 다른 감시자를 통해서, animation request frame으로 상시 감시하기

    - 위의 Reszie Observer를 구현하기 전, 모질라에서 제공하는 polyfill 방식
    - [참조](https://developer.mozilla.org/en-US/docs/Web/Events/resize)

4.  programmatic event 발생
    - 상위 dom이 만약 하단의 width height의 변경을 감지 하고 또는 발생 시킨다면, 상위 dom에서 하단으로 resize를 전파하고,
    - 하단에서는 resize method를 가지고 있다가 실행시키는 방법이 있을 수 있다.

#### Outro

> 기타 resizeSensor 등 을 이용하는 방법들이 있는데 1번과 다를게 없다고 느끼고 있다. 좋은건 2번 또는 4번, 기타 나머지는 불필요한 dom 생성이나, animation을 가지고 갈 수 있다.
