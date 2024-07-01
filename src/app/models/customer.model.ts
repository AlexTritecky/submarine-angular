export interface CustomerRequest {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  services: string[];
  message: string;
}

export interface CustomerResponse {
  message: string;
  complete: boolean;
}
