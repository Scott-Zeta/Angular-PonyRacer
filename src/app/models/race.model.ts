interface Pony {
  id: number;
  name: string;
  color: string;
}

export interface Race {
  id: number;
  name: string;
  ponies: Pony[];
  startInstant: string;
}
