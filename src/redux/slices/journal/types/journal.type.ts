
export interface journalState {
  isSaving: boolean;
  messageSaved: '';
  notes: [];
  active: Note;
}

export interface Note {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: Array<string>
}