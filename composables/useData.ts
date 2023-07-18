export default function useData() {
  const { find, findOne } = useStrapi()

  const getAdvantage = () => {
    return useAsyncData(async () => {
      const data = await find('advantages', {
        populate: ['deep'],
      })
      return data
    })
  }
  const getStrength = () => {
    return useAsyncData(
      'strength',
      async () =>
        await findOne('strength', {
          populate: ['deep'],
        }),
      {
        transform: (data) => {
          return data.data.attributes?.strengths
        },
      }
    )
  }

  const getContact = () => {
    return useAsyncData(
      'contact',
      async () =>
        await findOne('contact', {
          populate: ['deep'],
        })
    )
  }

  return { getAdvantage, getStrength, getContact }
}
