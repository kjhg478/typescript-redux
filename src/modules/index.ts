import { combineReducers } from 'redux';
import counter from './counter';
import github from './github';
import todos from './todos';
import { githubSaga } from './github';
import { all } from 'redux-saga/effects';

// 프로젝트에 리듀서 적용해주기

const rootReducer = combineReducers({
  counter,
  todos,
  github
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.

// 리덕스에서 관리하는 상태에 대한 타입도 만들어줘야 함
export type RootState = ReturnType<typeof rootReducer>

// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
  yield all([githubSaga()]);
}