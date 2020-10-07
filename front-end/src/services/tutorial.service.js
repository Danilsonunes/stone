import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/stock");
  }
}

export default new TutorialDataService();
