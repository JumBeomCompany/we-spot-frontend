import { useQuery } from 'react-query'
import { fetchGetMarkerList } from '../../api/marker'

export default function useGetMarkerList() {
  return useQuery('getMarker', fetchGetMarkerList, {})
}
