import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchGetMarkerList, fetchAddMarker } from '../../api/marker'

const queryClient = useQueryClient()

const useGetMarkerList = () => useQuery('getMarker', fetchGetMarkerList, {})
const useAddMarker = () => useMutation(fetchAddMarker, {
  onSuccess: () => queryClient.invalidateQueries('getMarker'),
})

export { useGetMarkerList, useAddMarker }
