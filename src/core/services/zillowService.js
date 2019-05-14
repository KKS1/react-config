import axios from "axios";

export default class ZillowService {
  search = async zillowSearchParams => {
    const headers = {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content") || ''
    };

    try {
      const response = await axios.post("/internal_api/zillow/search", zillowSearchParams, {
        headers: headers
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}
