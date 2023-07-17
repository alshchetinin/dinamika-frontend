export default function useData() {
  const { find } = useStrapi()

  const getAdvantage = () => {
    return useAsyncData(async () => {
      const data = await find('advantages', {
        populate: ['deep'],
      })
      return data
    })
  }

  return { getAdvantage }
}
