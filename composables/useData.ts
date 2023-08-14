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

  const getRequisites = () => {
    return useAsyncData(
      'requisite',
      async () =>
        await findOne('requisite', {
          populate: ['deep'],
        })
    )
  }
  const getSotrudnichestvo = () => {
    return useAsyncData(
      'sotrudnichestvo',
      async () =>
        await findOne('sotrudnichestvo', {
          populate: ['deep'],
        })
    )
  }
  const getOnac = () => {
    return useAsyncData(
      'onac',
      async () =>
        await findOne('o-na', {
          populate: ['deep'],
        })
    )
  }

  const getPageHR = () => {
    return useAsyncData(
      'hr',
      async () =>
        await findOne('stranicza-karera', {
          populate: ['deep'],
        })
    )
  }
  const getPageCases = () => {
    return useAsyncData(
      'pagecases',
      async () =>
        await findOne('straniczu-kejsy', {
          populate: ['deep'],
        })
    )
  }
  const getPageReviews = () => {
    return useAsyncData(
      'getPageReviews',
      async () =>
        await findOne('stranicza-otzyvy', {
          populate: ['deep'],
        })
    )
  }
  const getAboutPage = () => {
    return useAsyncData(
      'aboutPage',
      async () =>
        await findOne('stranicza-o-kompanii', {
          populate: ['deep'],
        })
    )
  }

  const getMainPage = () => {
    return useAsyncData(
      'mainPage',
      async () =>
        await findOne('main', {
          populate: ['deep'],
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
    getRequisites,
    getSotrudnichestvo,
    getOnac,
    getPageHR,
    getPageCases,
    getPageReviews,
    getAboutPage,
    getMainPage,
  }
}
