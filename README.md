# fe-web-todo
문경덕님의 branch입니다.
추후 수정할 것! (지금은 메모지 용도로 활용 중)

<br>

html tag 작성 요령 <br>
header <br>
main > section > h3 & article > div <br>

<br>

css 속성 작성 요령 <br> 
큰 요소 > 작은 요소 순서 <br>
배치 관련 우선 작성 > 글자 크기, 색깔 등의 스타일링은 후에 작성 <br>
글자는 최상단 font size에 비례하도록 rem 활용 <br>

<br> 

할 일 <br>
- reset.css에서 사용하지 않는 태그는 불 필요하게 컴파일되지 않도록 지우기 <br>
- column 삭제 -> json_data 연동 <br>

<br>

수정 필요 <br>
카드 삭제 버튼 hover 되면 명시적으로 알려주기 위해 카드를 살짝 뜨게 하는 효과를 만들어두었음. <br>
근데, 한 번씩 마우스 커서 위치에 따라 카드가 떳다가 내려갔다가 반복.. <br>

내일 작업 순서 <br>
1️⃣ column delete 데이터 반영 <br>
2️⃣ card drag 이벤트 추가 <br>
3️⃣ menu bar 데이터 연동 <br>

## 현재 제공 기능
##### column 추가
##### column이 많아질 경우 추가된 column으로 focus -> 사용자 편의성 증진
##### column 삭제 (단, 데이터 연동이 안되어 있기에 불안한 상태)
##### 카드 등록
##### 카드 등록 시 input box의 유연한 크기 조정
##### 카드 삭제 (단, 데이터 연동이 안 되어 있기에 불안한 상태)