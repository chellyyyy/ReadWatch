import { handleFetch } from "@/components/common/utils"

// Fetch list
export const getLists = async() => {
    return await handleFetch('api/lists/get', {}, 'Fail to get list');
}
