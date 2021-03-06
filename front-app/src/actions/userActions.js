import {
  SIGNIN, // 유저 
  GET_MY_PAGE,
  USER_UPDATED,
  LOGOUT,
  SIGNOUT,
  GET_MY_PETS, // 펫
  GET_PET_DETAIL,
  PET_REGISTERED,
  PET_UPDATED,
  PET_DELETED
} from './types'
import apis from '../apis/apis';

// ------------- user 관련 action --------------

// 1. 로그인 요청하기
export const signIn = (user_id, user_pw) => {
  console.log("signin")
  return dispatch => {
    return apis.post('/user/login?uId=' + user_id + '&uPw=' + user_pw)
      .then(res => dispatch(signedIn(res, res.data)))
  }
};

// 1.1. 유저 정보를 user 에 저장하기
export const signedIn = (res, userInfo) => {
  console.log('signedIn')
  console.log(res)
  apis.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
  window.sessionStorage.setItem('user', userInfo)
  return {
    type: SIGNIN,
    userInfo
  }
}

// 2. 회원가입 요청하기
export const register = (user_id, user_pw) => {
  console.log('register')
  const body = { uid: user_id, upw: user_pw }
  return dispatch => {
    return apis.post('/user/signup', body)
      .then(() => dispatch(signIn(user_id, user_pw)))
  }
}

// 3. 마이페이지 조회 요청하기
export const getMyPage = (uid) => {
  console.log('getMyPage')
  return dispatch => {
    return apis.post('/user/mypage?uId=' + uid)
      .then(res => dispatch(recieveMyPage(res.data)))
  }
}

// 3.1. 마이페이지 user 에 저장하기
export const recieveMyPage = (mypage) => {
  console.log('recieveMyPage')
  return {
    type: GET_MY_PAGE,
    mypage
  }
}

// 4. 회원정보 수정 요청하기
export const updateUser = (user) => {
  console.log('updateUser')
  return dispatch => {
    dispatch(userUpdated(false))
    return apis.post('user/update', user)
      .then(() => dispatch(userUpdated(true)))
  }
}

// 4.1. 회원정보 수정 요청 결과 status 에 저장하기
export const userUpdated = (code) => {
  console.log('userUpdated')
  return {
    type: USER_UPDATED,
    code
  }
}

// 5. 로그아웃결과 user에 저장하기
export const logOut = () => {
  console.log('logOut')
  apis.defaults.headers.common['Authorization'] = null
  return {
    type: LOGOUT
  }
}

// 6. 회원 탈퇴 요청하기
export const signOut = (uid) => {
  console.log('signOut')
  const body = { uId: uid }
  return dispatch => {
    dispatch(signedOut(false))
    return apis.post('user/signout', body)
      .then(() => dispatch(signedOut(true)))
  }
}

// 7. 탈퇴 결과 user에 저장하기
export const signedOut = (code) => {
  console.log('signedOut')
  apis.defaults.headers.common['Authorization'] = null
  return {
    type: SIGNOUT
    ,code
  }
}

// ------------- pet 관련 action --------------

// 1. 유저의 모든 펫 정보 요청하기
export const getMyPets = (u_id) => {
  console.log('getMyPets')
  return dispatch => {
    return apis.post('animal/mycompanion/all?u_id=' + u_id)
      .then(res => dispatch(recieveMyPets(res.data)))
  }
}

// 1.1. 유저의 모든 펫 정보 user_info 에 저장하기
export const recieveMyPets = (list) => {
  console.log('recieveMyPets')
  return {
    type: GET_MY_PETS,
    list
  }
}

// 2.1. 유저의 펫 상세 정보 요청하기
export const getPetDetail = (a_code, u_id) => {
  console.log('getPetDetail')
  return dispatch => {
    return apis.post('animal/one?a_code=' + a_code + '&u_id=' + u_id)
      .then(res => dispatch(recievePetDetail(res.data)))
  }
}

// 2.2. 유저의 펫 상세 정보 저장하기
export const recievePetDetail = (animal) => {
  console.log('recievePetDetail')
  return {
    type: GET_PET_DETAIL,
    animal
  }
}

// 3.1. 펫 정보 등록하기
export const registerPet = (body) => {
  console.log('registerPet')
  return dispatch => {
    dispatch(petRegistered(false))
    return apis.post('animal/insert', body)
      .then(() => dispatch(petRegistered(true)))
  }
}

// 3.2. 등록한 결과 status에 저장하기
export const petRegistered = (code) => {
  console.log(petRegistered)
  return {
    type: PET_REGISTERED,
    code
  }
}

// 4. 펫 정보 수정하기
export const updatePet = (body) => {
  console.log('updatePet')
  return dispatch => {
    dispatch(petUpdated(false))
    return apis.post('animal/update', body)
      .then(() => dispatch(petUpdated(true)))
  }
}

// 4.1. 수정한 결과 status에 저장하기
export const petUpdated = (code) => {
  console.log('petUpdated')
  return {
    type: PET_UPDATED,
    code
  }
}

// 5. 펫 삭제하기
export const deletePet = (a_code, u_id) => {
  console.log('deletePet')
  return dispatch => {
    dispatch(petDeleted(false))
    return apis.post('animal/delete?a_code=' + a_code + '&u_id=' + u_id)
      .then(() => dispatch(petDeleted(true)))
  }
}

// 5.1. 삭제된 결과 status에 저장하기
export const petDeleted = (code) => {
  console.log('petDeleted')
  return {
    type: PET_DELETED,
    code
  }
}