import { defineStore } from "pinia";
import { ApiClient } from "@/manager-api";

/**
 * Keep track of running API queries.
 */
export const useAPIQueryCount = defineStore("apiQueryCount", {
  state: () => ({
    /**
     * Number of running queries.
     */
    num: 0,
  }),
  actions: {
    /**
     * Track this promise, counting it as a query for the spinner.
     * @param {Promise} promise
     */
    async track(promise) {
      this.num++;
      try {
        return await promise;
      } finally {
        this.num--;
      }
    },
  },
});

export class CountingApiClient extends ApiClient {
  callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams,
          bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath ) {
    const apiQueryCount = useAPIQueryCount();
    apiQueryCount.num++;

    return super
      .callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams,
               bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath)
      .finally(() => {
        apiQueryCount.num--;
      });
  }
}
