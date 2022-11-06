import axios from 'axios'

/** TODO
 * 도메인 상수로 정의
 * 타입 추가
 * ...
 */

// 나의 저장해둔 장소들 불러오기
export const fetchGetMarkerList = () => {
  axios.get('/')
}
// 나의 장소 추가하기
export const fetchAddMarker = (params: any) => axios.post('/', {
  userId: params.userId,
  latitude: params.latitude,
  longtitude: params.longtitude,
  feed: params.feed,
})
