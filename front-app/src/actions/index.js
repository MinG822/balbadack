import {
  GET_USER_INFO,
  GET_HOS_DATA,
  GET_REVIEW_DATA,
  UPLOAD_RECIEPT_INFO,
  SET_HOS_INFO,
  GET_HOS_SEARCH_LIST,
  TOGGLE_SEARCH_MODAL,
  SELECT_HOS,
  HAS_RECIEPT,
  GET_TOTAL_GRADE,
  SET_HOS_SCORE,
  GET_REVIEW_LIST,
  GET_MY_REVIEW_LIST,
  DO_DOJANG,
  COMPLETE_REVIEW,
  GET_NEAR_HOS_LIST,
  SET_NEAR_HOS_STATUS,
  GET_NEAR_HOS_BY_STAR,
  SET_NEAR_HOS_BY_STAR_STATUS,
  SET_SEARCH_KEYWORD,
  SIGNIN,
  GET_PET_DETAIL,
  REGISTER,
} from "./types";
import apis from '../apis/apis';
import axios from 'axios';

const hosData = [
  {
    h_code: 1,
    h_name: "행복 동물 병원",
    h_location: [33.450705, 126.570677],
    h_city: "서울시",
    h_gu: "강남구",
    h_station: "역삼역",
    h_tel: "02-123-1234",
    h_holidaytreatment: true,
    h_open: true,
    h_monday: "10:00 ~ 18:00",
    h_tuesday: "10:00 ~ 18:00",
    h_wednesday: "10:00 ~ 18:00",
    h_thursday: "10:00 ~ 18:00",
    h_friday: "10:00 ~ 18:00",
    h_saturday: "10:00 ~ 18:00",
    h_sunday: "10:00 ~ 18:00",
    h_website: "http://edu.ssafy.com",
    h_dong: "역삼동",
    h_address: "서울시 역삼동 123번지",
    h_image: "https://picsum.photos/id/1018/250/150/"
  },
  {
    h_code: 2,
    h_name: "카카오 동물 병원",
    h_location: [33.450936, 126.569477],
    h_city: "서울시",
    h_gu: "강남구",
    h_station: "깨깨오역",
    h_tel: "02-123-1234",
    h_holidaytreatment: true,
    h_open: true,
    h_monday: "10:00 ~ 18:00",
    h_tuesday: "10:00 ~ 18:00",
    h_wednesday: "10:00 ~ 18:00",
    h_thursday: "10:00 ~ 18:00",
    h_friday: "10:00 ~ 18:00",
    h_saturday: "10:00 ~ 18:00",
    h_sunday: "10:00 ~ 18:00",
    h_website: "http://edu.ssafy.com",
    h_dong: "역삼동",
    h_address: "서울시 역삼동 123번지",
    h_image: "https://picsum.photos/id/1018/250/150/"
  },

]

const reviewData = {
  r_no: 0,
  u_id: 'aestas',
  r_nickname: '익명의 코끼리',
  r_photo: 'https://lh3.googleusercontent.com/proxy/QYikpOM5d8B4H0_YTn1sfYzEQcGYjKwUtseoQXBpXqhjh3bsn04ZdeNL533bsCyivn3OzERLxq2zBPl5l9rt_UU_B6PlMBkQHef624cQ8DI0TjJkozUb8Qyhs8kYkTGclUI-uGs83FjcgEo,http://www.busan.com/nas/wcms/wcms_data/photos/2020/02/12/2020021209194665170_l.jpg,https://modo-phinf.pstatic.net/20160629_37/1467141681611RHSrJ_JPEG/mosaazDVas.jpeg?type=w1100',
  r_content: '2010년부터 다니던 병원입니다. 고양이에게 중성화 수술은 꼭 필요한 것 같아요. 계속 힘들어해서 몇 차례 검진 받고 선생님과 상담후에 중성화 수술을 하게되었습니다. 선생님 정말 친절하시고요 여기 애견용 풀도 있는 것 같아서 상처 부위 치료되면 또 오려고요!',
  r_reciept: true,
  r_treatmentdata: '2020-05-10',
  r_date: '2020-05-10',
  tags: ['중성화수술', "고양이", "15kg", '정기적', "친절", "전용풀장", "감사"],
  r_overtreatement: 1,
  r_kindness: 4,
  r_result: 4,
  r_clean: 4,
  r_report: 0,
  r_deleted: false,
  Like: [{ u_id: 1 }, { u_id: 2 }, { u_id: 3 }],
  careinfo: [
    {
      ci_no: 2,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 25000,
      CareList: {
        c_code: 3,
        c_name: '중성화수술',
        c_category: '수술'
      },
      r_no: 0
    },
    {
      ci_no: 3,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 30000,
      CareList: {
        c_code: 4,
        c_name: '붕대',
        c_category: '시술'
      },
      r_no: 0
    },
    {
      ci_no: 4,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 50000,
      CareList: {
        c_code: 2,
        c_name: '마취약',
        c_category: '주사'
      },
      r_no: 0
    }
  ],
  h_code: 1
}

