title: object composition way
category: javascript
date: 2018-07-18
---

## Intro
##### object composition

##### 2018-12-20 추가
> 몇 개월이 지난 후 코드리뷰를 다시 하니 새로 짜고 싶은 욕구가 가득하네요. ㅜㅜ 
그 당시의 저는 프록시 패턴을 비스무리하게 흉내내고 싶었던거 같기도 합니다.

특정 프로퍼티를 덮에 씌웠다가 다시 되돌리는 로직을 구현해보았습니다.
##### CODE 
  ```javascript
      let char = function() {
              this.text = 'first';
              this.b = ['d'];                                          
          };
              
          char.prototype.sk = {
              talk : function() { 
                  console.log(this.text);                    
                  return this.text;
              },
              getb : function() {                     
                  return this.b;
              },
          };
          
          Object.prototype.setProps = function(obj, scope) {
              const origin = Symbol['origin'];            
              if(obj) {                    
                  this.__proto__[origin] = Object.assign({}, this.sk);        
                  Object.assign(this.sk, obj);
                  let keyList = Object.keys(this.sk);
                  keyList.forEach((v)=>{
                      this.sk[v] = this.sk[v].bind(scope);
                   });
              } else {
                  this.__proto__[origin] = this.sk;          
              }
              return origin;
          };
      
          Object.prototype.returnProps = function(symbolValue) {
              if(this.sk !== null && this.__proto__[symbolValue]) {
                  this.sk = Object.assign({}, this.__proto__[symbolValue]);
                  let keyList = Object.keys(this.sk);
                  keyList.forEach((v)=>{
                      this.sk[v] = this.sk[v].bind(this);
                   });
              }    
          };
      
          let char2 = function() {
              this.text = 'second';
              this.skillList = ['a'];    
          };
      
          char2.prototype.sk = {    
              getSkillList : function() { return this.skillList;},
              getPower : function() { console.log('getPower'); },
          };
          
          let h = new char();
          let e = new char2();
          
          h.sk.talk();
          let sym = h.setProps(e.sk, e);
          h.sk.talk();
      
          h.returnProps(sym);
          h.sk.talk();
  ```

