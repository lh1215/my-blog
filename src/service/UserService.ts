import { Service } from "typedi";

@Service()
export default class UserService {

  async getIntentPredictList(userId: number): Promise<any> {
    try {
      const predictListResponse = {
        list: [
            {
              id: '111', name: '3243243'
            }
        ]
      };
      return predictListResponse;
    } catch (e) {
      throw e;
    }
  }

}
