export interface CustomModelField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select';
  required: boolean;
  options?: string[];
}

export interface CustomModel {
  id: string;
  name: string;
  fields: CustomModelField[];
}