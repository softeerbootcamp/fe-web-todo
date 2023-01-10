# FE-WEB-TODO

## 프로젝트 실행

- 프로젝트 git clone
- `npm install` (node, npm 설치가 되어 있다고 가정합니다.)
- `npm start`

## 폴더 구조

```bash
├── components
│   └──  Common
├── core
└── styles
```

## 목적

요구사항에 맞는 서비스를 기획한다.

## 작업 상세내용

> [🙆‍♂️] 요구사항 확인
>
> [🙆‍♂️] 요구사항 설계
>
> [🙆‍♂️] 서비스 기획
>
> [🙆‍♂️] 기능별 git branch 전략 기획
>
> [🙆‍♂️] 기본 Layout 구조 설계

## 설계 상세내용

1. Component 단위로 설계한다.
2. Component는 state정의, 이벤트 위임, 렌더링, 그 외 실행할 것들(componentDidMount)의 순서를 따른다.
3. 재사용성이 있는 모든 요소를 객체화하여 Component를 상속하여 사용한다.
4. 각 Component마다 state가 존재한다.
5. state가 변경되면 render가 실행되며 state를 기준으로 DOM을 render 한다. 즉 state에 종속된다.
6. state는 setState로만 변경된다.

## 기능 목록

- 진행 상태별로 리스트 (todo, doing, done, etc)

  - TODO의 진행 상태별로 TODO객체를 생성하여 진행 상태를 자유롭게 추가 및 삭제가 가능하게 한다.

- 진행 상태별 리스트에서 자유롭게 Task를 추가 및 삭제

  - Task객체를 생성하여 TODO객체 안에 각 진행 상태에 맞게 배치 또는 제거한다.

- Task를 Drag & Drop으로 진행 상태를 변경

  - Task객체를 이용해 만든 모든 요소마다 진행 상태를 나타내는 state가 있고 하나의 큰 Store에 모두 저장한다.
  - Drag & Drop을 이용해 각 요소의 state 내부에 있는 진행 상태를 Update한다.

- Task 진행 상태 변경 시 알림 기능

  - Drag & Drop 이벤트가 감지되면 Update내용을 통해 Notification객체를 생성한다.

- Task 및 알림 최신순으로 정렬
  - 정렬이 필요한 객체마다 state에 생성, 수정, 변경 이벤트마다 날짜를 저장 및 갱신한 후 날짜별로 정렬한다.

## 추가로 구현하고 싶은 기능

> [ ] Diff 알고리즘을 적용해 바뀐부분만 Update
>
> [ ] 옵저버 패턴
