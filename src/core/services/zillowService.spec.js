import axios from "axios";
import ZillowService from "./zillowService";

jest.mock("axios");

describe("ZillowService", () => {
  let ZillowSvc;

  beforeAll(() => {
    $.R = {
      Notifications: {
        showErrorNotification: jest.fn()
      }
    };
  });

  beforeEach(() => {
    ZillowSvc = new ZillowService();
  });

  test("search", async () => {
    const resp = { data: { zillowId: '1029348', zestimate: '10293894050', homeDetailsUrl: 'https://www.zillow.com', address: '111 First St.' }};
    axios.post.mockResolvedValueOnce(resp);

    const response = await ZillowSvc.search();

    expect(response).toEqual(resp.data);
  });
});
