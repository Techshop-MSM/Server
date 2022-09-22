export const ratingSum = (ratings, counter) => {
    const ratingSum = ratings.reduce((pv, ratings) => pv + ratings, 0)
    return ratingSum/counter
}