const petData = [
  {
      a_code: 1,
      a_type: "골든 리트리버",
      a_species: "강아지",
      a_kig: 10,
      a_year: 5,
      image: 'https://picsum.photos/id/1018/250/150/',
  },
  {
      a_code: 2,
      a_type: "노르웨이숲 고양이",
      a_species: "고양이",
      a_kig: 9,
      a_year: 5,
  }
]

const hos_list = [
  { id: 1, name: "행복동물병원", address: "서울시 관악구 행복동 행복로 1길" },
  { id: 2, name: "행봄동물병원", address: "서울시 관악구 행봄동 행봄로 2길" },
  { id: 3, name: "행봉동물병원", address: "서울시 관악구 행봉동 행봉로 3길" },
  { id: 4, name: "행행동물병원", address: "서울시 관악구 행복동 행복로 4길" },
  { id: 5, name: "봉봉동물병원", address: "서울시 관악구 행봄동 행봄로 5길" },
  { id: 6, name: "봉행동물병원", address: "서울시 관악구 행봉동 행봉로 6길" },
]


//====================================================================

// axios header 설정
const config = {
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}



export const signin = (user_id, user_pw) => async dispatch => {
  console.log("=========singreduce=======")
  const url = `http://192.168.1.108:7888/user/login?`
  console.log(user_id)
  console.log(user_pw)

  const response = await axios.post(url + 'uId=' + user_id + '&uPw=' + user_pw);

  
  const data = response.data.data;
  console.log(response)
  await dispatch({ type: SIGNIN, payload: response.data.data });
};

export const register = (user_id, user_pw) => async dispatch => {
  const response = await axios.post(`http://192.168.1.108:7888/user/signup`, {
    uid: user_id,
    upw: user_pw
  });
  const data = response.data.data;
  console.log(data)
  await dispatch({ type: REGISTER, payload: response.data.data });
}

export const getUserInfo = () => async dispatch => {
  const response = []
  await dispatch({ type: GET_USER_INFO, payload: response.data.data });
};

export const getHosData = () => async dispatch => {
  const response = hosData;
  console.log(response)
  dispatch({ type: GET_HOS_DATA, payload: response });
}

export const getReviewData = () => async dispatch => {
  const response = reviewData;
  console.log("======리덕스======")
  console.log(response)
  dispatch({ type: GET_REVIEW_DATA, payload: response });
}


export const getPetDetail = () => async dispatch => {
  const response = petData;
  console.log(response)
  dispatch({ type: GET_PET_DETAIL, payload: response });
}

// 병원의 모든 리뷰 가져오기
export const getReviewList = (hcode) => {
  console.log('getReviewList')
  const query = hcode
  // 예주쓰
  // const url = 'http://192.168.1.193:7888/review/findByHospital'
  const url = 'http://192.168.1.242:7888/review/findByHospital'
  return dispatch => {
    return axios.post(url + '?h_code=' + query, config)
      .then(res => dispatch(recieveReviewList(res.data)))
  }
}

// getReviewList로 받은 리뷰를 store에 저장하기
export const recieveReviewList = (list) => {
  console.log('recieveReviewList')
  return {
    type: GET_REVIEW_LIST,
    list
  }
}

// 유저의 모든 리뷰 가져오기
export const getMyReviewList = (uid) => {
  console.log('getMyReviewList')
  const url = 'http://192.168.1.193:7888/review/findByUser'
  return dispatch => {
    return axios.post(url + '?u_id=' + uid, config)
      .then(res => dispatch(recieveMyReviewList(res.data)))
  }
}

// getMyReviewList로 받은 리뷰를 store에 저장하기
export const recieveMyReviewList = (list) => {
  return {
    type: GET_MY_REVIEW_LIST,
    list
  }
}

// 영수증 정보 store에 저장
export const uploadReciept = (bff, dateIs, hasHos, items) => {
  console.log("upload reciept")
  return {
    type: UPLOAD_RECIEPT_INFO,
    bff, dateIs, hasHos, items
  }
}

// ------------screens/selectOptions.js------------
// 1. 병원 선택하기
// 병원 검색 모달 열기/닫기
export const toggleSearchModal = () => {
  return {
    type: TOGGLE_SEARCH_MODAL
  }
}



