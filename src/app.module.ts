import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}

// AppModule이 클래스인걸 알수있다.
// 그리고 재밌는 함수를 찾을수있지 데코레이터라고 부른다.
// 데코레이터를 쓰는데 익숙해져야한다.
// 데코레이터는 클래스에 함수 기능을 추가 할 수 있기 때문이다.
// 그냥 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면돼

// 앰모듈은 비어있는 클래스인데
// 진짜는 데코레이더 module 안에 있다.
// import, controllers, providers

// 앱모듈은, 모든것의 루트 모듈 같은거임
// 모듈은 어플리케이션의 일부분이다

// 컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행하는 것임
// 컴트롤러는 express의 라우터 같은 존재
// url을 가져오고 함수를 실행하는게 컨트롤러가 하는일


// 아주 흥미로운게 있다
// get이라는 데코레이터가 또 보임
// string을 리턴하는 getHello라는 함수가있다
// appService는 어디서 와?
// counstructor에서 appservice로 들어가면

// express의 get 라우터와 같은 역할
// 콘트롤러는 urlf 요청을 받는다
// nestjs는 누군가가 /hello로 들어오면 sayHello

//nestJS의 마법덕분에 라우터를 세팅하지 않아도 된다
//@get이라는 것만으로 get 리퀘스트를 얻을수있다

// 그냥 hello 를 리턴할수있다면 서비스가 왜 필요함?

// 구조와 아키텍처에 대해 이야기
// NestJS 콘트롤러를 비지니스 로직이랑 구분 짓고 싶어함
// 콘트롤러는 그냥 url을 가져오는 역할일 뿐 그리고 fuctio을 실행
// 나머지 비즈니스 로직은 서비스로 가지
// 서비스는 일반적으로 실제로 fuction을 가지는 부분


// 콘트롤러의 역할은 url을 가져오고 function을 리턴함

// 또 다른 클래스가 있다.
// Injectable라는 데코레이터와 함께있다
// 뭔 뜻인지는 모르겠지만
// 아무튼 getHello라는 함수를 얻을 수 있다
// 그리고 이게 hello world를 리턴한다

// 이서비스는 기본적으로 클래스고 함수를 가지고있어