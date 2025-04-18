import { handleFetch } from "@/components/common/utils"

// Fetch review for many fimls
export const getReviews = async() => {
    return await handleFetch('api/reviews/get', {}, 'Fail to get review');
}
