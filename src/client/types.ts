export type State = "CREATED" | "ACTIVE" | "DELIVERED" | "ERROR" | "RETRY" | "FAILED";

export type Event = {
  time: number;
  state: State;
  messageId: string;
  nextDeliveryTime?: number;
  error?: string;
  url: string;
  topicName?: string;
  endpointName?: string;
};

export type WithCursor<T> = T & { cursor?: number };
