type Info = {
  fontSize: string;
  fontFamily: string;
  timeCreated: string;
  timeModified: string;
  isPrivate: false;
};

type Text = {
  title: string;
  content: string;
};

type NoteItem = {
  id: string;
  info: Info;
  text: Text;
};

export type { Info, Text, NoteItem };
