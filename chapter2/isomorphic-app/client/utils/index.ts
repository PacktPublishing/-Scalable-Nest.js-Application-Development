import { Request } from 'express';

export function getAPIBaseUrl(): string {
  return 'http://localhost:3000';
}

export function getFullURL(req: Request, URIpath: string): string {
  return `${req.protocol}://${req.headers.host}/${URIpath}`;
}

export function fetcher(input: RequestInfo, init?: RequestInit): Promise<any> {
  return fetch(input, init).then(res => res.json());
}