// 병원 검색 리스트에서 유저가 선택한 병원 정보 저장하기
export const setHosInfo = (id, name, address) => {
  console.log('set hos info')
  return {
    type: SET_HOS_INFO,
    id, name, address
  }
}



// 유저가 병원 정보를 선택한 상태임을 저장
export const selectHos = (hosSelected, hosName) => {
  return {
    type: SELECT_HOS,
    hosSelected, hosName
  }
}

// 2. 유저가 영수증 인증을 한 상태임을 저장
export const hasReciept = (hasReciept) => {
  return {
    type: HAS_RECIEPT,
    hasReciept
  }
}

// --------- screens/ReviewForm.js ------------
// 1. 병원상세평가
// 상세 항목 평가 갱신
export const setHosScore = (name, score, i) => {
  return {
    type: SET_HOS_SCORE,
    name, score, i
  }
}

// 상세 항목 평가를 갱신하고 난 이후에 평균 평점을 다시 가져오기
export const getTotalGrade = () => {
  return {
    type: GET_TOTAL_GRADE
  }
}


// 2. 재방문의사 저장
export const doDojang = (dojang) => {
  return {
    type: DO_DOJANG,
    dojang
  }
}

// 3. 작성한 리뷰 제출하기
export const postReview = (body) => {
  console.log('postReview')
  const url = 'http://192.168.1.193:7888/review/insert'
  return dispatch => {
    return axios.post(url, body)
      .then(res => dispatch(completeReview(res)))
  }
}

// 작성한 리뷰 제출이 성공했는지 상태에 저장하기
export const completeReview = (res) => {
  console.log('completeReview')
  console.log(res)
  return {
    type: COMPLETE_REVIEW,
    res
  }
}

// --------- Hospital ------------
// 0. search keyword를 status에 저장
export const setSearchKeyword = (keyword) => {
  console.log('setSearchKeyword')
  return {
    type: SET_SEARCH_KEYWORD,
    keyword
  }
}
// 1.1 현재 내 위치에서 3km 이내의 병원 조회
export const getNearHospitals = (lat, long, page) => {
  console.log('getNearHospitals')
  const url = 'http://192.168.1.242:7888/hospital/location/'
  const reqUrl = url +page+ '?latitude=' + lat + '&longtitude=' + long
  return dispatch => {
    return axios.post(reqUrl, config)
      .then(res => {
        dispatch(recieveNearHospitals(res.data.hospital))
        dispatch(setNearHosStatus(lat, long, page, res.data.next))
      })
  }
}

// 1.2 현재 검색 중인 위치와 받았던 페이지와 next여부 저장하기
export const setNearHosStatus = (lat, long, page, next) => {
  return {
    type: SET_NEAR_HOS_STATUS,
    lat, long, page, next
  }
}

// 1.3 getNearHospitals로 받은 병원 리스트를 store에 저장하기
export const recieveNearHospitals = (list) => {
  return {
    type: GET_NEAR_HOS_LIST,
    list
  }
}

// 2.1 거리검색 - 평점순필터
export const getNearHosByStar = (lat, long, page) => {
  console.log('getNearHosByStar')
  const url = 'http://192.168.1.242:7888/hospital/starrating/'
  const reqUrl = url +page+ '?latitude=' + lat + '&longtitude=' + long 
  return dispatch => {
    return axios.post(reqUrl, config)
      .then(res => {
        dispatch(recieveNearHosByStar(res.data.hospital))
        dispatch(setNearHosByStarStatus(lat, long, page, res.data.next))
      })
  }
}

// 2.2 거리검색 - 평점순필터 store에 저장
export const recieveNearHosByStar = (list) => {
  return {
    type: GET_NEAR_HOS_BY_STAR,
    list
  }
}

export const setNearHosByStarStatus = (lat, long, page, next) => {
  return {
    type: SET_NEAR_HOS_BY_STAR_STATUS,
    lat, long, page, next
  }
}



// 3.1 병원 검색하기
export const getHosSearchList = (keyword, page) => {
  console.log('get hos search list')
  const url = 'http://192.168.1.242:7888/hospital/name/'
  const reqUrl = url+page+'?keyword='+keyword
  return dispatch => {
    return axios.post(reqUrl, config)
      .then(res => {
        dispatch(recieveHosSearchList(res.data))
      })
  }
}

// 3.2 병원 검색 결과 저장하기
export const recieveHosSearchList = (list) => {
  console.log('recieve hos search list')
  return {
    type: GET_HOS_SEARCH_LIST,
    list
  }
}

