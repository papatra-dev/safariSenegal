export class ContactRequest {
  personalData: PersonalData;
  requestType: any = '';
  text: string = '';
}

export class PersonalData {
  name : string='';
  email: string = '';
  mobile: string = '';
  country: string = '';
}
