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
  const getVacancie = () => {
    return useAsyncData(
      'vacancie',
      async () =>
        await find('vacancies', {
          populate: ['deep'],
        })
    )
  }

  const getReviews = () => {
    return useAsyncData(
      'reviews',
      async () =>
        await find('reviews', {
          populate: ['deep'],
        })
    )
  }

  const getCases = () => {
    return useAsyncData(
      'cases',
      async () =>
        await find('cases', {
          populate: ['deep'],
        })
    )
  }

  const getMainCase = () => {
    return useAsyncData(
      'mainCase',
      async () =>
        await find('cases', {
          populate: ['deep'],
          filters: {
            isMain: {
              $eq: true,
            },
          },
        })
    )
  }

  const getTeam = () => {
    return useAsyncData(
      'team',
      async () =>
        await find('teams', {
          populate: ['deep'],
          sort: 'id:asc',
        })
    )
  }

  return {
    getAdvantage,
    getStrength,
    getContact,
    getVacancie,
    getReviews,
    getCases,
    getMainCase,
    getTeam,
  }
}
