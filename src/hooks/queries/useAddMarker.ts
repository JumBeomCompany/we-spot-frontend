import { useMutation, useQueryClient } from 'react-query'
import { fetchAddMarker } from '../../api/marker'

export default function useAddMarker() {
  const queryClient = useQueryClient()

  return useMutation(fetchAddMarker, {
    onSuccess: () => queryClient.invalidateQueries('getMarker'),
  })
}
