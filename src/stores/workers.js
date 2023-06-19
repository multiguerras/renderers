import { defineStore } from 'pinia'

import { WorkerMgtApi } from '@/manager-api';
import { getAPIClient } from "@/api-client";

// 'use' prefix is idiomatic for Pinia stores.
// See https://pinia.vuejs.org/core-concepts/
export const useWorkers = defineStore('workers', {
  state: () => ({
    /** @type {API.Worker} */
    activeWorker: null,
    /**
     * ID of the active worker. Easier to query than `activeWorker ? activeWorker.id : ""`.
     * @type {string}
     */
    activeWorkerID: "",

    /** @type {API.WorkerCluster[]} */
    clusters: [],

    /* Mapping from cluster UUID to API.WorkerCluster. */
    clustersByID: {},
  }),
  actions: {
    setActiveWorkerID(workerID) {
      this.$patch({
        activeWorker: {id: workerID, settings: {}, metadata: {}},
        activeWorkerID: workerID,
      });
    },
    setActiveWorker(worker) {
      // The "function" form of $patch is necessary here, as otherwise it'll
      // merge `worker` into `state.activeWorker`. As a result, it won't touch missing
      // keys, which means that metadata fields that existed on the previous worker
      // but not on the new one will still linger around. By passing a function
      // to `$patch` this is resolved.
      this.$patch((state) => {
        state.activeWorker = worker;
        state.activeWorkerID = worker.id;
        state.hasChanged = true;
      });
    },
    deselectAllWorkers() {
      this.$patch({
        activeWorker: null,
        activeWorkerID: "",
      });
    },
    /**
     * Fetch the available worker clusters from the Manager.
     *
     * @returns a promise.
     */
    refreshClusters() {
      const api = new WorkerMgtApi(getAPIClient());
      return api.fetchWorkerClusters()
        .then((resp) => {
          this.clusters = resp.clusters;

          let clustersByID = {};
          for (let cluster of this.clusters) {
            clustersByID[cluster.id] = cluster;
          }
          this.clustersByID = clustersByID;
        })
    },
  },
})
