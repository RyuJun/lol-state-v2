# "# React lol-state-v2
React를 활용한 개인학습을 위한 프로젝트로,
즐겨 하는 게임인 리그오브레전드의
게임 플레이 정보, 리그정보, MMR정보, 등의 정보를 보여주는
App 이다. 참고 사이트 [op.gg](https://www.op.gg/).
<br>
- `v2` 버전은 `Redux`를 활용하여 상태관리의 효율성을 높힘.
- `sass`를 통하여 CSS코드를 보다 쉽게 작성하고 `flex`로 레이아웃 구성
- `redux-pender`를 통하여 라이엇에 request를 보내는 부분에서 `pending` 적용
- `webpack` 옵션 중 `proxy` 옵션을 사용하여 API 요청 부분에서 `CORS` 오류 해결 

<br><br>
## ## 작업환경
`node v10.5.0`, `yarn v1.7.0`

<br><br>
## ## 구조
- 폴더구조<br>
  ```
  public/
    favicon.ico
    index.html
    manifast.json
  src/
    components/
    containers/
    lib/
    modules/
    static-data/
    styles/
    index.js
    serviceWorker.js
  .gitignore
  README.md
  package.json
  yarn.lock
  ```
<br><br>
## ## 작업기록
- [prev] render함수가 여러번 반복된다. pandding을 각각 잡아놔서 그런것같다 일단 팬딩을 1회만 시키고 모든 요청을 팬딩 안에 때려넣어서 중복 랜딩을 없애보자.
- [190404] 와 ...render가 반복되는게 암이다 ... 당연하지.. 요청할때마다 스토어를 업데이트하니.. 그냥 스토어와 연동시키는 작업을 요청이 끝난후에 해야겠다.. 그럼 Pending은..?