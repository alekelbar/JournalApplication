
export interface journalState {
  isSaving: boolean;
  messageSaved: '';
  notes: Note[];
  active: Note | null;
}

export interface Note {
  id?: string;
  title: string;
  body: string;
  date: number;
  imageUrls: Array<string>
}