# State and Lifecycle

- React component 안의 state 와 생명주기(lifecycle)에 대한 개념
- Clock 컴포넌트를 재사용하고 캡슐화하는 방법을 배우는 것이 목표
  - 컴포넌트는 스스로 타이머를 설정하고, 매초 스스로 업데이트한다.

# State 란?
- props와 유사하지만, 비공개적이고 컴포넌트에 의해서 완전히 제어
- 컴포넌트 안에서 동적인 값을 상태(state)
## setState() 올바르게 사용하기 3가지
### 직접 state를 수정하지 마세요.
예를 들어, 이 코드는 컴포넌트를 다시 렌더링하지 않는다.

```js
    // wrong
    this.state.comment = 'Hello';
    // correct
    this.setState({comment: 'Hello'});
```
대신에 sestState()를 사용합니다.
this.state 할당은 constructor() 안에서만 가능하다.

### State 업데이트는 비동기적일 수 있다.
React는 성능을 위해서 여러 `setState()` 호출을 단일 업데이트로 한꺼번에 처리할 수 있다.
`this.props`와 `this.state`가 비동기적으로 업데이트될 수 있기 때문에, 다음 state를 계산할 때 해당 값을 의존해서는 안 된다.

```js
    // wrong
    // counter update에 실패할 수 있다.
    this.setState({
        counter: this.state.counter + this.props.increment,
    })
    // correct
    // setState()에 객체를 전달하는 것이 아니라 함수를 인자로 전달한다.
    // 함수는 이전 state를 첫 번째 인자로 받고,
    // 업데이트가 적용된 시점의 props를 두 번째 인자로 받음
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));
    // 화살표 함수, 일반 함수도 가능
    this.setState(function(prevState, props) {
        return {
            counter: state.counter + props.increment
        };
    });
```

### State 업데이트는 병합됩니다.
`setState()`를 호출할 때 React는 제공한 객체를 현재 state로 merge.

```js
    // state 객체 안에 key로 독립적인 변수 값 포함 가능
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
        }
    }
    
    componentDidMount() {
        fetchPosts().then(response => {
            // 얕은 병합 shallow merge이기 때문에
            // this.setState({posts})는 this.state.comments에 영향을 주지 않고, this.state.posts 대체한다. 
            this.setState({
                posts: response.posts
            });
        });
        // fetchComments() 작성
    }
```

### Data는 부모 컴포넌트에서 자식 컴포넌트로 흐른다.
- 컴포넌트는 자신의 state를 자식 컴포넌트의 prop로 전달할 수 있다.
- 하지만, 이 local state는 캡슐화되어 있기 때문에 다른 컴포넌트가 접근할 수 없다.

```js
    // FormattedDate 컴포넌트는 date를 자신의 props로 받을 것이고
    // 이 date는 Clock 컴포넌트의 state로부터 왔는지, Clock의 props에서 왔는지, 수동으로 입력한 것인지 알지 못한다.
    <FormattedDate date={this.state.date} />
    
    function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    }
```
- 하향식(top-down), 단방향식 데이터 흐름
  - data 흐름이 양방향이면 에러 발생시 추적이 어려움
  - 모든 state는 항상 특정한 컴포넌트가 소유하고 있고, 그 state로부터 파생된 UI 또는 트리 구조에서 자신의 "아래"에 있는 컴포넌트에만 영향을 미친다.
  - Source of truth(진리의 원천) by lifting-state-up.html
  
```js
    function App() {
        return (
            {/ 각 컴포넌트는 자신만의 타이머를 설정하고, 독립적으로 업데이트한다./}
            <>
              <Clock />
              <Clock />
              <Clock />
            </>
        )
    }
```
- 컴포넌트가 유상태, 무상태에 대한 것은 구현 세부사항
  - 유상태 컴포넌트 안에서 무상태 컴포넌트를 사용할 수 있고, 그 반대도 가능